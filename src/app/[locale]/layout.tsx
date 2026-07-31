import type { Metadata, Viewport } from 'next';
import { Fraunces, Geist } from 'next/font/google';
import { notFound } from 'next/navigation';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader, type NavItem } from '@/components/layout/site-header';
import { Analytics } from '@/components/site/analytics';
import { CookieConsent } from '@/components/site/cookie-consent';
import { JsonLd, practiceSchema } from '@/components/site/json-ld';
import { programmeSlug } from '@/content/programmes';
import { getServices } from '@/content/services';
import { site } from '@/content/site';
import { getLegalPages } from '@/lib/content';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, localeNames, locales, path, type Locale } from '@/lib/i18n';
import { buildSlugTranslations } from '@/lib/slug-map';

import '../globals.css';

/**
 * Fonts are self-hosted by `next/font` — downloaded at build time and served from our own
 * origin. This is the direct fix for the audit's single worst finding: the old site requested
 * its Poppins files over plain HTTP from an HTTPS page, so browsers blocked 65 resources on
 * every visit and fell back to system fonts.
 */
const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-fraunces',
  // Headlines only — one weight is enough, and it keeps the file a fraction of the size that
  // the full variable font (with its SOFT, WONK and optical-size axes) would cost.
  weight: ['400'],
  // Not preloaded on purpose: the largest element on first paint is body copy, so the body
  // face and the hero image get the bandwidth first. Fraunces arrives a moment later.
  preload: false,
  // Naming Georgia first lets `next/font` compute a size-adjusted fallback from metrics that
  // are actually close to Fraunces, so headings barely move when the real face swaps in.
  fallback: ['Georgia', 'Times New Roman', 'serif'],
});

/**
 * Geist rather than Inter for body copy: it carries the Romanian diacritics we need in a
 * third of the bytes (45 KB against 130 KB for latin + latin-ext), and those bytes sit
 * directly on the critical path to Largest Contentful Paint.
 */
const geist = Geist({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-sans-brand',
  weight: ['400', '500', '600'],
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1e1420' },
  ],
  colorScheme: 'light',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: `${dict.home.meta.title} | ${site.name}`,
      template: `%s | ${site.name}`,
    },
    description: dict.home.meta.description,
    applicationName: site.name,
    authors: [{ name: site.practitioner.fullName }],
    creator: site.practitioner.fullName,
    publisher: site.legalName,
    formatDetection: { telephone: true, email: true, address: false },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    manifest: '/manifest.webmanifest',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;

  const dict = getDictionary(locale);
  const services = getServices(locale);
  const legalPages = getLegalPages(locale);
  const slugTranslations = buildSlugTranslations();

  /* The original site's own menu: Home, Consultanță, Evenimente, Publicații, Contact. The
     five service pages hang under Consultanță, as they did there. */
  const nav: NavItem[] = [
    { label: dict.nav.home, href: path(locale) },
    {
      label: dict.nav.services,
      href: path(locale, 'servicii'),
      children: services.map((service) => ({
        label: service.name,
        href: path(locale, 'servicii', service.slug),
      })),
    },
    {
      label: dict.nav.events,
      href: path(locale, 'evenimente'),
      /* The order the old site listed them in: the workshop, the course, then the offers. */
      children: [
        {
          label: dict.workshop.eyebrow,
          href: path(locale, 'evenimente', programmeSlug('workshop', locale)),
        },
        {
          label: dict.course.eyebrow,
          href: path(locale, 'evenimente', programmeSlug('course', locale)),
        },
        { label: dict.events.title, href: path(locale, 'evenimente') },
      ],
    },
    { label: dict.nav.publications, href: path(locale, 'publicatii') },
    { label: dict.nav.contact, href: path(locale, 'contact') },
  ];

  /* The original site published a single legal page. Its section on tracking data and
     cookies is where the banner sends people. */
  const privacyPolicy = legalPages.find((page) => page.translationKey === 'privacy');

  return (
    <html lang={localeNames[locale].htmlLang} className={`${fraunces.variable} ${geist.variable}`}>
      <body className="grain min-h-dvh antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-(--radius-pill) focus:bg-plum-900 focus:px-5 focus:py-3 focus:text-sm focus:text-cream"
        >
          {dict.nav.skipToContent}
        </a>

        <SiteHeader
          locale={locale}
          nav={nav}
          contactHref={path(locale, 'contact')}
          labels={{
            contact: dict.actions.contact,
            menu: dict.nav.menu,
            close: dict.nav.close,
            language: dict.nav.languageLabel,
          }}
          phone={{ href: `tel:${site.contact.phone}`, display: site.contact.phoneDisplay }}
          slugTranslations={slugTranslations}
        />

        <main id="main">{children}</main>

        <SiteFooter locale={locale} />

        <CookieConsent
          copy={dict.cookies}
          policyHref={privacyPolicy ? path(locale, 'legal', privacyPolicy.slug) : path(locale)}
        />
        <Analytics measurementId={site.analytics.gaMeasurementId} />

        <JsonLd data={practiceSchema(locale)} />
      </body>
    </html>
  );
}
