import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons';
import { Reveal } from '@/components/ui/reveal';
import type { Article } from '@/lib/content';
import { path, localeNames, type Locale } from '@/lib/i18n';

interface ArticleCardsProps {
  articles: Article[];
  locale: Locale;
  labels: { readMore: string; readingTime: string };
  /** `h3` under a section heading, `h2` when the cards follow the page title directly. */
  titleAs?: 'h2' | 'h3';
}

export function ArticleCards({ articles, locale, labels, titleAs: Title = 'h3' }: ArticleCardsProps) {
  return (
    <ul className="grid gap-6 sm:grid-cols-2">
      {articles.map((article, index) => (
        <Reveal as="li" key={article.slug} delay={index * 90}>
          <Link
            href={path(locale, 'publicatii', article.slug)}
            className="group flex h-full flex-col overflow-hidden rounded-(--radius-panel) border border-plum-900/8 bg-cream transition-[transform,box-shadow,border-color] duration-500 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-(--shadow-lifted)"
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 45vw"
                className="object-cover transition-transform duration-[900ms] ease-(--ease-out-soft) group-hover:scale-[1.04]"
              />
            </div>

            <div className="flex flex-1 flex-col p-8">
              <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-eyebrow font-semibold tracking-(--text-eyebrow--letter-spacing) text-gold-600 uppercase">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString(localeNames[locale].htmlLang, {
                    year: 'numeric',
                    month: 'long',
                  })}
                </time>
                <span aria-hidden className="h-1 w-1 rounded-full bg-current opacity-50" />
                <span>
                  {article.readingMinutes} {labels.readingTime}
                </span>
              </p>

              <Title className="mt-4 font-display text-[1.375rem] leading-snug text-plum-900">
                {article.title}
              </Title>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{article.excerpt}</p>

              <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-plum-700 transition-colors duration-200 group-hover:text-plum-900">
                {labels.readMore}
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
