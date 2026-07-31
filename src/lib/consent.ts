/**
 * Cookie consent, kept deliberately small.
 *
 * The old site showed a banner that said "by continuing to use the site you agree" with a
 * single Accept button — implied consent, which is not valid under the GDPR. Here, refusing
 * is exactly one click, in the same banner, and nothing beyond the strictly necessary cookie
 * is written until the visitor actively says yes.
 */

export const CONSENT_COOKIE = 'lma-consent';
export const CONSENT_EVENT = 'lma:consent-change';
export const CONSENT_OPEN_EVENT = 'lma:consent-open';

const SIX_MONTHS_SECONDS = 60 * 60 * 24 * 182;

export interface ConsentState {
  analytics: boolean;
  /** ISO date, so the choice can be re-requested when the policy changes. */
  decidedAt: string;
}

export function readConsent(): ConsentState | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie.split('; ').find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`));
  if (!match) return null;

  try {
    const parsed: unknown = JSON.parse(decodeURIComponent(match.slice(CONSENT_COOKIE.length + 1)));
    if (typeof parsed === 'object' && parsed !== null && 'analytics' in parsed) {
      const state = parsed as ConsentState;
      return { analytics: Boolean(state.analytics), decidedAt: state.decidedAt ?? '' };
    }
  } catch {
    /* A malformed cookie is treated as no decision at all. */
  }
  return null;
}

export function writeConsent(analytics: boolean): ConsentState {
  const state: ConsentState = { analytics, decidedAt: new Date().toISOString() };
  const value = encodeURIComponent(JSON.stringify(state));
  const secure = typeof location !== 'undefined' && location.protocol === 'https:' ? '; Secure' : '';

  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=${SIX_MONTHS_SECONDS}; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  return state;
}

/** Called from the footer link so the visitor can change their mind at any time. */
export function openConsentPreferences(): void {
  window.dispatchEvent(new Event(CONSENT_OPEN_EVENT));
}
