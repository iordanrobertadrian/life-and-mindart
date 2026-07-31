import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { FacebookIcon, MailIcon, MapPinIcon, ShieldIcon, WhatsAppIcon } from '@/components/icons';
import { PageHeader } from '@/components/sections/page-header';
import { ContactForm } from '@/components/site/contact-form';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { site } from '@/content/site';
import { getLegalPages } from '@/lib/content';
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
    title: dict.contact.meta.title,
    description: dict.contact.meta.description,
    routeKey: 'contact',
  });
}

export default async function ContactPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const privacyPage = getLegalPages(locale).find((page) => page.translationKey === 'privacy');
  const privacyHref = privacyPage ? path(locale, 'legal', privacyPage.slug) : path(locale);

  return (
    <>
      <PageHeader eyebrow={dict.contact.eyebrow} title={dict.contact.title} lead={dict.contact.lead} />

      <Section tone="cream" space="tight">
        <Container className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---- Form ---- */}
          <Reveal>
            <ContactForm locale={locale} copy={dict.contact.form} privacyHref={privacyHref} />
          </Reveal>

          {/* ---- Photograph and details ---- */}
          <Reveal delay={120} className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-(--radius-panel) shadow-(--shadow-lifted)">
              <Image
                src="/images/ramona-ceciu-cabinet.jpg"
                alt={dict.about.imageAlt}
                width={1024}
                height={811}
                sizes="(max-width: 1024px) 92vw, 38vw"
                className="h-auto w-full"
              />
            </div>

            <div className="grain mt-6 rounded-(--radius-panel) bg-plum-950 p-9 text-plum-200 sm:p-10">
              <h2 className="font-display text-h3 text-cream">{dict.contact.details.name}</h2>

              <p className="mt-3 inline-flex items-center gap-2.5 text-[0.875rem] text-gold-300">
                <ShieldIcon className="h-4 w-4 shrink-0" />
                {dict.contact.details.accreditation}
              </p>

              <h3 className="mt-9 text-eyebrow font-semibold tracking-(--text-eyebrow--letter-spacing) text-gold-400 uppercase">
                {dict.contact.details.title}
              </h3>

              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-start gap-3.5 text-[0.9375rem] leading-relaxed">
                  <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  {dict.contact.details.address}
                </li>
                <li className="flex items-start gap-3.5">
                  <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-[0.9375rem] text-cream transition-colors duration-200 hover:text-gold-300"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <WhatsAppIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[0.9375rem] text-cream transition-colors duration-200 hover:text-gold-300"
                  >
                    {dict.contact.details.mobileLabel}: {site.contact.phoneDisplayLong}
                  </a>
                </li>
              </ul>

              <div className="mt-9 border-t border-plum-100/12 pt-7">
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-[0.9375rem] text-cream transition-colors duration-200 hover:text-gold-300"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-(--radius-pill) border border-plum-100/15">
                    <FacebookIcon className="h-4 w-4" />
                  </span>
                  {dict.contact.details.followLabel}
                </a>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.contact, url: path(locale, 'contact') },
        ])}
      />
    </>
  );
}
