import { FlourishIcon, ShieldIcon } from '@/components/icons';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';

/**
 * "Sănătatea ta emoțională este prioritatea mea" — the accreditation statement.
 *
 * Set on the dark plum band because it is the one claim on the page that carries an outside
 * authority behind it, and it should not read as one more paragraph among many.
 */
export function Practice({ copy }: { copy: Dictionary['home']['practice'] }) {
  return (
    <Section tone="plum" className="grain">
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-25"
        style={{
          background:
            'radial-gradient(60% 60% at 15% 0%, rgba(201,169,97,0.22) 0%, rgba(201,169,97,0) 70%),' +
            'radial-gradient(50% 50% at 90% 100%, rgba(178,136,189,0.28) 0%, rgba(178,136,189,0) 70%)',
        }}
      />

      <Container className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <Reveal>
            <ShieldIcon className="h-7 w-7 text-gold-400" />
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 text-h2 text-cream">{copy.title}</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 font-display text-[1.125rem] tracking-wide text-gold-300">
              {copy.subtitle}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <FlourishIcon className="mt-8 h-3 w-20 text-gold-400/60" />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="space-y-6 text-[1.0625rem] leading-relaxed text-plum-200/90">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
