import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Competences } from '@/components/sections/competences';
import { ContactCta } from '@/components/sections/contact-cta';
import { Hero } from '@/components/sections/hero';
import { Intro } from '@/components/sections/intro';
import { Practice } from '@/components/sections/practice';
import { ServicesGrid } from '@/components/sections/services-grid';
import { Testimonials } from '@/components/sections/testimonials';
import { Training } from '@/components/sections/training';
import { getServices } from '@/content/services';
import { getTestimonials } from '@/content/testimonials';
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
    title: dict.home.meta.title,
    description: dict.home.meta.description,
  });
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const services = getServices(locale);
  const testimonials = getTestimonials(locale);
  const contactHref = path(locale, 'contact');

  return (
    <>
      <Hero copy={dict.home.hero} actions={dict.actions} contactHref={contactHref} />

      <Intro copy={dict.home.intro} imageAlt={dict.home.hero.imageAlt} locale={locale} />

      <Training copy={dict.home.training} />

      <Competences copy={dict.home.competences} />

      <ServicesGrid
        services={services}
        locale={locale}
        heading={{ eyebrow: dict.nav.services, title: dict.services.title }}
        readMore={dict.actions.readMore}
      />

      <Practice copy={dict.home.practice} />

      <Testimonials title={dict.home.testimonials.title} items={testimonials} tone="cream" />

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={contactHref}
      />
    </>
  );
}
