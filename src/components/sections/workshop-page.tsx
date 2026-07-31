import Image from 'next/image';

import {
  CalendarIcon,
  CheckIcon,
  ClockIcon,
  FacebookIcon,
  FlourishIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { Testimonials } from '@/components/sections/testimonials';
import { WorkshopForm } from '@/components/site/workshop-form';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';
import { site } from '@/content/site';
import { getTestimonials } from '@/content/testimonials';
import type { Locale } from '@/lib/i18n';

interface WorkshopPageProps {
  copy: Dictionary['workshop'];
  locale: Locale;
  privacyHref: string;
}

/**
 * The bioresonance workshop landing page.
 *
 * It is a sales page and it is left as one: the original's sequence — promise, what you leave
 * with, before/after, timetable, objections, who I am, proof, closing call, FAQ, form — is
 * preserved, and every string comes from the dictionary.
 *
 * The one thing not carried over is the row of four counters. The original animates them up
 * from zero and never states the target numbers, so there is nothing to display until the
 * practice supplies them.
 */
export function WorkshopPage({ copy, locale, privacyHref }: WorkshopPageProps) {
  const testimonials = getTestimonials(locale, 'workshop');

  return (
    <>
      {/* ---- Promise ---- */}
      <section className="grain relative isolate overflow-hidden bg-plum-950 pt-32 pb-20 text-plum-200 sm:pt-40 sm:pb-24">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              'radial-gradient(70% 60% at 12% 0%, rgba(201,169,97,0.28) 0%, rgba(201,169,97,0) 65%),' +
              'radial-gradient(60% 60% at 88% 100%, rgba(178,136,189,0.35) 0%, rgba(178,136,189,0) 70%)',
          }}
        />

        <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal immediate>
              <Eyebrow tone="gold">{copy.kicker}</Eyebrow>
            </Reveal>

            <Reveal immediate>
              <h1 className="mt-8 text-h1 text-cream">{copy.title}</h1>
            </Reveal>

            <Reveal immediate>
              <p className="mt-7 font-display text-[1.25rem] text-gold-300">{copy.subtitle}</p>
            </Reveal>

            <Reveal immediate>
              <p className="mt-6 inline-flex items-center gap-2.5 rounded-(--radius-pill) border border-plum-100/20 px-5 py-2.5 text-[0.875rem] text-plum-200">
                <CalendarIcon className="h-4 w-4 shrink-0 text-gold-400" />
                {copy.logistics}
              </p>
            </Reveal>

            <Reveal immediate>
              <div className="mt-8 space-y-3 text-lead text-plum-200/90">
                {copy.lead.map((line) => (
                  <p key={line.slice(0, 24)}>{line}</p>
                ))}
              </div>
            </Reveal>

            <Reveal immediate>
              <div className="mt-10">
                <Button href="#formular" variant="inverse" size="lg">
                  {copy.cta}
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal immediate>
            <div className="relative overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src="/images/biorezonanta-scio.jpg"
                alt={copy.imageAlt}
                width={1600}
                height={1280}
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---- What you leave with ---- */}
      <Section tone="cream">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <h2 className="text-h2 text-plum-950">{copy.takeaways.title}</h2>
              <ul className="mt-9 space-y-4">
                {copy.takeaways.items.map((item) => (
                  <li key={item.slice(0, 32)} className="flex items-start gap-3.5">
                    <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                    <span className="text-[1rem] leading-relaxed text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-sand p-8 sm:p-9">
              <h2 className="font-display text-h3 text-plum-950">{copy.beforeAfter.title}</h2>

              <div className="mt-7 grid gap-7 sm:grid-cols-2">
                <BeforeAfterColumn
                  label={copy.beforeAfter.beforeLabel}
                  items={copy.beforeAfter.before}
                  tone="before"
                />
                <BeforeAfterColumn
                  label={copy.beforeAfter.afterLabel}
                  items={copy.beforeAfter.after}
                  tone="after"
                />
              </div>

              <div className="mt-8 border-t border-plum-900/10 pt-7">
                {copy.beforeAfter.note.map((line) => (
                  <p
                    key={line.slice(0, 24)}
                    className="font-display text-[1.0625rem] leading-relaxed text-plum-800 first:mb-3"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- Timetable ---- */}
      <Section tone="plum" className="grain">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-h2 text-cream">{copy.programme.title}</h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="mt-6 inline-flex items-center gap-2.5 rounded-(--radius-pill) border border-gold-400/40 px-5 py-2.5 text-[0.875rem] text-gold-300">
                  <CheckIcon className="h-4 w-4 shrink-0" />
                  {copy.programme.seats}
                </p>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
                <Image
                  src="/images/workshop-participanti.jpg"
                  alt={copy.programme.imageAlt}
                  width={1600}
                  height={1067}
                  sizes="(max-width: 1024px) 92vw, 36vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-(--radius-panel) bg-plum-100/12 lg:grid-cols-3">
            {copy.programme.slots.map((slot, index) => (
              <Reveal as="li" key={slot.time} delay={index * 90} className="bg-plum-950 p-8 sm:p-9">
                <p className="inline-flex items-center gap-2.5 text-[0.8125rem] font-semibold tracking-[0.1em] text-gold-300">
                  <ClockIcon className="h-4 w-4 shrink-0" />
                  {slot.time}
                </p>
                <ul className="mt-6 space-y-3.5">
                  {slot.items.map((item) => (
                    <li key={item.slice(0, 32)} className="flex items-start gap-3">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                      <span className="text-[0.9375rem] leading-relaxed text-plum-200/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-12 text-center">
              <Button href="#formular" variant="inverse" size="lg">
                {copy.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- Objections ---- */}
      <Section tone="cream">
        <Container>
          <ul className="grid gap-5 lg:grid-cols-3 lg:gap-6">
            {copy.objections.map((objection, index) => (
              <Reveal as="li" key={objection.question} delay={index * 90}>
                <article className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-white/60 p-8 sm:p-9">
                  <FlourishIcon className="h-3 w-14 text-gold-500/70" />
                  <h2 className="mt-6 font-display text-[1.25rem] leading-snug text-plum-900">
                    {objection.question}
                  </h2>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {objection.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---- Who I am ---- */}
      <Section tone="sand" space="tight">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.62fr_1.38fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden
                className="absolute inset-x-[6%] top-[10%] bottom-0 -z-10 rounded-t-full"
                style={{
                  background:
                    'radial-gradient(70% 60% at 50% 40%, rgba(233,227,240,0.95) 0%, rgba(246,230,220,0.5) 55%, rgba(246,230,220,0) 78%)',
                }}
              />
              <Image
                src="/images/ramona-ceciu-halat.png"
                alt={copy.about.imageAlt}
                width={700}
                height={1186}
                sizes="(max-width: 1024px) 60vw, 20rem"
                className="h-[20rem] w-auto object-contain sm:h-[24rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div>
              <Eyebrow>{copy.about.title}</Eyebrow>
              <h2 className="mt-6 text-h2 text-plum-950">{copy.about.name}</h2>
              <p className="mt-6 text-lead text-ink-soft">{copy.about.role}</p>
              <FlourishIcon className="mt-8 h-3 w-20 text-gold-500/70" />
            </div>
          </Reveal>
        </Container>
      </Section>

      <Testimonials title={copy.testimonialsTitle} items={testimonials} tone="cream" />

      {/* ---- Closing call ---- */}
      <Section tone="plum" space="tight" className="grain">
        <Container width="narrow" className="relative text-center">
          <Reveal>
            <h2 className="text-h2 text-cream">{copy.closing.title}</h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-lead text-plum-200/85">{copy.closing.lead}</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-10">
              <Button href="#formular" variant="inverse" size="lg">
                {copy.cta}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- FAQ ---- */}
      <Section tone="cream" space="tight">
        <Container width="content">
          <Reveal>
            <h2 className="text-h2 text-plum-950">{copy.faqTitle}</h2>
          </Reveal>

          <dl className="mt-10 divide-y divide-plum-900/10 border-y border-plum-900/10">
            {copy.faq.map((entry) => (
              <div key={entry.question} className="py-6">
                <dt className="font-display text-[1.0625rem] leading-snug text-plum-900">
                  {entry.question}
                </dt>
                <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{entry.answer}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* ---- Enrolment form ---- */}
      <Section tone="sand" id="formular">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="grain rounded-(--radius-panel) bg-plum-950 p-9 text-plum-200 sm:p-10">
              <Eyebrow tone="gold">{copy.eyebrow}</Eyebrow>
              <h2 className="mt-6 font-display text-h3 text-cream">{copy.form.name}</h2>
              <p className="mt-2 font-display text-[1.125rem] text-gold-300">{copy.form.subtitle}</p>
              <p className="mt-6 text-[0.9375rem] leading-relaxed text-plum-200/85">{copy.form.note}</p>

              <h3 className="mt-9 border-t border-plum-100/12 pt-8 text-eyebrow font-semibold tracking-(--text-eyebrow--letter-spacing) text-gold-400 uppercase">
                {copy.contact.title}
              </h3>

              <ul className="mt-5 space-y-4 text-[0.9375rem]">
                <li className="flex items-start gap-3.5 leading-relaxed">
                  <MapPinIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  {copy.contact.address}
                </li>
                <li className="flex items-start gap-3.5">
                  <MailIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="text-cream transition-colors duration-200 hover:text-gold-300"
                  >
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <WhatsAppIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream transition-colors duration-200 hover:text-gold-300"
                  >
                    {copy.form.whatsappLabel}: {site.contact.phoneDisplayLong}
                  </a>
                </li>
                <li className="flex items-start gap-3.5">
                  <GlobeIcon className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold-400/85" />
                  {copy.contact.website}
                </li>
              </ul>

              <div className="mt-8 border-t border-plum-100/12 pt-7">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-plum-300 uppercase">
                  {copy.contact.followLabel}
                </p>
                <div className="mt-4 flex gap-2">
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-(--radius-pill) border border-plum-100/15 transition-colors duration-200 hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <FacebookIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={site.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-(--radius-pill) border border-plum-100/15 transition-colors duration-200 hover:border-gold-400/60 hover:text-gold-300"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-(--radius-card)">
                <Image
                  src="/images/harta-cabinet.png"
                  alt={copy.contact.mapAlt}
                  width={545}
                  height={319}
                  sizes="(max-width: 1024px) 92vw, 26rem"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <div className="rounded-(--radius-panel) border border-plum-900/8 bg-cream p-9 sm:p-10">
              <h2 className="font-display text-h3 text-plum-950">{copy.form.title}</h2>
              <div className="mt-8">
                <WorkshopForm locale={locale} copy={copy.form} privacyHref={privacyHref} />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function BeforeAfterColumn({
  label,
  items,
  tone,
}: {
  label: string;
  items: string[];
  tone: 'before' | 'after';
}) {
  const isAfter = tone === 'after';

  return (
    <div>
      <p
        className={`text-[0.6875rem] font-semibold tracking-[0.16em] uppercase ${
          isAfter ? 'text-gold-600' : 'text-ink-muted'
        }`}
      >
        {label}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.slice(0, 32)} className="flex items-start gap-3">
            {isAfter ? (
              <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
            ) : (
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-plum-300" />
            )}
            <span
              className={`text-[0.9375rem] leading-relaxed ${
                isAfter ? 'text-ink-soft' : 'text-ink-muted'
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
