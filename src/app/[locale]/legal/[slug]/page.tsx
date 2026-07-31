import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { PageHeader } from '@/components/sections/page-header';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { getLegalPage, getLegalPages, slugsByLocale } from '@/lib/content';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, locales, localeNames, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return locales.flatMap((locale) => getLegalPages(locale).map((page) => ({ locale, slug: page.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};

  const page = getLegalPage(locale, slug);
  if (!page) return {};

  return {
    ...buildMetadata({
      locale,
      title: page.title,
      description: page.description,
      routeKey: 'legal',
      slugs: slugsByLocale('legal', page.translationKey),
    }),
    // Legal boilerplate should not compete with the practice's real pages in search results.
    robots: { index: false, follow: true },
  };
}

export default async function LegalPage({ params }: Params) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  const page = getLegalPage(locale, slug);
  if (!page) notFound();

  const dict = getDictionary(locale);
  const siblings = getLegalPages(locale);

  return (
    <>
      <PageHeader eyebrow={dict.legal.eyebrow} title={page.title} lead={page.description}>
        <p className="mt-6 text-sm text-ink-muted">
          {dict.legal.lastUpdatedLabel}:{' '}
          <time dateTime={page.updated}>
            {new Date(page.updated).toLocaleDateString(localeNames[locale].htmlLang, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </p>
      </PageHeader>

      <Section tone="cream" space="tight">
        <Container width="content">
          <Reveal>
            {/* Rendered from our own markdown files at build time. */}
            <div className="prose-lma" dangerouslySetInnerHTML={{ __html: page.html }} />
          </Reveal>

          <Reveal delay={90}>
            <nav className="mt-16 border-t border-plum-900/8 pt-8">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {siblings
                  .filter((sibling) => sibling.slug !== page.slug)
                  .map((sibling) => (
                    <li key={sibling.slug}>
                      <Link
                        href={path(locale, 'legal', sibling.slug)}
                        className="text-sm text-plum-700 underline decoration-plum-200 underline-offset-4 transition-colors duration-200 hover:decoration-plum-700"
                      >
                        {sibling.title}
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
