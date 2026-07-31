import { ImageResponse } from 'next/og';

import { site } from '@/content/site';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, defaultLocale, locales } from '@/lib/i18n';

/**
 * The preview card that appears when the link is shared on WhatsApp, Facebook or Signal.
 *
 * The audit found the old site had no `og:image` at all: every share rendered as a bare grey
 * text row. For a practice that gets most of its clients by recommendation, that was a loss
 * on every single share.
 */
export const alt = `${site.name} — ${site.practitioner.name}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;
  const dict = getDictionary(locale);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #1E1420 0%, #33203A 55%, #472C50 100%)',
          color: '#FBF8F4',
          position: 'relative',
        }}
      >
        {/* Soft plum bloom, top right */}
        <div
          style={{
            position: 'absolute',
            top: -220,
            right: -180,
            width: 620,
            height: 620,
            borderRadius: 620,
            background: 'radial-gradient(circle, rgba(178,136,189,0.45) 0%, rgba(178,136,189,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Brand row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none">
            <path
              d="M24 10c5.4 4.6 8.1 9.2 8.1 14S29.4 33.4 24 38c-5.4-4.6-8.1-9.2-8.1-14S18.6 14.6 24 10Z"
              stroke="#C9A961"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M10 24c4.6-5.4 9.2-8.1 14-8.1s9.4 2.7 14 8.1c-4.6 5.4-9.2 8.1-14 8.1S14.6 29.4 10 24Z"
              stroke="#C9A961"
              strokeWidth="2"
              strokeLinejoin="round"
              opacity="0.6"
            />
            <circle cx="24" cy="24" r="3.6" fill="#C9A961" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 26, letterSpacing: 6, textTransform: 'uppercase' }}>
              Life &amp; Mind Art
            </span>
            <span style={{ fontSize: 17, letterSpacing: 4, color: '#D1B4D8', marginTop: 6 }}>
              {site.practitioner.name.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 900 }}>
          <span style={{ fontSize: 62, lineHeight: 1.12, letterSpacing: -1.5 }}>
            {dict.home.hero.title}
          </span>
          <span style={{ fontSize: 32, lineHeight: 1.3, color: '#D3B573', marginTop: 22 }}>
            {dict.home.hero.lead}
          </span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 28,
            fontSize: 22,
            color: '#D1B4D8',
            borderTop: '1px solid rgba(209,180,216,0.25)',
            paddingTop: 28,
          }}
        >
          <span>{dict.home.practice.subtitle}</span>
          <span style={{ color: '#C9A961' }}>·</span>
          <span>lifeandmindart.com</span>
        </div>
      </div>
    ),
    size,
  );
}
