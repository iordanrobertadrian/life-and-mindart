import Image from 'next/image';
import Link from 'next/link';

import { ArrowRightIcon } from '@/components/icons';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { ServiceCopy } from '@/content/services';
import { cn } from '@/lib/cn';
import { path, type Locale } from '@/lib/i18n';

interface ServicesGridProps {
  services: ServiceCopy[];
  locale: Locale;
  heading?: { eyebrow: string; title: string };
  readMore: string;
  tone?: 'cream' | 'sand';
}

/**
 * The five service pages as a picture index.
 *
 * The cards carry only the service's own name — the original site's service list is exactly
 * that, five names, and there is no summary line anywhere on it to borrow.
 */
export function ServicesGrid({ services, locale, heading, readMore, tone = 'sand' }: ServicesGridProps) {
  /* Headings must not skip a level. With a section heading the cards sit under an <h2>;
     without one (the Services page, where the <h1> is the page title) they *are* the <h2>. */
  const CardTitle = heading ? 'h3' : 'h2';

  return (
    <Section tone={tone}>
      <Container>
        {heading ? (
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{heading.eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-h2 text-plum-950">{heading.title}</h2>
            </Reveal>
          </div>
        ) : null}

        <ul className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', heading && 'mt-14 lg:mt-16')}>
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={(index % 3) * 80}>
              <Link
                href={path(locale, 'servicii', service.slug)}
                className={cn(
                  'group flex h-full flex-col overflow-hidden rounded-(--radius-panel) border border-plum-900/8 bg-cream',
                  'transition-[transform,box-shadow,border-color] duration-500 ease-(--ease-out-soft)',
                  'hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-(--shadow-lifted)',
                )}
              >
                <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-(--ease-out-soft) group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-plum-950/10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7 sm:p-8">
                  <CardTitle className="font-display text-[1.3125rem] leading-snug text-plum-900">
                    {service.name}
                  </CardTitle>
                  <span className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-medium text-plum-700 transition-colors duration-200 group-hover:text-plum-900">
                    {readMore}
                    <ArrowRightIcon className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
