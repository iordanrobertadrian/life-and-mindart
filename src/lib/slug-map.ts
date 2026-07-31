import { getArticles, getLegalPages } from './content';
import { locales, type Locale } from './i18n';
import { services } from '@/content/services';

/**
 * A table of every dynamic slug in every language, keyed by the section it belongs to.
 *
 * Built on the server (it reads the markdown files) and handed to the language switcher, so
 * that switching language on `/servicii/hipnoterapie` lands on `/en/services/hypnotherapy`
 * rather than dumping the visitor back on the home page.
 */
export type SlugTranslations = Record<string, Record<Locale, string>[]>;

function byTranslationKey(
  documentsByLocale: Record<Locale, { slug: string; translationKey: string }[]>,
): Record<Locale, string>[] {
  const keys = new Set(locales.flatMap((locale) => documentsByLocale[locale].map((d) => d.translationKey)));

  return [...keys].flatMap((key) => {
    const entry = {} as Record<Locale, string>;
    for (const locale of locales) {
      const match = documentsByLocale[locale].find((document) => document.translationKey === key);
      if (!match) return [];
      entry[locale] = match.slug;
    }
    return [entry];
  });
}

export function buildSlugTranslations(): SlugTranslations {
  return {
    servicii: services.map((service) => ({
      ro: service.copy.ro.slug,
      en: service.copy.en.slug,
    })),
    publicatii: byTranslationKey({
      ro: getArticles('ro'),
      en: getArticles('en'),
    }),
    legal: byTranslationKey({
      ro: getLegalPages('ro'),
      en: getLegalPages('en'),
    }),
  };
}
