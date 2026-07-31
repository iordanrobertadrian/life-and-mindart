import { CheckIcon } from '@/components/icons';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';

/** "Informații — Competențe principale în:" and the nine lines that follow it. */
export function Competences({ copy }: { copy: Dictionary['home']['competences'] }) {
  return (
    <Section tone="cream">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow>{copy.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-6 text-h2 text-plum-950">{copy.title}</h2>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-5 sm:grid-cols-2 lg:mt-14">
          {copy.items.map((item, index) => (
            <Reveal as="li" key={item} delay={(index % 2) * 70} className="flex items-start gap-3.5">
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
              <span className="text-[1rem] leading-relaxed text-ink-soft">{item}</span>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
