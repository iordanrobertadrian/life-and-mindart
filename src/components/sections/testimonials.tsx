import { QuoteMarkIcon, StarIcon } from '@/components/icons';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { cn } from '@/lib/cn';
import type { TestimonialCopy } from '@/content/testimonials';

interface TestimonialsProps {
  title: string;
  lead?: string;
  eyebrow?: string;
  items: (TestimonialCopy & { id: string })[];
  tone?: 'cream' | 'sand' | 'plum';
}

const RATING = 5;

/**
 * The published reviews.
 *
 * The rating is set once above the grid, as the section's own score, and again on each card,
 * because a review shown without its stars reads as a pull quote instead.
 *
 * No avatars: there are no photographs of these six people, and a stock portrait beside a
 * real name would be a small lie.
 */
export function Testimonials({ title, lead, eyebrow, items, tone = 'sand' }: TestimonialsProps) {
  const dark = tone === 'plum';

  return (
    <Section tone={tone} className={dark ? 'grain' : undefined}>
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <Eyebrow tone={dark ? 'gold' : 'plum'}>{eyebrow}</Eyebrow>
            </Reveal>
          ) : null}

          <Reveal delay={80}>
            <h2 className={cn('mt-6 text-h2', dark ? 'text-cream' : 'text-plum-950')}>{title}</h2>
          </Reveal>

          {lead ? (
            <Reveal delay={140}>
              <p className={cn('mt-5 text-lead', dark ? 'text-plum-200/85' : 'text-ink-soft')}>{lead}</p>
            </Reveal>
          ) : null}

          <Reveal delay={180}>
            <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2">
              <Stars tone={tone} size="lg" />
              <span
                className={cn(
                  'text-[0.9375rem] font-medium',
                  dark ? 'text-plum-200/90' : 'text-ink-soft',
                )}
              >
                {RATING.toFixed(1)}
                <span className={dark ? 'text-plum-300/70' : 'text-ink-muted'}> / 5</span>
              </span>
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {items.map((item, index) => (
            <Reveal as="li" key={item.id} delay={(index % 3) * 90}>
              <figure
                className={cn(
                  'group relative flex h-full flex-col overflow-hidden rounded-(--radius-panel) border p-8 sm:p-9',
                  'transition-[transform,box-shadow,border-color] duration-500 ease-(--ease-out-soft)',
                  'hover:-translate-y-1',
                  dark
                    ? 'border-plum-100/12 bg-plum-900/40 hover:border-gold-400/40'
                    : 'border-plum-900/8 bg-cream shadow-(--shadow-soft) hover:border-gold-400/50 hover:shadow-(--shadow-lifted)',
                )}
              >
                {/* Stars lead, with a small quotation mark closing the row on the right.
                    Kept small and gold: an oversized watermark behind the text competed with
                    the stars and clipped against the card's corner. */}
                <div className="flex items-start justify-between gap-4">
                  <Stars tone={tone} />
                  <QuoteMarkIcon
                    className={cn('h-5 w-auto shrink-0', dark ? 'text-gold-400/30' : 'text-gold-400/45')}
                  />
                </div>

                <blockquote
                  className={cn(
                    'mt-6 text-[0.9375rem] leading-relaxed',
                    dark ? 'text-plum-200/90' : 'text-ink-soft',
                  )}
                >
                  {item.quote}
                </blockquote>

                <figcaption
                  className={cn(
                    'mt-auto border-t pt-6',
                    dark ? 'border-plum-100/12' : 'border-plum-900/8',
                  )}
                >
                  <span
                    className={cn(
                      'block font-display text-[1.0625rem] leading-snug',
                      dark ? 'text-cream' : 'text-plum-900',
                    )}
                  >
                    {item.attribution}
                  </span>
                  {/* Four of the six second lines are the theme's unfilled "Designation"
                      placeholder. The name already carries the profession, so the line is
                      only printed where somebody actually wrote something into it. */}
                  {item.role && item.role !== 'Designation' ? (
                    <span
                      className={cn(
                        'mt-1.5 block text-[0.6875rem] tracking-[0.12em] uppercase',
                        dark ? 'text-plum-300/70' : 'text-ink-muted',
                      )}
                    >
                      {item.role}
                    </span>
                  ) : null}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

function Stars({ tone, size = 'md' }: { tone: 'cream' | 'sand' | 'plum'; size?: 'md' | 'lg' }) {
  return (
    <span
      className={cn('inline-flex shrink-0', size === 'lg' ? 'gap-1.5' : 'gap-1')}
      role="img"
      aria-label={`${RATING} / 5`}
    >
      {Array.from({ length: RATING }, (_, index) => (
        <StarIcon
          key={index}
          className={cn(
            size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
            tone === 'plum' ? 'text-gold-400' : 'text-gold-500',
          )}
        />
      ))}
    </span>
  );
}
