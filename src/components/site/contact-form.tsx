'use client';

import Link from 'next/link';
import { useActionState, useId } from 'react';

import {
  ErrorPanel,
  Field,
  Honeypot,
  SubmitButton,
  SuccessPanel,
  fieldClasses,
} from '@/components/site/form-parts';
import { submitContactForm, type ContactFormState } from '@/app/actions/contact';
import type { Dictionary } from '@/content/dictionary';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/i18n';

interface ContactFormProps {
  locale: Locale;
  copy: Dictionary['contact']['form'];
  privacyHref: string;
}

const initialState: ContactFormState = { status: 'idle' };

/**
 * The contact form, with the field set the original site published: surname, first name,
 * telephone, e-mail, topic, message, other information, location, preferred language and
 * document attachments.
 */
export function ContactForm({ locale, copy, privacyHref }: ContactFormProps) {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const id = useId();

  if (state.status === 'success') {
    return <SuccessPanel title={copy.successTitle} body={copy.successBody} />;
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <input type="hidden" name="locale" value={locale} />
      <Honeypot id={id} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-firstName`} label={copy.firstName} error={state.fieldErrors?.firstName}>
          <input
            id={`${id}-firstName`}
            name="firstName"
            type="text"
            autoComplete="family-name"
            aria-invalid={Boolean(state.fieldErrors?.firstName)}
            className={cn(fieldClasses, state.fieldErrors?.firstName && 'border-red-400')}
          />
        </Field>

        <Field id={`${id}-lastName`} label={copy.lastName} error={state.fieldErrors?.lastName}>
          <input
            id={`${id}-lastName`}
            name="lastName"
            type="text"
            autoComplete="given-name"
            aria-invalid={Boolean(state.fieldErrors?.lastName)}
            className={cn(fieldClasses, state.fieldErrors?.lastName && 'border-red-400')}
          />
        </Field>

        <Field id={`${id}-phone`} label={copy.phone} error={state.fieldErrors?.contact}>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(state.fieldErrors?.contact)}
            className={cn(fieldClasses, state.fieldErrors?.contact && 'border-red-400')}
          />
        </Field>

        <Field id={`${id}-email`} label={copy.email} error={state.fieldErrors?.contact}>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(state.fieldErrors?.contact)}
            className={cn(fieldClasses, state.fieldErrors?.contact && 'border-red-400')}
          />
        </Field>
      </div>

      <Field id={`${id}-topic`} label={copy.topic} optionalLabel={copy.optional}>
        <input id={`${id}-topic`} name="topic" type="text" className={fieldClasses} />
      </Field>

      <Field id={`${id}-message`} label={copy.message} error={state.fieldErrors?.message}>
        <textarea
          id={`${id}-message`}
          name="message"
          rows={5}
          aria-invalid={Boolean(state.fieldErrors?.message)}
          className={cn(fieldClasses, 'resize-y', state.fieldErrors?.message && 'border-red-400')}
        />
      </Field>

      <Field id={`${id}-otherInfo`} label={copy.otherInfo} optionalLabel={copy.optional}>
        <textarea id={`${id}-otherInfo`} name="otherInfo" rows={3} className={cn(fieldClasses, 'resize-y')} />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-location`} label={copy.location} optionalLabel={copy.optional}>
          <input id={`${id}-location`} name="location" type="text" className={fieldClasses} />
        </Field>

        <Field
          id={`${id}-preferredLanguage`}
          label={copy.preferredLanguage}
          optionalLabel={copy.optional}
        >
          <input
            id={`${id}-preferredLanguage`}
            name="preferredLanguage"
            type="text"
            className={fieldClasses}
          />
        </Field>
      </div>

      <Field
        id={`${id}-attachments`}
        label={copy.attachments}
        hint={copy.attachmentsHint}
        optionalLabel={copy.optional}
      >
        <input
          id={`${id}-attachments`}
          name="attachments"
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          className={cn(
            fieldClasses,
            'file:mr-4 file:rounded-(--radius-pill) file:border-0 file:bg-plum-100 file:px-4 file:py-1.5',
            'file:text-[0.8125rem] file:font-medium file:text-plum-800 hover:file:bg-plum-200',
          )}
        />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-plum-900/25 text-plum-700 focus:ring-plum-500/30"
          />
          <span>
            {copy.consent}{' '}
            <Link
              href={privacyHref}
              className="text-plum-700 underline decoration-plum-300 underline-offset-4 hover:decoration-plum-700"
            >
              {copy.consentLink}
            </Link>
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-2 text-[0.8125rem] text-red-600">{state.fieldErrors.consent}</p>
        ) : null}
      </div>

      {state.status === 'error' && !state.fieldErrors ? (
        <ErrorPanel title={copy.errorTitle} body={copy.errorBody} />
      ) : null}

      <SubmitButton label={copy.submit} pendingLabel={copy.submitting} />
    </form>
  );
}
