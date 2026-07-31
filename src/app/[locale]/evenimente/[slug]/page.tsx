import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { CoursePage } from '@/components/sections/course-page';
import { WorkshopPage } from '@/components/sections/workshop-page';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { getProgramme, programmeSlugs, programmes } from '@/content/programmes';
import { getLegalPages } from '@/lib/content';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, locales, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    programmes.map((programme) => ({ locale, slug: programme.slug[locale] })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const programme = getProgramme(locale, slug);
  if (!programme) return {};

  const dict = getDictionary(locale);
  const meta = programme === 'workshop' ? dict.workshop.meta : dict.course.meta;

  return buildMetadata({
    locale,
    title: meta.title,
    description: meta.description,
    routeKey: 'evenimente',
    slugs: programmeSlugs(slug, locale),
  });
}

/** The two bioresonance pages that hang off "Evenimente". */
export default async function ProgrammePage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const programme = getProgramme(locale, slug);
  if (!programme) notFound();

  const dict = getDictionary(locale);
  const privacyPage = getLegalPages(locale).find((page) => page.translationKey === 'privacy');
  const privacyHref = privacyPage ? path(locale, 'legal', privacyPage.slug) : path(locale);

  return (
    <>
      {programme === 'workshop' ? (
        <WorkshopPage copy={dict.workshop} locale={locale} privacyHref={privacyHref} />
      ) : (
        <CoursePage copy={dict.course} locale={locale} />
      )}

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.events, url: path(locale, 'evenimente') },
          {
            name: programme === 'workshop' ? dict.workshop.eyebrow : dict.course.eyebrow,
            url: path(locale, 'evenimente', slug),
          },
        ])}
      />
    </>
  );
}
