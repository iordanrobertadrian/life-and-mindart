import { site } from '@/content/site';
import { cn } from '@/lib/cn';
import type { Locale } from '@/lib/i18n';

/**
 * A typographic signature.
 *
 * The old site used a small raster banner here — 271px wide, a hard lavender background, and
 * blurry at any real size. Set in the display serif instead, it stays sharp everywhere,
 * weighs nothing, and is readable by a screen reader.
 */
export function Signature({ locale, className }: { locale: Locale; className?: string }) {
  return (
    <span className={cn('inline-flex flex-col', className)}>
      <span className="font-display text-[1.75rem] leading-none text-plum-800 italic">
        {site.practitioner.name}
      </span>
      <span className="mt-2 text-[0.6875rem] leading-relaxed tracking-[0.14em] text-ink-muted uppercase">
        {site.practitioner.jobTitle[locale]}
      </span>
    </span>
  );
}
