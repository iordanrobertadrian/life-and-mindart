import { site } from '@/content/site';
import { getServices } from '@/content/services';
import { getDictionary } from '@/lib/dictionary';
import { localeNames, path, type Locale } from '@/lib/i18n';

/**
 * Structured data.
 *
 * Google needs to be told, in machine-readable form, that this is a psychology practice with
 * a real practitioner, an address, a phone number and a service catalogue — otherwise the
 * search result is just a blue link. The old site had none of this.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own typed content, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const PRACTICE_ID = `${site.url}/#practice`;
const PERSON_ID = `${site.url}/#practitioner`;

export function practiceSchema(locale: Locale) {
  const dict = getDictionary(locale);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': PERSON_ID,
        name: site.practitioner.name,
        honorificSuffix: site.practitioner.honorific,
        jobTitle: site.practitioner.jobTitle[locale],
        url: `${site.url}${path(locale, 'despre')}`,
        image: `${site.url}/images/ramona-ceciu-halat.png`,
        knowsLanguage: ['ro', 'en', 'fr', 'es', 'it'],
        worksFor: { '@id': PRACTICE_ID },
      },
      {
        '@type': ['MedicalBusiness', 'Psychiatric', 'ProfessionalService'],
        '@id': PRACTICE_ID,
        name: site.name,
        legalName: site.legalName,
        url: `${site.url}${path(locale)}`,
        description: dict.home.meta.description,
        image: `${site.url}/opengraph-image`,
        telephone: site.contact.phone,
        email: site.contact.email,
        priceRange: '€€',
        founder: { '@id': PERSON_ID },
        employee: { '@id': PERSON_ID },
        address: {
          '@type': 'PostalAddress',
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        areaServed: [
          { '@type': 'City', name: 'București' },
          { '@type': 'Country', name: site.address.countryName[locale] },
        ],
        availableLanguage: ['ro', 'en', 'fr', 'es', 'it'],
        sameAs: [site.social.facebook],
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: dict.nav.services,
          itemListElement: getServices(locale).map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.meta.description,
              url: `${site.url}${path(locale, 'servicii', service.slug)}`,
              provider: { '@id': PRACTICE_ID },
            },
          })),
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: localeNames[locale].htmlLang,
        publisher: { '@id': PRACTICE_ID },
      },
    ],
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };
}

export function articleSchema(article: {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  url: string;
  locale: Locale;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ScholarlyArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    inLanguage: localeNames[article.locale].htmlLang,
    image: `${site.url}${article.image}`,
    mainEntityOfPage: `${site.url}${article.url}`,
    author: { '@id': PERSON_ID },
    publisher: { '@id': PRACTICE_ID },
  };
}
