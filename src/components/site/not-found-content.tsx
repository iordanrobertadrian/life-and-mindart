'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FlourishIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { defaultLocale, isLocale, type Locale } from '@/lib/i18n';

export interface NotFoundCopy {
  title: string;
  cta: string;
  contact: string;
  homeHref: string;
  contactHref: string;
  services: { name: string; href: string }[];
}

export function NotFoundContent({ copy }: { copy: Record<Locale, NotFoundCopy> }) {
  const pathname = usePathname();
  const first = pathname.split('/').filter(Boolean)[0];
  const locale: Locale = first && isLocale(first) ? first : defaultLocale;
  const text = copy[locale];

  return (
    <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(90% 70% at 15% 0%, #f6e6dc 0%, rgba(246,230,220,0) 60%),' +
            'linear-gradient(180deg, #fbf8f4 0%, #f3ebe1 100%)',
        }}
      />

      <Container width="narrow" className="text-center">
        <FlourishIcon className="mx-auto h-4 w-24 text-gold-500/70" />
        <p className="mt-8 font-display text-6xl text-plum-200">404</p>
        <h1 className="mt-4 text-h2 text-plum-950">{text.title}</h1>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={text.homeHref} size="lg">
            {text.cta}
          </Button>
          <Button href={text.contactHref} variant="outline" size="lg">
            {text.contact}
          </Button>
        </div>

        <ul className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {text.services.map((service) => (
            <li key={service.href}>
              <Link
                href={service.href}
                className="text-sm text-ink-muted underline decoration-plum-200 underline-offset-4 transition-colors duration-200 hover:text-plum-800"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
