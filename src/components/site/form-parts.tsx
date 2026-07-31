'use client';

import type { ReactNode } from 'react';
import { useFormStatus } from 'react-dom';

import { CheckIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

/** Shared input chrome for both forms on the site. */
export const fieldClasses =
  'w-full rounded-2xl border border-plum-900/12 bg-white/70 px-4 py-3.5 text-[0.9375rem] text-ink ' +
  'placeholder:text-ink-muted/70 transition-[border-color,box-shadow] duration-200 ' +
  'focus:border-plum-500 focus:ring-4 focus:ring-plum-500/12 focus:outline-none';

export function SubmitButton({ label, pendingLabel }: { label: string; pendingLabel: string }) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="mt-1 self-start">
      {pending ? pendingLabel : label}
    </Button>
  );
}

interface FieldProps {
  id: string;
  label: string;
  hint?: string;
  /** Rendered next to the label when the field may be left blank. */
  optionalLabel?: string;
  error?: string;
  children: ReactNode;
}

export function Field({ id, label, hint, optionalLabel, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline gap-2 text-[0.9375rem] font-medium text-plum-900">
        {label}
        {optionalLabel ? (
          <span className="text-[0.6875rem] font-normal tracking-wide text-ink-muted uppercase">
            {optionalLabel}
          </span>
        ) : null}
      </label>
      {hint ? <p className="mt-1 text-[0.8125rem] text-ink-muted">{hint}</p> : null}
      <div className="mt-2.5">{children}</div>
      {error ? (
        <p role="alert" className="mt-2 text-[0.8125rem] text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** The off-screen field that people never see and bots cannot resist. */
export function Honeypot({ id }: { id: string }) {
  return (
    <div aria-hidden className="absolute h-px w-px overflow-hidden opacity-0" style={{ left: -9999 }}>
      <label htmlFor={`${id}-company`}>Company</label>
      <input id={`${id}-company`} type="text" name="company" tabIndex={-1} autoComplete="off" />
    </div>
  );
}

export function SuccessPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-(--radius-panel) border border-gold-400/50 bg-gold-100/40 p-10 text-center">
      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-(--radius-pill) bg-gold-500 text-plum-950">
        <CheckIcon className="h-6 w-6" />
      </span>
      <h3 className="mt-6 font-display text-h3 text-plum-950">{title}</h3>
      <p className="mx-auto mt-3 max-w-md text-[0.9375rem] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

export function ErrorPanel({ title, body }: { title: string; body: string }) {
  return (
    <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-5">
      <p className="text-[0.9375rem] font-semibold text-red-800">{title}</p>
      <p className="mt-1 text-[0.875rem] leading-relaxed text-red-700">{body}</p>
    </div>
  );
}
