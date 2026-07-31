import Image from 'next/image';

import { FlourishIcon, PhoneIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/content/site';
import type { Dictionary } from '@/content/dictionary';

interface HeroProps {
  copy: Dictionary['home']['hero'];
  actions: Dictionary['actions'];
  contactHref: string;
}

/**
 * The welcome, exactly as the original site says it — and the portrait.
 *
 * The photograph is a cut-out on a transparent background, so it is not framed in a box:
 * she stands directly on the warm gradient, with a soft disc behind her instead of a border.
 */
export function Hero({ copy, actions, contactHref }: HeroProps) {
  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      {/* Warm gradient field — calm before a single word is read. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(120% 80% at 12% 0%, #f6e6dc 0%, rgba(246,230,220,0) 55%),' +
            'radial-gradient(90% 70% at 88% 8%, #e9e3f0 0%, rgba(233,227,240,0) 60%),' +
            'linear-gradient(180deg, #fbf8f4 0%, #fbf8f4 62%, #f3ebe1 100%)',
        }}
      />

      <Container className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        {/* ---- Message ---- */}
        <div className="max-w-2xl pb-14 sm:pb-16 lg:pb-24">
          <Reveal immediate>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </Reveal>

          <Reveal immediate>
            <h1 className="mt-7 text-display text-plum-950">{copy.title}</h1>
          </Reveal>

          <Reveal immediate>
            <p className="mt-7 max-w-xl font-display text-[clamp(1.25rem,0.95rem+1.1vw,1.75rem)] leading-snug text-plum-800 italic">
              {copy.lead}
            </p>
          </Reveal>

          <Reveal immediate>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={contactHref} size="lg">
                {actions.contact}
              </Button>
              <Button href={`tel:${site.contact.phone}`} variant="outline" size="lg">
                <PhoneIcon className="h-4 w-4" />
                {site.contact.phoneDisplay}
              </Button>
            </div>
          </Reveal>

          <Reveal immediate>
            <FlourishIcon className="mt-10 h-3 w-20 text-gold-500/70" />
          </Reveal>
        </div>

        {/* ---- Portrait ----
             The cut-out has no background of its own, so it is not framed in a box: she
             stands directly on the gradient, on a soft disc, and the *height* is what is
             constrained — otherwise a tall portrait sets the height of the whole first screen. */}
        <Reveal immediate className="relative self-end">
          <div className="relative mx-auto w-fit">
            <div
              aria-hidden
              className="absolute inset-x-[4%] top-[10%] bottom-0 -z-10 rounded-t-full"
              style={{
                background:
                  'radial-gradient(70% 60% at 50% 40%, rgba(233,227,240,0.95) 0%, rgba(246,230,220,0.5) 55%, rgba(246,230,220,0) 78%)',
              }}
            />
            <Image
              src="/images/ramona-ceciu-halat.png"
              alt={copy.imageAlt}
              width={604}
              height={1024}
              priority
              sizes="(max-width: 640px) 62vw, (max-width: 1024px) 20rem, 26rem"
              className="h-[19rem] w-auto object-contain object-bottom sm:h-[24rem] lg:h-[32rem]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
