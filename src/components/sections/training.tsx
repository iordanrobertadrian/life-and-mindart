import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';

/**
 * The course list, in the three columns the original page used.
 *
 * There are forty-five entries. On a phone they become one column, in the same reading
 * order; the columns are a layout, not three separate categories, so they carry no headings
 * of their own — the original had none either.
 */
export function Training({ copy }: { copy: Dictionary['home']['training'] }) {
  return (
    <Section tone="sand" id="pregatire">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-h2 text-plum-950">{copy.title}</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-lead text-ink-soft">{copy.lead}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {copy.columns.map((column, index) => (
            <Reveal key={column[0]} delay={index * 90}>
              <ul className="space-y-3">
                {column.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                    <span className="text-[0.9375rem] leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
