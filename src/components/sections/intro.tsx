import Image from 'next/image';

import { Signature } from '@/components/brand/signature';
import { FlourishIcon } from '@/components/icons';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';
import type { Locale } from '@/lib/i18n';

interface IntroProps {
  copy: Dictionary['home']['intro'];
  imageAlt: string;
  locale: Locale;
}

/**
 * The biography and the invitation that follows it, as one continuous passage.
 *
 * The original ran this as a single wall of small justified type; here it keeps every word
 * but gets a reading measure, and the invitation is lifted out because it is the one place
 * on the page where she speaks directly to the reader.
 */
export function Intro({ copy, imageAlt, locale }: IntroProps) {
  return (
    <Section tone="cream" space="tight">
      <Container className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        {/* The photograph leads on the left: the hero above it already ends on a portrait at
            the right, and two pictures stacked down the same edge read as one column of
            images with the text pushed aside. */}
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative mx-auto max-w-sm lg:max-w-none">
            <div
              aria-hidden
              className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] border border-gold-400/45 sm:-translate-x-4 sm:translate-y-4"
            />
            {/*
              The source is a landscape photograph of the consulting room. A tall crop of it
              throws most of the room away and leaves her off-centre, so the box keeps the
              picture's own proportions and simply trims the empty desk on the left.
            */}
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src="/images/ramona-ceciu-cabinet.jpg"
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 38vw"
                className="object-cover object-[64%_38%]"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal delay={90}>
            <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 border-l-2 border-gold-400 pl-6 sm:pl-8">
              <FlourishIcon className="h-3 w-16 text-gold-500/70" />
              <p className="mt-5 font-display text-[1.1875rem] leading-relaxed text-plum-800 sm:text-[1.3125rem]">
                {copy.invitation}
              </p>
              <Signature locale={locale} className="mt-7" />
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
