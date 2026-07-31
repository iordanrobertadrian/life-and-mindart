'use client';

import Script from 'next/script';

import { useConsent } from '@/lib/use-consent';

/**
 * Google Analytics, loaded *only* after explicit consent.
 *
 * Nothing is requested from Google until the visitor accepts — no script tag, no cookie, no
 * network call. If they never accept, the site simply never talks to an analytics server.
 */
export function Analytics({ measurementId }: { measurementId: string }) {
  const consent = useConsent();

  if (!measurementId || !consent?.analytics) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true, allow_google_signals: false, allow_ad_personalization_signals: false });
        `}
      </Script>
    </>
  );
}
