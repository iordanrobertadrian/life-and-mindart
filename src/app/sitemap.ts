import type { MetadataRoute } from 'next';

import { services } from '@/content/services';
import { site } from '@/content/site';
import { getArticles, getLegalPages } from '@/lib/content';
import { locales, path, type Locale, type RouteKey } from '@/lib/i18n';

/**
 * The old site returned 404 for `/sitemap.xml`, so Google had to discover every page by
 * crawling links. This lists all of them, in both languages, with `hreflang` alternates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  const add = (
    routeKey: RouteKey | undefined,
    slugs: Partial<Record<Locale, string>> | undefined,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  ) => {
    for (const locale of locales) {
      const slug = slugs?.[locale];
      if (slugs && !slug) continue;

      entries.push({
        url: `${site.url}${path(locale, routeKey, ...(slug ? [slug] : []))}`,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: Object.fromEntries(
            locales
              .filter((other) => !slugs || slugs[other])
              .map((other) => [
                other,
                `${site.url}${path(other, routeKey, ...(slugs?.[other] ? [slugs[other]!] : []))}`,
              ]),
          ),
        },
      });
    }
  };

  add(undefined, undefined, 1, 'monthly');
  add('contact', undefined, 0.9, 'monthly');
  add('servicii', undefined, 0.9, 'monthly');
  add('despre', undefined, 0.8, 'yearly');
  add('evenimente', undefined, 0.7, 'weekly');
  add('publicatii', undefined, 0.7, 'monthly');

  for (const service of services) {
    add('servicii', { ro: service.copy.ro.slug, en: service.copy.en.slug }, 0.8, 'yearly');
  }

  const articleKeys = new Set(getArticles('ro').map((article) => article.translationKey));
  for (const key of articleKeys) {
    const slugs: Partial<Record<Locale, string>> = {};
    for (const locale of locales) {
      const match = getArticles(locale).find((article) => article.translationKey === key);
      if (match) slugs[locale] = match.slug;
    }
    add('publicatii', slugs, 0.6, 'yearly');
  }

  const legalKeys = new Set(getLegalPages('ro').map((page) => page.translationKey));
  for (const key of legalKeys) {
    const slugs: Partial<Record<Locale, string>> = {};
    for (const locale of locales) {
      const match = getLegalPages(locale).find((page) => page.translationKey === key);
      if (match) slugs[locale] = match.slug;
    }
    add('legal', slugs, 0.2, 'yearly');
  }

  return entries;
}
