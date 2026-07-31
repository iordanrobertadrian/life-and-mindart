import type { Metadata } from 'next';

import { site } from '@/content/site';

import { alternateLanguages, path, type Locale, type RouteKey } from './i18n';

interface PageMetadataInput {
  locale: Locale;
  title: string;
  description: string;
  /** Section this page belongs to; omitted for the home page. */
  routeKey?: RouteKey;
  /** Slug for dynamic pages, per locale, so `hreflang` points at the real translation. */
  slugs?: Partial<Record<Locale, string>>;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}

/**
 * One place that builds canonical URLs, `hreflang` alternates and Open Graph tags.
 *
 * The old site shipped no `og:image` at all — sharing the link on WhatsApp or Facebook
 * produced a bare grey text row. Every page here has a canonical URL, both language
 * alternates, and a real preview image.
 */
export function buildMetadata({
  locale,
  title,
  description,
  routeKey,
  slugs,
  image,
  type = 'website',
  publishedTime,
}: PageMetadataInput): Metadata {
  const slug = slugs?.[locale];
  const canonical = path(locale, routeKey, ...(slug ? [slug] : []));
  const languages = alternateLanguages(routeKey, slugs);

  /*
   * Every page gets a share image, explicitly.
   *
   * Next's file-convention `opengraph-image` only covers the segment it lives in — nested
   * routes such as /despre would silently inherit nothing, and the audit's most visible
   * finding (a shared link showing a bare grey row on WhatsApp) would come straight back.
   * So: the page's own photograph if it has one, otherwise the generated brand card.
   */
  const shareImage = image
    ? [{ url: image, alt: title }]
    : [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: `${site.name} — ${title}` }];

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: { ...languages, 'x-default': languages['ro-RO'] ?? '/' },
    },
    openGraph: {
      type,
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: locale === 'ro' ? 'ro_RO' : 'en_GB',
      images: shareImage,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: shareImage.map((entry) => entry.url),
    },
  };
}
