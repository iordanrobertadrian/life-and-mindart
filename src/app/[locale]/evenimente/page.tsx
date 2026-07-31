import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { ArrowRightIcon, ClockIcon, FlourishIcon, ShieldIcon } from '@/components/icons';
import { ContactCta } from '@/components/sections/contact-cta';
import { PageHeader } from '@/components/sections/page-header';
import { JsonLd, breadcrumbSchema } from '@/components/site/json-ld';
import { Container } from '@/components/ui/container';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { Section } from '@/components/ui/section';
import { getOffers } from '@/content/events';
import { programmeSlug } from '@/content/programmes';
import { site } from '@/content/site';
import { getDictionary } from '@/lib/dictionary';
import { isLocale, path } from '@/lib/i18n';
import { buildMetadata } from '@/lib/seo';

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);

  return buildMetadata({
    locale,
    title: dict.events.meta.title,
    description: dict.events.meta.description,
    routeKey: 'evenimente',
  });
}

export default async function EventsPage({ params }: Params) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);
  const offers = getOffers(locale);

  /* The last paragraph names the practice's e-mail address and its Facebook page; both are
     rendered as live links rather than as plain text, which is the only change made to it. */
  const [firstParagraph, secondParagraph, enrolmentParagraph = ''] = dict.events.freeCoursesParagraphs;
  const [beforeEmail, afterEmail = ''] = enrolmentParagraph.split(site.contact.email);
  const [beforeFacebook, afterFacebook] = afterEmail.split(dict.events.facebookLinkLabel);

  const programmeLinks = [
    { id: 'workshop' as const, title: dict.workshop.title, kicker: dict.workshop.kicker },
    { id: 'course' as const, title: dict.course.title, kicker: dict.course.eyebrow },
  ];

  return (
    <>
      <PageHeader eyebrow={dict.events.eyebrow} title={dict.events.title} />

      {/* ---- The two free monthly workshops ---- */}
      <Section tone="cream" space="tight">
        <Container className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
              <Image
                src="/images/workshop-gratuit.jpg"
                alt={dict.events.freeCoursesImageAlt}
                width={1200}
                height={800}
                priority
                sizes="(max-width: 1024px) 92vw, 30vw"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Eyebrow>{dict.events.offersLabel}</Eyebrow>
            </Reveal>

            <Reveal delay={70}>
              <h2 className="mt-6 text-h2 text-plum-950">{dict.events.freeCoursesTitle}</h2>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-6 space-y-2">
                {dict.events.freeCoursesItems.map((item) => (
                  <li key={item} className="font-display text-[1.1875rem] text-plum-800">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={170}>
              <div className="mt-9 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
                <p>{firstParagraph}</p>
                <p>{secondParagraph}</p>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-8 rounded-(--radius-card) border border-gold-400/40 bg-sand p-7 text-[1rem] leading-relaxed text-ink-soft">
                {beforeEmail}
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-plum-700 underline decoration-plum-300 underline-offset-[3px] hover:decoration-plum-700"
                >
                  {site.contact.email}
                </a>
                {beforeFacebook}
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-plum-700 underline decoration-plum-300 underline-offset-[3px] hover:decoration-plum-700"
                >
                  {dict.events.facebookLinkLabel}
                </a>
                {afterFacebook}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---- The three development groups ---- */}
      {offers.map((offer, index) => (
        <Section key={offer.id} tone={index % 2 === 0 ? 'sand' : 'cream'}>
          <Container>
            <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div>
                <Reveal>
                  <Eyebrow>{dict.events.offersLabel}</Eyebrow>
                </Reveal>
                <Reveal delay={70}>
                  <h2 className="mt-6 text-h2 text-plum-950">{offer.title}</h2>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-7 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
                    {offer.intro.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                </Reveal>
              </div>

              <Reveal delay={110}>
                <div className="overflow-hidden rounded-[2rem] shadow-(--shadow-lifted)">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt}
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 92vw, 32vw"
                    className="h-auto w-full"
                  />
                </div>
              </Reveal>
            </div>

            {/* `items-start` matters: without it the two short cards stretch to the height of
                the pricing panel beside them and end in a hand's depth of empty background. */}
            <div className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
              <div className="grid gap-5">
                <Reveal>
                  <article
                    className={`rounded-(--radius-panel) border border-plum-900/8 p-8 ${
                      index % 2 === 0 ? 'bg-cream' : 'bg-sand'
                    }`}
                  >
                    <h3 className="inline-flex items-center gap-2.5 text-[0.6875rem] font-semibold tracking-[0.14em] text-plum-600 uppercase">
                      <ClockIcon className="h-4 w-4 shrink-0 text-gold-600" />
                      {dict.events.timeLabel}
                    </h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{offer.time}</p>
                  </article>
                </Reveal>

                <Reveal delay={80}>
                  <article
                    className={`rounded-(--radius-panel) border border-plum-900/8 p-8 ${
                      index % 2 === 0 ? 'bg-cream' : 'bg-sand'
                    }`}
                  >
                    <h3 className="text-[0.6875rem] font-semibold tracking-[0.14em] text-plum-600 uppercase">
                      {dict.events.contentLabel}
                    </h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">
                      {offer.content}
                    </p>
                  </article>
                </Reveal>
              </div>

              <Reveal delay={160}>
                <article className="grain rounded-(--radius-panel) bg-plum-950 p-8 text-plum-200 sm:p-9">
                  <FlourishIcon className="h-3 w-14 text-gold-400/70" />
                  <h3 className="mt-6 font-display text-[1.25rem] leading-snug text-gold-300">
                    {offer.priceTitle}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {offer.priceItems.map((item) => (
                      <li key={item.slice(0, 32)} className="flex items-start gap-3">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400" />
                        <span className="text-[0.875rem] leading-relaxed text-plum-200/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </div>
          </Container>
        </Section>
      ))}

      {/* ---- The note and the payment policy ---- */}
      <Section tone="cream" space="tight">
        <Container width="content">
          <Reveal>
            <div className="rounded-(--radius-panel) border border-plum-900/8 bg-white/60 p-9 sm:p-10">
              <h2 className="font-display text-h3 text-plum-950">{dict.events.note.title}</h2>
              <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {dict.events.note.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-6 rounded-(--radius-panel) border border-gold-400/40 bg-sand p-9 sm:p-10">
              <ShieldIcon className="h-6 w-6 text-gold-600" />
              <h2 className="mt-5 font-display text-h3 text-plum-950">{dict.events.payment.title}</h2>
              <div className="mt-6 space-y-5 text-[0.9375rem] leading-relaxed text-ink-soft">
                {dict.events.payment.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---- The two bioresonance pages ---- */}
      <Section tone="sand" space="tight">
        <Container>
          <Reveal>
            <h2 className="text-h2 text-plum-950">{dict.events.bioresonanceTitle}</h2>
          </Reveal>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {programmeLinks.map((programme, index) => (
              <Reveal as="li" key={programme.id} delay={index * 90}>
                <Link
                  href={path(locale, 'evenimente', programmeSlug(programme.id, locale))}
                  className="group flex h-full flex-col rounded-(--radius-panel) border border-plum-900/8 bg-cream p-8 transition-[transform,border-color,box-shadow] duration-500 ease-(--ease-out-soft) hover:-translate-y-1 hover:border-gold-400/50 hover:shadow-(--shadow-lifted) sm:p-10"
                >
                  <p className="text-[0.6875rem] font-semibold tracking-[0.14em] text-gold-600 uppercase">
                    {programme.kicker}
                  </p>
                  <h3 className="mt-5 font-display text-h3 leading-snug text-plum-900">
                    {programme.title}
                  </h3>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-plum-700 transition-colors duration-200 group-hover:text-plum-900">
                    {dict.actions.readMore}
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <ContactCta
        title={dict.home.cta.title}
        contactLabel={dict.actions.contact}
        contactHref={path(locale, 'contact')}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: dict.nav.home, url: path(locale) },
          { name: dict.nav.events, url: path(locale, 'evenimente') },
        ])}
      />
    </>
  );
}
