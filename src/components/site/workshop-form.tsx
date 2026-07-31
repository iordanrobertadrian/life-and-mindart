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
import { submitWorkshopForm, type WorkshopFormState } from '@/app/actions/contact';
import type { Dictionary } from '@/content/dictionary';
import { cn } from '@/lib/cn';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/lib/i18n';

interface WorkshopFormProps {
  locale: Locale;
  copy: Dictionary['workshop']['form'];
  privacyHref: string;
}

const initialState: WorkshopFormState = { status: 'idle' };

/** The reservation form on the bioresonance workshop page, with its five original fields. */
export function WorkshopForm({ locale, copy, privacyHref }: WorkshopFormProps) {
  const [state, formAction] = useActionState(submitWorkshopForm, initialState);
  const id = useId();

  /* The workshop page publishes no confirmation or error wording of its own, so it borrows
     the contact form's — the same practice replying, in the same words. */
  const shared = getDictionary(locale).contact.form;

  if (state.status === 'success') {
    return <SuccessPanel title={shared.successTitle} body={shared.successBody} />;
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <input type="hidden" name="locale" value={locale} />
      <Honeypot id={id} />

      <Field id={`${id}-fullName`} label={copy.fields.fullName} error={state.fieldErrors?.fullName}>
        <input
          id={`${id}-fullName`}
          name="fullName"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(state.fieldErrors?.fullName)}
          className={cn(fieldClasses, state.fieldErrors?.fullName && 'border-red-400')}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id={`${id}-phone`} label={copy.fields.phone} error={state.fieldErrors?.phone}>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            className={cn(fieldClasses, state.fieldErrors?.phone && 'border-red-400')}
          />
        </Field>

        <Field id={`${id}-email`} label={copy.fields.email} error={state.fieldErrors?.email}>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={Boolean(state.fieldErrors?.email)}
            className={cn(fieldClasses, state.fieldErrors?.email && 'border-red-400')}
          />
        </Field>
      </div>

      <Field
        id={`${id}-occupation`}
        label={copy.fields.occupation}
        error={state.fieldErrors?.occupation}
      >
        <input
          id={`${id}-occupation`}
          name="occupation"
          type="text"
          autoComplete="organization-title"
          aria-invalid={Boolean(state.fieldErrors?.occupation)}
          className={cn(fieldClasses, state.fieldErrors?.occupation && 'border-red-400')}
        />
      </Field>

      <Field id={`${id}-message`} label={copy.fields.message} optionalLabel={shared.optional}>
        <textarea id={`${id}-message`} name="message" rows={4} className={cn(fieldClasses, 'resize-y')} />
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[0.875rem] leading-relaxed text-ink-soft">
          <input
            type="checkbox"
            name="consent"
            className="mt-0.5 h-4.5 w-4.5 shrink-0 rounded border-plum-900/25 text-plum-700 focus:ring-plum-500/30"
          />
          <Link
            href={privacyHref}
            className="text-plum-700 underline decoration-plum-300 underline-offset-4 hover:decoration-plum-700"
          >
            {copy.fields.consent}
          </Link>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-2 text-[0.8125rem] text-red-600">{state.fieldErrors.consent}</p>
        ) : null}
      </div>

      {state.status === 'error' && !state.fieldErrors ? (
        <ErrorPanel title={shared.errorTitle} body={shared.errorBody} />
      ) : null}

      <SubmitButton label={copy.submit} pendingLabel={shared.submitting} />
    </form>
  );
}
