import type { Locale } from '@/lib/i18n';

/**
 * The six testimonials published on the original site — three on the bioresonance workshop
 * page, three on the bioresonance course page. Real people, real words: the Romanian is
 * transcribed verbatim and the English is a translation of it, nothing more.
 *
 * `source` decides where a testimonial appears: the workshop page shows the workshop three,
 * the course page shows the course three, and the home page shows all six.
 */

export interface TestimonialCopy {
  /** "Nutriționist | Cristi. M." — the role and name exactly as published. */
  attribution: string;
  /** The second line under the name on the original page. */
  role: string;
  quote: string;
}

export interface Testimonial {
  id: string;
  source: 'workshop' | 'course';
  copy: Record<Locale, TestimonialCopy>;
}

export const testimonials: readonly Testimonial[] = [
  {
    id: 'cristi-m',
    source: 'workshop',
    copy: {
      ro: {
        attribution: 'Nutriționist | Cristi. M.',
        role: 'Designation',
        quote:
          'Experiența acestui workshop a fost foarte bine structurată, clar explicată și ușor de urmărit. Ramona L. Ceciu a transmis cu profesionalism și pasiune informații valoroase despre biorezonanță. Întregul parcurs mi-a oferit nu doar informații practice, ci și o deschidere către o înțelegere mai profundă a echilibrului organismului.',
      },
      en: {
        attribution: 'Nutritionist | Cristi. M.',
        role: 'Designation',
        quote:
          'The experience of this workshop was very well structured, clearly explained and easy to follow. Ramona L. Ceciu conveyed valuable information about bioresonance with professionalism and passion. The whole journey gave me not only practical information, but also an opening towards a deeper understanding of the balance of the organism.',
      },
    },
  },
  {
    id: 'cosmina-s',
    source: 'workshop',
    copy: {
      ro: {
        attribution: 'Doctor | Cosmina S.',
        role: 'Designation',
        quote:
          'Workshopul a fost bine organizat, coerent și explicat pe înțelesul fiecărui participant. Ramona L. Ceciu a transmis cu seriozitate și dedicare o cunoaștere amplă despre utilizarea biorezonanței. Consider că această experiență nu este doar despre o metodă complementară, ci despre o cale de înțelegere, echilibru și evoluție.',
      },
      en: {
        attribution: 'Doctor | Cosmina S.',
        role: 'Designation',
        quote:
          'The workshop was well organised, coherent and explained so that every participant could understand it. Ramona L. Ceciu conveyed a broad knowledge of the use of bioresonance with seriousness and dedication. I consider that this experience is not only about a complementary method, but about a path of understanding, balance and growth.',
      },
    },
  },
  {
    id: 'claudiu-c',
    source: 'workshop',
    copy: {
      ro: {
        attribution: 'Psiholog | Claudiu C.',
        role: 'Psiholog',
        quote:
          'Întâlnirea a fost prezentată într-un mod clar, echilibrat și accesibil tuturor participanților. Ramona L. Ceciu a reușit să transmită cu multă implicare o perspectivă complexă asupra biorezonanței. Această experiență mi-a oferit nu doar informații utile, ci și o direcție reală de dezvoltare personală și profesională.',
      },
      en: {
        attribution: 'Psychologist | Claudiu C.',
        role: 'Psychologist',
        quote:
          'The meeting was presented in a clear, balanced way, accessible to all participants. Ramona L. Ceciu managed to convey a complex perspective on bioresonance with great involvement. This experience gave me not only useful information, but also a real direction for personal and professional development.',
      },
    },
  },
  {
    id: 'larisa-p',
    source: 'course',
    copy: {
      ro: {
        attribution: 'Doctor | Larisa P.',
        role: 'Designation',
        quote:
          'Am intrat la cursuri cu o abordare clasică, medicală, și am ieșit cu o viziune extinsă asupra sănătății. Biorezonanța m-a învățat că organismul comunică prin frecvențe și că echilibrul se poate restabili nu doar prin medicamente, ci și prin accesarea cauzelor subtile. Este o metodă non-invazivă, elegantă și profundă, care completează perfect practica medicală. Acum pot să îmi sprijin pacienții nu doar la nivel fizic, ci și emoțional și energetic.',
      },
      en: {
        attribution: 'Doctor | Larisa P.',
        role: 'Designation',
        quote:
          'I came to the courses with a classical, medical approach, and I left with an expanded view of health. Bioresonance taught me that the organism communicates through frequencies and that balance can be restored not only through medication, but also by accessing the subtle causes. It is a non-invasive, elegant and profound method, which complements medical practice perfectly. Now I can support my patients not only on the physical level, but on the emotional and energetic level too.',
      },
    },
  },
  {
    id: 'flaviu-c',
    source: 'course',
    copy: {
      ro: {
        attribution: 'Psiholog | Flaviu C.',
        role: 'Psiholog',
        quote:
          'Cursul de formare în biorezonanță mi-a deschis o perspectivă complet nouă asupra modului în care putem înțelege omul. Am descoperit că nu este vorba doar despre corp și simptome, ci despre un întreg univers energetic în care emoțiile, gândurile și sănătatea fizică sunt interconectate. Biorezonanța îmbină exact ceea ce căutam: rigoarea psihologiei cu profunzimea terapiilor subtile. Astăzi pot lucra cu pacienții mei mult mai holistic și rezultatele sunt vizibile.',
      },
      en: {
        attribution: 'Psychologist | Flaviu C.',
        role: 'Psychologist',
        quote:
          'The bioresonance training course opened up a completely new perspective for me on the way we can understand a person. I discovered that it is not only about the body and symptoms, but about a whole energetic universe in which emotions, thoughts and physical health are interconnected. Bioresonance combines exactly what I was looking for: the rigour of psychology with the depth of the subtle therapies. Today I can work with my patients far more holistically and the results are visible.',
      },
    },
  },
  {
    id: 'roxana-m',
    source: 'course',
    copy: {
      ro: {
        attribution: 'Coach | Roxana M.',
        role: 'Designation',
        quote:
          'Pentru mine, biorezonanța a fost puntea între știință și dimensiunea invizibilă a vieții. Este uimitor cum un aparat poate evidenția dezechilibrele și ghida procesul de echilibrare. Cursurile au fost clar explicate, bine structurate și pe înțelesul tuturor, iar dna. Ramona a transmis cu pasiune și profesionalism o cunoaștere vastă. Această experiență nu este doar o tehnică, ci o cale reală de creștere și împlinire.',
      },
      en: {
        attribution: 'Coach | Roxana M.',
        role: 'Designation',
        quote:
          'For me, bioresonance was the bridge between science and the invisible dimension of life. It is astonishing how a device can bring imbalances to light and guide the process of rebalancing. The courses were clearly explained, well structured and understandable to everyone, and Mrs Ramona conveyed a vast knowledge with passion and professionalism. This experience is not only a technique, but a real path of growth and fulfilment.',
      },
    },
  },
] as const;

export function getTestimonials(
  locale: Locale,
  source?: Testimonial['source'],
): (TestimonialCopy & { id: string })[] {
  return testimonials
    .filter((testimonial) => !source || testimonial.source === source)
    .map((testimonial) => ({ ...testimonial.copy[locale], id: testimonial.id }));
}
