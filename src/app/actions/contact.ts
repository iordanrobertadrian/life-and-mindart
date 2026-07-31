'use server';

import { headers } from 'next/headers';
import { z } from 'zod';

import { getDictionary } from '@/lib/dictionary';
import { isLocale, defaultLocale, type Locale } from '@/lib/i18n';
import { sendContactMessage, sendWorkshopMessage, type Attachment } from '@/lib/mail';
import { checkRateLimit } from '@/lib/rate-limit';

export type ContactField =
  | 'firstName'
  | 'lastName'
  | 'contact'
  | 'message'
  | 'consent';

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  /** Field-level messages, keyed by input name. */
  fieldErrors?: Partial<Record<ContactField, string>>;
}

const initialState: ContactFormState = { status: 'idle' };

/** Total size of all attachments accepted in one submission. */
const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const MAX_ATTACHMENTS = 5;

const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phone = /^[+\d][\d\s().-]{6,}$/;

const optionalText = z.string().trim().max(500).optional().default('');

/**
 * The contact page keeps the field set the original form had — surname, first name, phone,
 * e-mail, topic, message, other information, location, preferred language and document
 * attachments. Only the fields that make a reply possible are enforced: a name, at least one
 * way of writing back, the message itself, and the privacy consent.
 */
const contactSchema = z
  .object({
    firstName: z.string().trim().min(2).max(120),
    lastName: z.string().trim().min(2).max(120),
    phone: z.string().trim().max(60).optional().default(''),
    email: z.string().trim().max(160).optional().default(''),
    topic: optionalText,
    message: z.string().trim().min(10).max(4000),
    otherInfo: z.string().trim().max(2000).optional().default(''),
    location: optionalText,
    preferredLanguage: optionalText,
    consent: z.literal('on'),
  })
  .refine((value) => phone.test(value.phone) || email.test(value.email), {
    path: ['contact'],
    error: 'neither a usable phone number nor an e-mail address',
  });

/** The workshop landing page asks for four fields plus an optional message. */
const workshopSchema = z.object({
  fullName: z.string().trim().min(2).max(160),
  phone: z.string().trim().regex(phone).max(60),
  email: z.string().trim().regex(email).max(160),
  occupation: z.string().trim().min(2).max(160),
  message: z.string().trim().max(4000).optional().default(''),
  consent: z.literal('on'),
});

async function clientIp(): Promise<string> {
  const headerList = await headers();
  return (
    headerList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    headerList.get('x-real-ip') ??
    'unknown'
  );
}

/**
 * Reads the uploaded documents off the form, refusing anything past the size ceiling.
 *
 * Silently dropping an oversized file would be worse than failing: the visitor would think
 * their document had been sent. Anything over the limit rejects the submission outright.
 */
async function readAttachments(formData: FormData): Promise<Attachment[] | 'too-large'> {
  const files = formData
    .getAll('attachments')
    .filter((entry): entry is File => entry instanceof File && entry.size > 0);

  if (files.length === 0) return [];
  if (files.length > MAX_ATTACHMENTS) return 'too-large';

  const total = files.reduce((sum, file) => sum + file.size, 0);
  if (total > MAX_ATTACHMENT_BYTES) return 'too-large';

  return Promise.all(
    files.map(async (file) => ({
      filename: file.name,
      content: Buffer.from(await file.arrayBuffer()).toString('base64'),
    })),
  );
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const rawLocale = String(formData.get('locale') ?? defaultLocale);
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const errors = getDictionary(locale).contact.form.errors;

  // Honeypot: a field hidden from people and irresistible to bots.
  if (String(formData.get('company') ?? '') !== '') {
    return { status: 'success' };
  }

  const parsed = contactSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    phone: formData.get('phone') ?? '',
    email: formData.get('email') ?? '',
    topic: formData.get('topic') ?? '',
    message: formData.get('message'),
    otherInfo: formData.get('otherInfo') ?? '',
    location: formData.get('location') ?? '',
    preferredLanguage: formData.get('preferredLanguage') ?? '',
    consent: formData.get('consent'),
  });

  if (!parsed.success) {
    const fieldErrors: ContactFormState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field === 'firstName') fieldErrors.firstName = errors.firstName;
      else if (field === 'lastName') fieldErrors.lastName = errors.lastName;
      else if (field === 'phone' || field === 'email' || field === 'contact') {
        fieldErrors.contact = errors.contact;
      } else if (field === 'message') fieldErrors.message = errors.message;
      else if (field === 'consent') fieldErrors.consent = errors.consent;
    }
    return { status: 'error', fieldErrors };
  }

  if (!checkRateLimit(await clientIp()).allowed) {
    return { status: 'error' };
  }

  const attachments = await readAttachments(formData);
  if (attachments === 'too-large') {
    return { status: 'error' };
  }

  try {
    await sendContactMessage({ ...parsed.data, attachments, locale, submittedAt: new Date() });
  } catch (error) {
    console.error('[contact] failed to send message', error);
    return { status: 'error' };
  }

  return { status: 'success' };
}

export type WorkshopField = 'fullName' | 'phone' | 'email' | 'occupation' | 'consent';

export interface WorkshopFormState {
  status: 'idle' | 'success' | 'error';
  fieldErrors?: Partial<Record<WorkshopField, string>>;
}

export async function submitWorkshopForm(
  _previousState: WorkshopFormState,
  formData: FormData,
): Promise<WorkshopFormState> {
  const rawLocale = String(formData.get('locale') ?? defaultLocale);
  const locale: Locale = isLocale(rawLocale) ? rawLocale : defaultLocale;
  const errors = getDictionary(locale).contact.form.errors;

  if (String(formData.get('company') ?? '') !== '') {
    return { status: 'success' };
  }

  const parsed = workshopSchema.safeParse({
    fullName: formData.get('fullName'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    occupation: formData.get('occupation'),
    message: formData.get('message') ?? '',
    consent: formData.get('consent'),
  });

  if (!parsed.success) {
    const fieldErrors: WorkshopFormState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field === 'fullName') fieldErrors.fullName = errors.firstName;
      else if (field === 'phone') fieldErrors.phone = errors.contact;
      else if (field === 'email') fieldErrors.email = errors.contact;
      else if (field === 'occupation') fieldErrors.occupation = errors.firstName;
      else if (field === 'consent') fieldErrors.consent = errors.consent;
    }
    return { status: 'error', fieldErrors };
  }

  if (!checkRateLimit(await clientIp()).allowed) {
    return { status: 'error' };
  }

  try {
    await sendWorkshopMessage({ ...parsed.data, locale, submittedAt: new Date() });
  } catch (error) {
    console.error('[workshop] failed to send message', error);
    return { status: 'error' };
  }

  return { status: 'success' };
}

export { initialState as initialFormState };
