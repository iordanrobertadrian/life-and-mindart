import type { ReactNode } from 'react';

import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  lead?: string;
  /** Buttons, meta rows, anything that belongs under the lead. */
  children?: ReactNode;
  align?: 'left' | 'center';
}

/** The shared opening band for every page that is not the home page. */
export function PageHeader({ eyebrow, title, lead, children, align = 'left' }: PageHeaderProps) {
  const centered = align === 'center';

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(100% 70% at 10% 0%, #f6e6dc 0%, rgba(246,230,220,0) 58%),' +
            'radial-gradient(80% 60% at 92% 6%, #e9e3f0 0%, rgba(233,227,240,0) 62%),' +
            'linear-gradient(180deg, #fbf8f4 0%, #fbf8f4 100%)',
        }}
      />

      <Container>
        <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
          <Reveal immediate>
            <Eyebrow className={centered ? 'justify-center' : undefined}>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal immediate>
            <h1 className="mt-6 text-h1 text-plum-950">{title}</h1>
          </Reveal>
          {lead ? (
            <Reveal immediate>
              <p className="mt-6 text-lead text-ink-soft">{lead}</p>
            </Reveal>
          ) : null}
          {children ? <Reveal immediate>{children}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
