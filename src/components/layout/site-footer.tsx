import Link from 'next/link';

import { Logo } from '@/components/brand/logo';
import { FacebookIcon, FlourishIcon, MailIcon, MapPinIcon, PhoneIcon } from '@/components/icons';
import { CookiePreferencesButton } from '@/components/site/cookie-consent';
import { Container } from '@/components/ui/container';
import { site } from '@/content/site';
import { getDictionary } from '@/lib/dictionary';
import { path, type Locale } from '@/lib/i18n';
import { getLegalPages } from '@/lib/content';

/**
 * The footer carries the original site's own menu — Home, About, Servicii, Evenimente,
 * Publicații, Politica de confidențialitate — its three contact lines, and its copyright
 * notice, kept with the "lideandmindart.com" spelling it was published with. Next to it
 * sits the build credit, the only line here that is not the client's own.
 */
export function SiteFooter({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const legalPages = getLegalPages(locale);
  const privacyPage = legalPages.find((page) => page.translationKey === 'privacy');

  const menu = [
    { label: dict.nav.home, href: path(locale) },
    { label: dict.nav.about, href: path(locale, 'despre') },
    { label: dict.nav.services, href: path(locale, 'servicii') },
    { label: dict.nav.events, href: path(locale, 'evenimente') },
    { label: dict.nav.publications, href: path(locale, 'publicatii') },
    ...(privacyPage
      ? [{ label: dict.nav.privacy, href: path(locale, 'legal', privacyPage.slug) }]
      : []),
  ];

  return (
    <footer className="grain relative bg-plum-950 text-plum-200">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="max-w-sm">
            <Logo tone="dark" />
            <FlourishIcon className="mt-7 h-3 w-16 text-gold-400/60" />
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-7 inline-flex h-10 w-10 items-center justify-center rounded-(--radius-pill) border border-plum-100/15 text-plum-200 transition-colors duration-200 hover:border-gold-400/60 hover:text-gold-300"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Menu */}
          <FooterColumn title={dict.footer.menuTitle}>
            {menu.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-plum-200/85 transition-colors duration-200 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          {/* Contact */}
          <FooterColumn title={dict.footer.contactTitle}>
            <li className="flex items-start gap-3 text-sm text-plum-200/85">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
              {dict.footer.address}
            </li>
            <li>
              <a
                href={`mailto:${site.contact.email}`}
                className="flex items-start gap-3 text-sm text-plum-200/85 transition-colors duration-200 hover:text-cream"
              >
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                {site.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${site.contact.phone}`}
                className="flex items-start gap-3 text-sm text-plum-200/85 transition-colors duration-200 hover:text-cream"
              >
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400/80" />
                {site.contact.phone}
              </a>
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-plum-100/10 pt-8 text-xs text-plum-300/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {dict.footer.copyright} | {dict.footer.credit}{' '}
            <a
              href={site.builder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-plum-200/80 underline-offset-4 transition-colors duration-200 hover:text-gold-300 hover:underline"
            >
              {site.builder.name}
            </a>
          </p>
          <CookiePreferencesButton label={dict.cookies.manage} />
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-sans text-eyebrow font-semibold tracking-(--text-eyebrow--letter-spacing) text-gold-400 uppercase">
        {title}
      </h2>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}
