'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/content/dictionary';
import { cn } from '@/lib/cn';
import { CONSENT_OPEN_EVENT, openConsentPreferences, readConsent, writeConsent } from '@/lib/consent';
import { useConsent } from '@/lib/use-consent';

interface CookieConsentProps {
  copy: Dictionary['cookies'];
  policyHref: string;
}

export function CookieConsent({ copy, policyHref }: CookieConsentProps) {
  const consent = useConsent();
  /** `null` means "follow the stored consent"; the footer link and the buttons override it. */
  const [override, setOverride] = useState<'open' | 'closed' | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // Shown when the visitor has not decided yet, or when they reopen it from the footer.
  const visible = override === 'open' || (override === null && consent === null);

  useEffect(() => {
    const reopen = () => {
      setAnalytics(readConsent()?.analytics ?? false);
      setShowSettings(true);
      setOverride('open');
    };

    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  function decide(value: boolean) {
    writeConsent(value);
    setAnalytics(value);
    setOverride('closed');
    setShowSettings(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={copy.title}
      className="fixed inset-x-3 bottom-3 z-60 sm:inset-x-auto sm:right-5 sm:bottom-5 sm:max-w-md"
    >
      <div className="grain overflow-hidden rounded-(--radius-card) border border-plum-100 bg-cream shadow-(--shadow-lifted)">
        <div className="p-6">
          <h2 className="font-display text-xl text-plum-900">{copy.title}</h2>
          <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{copy.body}</p>

          {showSettings ? (
            <div className="mt-5 flex flex-col gap-3">
              <fieldset className="rounded-2xl border border-plum-100 bg-white/60 p-4">
                <legend className="sr-only">{copy.categories.necessary.title}</legend>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-plum-900">
                      {copy.categories.necessary.title}
                    </p>
                    <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-muted">
                      {copy.categories.necessary.description}
                    </p>
                  </div>
                  <span className="mt-0.5 shrink-0 rounded-(--radius-pill) bg-plum-100 px-2.5 py-1 text-[0.6875rem] font-semibold tracking-wide text-plum-700 uppercase">
                    {copy.alwaysOn}
                  </span>
                </div>
              </fieldset>

              <label className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-plum-100 bg-white/60 p-4 transition-colors duration-200 hover:border-plum-200">
                <span>
                  <span className="block text-sm font-semibold text-plum-900">
                    {copy.categories.analytics.title}
                  </span>
                  <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ink-muted">
                    {copy.categories.analytics.description}
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(event) => setAnalytics(event.target.checked)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden
                  className={cn(
                    'relative mt-0.5 h-6 w-11 shrink-0 rounded-(--radius-pill) transition-colors duration-300',
                    analytics ? 'bg-plum-700' : 'bg-plum-200',
                  )}
                >
                  <span
                    className={cn(
                      'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-300 ease-(--ease-out-soft)',
                      analytics && 'translate-x-5',
                    )}
                  />
                </span>
              </label>
            </div>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {showSettings ? (
              <Button size="sm" onClick={() => decide(analytics)}>
                {copy.save}
              </Button>
            ) : (
              <>
                <Button size="sm" onClick={() => decide(true)}>
                  {copy.accept}
                </Button>
                <Button size="sm" variant="outline" onClick={() => decide(false)}>
                  {copy.reject}
                </Button>
                <button
                  type="button"
                  onClick={() => setShowSettings(true)}
                  className="ml-auto text-sm text-ink-muted underline decoration-plum-200 underline-offset-4 transition-colors duration-200 hover:text-plum-800"
                >
                  {copy.settings}
                </button>
              </>
            )}
          </div>

          <Link
            href={policyHref}
            className="mt-4 inline-block text-[0.8125rem] text-ink-muted underline decoration-plum-200 underline-offset-4 transition-colors duration-200 hover:text-plum-800"
          >
            {copy.policyLink}
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Footer entry point — lets anyone reopen the panel and change their decision. */
export function CookiePreferencesButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={openConsentPreferences}
      className="transition-colors duration-200 hover:text-cream"
    >
      {label}
    </button>
  );
}
