import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowRightIcon, FlourishIcon } from '@/components/icons';
import { ContactCta } from '@/components/sections/contact-cta';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { getService, getServiceSlugs, getServices, services } from '@/content/services';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, locales, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    services.map((service) => ({ locale, slug: service.copy[locale].slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const service = getService(locale, slug);
  if (!service) return {};

  return buildMetadata({
    locale,
    title: service.meta.title,
    description: service.meta.description,
    routeKey: 'servicii',
    slugs: getServiceSlugs(slug, locale),
    image: service.image,
  });
}

export default async function ServicePage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const service = getService(locale, slug);
  if (!service) notFound();

  const dict = getDictionary(locale);
  const others = getServices(locale).filter((entry) => entry.slug !== slug);

  return (
    <>
      {/* ---- Header, with the page's own image ---- */}
      <section className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              'radial-gradient(100% 70% at 10% 0%, #f6e6dc 0%, rgba(246,230,220,0) 58%),' +
              'radial-gradient(80% 60% at 92% 6%, #e9e3f0 0%, rgba(233,227,240,0) 62%),' +
              'linear-gradient(180deg, #fbf8f4 0%, #fbf8f4 100%)',
          }}
        />

        <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal immediate>
              <Eyebrow>{dict.services.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal immediate>
              <h1 className="mt-6 text-h1 text-plum-950">{service.title}</h1>
            </Reveal>
            <Reveal immediate>
              <figure className="mt-9 border-l-2 border-gold-400 pl-6">
                <FlourishIcon className="h-3 w-14 text-gold-500/70" />
                <blockquote className="mt-4 font-display text-[1.0625rem] leading-relaxed text-plum-800 italic">
                  {dict.services.motto}
                </blockquote>
                <figcaption className="mt-2 text-sm text-ink-muted">
                  ({dict.services.mottoAuthor})
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal immediate>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- The page's own text ---- */}
      <Section tone="cream" space="tight">
        <Container width="content">
          {service.sections.map((section, index) => (
            <Reveal key={section.heading ?? index} delay={index * 80} className="mt-14 first:mt-0">
              {section.heading ? (
                <h2 className="font-display text-h3 text-plum-950">{section.heading}</h2>
              ) : null}

              {section.paragraphs ? (
                <div className={`space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft ${section.heading ? 'mt-6' : ''}`}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              ) : null}

              {section.list ? (
                <ul className="mt-7 space-y-3.5">
                  {section.list.map((item) => (
                    <li key={item.slice(0, 40)} className="flex items-start gap-3.5">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      <span className="text-[1rem] leading-relaxed text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}
        </Container>
      </Section>

      {/* ---- The other four services ---- */}
      <Section tone="sand" space="tight">
        <Container>
          <Reveal>
            <h2 className="font-display text-h3 text-plum-950">{dict.services.detail.otherServices}</h2>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((other, index) => (
              <Reveal as="li" key={other.slug} delay={index * 70}>
                <Link
                  href={path(locale, 'servicii', other.slug)}
                  className="group flex h-full items-center justify-between gap-4 rounded-(--radius-card) border border-plum-900/8 bg-cream p-6 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-gold-400/50"
                >
                  <span className="font-display text-[1.0625rem] leading-snug text-plum-900">
                    {other.name}
                  </span>
                  <ArrowRightIcon className="h-4 w-4 shrink-0 text-plum-500 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={path(locale, 'contact')}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.services, url: path(locale, 'servicii') },
          { name: service.name, url: path(locale, 'servicii', slug) },
        ])}
      />
    </>
  );
}
