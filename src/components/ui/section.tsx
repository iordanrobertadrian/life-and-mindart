import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

const tones = {
  cream: 'bg-cream text-ink',
  sand: 'bg-sand text-ink',
  plum: 'bg-plum-950 text-plum-100',
  white: 'bg-white text-ink',
} as const;

const spacing = {
  normal: 'py-20 sm:py-28 lg:py-32',
  tight: 'py-14 sm:py-20',
  loose: 'py-24 sm:py-32 lg:py-40',
} as const;

interface SectionProps {
  id?: string;
  tone?: keyof typeof tones;
  space?: keyof typeof spacing;
  className?: string;
  children: ReactNode;
}

/** Every band on the page is a Section: it owns the background and the vertical rhythm. */
export function Section({ id, tone = 'cream', space = 'normal', className, children }: SectionProps) {
  return (
    <section id={id} className={cn('relative', tones[tone], spacing[space], className)}>
      {children}
    </section>
  );
}
