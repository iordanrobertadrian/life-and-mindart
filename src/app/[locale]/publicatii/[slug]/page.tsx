import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowRightIcon } from '@/components/icons';
import { ContactCta } from '@/components/sections/contact-cta';
import { JsonLd, articleSchema, breadcrumbSchema } from '@/components/site/json-ld';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { site } from '@/content/site';
import { getArticle, getArticles, slugsByLocale } from '@/lib/content';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, locales, localeNames, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getArticles(locale).map((article) => ({ locale, slug: article.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const article = getArticle(locale, slug);
  if (!article) return {};

  return buildMetadata({
    locale,
    title: article.title,
    description: article.excerpt,
    routeKey: 'publicatii',
    slugs: slugsByLocale('articles', article.translationKey),
    image: article.image,
    type: 'article',
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const article = getArticle(locale, slug);
  if (!article) notFound();

  const dict = getDictionary(locale);
  const others = getArticles(locale).filter((entry) => entry.slug !== slug);
  const formattedDate = new Date(article.date).toLocaleDateString(localeNames[locale].htmlLang, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <article>
        <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                'radial-gradient(100% 70% at 12% 0%, #f6e6dc 0%, rgba(246,230,220,0) 58%),' +
                'linear-gradient(180deg, #fbf8f4 0%, #fbf8f4 100%)',
            }}
          />

          <Container width="content">
            <Reveal immediate>
              <Eyebrow>{article.category}</Eyebrow>
            </Reveal>
            <Reveal immediate>
              <h1 className="mt-6 text-h1 text-plum-950">{article.title}</h1>
            </Reveal>
            <Reveal immediate>
              <p className="mt-6 text-lead text-ink-soft">{article.excerpt}</p>
            </Reveal>
            <Reveal immediate>
              <dl className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-plum-900/8 pt-6 text-sm text-ink-muted">
                <div className="flex gap-2">
                  <dt className="sr-only">{site.practitioner.name}</dt>
                  <dd className="font-medium text-plum-800">
                    {site.practitioner.name}, {site.practitioner.honorific}
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt>{dict.publications.publishedOn}</dt>
                  <dd>
                    <time dateTime={article.date}>{formattedDate}</time>
                  </dd>
                </div>
                <div className="flex gap-1.5">
                  <dt className="sr-only">{dict.publications.readingTime}</dt>
                  <dd>
                    {article.readingMinutes} {dict.publications.readingTime}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </Container>
        </section>

        <Container width="content">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src={article.image}
                alt={article.imageAlt}
                width={1600}
                height={900}
                priority
                sizes="(max-width: 768px) 100vw, 46rem"
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>

        <Section tone="cream" space="tight">
          <Container width="content">
            <Reveal>
              {/* Rendered from our own markdown files at build time — no user input involved. */}
              <div className="prose-lma" dangerouslySetInnerHTML={{ __html: article.html }} />
            </Reveal>

            <Reveal delay={90}>
              <Link
                href={path(locale, 'publicatii')}
                className="mt-14 inline-flex items-center gap-2 text-sm font-medium text-plum-700 transition-colors duration-200 hover:text-plum-900"
              >
                <ArrowRightIcon className="h-4 w-4 rotate-180" />
                {dict.publications.backToAll}
              </Link>
            </Reveal>
          </Container>
        </Section>
      </article>

      {others.length > 0 ? (
        <Section tone="sand" space="tight">
          <Container width="content">
            <h2 className="font-display text-h3 text-plum-950">{dict.publications.backToAll}</h2>
            <ul className="mt-7 flex flex-col divide-y divide-plum-900/10">
              {others.map((other) => (
                <li key={other.slug}>
                  <Link
                    href={path(locale, 'publicatii', other.slug)}
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    <span>
                      <span className="block font-display text-[1.125rem] leading-snug text-plum-900">
                        {other.title}
                      </span>
                      <span className="mt-1 block text-sm text-ink-muted">{other.excerpt}</span>
                    </span>
                    <ArrowRightIcon className="h-5 w-5 shrink-0 text-plum-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-plum-700" />
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={path(locale, 'contact')}
      />

      <JsonLd
        data={articleSchema({
          title: article.title,
          excerpt: article.excerpt,
          date: article.date,
          image: article.image,
          url: path(locale, 'publicatii', article.slug),
          locale,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.publications, url: path(locale, 'publicatii') },
          { name: article.title, url: path(locale, 'publicatii', article.slug) },
        ])}
      />
    </>
  );
}
