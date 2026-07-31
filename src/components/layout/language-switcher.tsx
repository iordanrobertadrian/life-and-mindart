'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/cn';
import { defaultLocale, isLocale, locales, path, toInternalSegment, type Locale } from '@/lib/i18n';
import type { SlugTranslations } from '@/lib/slug-map';

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  slugTranslations: SlugTranslations;
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * Switches language *without losing the page*.
 *
 * Because English URLs are localised (`/en/services/hypnotherapy`, not `/en/servicii/…`),
 * the switcher translates both the section segment and the slug. If it cannot find a
 * translation for the current document it falls back to that language's home page rather
 * than linking to a 404.
 */
export function LanguageSwitcher({
  locale,
  label,
  slugTranslations,
  tone = 'light',
  className,
}: LanguageSwitcherProps) {
  const pathname = usePathname();

  function hrefFor(target: Locale): string {
    if (target === locale) return pathname;

    const segments = pathname.split('/').filter(Boolean);
    const current: Locale = segments[0] && isLocale(segments[0]) ? segments[0] : defaultLocale;
    const rest = segments[0] && isLocale(segments[0]) ? segments.slice(1) : segments;

    const [publicSegment, slug] = rest;
    if (!publicSegment) return path(target);

    const section = toInternalSegment(current, publicSegment);
    if (!section) return path(target);
    if (!slug) return path(target, section);

    const translated = slugTranslations[section]?.find((entry) => entry[current] === slug)?.[target];
    return translated ? path(target, section, translated) : path(target, section);
  }

  const isDark = tone === 'dark';

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-(--radius-pill) p-0.5',
        isDark ? 'bg-plum-100/10' : 'bg-plum-900/6',
        className,
      )}
      role="group"
      aria-label={label}
    >
      {locales.map((target) => {
        const active = target === locale;
        return (
          <Link
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            aria-current={active ? 'true' : undefined}
            className={cn(
              'rounded-(--radius-pill) px-2.5 py-1 text-xs font-semibold tracking-[0.1em] uppercase transition-colors duration-200',
              active
                ? isDark
                  ? 'bg-gold-400 text-plum-950'
                  : 'bg-plum-800 text-cream'
                : isDark
                  ? 'text-plum-200 hover:text-cream'
                  : 'text-ink-muted hover:text-plum-800',
            )}
          >
            {target}
          </Link>
        );
      })}
    </div>
  );
}
