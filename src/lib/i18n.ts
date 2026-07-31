/**
 * Routing & localisation primitives.
 *
 * URL strategy
 * ------------
 *   Romanian (default) lives at the root:  /despre, /servicii, /contact …
 *   English is prefixed and fully localised: /en/about, /en/services, /en/contact …
 *
 * Internally every page lives under the Romanian folder name (`src/app/[locale]/despre`).
 * `proxy.ts` rewrites the public English path onto that canonical folder, so there is
 * exactly one page component per route and no duplicated trees.
 */

export const locales = ['ro', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ro';

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Every top-level section: internal folder name -> public segment per locale. */
export const routeSegments = {
  despre: { ro: 'despre', en: 'about' },
  servicii: { ro: 'servicii', en: 'services' },
  evenimente: { ro: 'evenimente', en: 'events' },
  publicatii: { ro: 'publicatii', en: 'publications' },
  contact: { ro: 'contact', en: 'contact' },
  legal: { ro: 'legal', en: 'legal' },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeSegments;

/**
 * Build a public, locale-correct URL.
 *
 *   path('ro')                        -> '/'
 *   path('en')                        -> '/en'
 *   path('ro', 'servicii')            -> '/servicii'
 *   path('en', 'servicii')            -> '/en/services'
 *   path('en', 'servicii', 'hypnotherapy') -> '/en/services/hypnotherapy'
 */
export function path(locale: Locale, key?: RouteKey, ...rest: string[]): string {
  const parts: string[] = [];
  if (locale !== defaultLocale) parts.push(locale);
  if (key) parts.push(routeSegments[key][locale]);
  parts.push(...rest.filter(Boolean));
  return '/' + parts.join('/');
}

/** Reverse lookup used by the proxy: public segment -> internal folder. */
export function toInternalSegment(locale: Locale, publicSegment: string): RouteKey | null {
  for (const [folder, byLocale] of Object.entries(routeSegments) as [RouteKey, Record<Locale, string>][]) {
    if (byLocale[locale] === publicSegment) return folder;
  }
  return null;
}

export const localeNames: Record<Locale, { label: string; short: string; htmlLang: string }> = {
  ro: { label: 'Română', short: 'RO', htmlLang: 'ro-RO' },
  en: { label: 'English', short: 'EN', htmlLang: 'en-GB' },
};

/** `hreflang` alternates for a page, given its slug in each locale (if any). */
export function alternateLanguages(
  key?: RouteKey,
  slugByLocale?: Partial<Record<Locale, string>>,
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of locales) {
    const slug = slugByLocale?.[locale];
    if (slugByLocale && !slug) continue;
    alternates[localeNames[locale].htmlLang] = path(locale, key, ...(slug ? [slug] : []));
  }
  return alternates;
}
