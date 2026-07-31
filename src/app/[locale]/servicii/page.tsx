import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ContactCta } from '@/components/sections/contact-cta';
import { PageHeader } from '@/components/sections/page-header';
import { ServicesGrid } from '@/components/sections/services-grid';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { FlourishIcon } from '@/components/icons';
import { getServices } from '@/content/services';
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
    title: dict.services.meta.title,
    description: dict.services.meta.description,
    routeKey: 'servicii',
  });
}

export default async function ServicesPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const services = getServices(locale);

  return (
    <>
      <PageHeader eyebrow={dict.services.eyebrow} title={dict.services.title}>
        <figure className="mt-10 border-l-2 border-gold-400 pl-6">
          <FlourishIcon className="h-3 w-16 text-gold-500/70" />
          <blockquote className="mt-4 font-display text-[1.1875rem] leading-relaxed text-plum-800 italic">
            {dict.services.motto}
          </blockquote>
          <figcaption className="mt-2 text-sm text-ink-muted">({dict.services.mottoAuthor})</figcaption>
        </figure>
      </PageHeader>

      <ServicesGrid services={services} locale={locale} readMore={dict.actions.readMore} tone="cream" />

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={path(locale, 'contact')}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.services, url: path(locale, 'servicii') },
        ])}
      />
    </>
  );
}
