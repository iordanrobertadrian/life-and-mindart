'use client';

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from 'react';

interface RevealProps {
  as?: ElementType;
  /** Stagger, in milliseconds. */
  delay?: number;
  /**
   * Render visible immediately, with no entrance animation.
   *
   * Use this for anything in the first viewport. Fading in content that is *already* on screen
   * when the page loads reads as a flash, and it pushes Largest Contentful Paint out by the
   * whole hydrate-plus-transition time — which is exactly the metric this rebuild exists to fix.
   */
  immediate?: boolean;
  className?: string;
  children: ReactNode;
}

/**
 * Fades content up as it scrolls into view.
 *
 * Deliberately hand-rolled instead of pulling in an animation library: it is one observer,
 * a few bytes, and it degrades to fully visible content when JavaScript is off or when the
 * visitor prefers reduced motion — both handled by media queries in `globals.css`, so the
 * hidden state is never applied unless something can undo it.
 */
export function Reveal({ as: Tag = 'div', delay = 0, immediate, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || immediate) return;

    if (typeof IntersectionObserver === 'undefined') {
      element.dataset.visible = 'true';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          element.dataset.visible = 'true';
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  if (immediate) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={delay ? ({ '--reveal-delay': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}
