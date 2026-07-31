import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/cn';

const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-(--radius-pill) font-medium ' +
  'transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-(--ease-out-soft) ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-55';

const variants = {
  /** The one action that matters: booking a session. */
  primary:
    'bg-plum-800 text-cream shadow-(--shadow-soft) hover:bg-plum-700 hover:shadow-(--shadow-lifted) hover:-translate-y-0.5',
  /** Secondary action next to the primary one. */
  outline:
    'border border-plum-800/25 bg-transparent text-plum-900 hover:border-plum-800/60 hover:bg-plum-50 hover:-translate-y-0.5',
  /** For use on the dark plum bands. */
  inverse:
    'bg-gold-400 text-plum-950 shadow-(--shadow-soft) hover:bg-gold-300 hover:shadow-(--shadow-glow) hover:-translate-y-0.5',
  /** On dark, when it must not compete with the primary. */
  inverseOutline:
    'border border-plum-100/25 text-plum-100 hover:border-gold-400/70 hover:text-gold-300 hover:-translate-y-0.5',
  /** Inline, text-like. */
  ghost: 'text-plum-800 hover:text-plum-600 underline underline-offset-[6px] decoration-plum-300 hover:decoration-plum-600',
} as const;

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-[0.9375rem]',
  lg: 'px-8 py-4 text-base',
} as const;

interface CommonProps {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: ReactNode;
}

type AnchorProps = CommonProps & {
  href: string;
  /** Set for `tel:`, `mailto:` and off-site links. */
  external?: boolean;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = 'primary', size = 'md', className, children } = props;
  const classes = cn(base, variants[variant], variant === 'ghost' ? '' : sizes[size], className);

  if ('href' in props && props.href !== undefined) {
    const { href, external } = props;
    if (external || /^(https?:|tel:|mailto:)/.test(href)) {
      return (
        <a
          href={href}
          className={classes}
          {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as NativeButtonProps;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
