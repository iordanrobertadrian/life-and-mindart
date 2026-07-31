'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Logo } from '@/components/brand/logo';
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from '@/components/icons';
import { LanguageSwitcher } from '@/components/layout/language-switcher';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/i18n';
import type { SlugTranslations } from '@/lib/slug-map';

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface SiteHeaderProps {
  locale: Locale;
  nav: NavItem[];
  contactHref: string;
  labels: {
    contact: string;
    menu: string;
    close: string;
    language: string;
  };
  phone: { href: string; display: string };
  slugTranslations: SlugTranslations;
}

/**
 * The original site's menu, made to stay put: it is fixed to the top and carries the phone
 * number and a Contact button at every scroll position, on every device.
 */
export function SiteHeader({
  locale,
  nav,
  contactHref,
  labels,
  phone,
  slugTranslations,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  /**
   * The mobile panel is open only for the page it was opened on, so navigating anywhere
   * closes it without an effect that fires setState on every route change.
   */
  const [openedOnPath, setOpenedOnPath] = useState<string | null>(null);
  const menuOpen = openedOnPath === pathname;
  const setMenuOpen = (open: boolean) => setOpenedOnPath(open ? pathname : null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Trap the page behind the open panel and let Escape close it.
  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenedOnPath(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === pathname || (href !== '/' && href !== '/en' && pathname.startsWith(href + '/'));

  return (
    /*
      The bar is always tinted, never fully transparent. Two of the pages (the bioresonance
      workshop and the course) open on a dark plum band, and a transparent header put dark
      type on a dark background — the menu simply disappeared. It deepens on scroll instead.
    */
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-[background-color,box-shadow] duration-500 ease-(--ease-out-soft)',
        scrolled || menuOpen
          ? 'bg-cream/92 shadow-[0_1px_0_rgb(30_20_32/0.07)]'
          : 'bg-cream/75',
      )}
    >
      <Container className="flex h-20 items-center justify-between gap-6 lg:h-24">
        {/* No aria-label: the wordmark is visible text, and overriding it with a different
            accessible name breaks voice-control users saying "click Life and Mind Art". */}
        <Link href={locale === 'ro' ? '/' : '/en'} className="shrink-0">
          <Logo />
        </Link>

        {/* ---- Desktop navigation ---- */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label={labels.menu}>
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setOpenSubmenu(item.href)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  aria-expanded={openSubmenu === item.href}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-(--radius-pill) px-3.5 py-2 text-[0.9375rem] transition-colors duration-200',
                    isActive(item.href) ? 'text-plum-800' : 'text-ink-soft hover:text-plum-800',
                  )}
                >
                  {item.label}
                  <ChevronDownIcon
                    className={cn(
                      'h-3.5 w-3.5 transition-transform duration-300',
                      openSubmenu === item.href && 'rotate-180',
                    )}
                  />
                </Link>

                <div
                  className={cn(
                    'absolute top-full left-1/2 w-[20rem] -translate-x-1/2 pt-3 transition-[opacity,transform] duration-300 ease-(--ease-out-soft)',
                    openSubmenu === item.href
                      ? 'pointer-events-auto translate-y-0 opacity-100'
                      : 'pointer-events-none -translate-y-2 opacity-0',
                  )}
                >
                  <ul className="grain overflow-hidden rounded-(--radius-card) border border-plum-100 bg-cream p-2 shadow-(--shadow-lifted)">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-2xl px-4 py-3 text-[0.9375rem] font-medium text-plum-900 transition-colors duration-200 hover:bg-plum-50"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'rounded-(--radius-pill) px-3.5 py-2 text-[0.9375rem] transition-colors duration-200',
                  isActive(item.href) ? 'text-plum-800' : 'text-ink-soft hover:text-plum-800',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* ---- Actions ---- */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          {/* Between md and xl only the icon shows, so the link needs a name of its own. */}
          <a
            href={phone.href}
            aria-label={phone.display}
            className="hidden items-center gap-2 text-[0.9375rem] text-ink-soft transition-colors duration-200 hover:text-plum-800 md:inline-flex"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden xl:inline">{phone.display}</span>
          </a>

          {/*
            Wrapped rather than given `hidden sm:…` directly: both components set their own
            `display`, and two conflicting display utilities on one element resolve by
            stylesheet order, not by the order they are written here.
          */}
          <div className="hidden sm:block">
            <LanguageSwitcher
              locale={locale}
              label={labels.language}
              slugTranslations={slugTranslations}
            />
          </div>

          <div className="hidden sm:block">
            <Button href={contactHref} size="sm">
              {labels.contact}
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? labels.close : labels.menu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-(--radius-pill) border border-plum-900/12 text-plum-900 transition-colors duration-200 hover:bg-plum-50 lg:hidden"
          >
            {menuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* ---- Mobile panel ---- */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="grain max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-plum-100 bg-cream lg:hidden"
      >
        <Container className="py-6">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-plum-100/70 last:border-0">
                <Link
                  href={item.href}
                  className="flex items-center justify-between py-4 font-display text-2xl text-plum-900"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="-mt-1 mb-4 flex flex-col gap-1 pl-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-1.5 text-[0.9375rem] text-ink-soft">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <Button href={contactHref} size="lg">
              {labels.contact}
            </Button>
            <Button href={phone.href} variant="outline" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {phone.display}
            </Button>
          </div>

          <div className="mt-7 flex justify-center sm:hidden">
            <LanguageSwitcher
              locale={locale}
              label={labels.language}
              slugTranslations={slugTranslations}
            />
          </div>
        </Container>
      </div>
    </header>
  );
}
