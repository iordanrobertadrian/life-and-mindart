import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Competences } from '@/components/sections/competences';
import { ContactCta } from '@/components/sections/contact-cta';
import { Intro } from '@/components/sections/intro';
import { PageHeader } from '@/components/sections/page-header';
import { Practice } from '@/components/sections/practice';
import { Training } from '@/components/sections/training';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    title: dict.about.meta.title,
    description: dict.about.meta.description,
    routeKey: 'despre',
  });
}

/**
 * "About" — the biography and professional record, which on the original site lived on the
 * home page. The footer menu links here, so the page has to exist; it says nothing the home
 * page does not, because the original had nothing else to say.
 */
export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <PageHeader eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} />

      <Intro copy={dict.home.intro} imageAlt={dict.about.imageAlt} locale={locale} />

      <Training copy={dict.home.training} />

      <Competences copy={dict.home.competences} />

      <Practice copy={dict.home.practice} />

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={path(locale, 'contact')}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.about, url: path(locale, 'despre') },
        ])}
      />
    </>
  );
}
