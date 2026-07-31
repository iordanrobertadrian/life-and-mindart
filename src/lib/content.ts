import { readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

import matter from 'gray-matter';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import { defaultLocale, locales, type Locale } from './i18n';

/**
 * Markdown is the content layer.
 *
 * Articles live in `content/articles/<locale>/<slug>.md` and legal pages in
 * `content/legal/<locale>/<slug>.md`. Adding a publication means adding one file — no code,
 * no deploy config, no CMS subscription. Everything is read and rendered at build time, so
 * the pages ship as static HTML.
 */

const CONTENT_ROOT = path.join(process.cwd(), 'content');

interface BaseFrontmatter {
  title: string;
  /** Links the Romanian and English versions of the same document together. */
  translationKey: string;
}

export interface Article extends BaseFrontmatter {
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  imageAlt: string;
  html: string;
  readingMinutes: number;
}

export interface LegalPage extends BaseFrontmatter {
  slug: string;
  description: string;
  updated: string;
  order: number;
  html: string;
}

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeSlug)
  .use(rehypeStringify);

function renderMarkdown(markdown: string): string {
  return String(processor.processSync(markdown));
}

/** ~200 words per minute, rounded up, minimum 1. */
function estimateReadingMinutes(markdown: string): number {
  const words = markdown.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function readDirectory(section: 'articles' | 'legal', locale: Locale): string[] {
  const directory = path.join(CONTENT_ROOT, section, locale);
  try {
    return readdirSync(directory).filter((file) => file.endsWith('.md'));
  } catch {
    return [];
  }
}

function readFile(section: 'articles' | 'legal', locale: Locale, fileName: string) {
  const raw = readFileSync(path.join(CONTENT_ROOT, section, locale, fileName), 'utf8');
  return matter(raw);
}

// ---------------------------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------------------------

/**
 * The publications are scholarly papers, published in Romanian.
 *
 * They quote the DSM-5, LeDoux, Spielberger and others from their Romanian editions; putting
 * those passages back into English would be a back-translation, not a quotation, and would
 * misattribute words to the sources. So where a language has no file of its own, the article
 * is served as it was published rather than paraphrased — which is also what the original
 * site did.
 */
function articleLocale(locale: Locale): Locale {
  return readDirectory('articles', locale).length > 0 ? locale : defaultLocale;
}

export function getArticles(locale: Locale): Article[] {
  const source = articleLocale(locale);

  return readDirectory('articles', source)
    .map((fileName) => {
      const { data, content } = readFile('articles', source, fileName);
      const frontmatter = data as Omit<Article, 'slug' | 'html' | 'readingMinutes'>;
      return {
        ...frontmatter,
        slug: fileName.replace(/\.md$/, ''),
        html: renderMarkdown(content),
        readingMinutes: estimateReadingMinutes(content),
      } satisfies Article;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(locale: Locale, slug: string): Article | undefined {
  return getArticles(locale).find((article) => article.slug === slug);
}

// ---------------------------------------------------------------------------------------------
// Legal pages
// ---------------------------------------------------------------------------------------------

export function getLegalPages(locale: Locale): LegalPage[] {
  return readDirectory('legal', locale)
    .map((fileName) => {
      const { data, content } = readFile('legal', locale, fileName);
      const frontmatter = data as Omit<LegalPage, 'slug' | 'html'>;
      return {
        ...frontmatter,
        slug: fileName.replace(/\.md$/, ''),
        html: renderMarkdown(content),
      } satisfies LegalPage;
    })
    .sort((a, b) => a.order - b.order);
}

export function getLegalPage(locale: Locale, slug: string): LegalPage | undefined {
  return getLegalPages(locale).find((page) => page.slug === slug);
}

// ---------------------------------------------------------------------------------------------
// Cross-language lookup
// ---------------------------------------------------------------------------------------------

/**
 * Given a document in one language, find the slug of the same document in every language —
 * so `hreflang` alternates and the language switcher point at the translation rather than
 * dumping the visitor back on the home page.
 */
export function slugsByLocale(
  section: 'articles' | 'legal',
  translationKey: string,
): Partial<Record<Locale, string>> {
  const result: Partial<Record<Locale, string>> = {};
  for (const locale of locales) {
    const documents = section === 'articles' ? getArticles(locale) : getLegalPages(locale);
    const match = documents.find((document) => document.translationKey === translationKey);
    if (match) result[locale] = match.slug;
  }
  return result;
}
