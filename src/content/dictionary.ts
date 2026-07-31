/**
 * The shape of every piece of UI copy on the site.
 *
 * `ro.ts` and `en.ts` both satisfy this type, so TypeScript fails the build the moment a
 * translation goes missing — the two languages cannot drift apart.
 *
 * Editorial rule for this file and its two implementations: the Romanian strings are the
 * text of the original lifeandmindart.com, transcribed, not rewritten. Where the original
 * had no wording for something a page genuinely needs (a form's error message, a screen
 * reader label), the string is kept to the plainest possible functional phrasing.
 */

export interface Meta {
  title: string;
  description: string;
}

export interface Dictionary {
  /** Screen-reader and navigation chrome. */
  nav: {
    home: string;
    about: string;
    services: string;
    events: string;
    publications: string;
    contact: string;
    privacy: string;
    menu: string;
    close: string;
    skipToContent: string;
    languageLabel: string;
  };

  actions: {
    contact: string;
    readMore: string;
    reserve: string;
  };

  home: {
    meta: Meta;
    hero: {
      eyebrow: string;
      title: string;
      lead: string;
      imageAlt: string;
    };
    intro: {
      /** The full biography, one string per paragraph. */
      paragraphs: string[];
      invitation: string;
    };
    training: {
      title: string;
      lead: string;
      /** The three columns of the original course list. */
      columns: string[][];
    };
    competences: {
      eyebrow: string;
      title: string;
      items: string[];
    };
    practice: {
      title: string;
      subtitle: string;
      paragraphs: string[];
    };
    testimonials: {
      title: string;
    };
    cta: {
      title: string;
    };
  };

  about: {
    meta: Meta;
    eyebrow: string;
    title: string;
    lead: string;
    imageAlt: string;
  };

  services: {
    meta: Meta;
    eyebrow: string;
    title: string;
    motto: string;
    mottoAuthor: string;
    detail: {
      otherServices: string;
    };
  };

  events: {
    meta: Meta;
    eyebrow: string;
    title: string;
    offersLabel: string;
    freeCoursesTitle: string;
    freeCoursesItems: string[];
    freeCoursesParagraphs: string[];
    freeCoursesImageAlt: string;
    facebookLinkLabel: string;
    timeLabel: string;
    contentLabel: string;
    /** "Nota!" — the closing note about confidentiality and individual sessions. */
    note: { title: string; paragraphs: string[] };
    payment: { title: string; paragraphs: string[] };
    /** Cards linking through to the two bioresonance pages. */
    bioresonanceTitle: string;
  };

  publications: {
    meta: Meta;
    eyebrow: string;
    title: string;
    publishedOn: string;
    readingTime: string;
    backToAll: string;
    empty: string;
  };

  contact: {
    meta: Meta;
    eyebrow: string;
    title: string;
    lead: string;
    form: {
      firstName: string;
      lastName: string;
      phone: string;
      email: string;
      topic: string;
      message: string;
      otherInfo: string;
      location: string;
      preferredLanguage: string;
      attachments: string;
      attachmentsHint: string;
      consent: string;
      consentLink: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBody: string;
      errorTitle: string;
      errorBody: string;
      optional: string;
      errors: {
        firstName: string;
        lastName: string;
        contact: string;
        message: string;
        consent: string;
      };
    };
    details: {
      name: string;
      accreditation: string;
      title: string;
      address: string;
      mobileLabel: string;
      followLabel: string;
    };
  };

  /** The bioresonance workshop landing page. */
  workshop: {
    meta: Meta;
    eyebrow: string;
    kicker: string;
    title: string;
    subtitle: string;
    logistics: string;
    lead: string[];
    cta: string;
    imageAlt: string;
    takeaways: { title: string; items: string[] };
    beforeAfter: {
      title: string;
      beforeLabel: string;
      before: string[];
      afterLabel: string;
      after: string[];
      note: string[];
    };
    programme: {
      title: string;
      /** One block per time slot on the original page. */
      slots: { time: string; items: string[] }[];
      seats: string;
      imageAlt: string;
    };
    objections: { question: string; answer: string }[];
    about: { title: string; name: string; role: string; imageAlt: string };
    testimonialsTitle: string;
    closing: { title: string; lead: string };
    faqTitle: string;
    faq: { question: string; answer: string }[];
    form: {
      title: string;
      name: string;
      subtitle: string;
      note: string;
      whatsappLabel: string;
      fields: {
        fullName: string;
        phone: string;
        email: string;
        occupation: string;
        message: string;
        consent: string;
      };
      submit: string;
    };
    contact: {
      title: string;
      address: string;
      website: string;
      followLabel: string;
      mapAlt: string;
    };
  };

  /** The bioresonance course page. */
  course: {
    meta: Meta;
    eyebrow: string;
    title: string;
    subtitle: string;
    imageAlt: string;
    modulesTitle: string;
    modules: { label: string; day: string; date: string }[];
    motto: string;
    about: { title: string; name: string; role: string; imageAlt: string };
    promise: { title: string; lead: string; items: { title: string; body: string }[] };
    benefitsTitle: string;
    /** The seven benefits, each with the text behind its tab. */
    benefits: { title: string; paragraphs: string[] }[];
    scienceEyebrow: string;
    scienceTitle: string;
    scienceQuestion: string;
    scienceParagraphs: string[];
    scienceImageAlt: string;
    scienceMoreTitle: string;
    scienceMore: { question: string; paragraphs: string[] }[];
    programme: {
      title: string;
      levels: { label: string; body: string }[];
      callToAction: string;
    };
    formatEyebrow: string;
    formatTitle: string;
    formatItems: { title: string; body: string[] }[];
    testimonialsTitle: string;
    testimonialsLead: string;
    faqTitle: string;
    faqImageAlt: string;
    faq: { question: string; answer: string }[];
    contact: {
      title: string;
      nameLabel: string;
      name: string;
      phoneLabel: string;
      emailLabel: string;
      whatsappTitle: string;
      whatsappBody: string[];
    };
  };

  legal: {
    meta: Meta;
    eyebrow: string;
    lastUpdatedLabel: string;
  };

  cookies: {
    title: string;
    body: string;
    accept: string;
    reject: string;
    settings: string;
    policyLink: string;
    saved: string;
    manage: string;
    categories: {
      necessary: { title: string; description: string };
      analytics: { title: string; description: string };
    };
    alwaysOn: string;
    save: string;
  };

  footer: {
    menuTitle: string;
    contactTitle: string;
    address: string;
    copyright: string;
    /** Prefix for the build credit; the studio name and link come from `site.builder`. */
    credit: string;
  };

  notFound: {
    meta: Meta;
    title: string;
    cta: string;
  };
}
