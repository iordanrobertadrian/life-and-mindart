import { NotFoundContent, type NotFoundCopy } from '@/components/site/not-found-content';
import { getServices } from '@/content/services';
import { getDictionary } from '@/lib/dictionary';
import { locales, path, type Locale } from '@/lib/i18n';

/**
 * `not-found.tsx` cannot read route params, so the copy for both languages is prepared here
 * on the server and the (tiny) client component below picks the right one from the URL. That
 * keeps a visitor who mistypes an English URL from being answered in Romanian.
 */
export default function NotFound() {
  const copy = Object.fromEntries(
    locales.map((locale) => {
      const dict = getDictionary(locale);
      return [
        locale,
        {
          title: dict.notFound.title,
          cta: dict.notFound.cta,
          contact: dict.actions.contact,
          homeHref: path(locale),
          contactHref: path(locale, 'contact'),
          services: getServices(locale).map((service) => ({
            name: service.name,
            href: path(locale, 'servicii', service.slug),
          })),
        },
      ];
    }),
  ) as Record<Locale, NotFoundCopy>;

  return <NotFoundContent copy={copy} />;
}
