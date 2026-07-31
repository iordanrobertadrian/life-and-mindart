import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleCards } from '@/components/sections/article-cards';
import { ContactCta } from '@/components/sections/contact-cta';
import { PageHeader } from '@/components/sections/page-header';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getArticles } from '@/lib/content';
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
    title: dict.publications.meta.title,
    description: dict.publications.meta.description,
    routeKey: 'publicatii',
  });
}

export default async function PublicationsPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const articles = getArticles(locale);

  return (
    <>
      <PageHeader eyebrow={dict.publications.eyebrow} title={dict.publications.title} />

      <Section tone="cream" space="tight">
        <Container>
          {articles.length > 0 ? (
            <ArticleCards
              articles={articles}
              locale={locale}
              labels={{ readMore: dict.actions.readMore, readingTime: dict.publications.readingTime }}
              titleAs="h2"
            />
          ) : (
            <p className="text-lead text-ink-muted">{dict.publications.empty}</p>
          )}
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
          { name: dict.nav.publications, url: path(locale, 'publicatii') },
        ])}
      />
    </>
  );
}
