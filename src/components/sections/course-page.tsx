import Image from 'next/image';

import { CheckIcon, FlourishIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons';
import { Testimonials } from '@/components/sections/testimonials';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import type { Dictionary } from '@/content/dictionary';
import { site } from '@/content/site';
import { getTestimonials } from '@/content/testimonials';
import type { Locale } from '@/lib/i18n';

/**
 * The bioresonance course page — a transcription of the original, in its order: the module
 * timetable, who teaches it, what the training promises, the seven benefits, the explanation
 * of the method, the two levels, the course format, the testimonials and the questions.
 *
 * The seven benefits and the six method questions are rendered open rather than as
 * accordions: on the original they are tabs, and a printed page of text is easier to read —
 * and to find in a search engine — than seven closed drawers.
 */
export function CoursePage({ copy, locale }: { copy: Dictionary['course']; locale: Locale }) {
  const testimonials = getTestimonials(locale, 'course');

  return (
    <>
      {/* ---- Title, portrait and module timetable ---- */}
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

        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal immediate>
                <Eyebrow tone="gold">{copy.eyebrow}</Eyebrow>
              </Reveal>
              <Reveal immediate>
                <h1 className="mt-8 text-h1 text-cream">{copy.title}</h1>
              </Reveal>
              <Reveal immediate>
                <p className="mt-7 font-display text-[1.25rem] text-gold-300">{copy.subtitle}</p>
              </Reveal>
              <Reveal immediate>
                <p className="mt-8 border-l-2 border-gold-400 pl-6 font-display text-[1.375rem] leading-snug text-cream">
                  {copy.motto}
                </p>
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
          </div>

          <h2 className="sr-only">{copy.modulesTitle}</h2>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-(--radius-panel) bg-plum-100/12 sm:grid-cols-2 lg:grid-cols-4">
            {copy.modules.map((module, index) => (
              <Reveal as="li" key={module.label} delay={index * 80} className="bg-plum-950 p-7">
                <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-gold-400 uppercase">
                  {module.label}
                </p>
                <p className="mt-3 font-display text-[1.1875rem] text-cream">{module.day}</p>
                <p className="mt-1.5 text-[0.875rem] text-plum-200/80">{module.date}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---- Who teaches it ---- */}
      <Section tone="cream" space="tight">
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

      {/* ---- What the training promises ---- */}
      <Section tone="sand">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-h2 text-plum-950">{copy.promise.title}</h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-5 text-lead text-ink-soft">{copy.promise.lead}</p>
            </Reveal>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {copy.promise.items.map((item, index) => (
              <Reveal as="li" key={item.title} delay={(index % 3) * 80}>
                <article className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-cream p-8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-(--radius-pill) bg-plum-50 font-display text-[0.9375rem] text-plum-700 ring-1 ring-plum-900/8">
                    {index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-[1.1875rem] leading-snug text-plum-900">
                    {item.title}
                  </h3>
                  <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---- The seven benefits ---- */}
      <Section tone="cream">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-h2 text-plum-950">{copy.benefitsTitle}</h2>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {copy.benefits.map((benefit, index) => (
              <Reveal
                as="li"
                key={benefit.title}
                delay={(index % 2) * 80}
                className={index === 0 ? 'sm:col-span-2' : undefined}
              >
                <article className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-white/60 p-8 sm:p-9">
                  <h3 className="inline-flex items-center gap-2.5 font-display text-[1.25rem] text-plum-900">
                    <CheckIcon className="h-4 w-4 shrink-0 text-gold-600" />
                    {benefit.title}
                  </h3>
                  <div className="mt-4 space-y-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {benefit.paragraphs.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      {/* ---- How the method works ---- */}
      <Section tone="plum" className="grain">
        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow tone="gold">{copy.scienceEyebrow}</Eyebrow>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-h2 text-cream">{copy.scienceTitle}</h2>
              </Reveal>
              <Reveal delay={130}>
                <p className="mt-6 font-display text-[1.1875rem] leading-snug text-gold-300">
                  {copy.scienceQuestion}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-plum-200/90">
                  {copy.scienceParagraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
                <Image
                  src="/images/biorezonanta-adn.jpg"
                  alt={copy.scienceImageAlt}
                  width={1600}
                  height={890}
                  sizes="(max-width: 1024px) 92vw, 44vw"
                  className="h-auto w-full"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-16">
            <Reveal>
              <h3 className="font-display text-h3 text-cream">{copy.scienceMoreTitle}</h3>
            </Reveal>

            <ul className="mt-9 grid gap-5 lg:grid-cols-2 lg:gap-6">
              {copy.scienceMore.map((entry, index) => (
                <Reveal as="li" key={entry.question} delay={(index % 2) * 80}>
                  <article className="h-full rounded-(--radius-panel) border border-plum-100/12 bg-plum-900/40 p-8">
                    <h4 className="font-display text-[1.125rem] leading-snug text-gold-300">
                      {entry.question}
                    </h4>
                    <div className="mt-4 space-y-3.5 text-[0.9375rem] leading-relaxed text-plum-200/90">
                      {entry.paragraphs.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ---- The two levels ---- */}
      <Section tone="cream">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-h2 text-plum-950">{copy.programme.title}</h2>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 lg:grid-cols-2 lg:gap-6">
            {copy.programme.levels.map((level, index) => (
              <Reveal as="li" key={level.label} delay={index * 90}>
                <article className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-sand p-9 sm:p-10">
                  <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-gold-600 uppercase">
                    {level.label}
                  </p>
                  <p className="mt-5 text-[1rem] leading-relaxed text-ink-soft">{level.body}</p>
                </article>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={140}>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <p className="text-[1rem] text-ink-soft">{copy.programme.callToAction}</p>
              <Button href={`tel:${site.contact.phone}`} variant="outline">
                <PhoneIcon className="h-4 w-4" />
                {site.contact.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- Course format ---- */}
      <Section tone="sand">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow>{copy.formatEyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-6 text-h2 text-plum-950">{copy.formatTitle}</h2>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {copy.formatItems.map((item, index) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(index % 2) * 90}
                className={index === 0 ? 'sm:col-span-2' : undefined}
              >
                <article className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-cream p-8 sm:p-9">
                  <FlourishIcon className="h-3 w-14 text-gold-500/70" />
                  <h3 className="mt-6 font-display text-[1.1875rem] leading-snug text-plum-900">
                    {item.title}
                  </h3>
                  <div className="mt-4 space-y-3.5 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {item.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Testimonials
        title={copy.testimonialsTitle}
        lead={copy.testimonialsLead}
        items={testimonials}
        tone="plum"
      />

      {/* ---- Participants' questions ---- */}
      <Section tone="cream">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src="/images/curs-intrebari.jpg"
                alt={copy.faqImageAlt}
                width={1400}
                height={984}
                sizes="(max-width: 1024px) 92vw, 32vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="text-h2 text-plum-950">{copy.faqTitle}</h2>
            </Reveal>

            <dl className="mt-9 divide-y divide-plum-900/10 border-y border-plum-900/10">
              {copy.faq.map((entry) => (
                <div key={entry.question} className="py-6">
                  <dt className="font-display text-[1.0625rem] leading-snug text-plum-900">
                    {entry.question}
                  </dt>
                  <dd className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    {entry.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      {/* ---- Contact ---- */}
      <Section tone="sand" space="tight">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="h-full rounded-(--radius-panel) border border-plum-900/8 bg-cream p-9 sm:p-10">
              <h2 className="font-display text-h3 text-plum-950">{copy.contact.title}</h2>

              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                    {copy.contact.nameLabel}
                  </dt>
                  <dd className="mt-1.5 text-[0.9375rem] text-ink-soft">{copy.contact.name}</dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                    {copy.contact.phoneLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${site.contact.phone}`}
                      className="inline-flex items-center gap-2.5 text-[0.9375rem] text-plum-800 transition-colors duration-200 hover:text-plum-600"
                    >
                      <PhoneIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      {site.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.6875rem] font-semibold tracking-[0.14em] text-ink-muted uppercase">
                    {copy.contact.emailLabel}
                  </dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${site.contact.email}`}
                      className="inline-flex items-center gap-2.5 text-[0.9375rem] text-plum-800 transition-colors duration-200 hover:text-plum-600"
                    >
                      <MailIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      {site.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grain h-full rounded-(--radius-panel) bg-plum-950 p-9 text-plum-200 sm:p-10">
              <WhatsAppIcon className="h-7 w-7 text-gold-400" />
              <h2 className="mt-6 font-display text-h3 text-cream">{copy.contact.whatsappTitle}</h2>
              <div className="mt-6 space-y-4 text-[1rem] leading-relaxed text-plum-200/90">
                {copy.contact.whatsappBody.map((line) => (
                  <p key={line.slice(0, 24)}>{line}</p>
                ))}
              </div>
              <a
                href={site.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2.5 rounded-(--radius-pill) border border-plum-100/25 px-5 py-3 text-[0.9375rem] text-cream transition-colors duration-200 hover:border-gold-400/70 hover:text-gold-300"
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                {site.contact.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
