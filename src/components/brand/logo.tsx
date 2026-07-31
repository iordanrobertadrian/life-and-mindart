import { cn } from '@/lib/cn';

/**
 * The brand mark, redrawn as vector.
 *
 * The original logo was a 200×200 raster with an ornate frame — it blurred at any size above
 * a favicon. This keeps the same two ideas (a symmetrical ornament, the plum-and-gold pair)
 * and rebuilds them as an outline mark that stays sharp everywhere, from a browser tab to a
 * printed card. The petal shape reads as both a leaf and an eye: life, and mind.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1" opacity=".28" />
      <path
        d="M24 8c6.2 5.2 9.3 10.5 9.3 16S30.2 34.8 24 40c-6.2-5.2-9.3-10.5-9.3-16S17.8 13.2 24 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M8 24c5.2-6.2 10.5-9.3 16-9.3s11.3 3.1 16 9.3c-4.7 6.2-10 9.3-16 9.3S13.2 30.2 8 24Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        opacity=".55"
      />
      <circle cx="24" cy="24" r="3.4" fill="currentColor" />
    </svg>
  );
}

interface LogoProps {
  /** `dark` for the plum footer and menu, `light` for the cream header. */
  tone?: 'light' | 'dark';
  className?: string;
}

export function Logo({ tone = 'light', className }: LogoProps) {
  const isDark = tone === 'dark';

  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <LogoMark className={cn('h-9 w-9 shrink-0', isDark ? 'text-gold-400' : 'text-plum-700')} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-display text-[0.95rem] tracking-[0.2em] uppercase',
            isDark ? 'text-cream' : 'text-plum-900',
          )}
        >
          Life &amp; Mind Art
        </span>
        <span
          className={cn(
            'mt-1.5 text-[0.5625rem] tracking-[0.22em] uppercase',
            isDark ? 'text-plum-300' : 'text-ink-muted',
          )}
        >
          Ceciu L. Ramona
        </span>
      </span>
    </span>
  );
}
