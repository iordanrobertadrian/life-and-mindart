'use client';

import { useSyncExternalStore } from 'react';

import { CONSENT_EVENT, readConsent, type ConsentState } from './consent';

/**
 * Reads the consent cookie as an external store.
 *
 * The cookie genuinely *is* state that lives outside React, so this is `useSyncExternalStore`
 * rather than "read it in an effect and call setState" — no cascading render on first paint,
 * and no hydration mismatch, because the server snapshot is honestly "no decision yet".
 */

let cachedCookie: string | null = null;
let cachedState: ConsentState | null = null;

function getSnapshot(): ConsentState | null {
  const raw = document.cookie;
  // Recompute only when the cookie string actually changed, so the returned object keeps a
  // stable identity between renders.
  if (raw !== cachedCookie) {
    cachedCookie = raw;
    cachedState = readConsent();
  }
  return cachedState;
}

/** On the server there is no cookie to read: treat it as "not decided". */
function getServerSnapshot(): ConsentState | null {
  return null;
}

function subscribe(onChange: () => void): () => void {
  const handle = () => {
    cachedCookie = null; // force a re-read on the next snapshot
    onChange();
  };
  window.addEventListener(CONSENT_EVENT, handle);
  return () => window.removeEventListener(CONSENT_EVENT, handle);
}

export function useConsent(): ConsentState | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
