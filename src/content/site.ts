/**
 * Single source of truth for every hard fact about the practice.
 * Nothing else in the codebase should hard-code a phone number, an address or a URL.
 */

export const site = {
  name: 'Life and Mind Art',
  legalName: 'Ceciu L. Ramona — Cabinet Individual de Psihologie',
  practitioner: {
    name: 'Ramona L. Ceciu',
    fullName: 'Lect. univ. dr. Ramona L. Ceciu',
    honorific: 'Ph.D.',
    jobTitle: {
      ro: 'Psiholog clinician · Psihoterapeut · Lector universitar dr.',
      en: 'Clinical psychologist · Psychotherapist · University lecturer, Ph.D.',
    },
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lifeandmindart.com',

  contact: {
    email: 'psy.office8@gmail.com',
    phone: '+40734701126',
    phoneDisplay: '+40 734 701 126',
    /** As written on the original contact and workshop pages. */
    phoneDisplayLong: '+4 0734 701 126',
    whatsapp: 'https://wa.me/40734701126',
  },

  address: {
    locality: 'București',
    region: 'Ilfov',
    country: 'RO',
    countryName: { ro: 'România', en: 'Romania' },
  },

  /** The practice keeps a single channel — the Facebook page linked on the old site. */
  social: {
    facebook: 'https://www.facebook.com/lifeandmindart/',
  },

  analytics: {
    /** Loaded only after explicit cookie consent. */
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_ID ?? '',
  },

  credentials: {
    accreditation: 'CPR',
  },

  /** Who built and maintains this website. Rendered as the footer credit. */
  builder: {
    name: 'iWeb Digital',
    url: 'https://www.iweb-digital.ro',
  },
} as const;

export type Site = typeof site;
