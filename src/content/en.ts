import type { Dictionary } from './dictionary';

/**
 * English copy.
 *
 * These are faithful translations of the Romanian source in `ro.ts`, made sentence by
 * sentence. Nothing new is said here that is not said there — and where the original site
 * was already in English (the motto, "Telehealth/ Telepsychology"), the original wording
 * is kept verbatim.
 */
export const en: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Consultancy',
    events: 'Events',
    publications: 'Publications',
    contact: 'Contact',
    privacy: 'Privacy policy',
    menu: 'Menu',
    close: 'Close',
    skipToContent: 'Skip to content',
    languageLabel: 'Language',
  },

  actions: {
    contact: 'Contact',
    readMore: 'Details',
    reserve: 'RESERVE YOUR PLACE NOW',
  },

  home: {
    meta: {
      title: 'CPR-accredited psychology practice — Ceciu L. Ramona',
      description:
        'The Psychology Practice is CPR-accredited and offers you services to the highest standards for health and psycho-emotional balance.',
    },
    hero: {
      eyebrow: 'HOME',
      title: 'Hello and welcome!',
      lead: 'A space created out of a sincere wish to support growth',
      imageAlt: 'Ramona L. Ceciu, clinical psychologist and psychotherapist',
    },
    intro: {
      paragraphs: [
        'Ramona L. Ceciu (Ph.D.) is a university lecturer, clinical psychologist and accredited psychotherapist, with specialisations in clinical psychology, cognitive-behavioural psychotherapies, hypnotherapy and psychosomatics, as well as a scientific researcher, holding postgraduate studies in clinical psychology and psychological intervention, cognitive-behavioural psychotherapies, neurobiology – neurosciences and others. She has experience in scientific research in psychology, neurosciences, the humanities and interdisciplinary studies, in multicultural projects, complementary competences and specialisations in alternative therapies, energy medicine, bioresonance, phytotherapy and natural remedies, as well as psycho-pedagogical and linguistic competences – studies in several foreign languages. Such abilities support effective communication and a trusting therapeutic relationship with people from different backgrounds and cultures, with the aim of promoting health and wellbeing on every level.',
      ],
      invitation:
        'I invite you to begin, alongside me, a journey of personal development, transformation and discovery of the best resources you hold within your own being, in order to learn how to better manage anxiety and stress, so that you may regain your inner balance, the joy of living and a fulfilled life.',
    },
    training: {
      title: 'Information about my professional training',
      lead: 'A selection of courses studied in university and postgraduate programmes, in scientific research and professional specialisation:',
      columns: [
        [
          'General psychology and psychological assessment',
          'Clinical psychodiagnosis',
          'Psychological testing',
          'Clinical psychology and psychological intervention',
          'Psychological counselling and psychotherapy',
          'Psychiatry and psychopathology',
          'Developmental psychology',
          'Cognitive psychology',
          'Child psychology',
          'Educational psychology',
          'Psychology of creativity',
          'Psychology of art and critical theory',
          'Psychology of the couple and family',
          'Health psychology',
        ],
        [
          'Emotional / social intelligence and communication styles',
          'Process Communication Model – effective communication',
          'Immunopsychology and psychosomatics',
          'Clinical neuropsychology and neuropsychopathology',
          'Psycho-traumatology',
          'Cognitive-behavioural psychotherapies and hypnosis',
          'The stress of modern life and affective disorders',
          'Therapeutic communication',
          'Clinical hypnosis',
          'Depth psychotherapies',
          'Neurobiology – neurosciences',
          'Human ethology',
          'Neurophysiology of homeostatically motivated behaviours',
          'Neurophysiology of emotion and of cognitive processes',
        ],
        [
          'Psychopharmacology and psychotherapy',
          'Genetics of human behaviour',
          'Research methodology and experimental psychology',
          'Sociology and social psychology',
          'Inter/cultural psychology',
          'Organisational psychology',
          'Educational and career psychology',
          'Psychonutrition; nutrition and eating style',
          'Anxiety, cognitive schemas and eating behaviours',
          'The psychosomatic effects of anxiety',
          'Resilience and coping styles',
          'Overcoming addictions',
          'Couples counselling and psychosexology',
          'Personal development counselling – life coaching',
          'Holistic psychology – the mind-soul-body relationship',
          'Telepsychology – foundations and critical aspects',
          'Business & career coaching.',
        ],
      ],
    },
    competences: {
      eyebrow: 'Information',
      title: 'Main competences in:',
      items: [
        'Clinical psychology, psychological assessment, psychodiagnosis',
        'Psychological intervention/assistance/consultancy',
        'Psychotherapy – CBT - case conceptualisation and specific psychological/psychotherapeutic intervention',
        'Hypnotherapy and guided imagery',
        'Psychosomatics',
        'Research in psychology and interdisciplinary studies',
        'Education, coaching and training (psychoeducation, psychopedagogy and teaching courses & workshops for children and adults on the basis of professional expertise)',
        'Optimisation and personal development',
        'Communication skills in several languages (English, French, Spanish, Italian, Romanian).',
      ],
    },
    practice: {
      title: 'Your emotional health is my priority',
      subtitle: 'Professionalism | Empathy | Balance',
      paragraphs: [
        'The Psychology Practice is CPR-accredited and offers you services to the highest standards for health and psycho-emotional balance. The services include psychological assessment, psychotherapy, clinical psychology, cognitive-behavioural therapy, psychosomatics, hypnotherapy, personal development, therapy for wellbeing, health, psychonutrition, family and couples therapy, corporate services, telehealth/telepsychology and other psychological services. Here you will find trustworthy professional support in the various emotional, psychological, psychosomatic and behavioural challenges you may face in your search for wellbeing.',
        'Through psychological assessment and the development of therapy plans for different psycho-emotional and psychosomatic disorders, we offer personalised treatments for clients, individual, couples and group therapy sessions for children and adults in several international languages.',
      ],
    },
    testimonials: {
      title: 'Testimonials from course participants',
    },
    cta: {
      title: 'You can contact me any time',
    },
  },

  about: {
    meta: {
      title: 'About — Ceciu L. Ramona',
      description:
        'Ramona L. Ceciu (Ph.D.) is a university lecturer, clinical psychologist and accredited psychotherapist.',
    },
    eyebrow: 'About',
    title: 'A space created out of a sincere wish to support growth',
    lead: 'Information about my professional training',
    imageAlt: 'Ramona L. Ceciu, clinical psychologist and psychotherapist',
  },

  services: {
    meta: {
      title: 'SERVICES',
      description:
        'Telehealth/ Telepsychology, Clinical Psychology, Psychotherapy, Hypnotherapy, Corporate Services.',
    },
    eyebrow: 'SERVICES',
    title: 'SERVICES',
    motto:
      'I am here to support your wellbeing and growth, because you matter and we grow together!',
    mottoAuthor: 'R.L.C.',
    detail: {
      otherServices: 'SERVICES',
    },
  },

  events: {
    meta: {
      title: 'EVENTS, OFFERS & RESOURCES',
      description:
        'Free workshops & courses: Health and psycho-emotional trauma, Health and natural remedies.',
    },
    eyebrow: 'offers',
    title: 'EVENTS, OFFERS & RESOURCES',
    offersLabel: 'offers',
    freeCoursesTitle: 'Free workshops & courses:',
    freeCoursesItems: ['1. Health and psycho-emotional trauma', '2. Health and natural remedies'],
    freeCoursesParagraphs: [
      'Every month we offer you a free online course or workshop on the theme of Health and psycho-emotional trauma, to help you get in touch with some of the emotions and suffering that affect your wellbeing, your health and your success in life, whether they are conscious or unconscious. Trauma can include everything from neglect, psychological and verbal abuse through to physical harm.',
      'Health matters on the psycho-emotional level as much as on the physical one, being influenced by the microbiome and by toxicity, by everything we consume. And a healthy lifestyle begins with a deep bio-chemical cleansing and rebalancing, with the processes of homeostasis or balance on every level, and plants and natural remedies can be the best allies of our wellbeing. Discover what you can do for your wellbeing and your health, so that you may live each day with joy!',
      'Limited places! To take part in the Workshop, registration by e-mail at psy.office8@gmail.com is required. On registration you receive information about the date and time of the next workshop with places available. You can also visit the Facebook page where we constantly post events important for your health.',
    ],
    freeCoursesImageAlt: 'A child at a meeting with the psychologist, in the consulting room',
    facebookLinkLabel: 'the Facebook page',
    timeLabel: 'Time',
    contentLabel: 'Content',
    note: {
      title: 'Note!',
      paragraphs: [
        'Your confidentiality and your comfort are important to us. Our therapy groups are meant to support all of you equally on your journey towards health and wellbeing, so the subjects addressed will be varied and, in general, applicable to each group and its central themes. Of course, there are matters you might wish to discuss privately, so we can arrange to work in individual sessions as well and address those difficulties you may not wish to reveal in front of the group. In any case, both individual therapy sessions and group sessions have a great influence on your transformation and help improve the quality of life. It all depends on you, on your willingness to accept and to face these difficulties, on your effort and on your wish to be better with yourself and with your life. We will do everything we can to support you in the process of development, of healing, and on your journey towards a level of optimal health.',
        'We are here to promote your wellbeing and your health, and we are always well informed and up to date with the most recent scientific research and discoveries relevant to human health.',
        'For any questions or proposals through which we can support your development and your health, do not hesitate to contact us.',
      ],
    },
    payment: {
      title: 'Payment for sessions and cancellation policy!',
      paragraphs: [
        'Payment is made by bank transfer and proof of payment must be sent by e-mail to psy.office8@gmail.com at least 8 hours before the time of the appointment. Failure to attend individual sessions without prior written cancellation (at least 48 hours before the session/appointment) means that the fee paid cannot be refunded. If the cancellation is announced at least 48 hours before the time of the appointment, followed by a new appointment, the payment already made can be taken into account for the next therapy session. If the psychologist/therapist has a situation or an emergency requiring the cancellation/postponement of a session, they inform the Client by telephone or e-mail and offer the possibility of choosing a new date for the postponed session.',
        'For group sessions no money is returned in the case of absence or partial attendance.',
        'For details about payment and the programme you are interested in, please send an e-mail to psy.office8@gmail.com. Thank you.',
      ],
    },
    bioresonanceTitle: 'Bioresonance',
  },

  publications: {
    meta: {
      title: 'JOURNAL & PUBLICATIONS',
      description: 'Life and Mind Art Research journal.',
    },
    eyebrow: 'JOURNAL & PUBLICATIONS',
    title: 'JOURNAL & PUBLICATIONS',
    publishedOn: 'Published on',
    readingTime: 'min',
    backToAll: 'JOURNAL & PUBLICATIONS',
    empty: '—',
  },

  contact: {
    meta: {
      title: 'CONTACT',
      description: 'You can write to us here. CPR-accredited psychology practice.',
    },
    eyebrow: 'CONTACT',
    title: 'Contact',
    lead: 'You can write to us here.',
    form: {
      firstName: 'Surname',
      lastName: 'First name',
      phone: 'Telephone',
      email: 'Email',
      topic: 'What would you like to discuss?',
      message: 'Message / request',
      otherInfo: 'Other information',
      location: 'Location',
      preferredLanguage: 'Preferred language',
      attachments: 'Attach documents here',
      attachmentsHint: 'PDF, DOC, JPG, PNG',
      consent: 'I agree with the',
      consentLink: 'Privacy Policy',
      submit: 'Send',
      submitting: 'Sending…',
      successTitle: 'Thank you!',
      successBody: 'Your message has been sent.',
      errorTitle: 'The message could not be sent.',
      errorBody: 'You can write to us directly at psy.office8@gmail.com.',
      optional: 'optional',
      errors: {
        firstName: 'Please fill in your surname.',
        lastName: 'Please fill in your first name.',
        contact: 'Please fill in a telephone number or an email.',
        message: 'Please fill in your message.',
        consent: 'Agreement with the Privacy Policy is required.',
      },
    },
    details: {
      name: 'Ceciu L. Ramona',
      accreditation: 'CPR-accredited psychology practice',
      title: 'Contact details',
      address: 'Online, Bucharest, Romania, EU',
      mobileLabel: 'Mobile/ WhatsApp',
      followLabel: 'Follow us on Facebook',
    },
  },

  workshop: {
    meta: {
      title: 'Bioresonance workshop',
      description:
        'Discover the Power of Bioresonance - in a single day. Intensive online workshop.',
    },
    eyebrow: 'Bioresonance workshop',
    kicker: 'BIORESONANCE WORKSHOP - FREE',
    title: 'Discover the Power of Bioresonance - in a single day',
    subtitle: 'Intensive online workshop with Ramona L. Ceciu',
    logistics: 'Limited places | Date: 10 June | Time: 19:00 | Zoom',
    lead: [
      'You know nothing about bioresonance? Perfect. Come along, and then make your decision.',
      'It is a live experience, where you will see with your own eyes how the medicine of the future works.',
    ],
    cta: 'RESERVE YOUR PLACE NOW',
    imageAlt: 'Ramona L. Ceciu at her desk, with the SCIO bioresonance device',
    takeaways: {
      title: 'In a single day, you will leave with:',
      items: [
        'A clear understanding of how bioresonance and biofeedback work;',
        'A live demonstration on the device, you will see the energy assessment in real time;',
        'Direct answers from trainers with decades of practice;',
        'Clarity about whether and how you can integrate bioresonance into your life or your career;',
        'Access to the community of course participants and an exclusive offer for the full course.',
      ],
    },
    beforeAfter: {
      title: 'Before and after the workshop',
      beforeLabel: 'BEFORE',
      before: [
        'Are you wondering how bioresonance works?',
        'Do you have doubts about whether it is a serious method?',
        'Do you not know whether you can practise legally?',
        'Are you alone with your questions?',
      ],
      afterLabel: 'AFTER',
      after: [
        'You understand the energy mechanism of the body;',
        'You have seen the results live on the device;',
        'You know exactly what steps to take;',
        'You are part of a community of practitioners.',
      ],
      note: [
        'Most people do not miss opportunities for lack of information. They miss them for lack of clarity.',
        'This workshop exists for exactly that reason.',
      ],
    },
    programme: {
      title: 'Workshop programme',
      slots: [
        {
          time: '11:00 - 11:30',
          items: [
            'Opening and meeting the group;',
            'What bioresonance is, in plain language;',
            'The basic principles of bioresonance;',
            'How we remove the cause behind the conditions;',
          ],
        },
        {
          time: '13:00 - 13:30',
          items: [
            'How you can assess your state of health;',
            'How we can prevent energy imbalances from appearing;',
            'How to balance the emotions, the mind and the body.;',
            'Methods by which we improve the state of health;',
          ],
        },
        {
          time: '13:30 - 14:00',
          items: [
            'Practical demonstration on the SCIO device;',
            'How you can build a career or a bioresonance practice;',
            'Questions and answers session.',
          ],
        },
      ],
      seats: 'Places available: a maximum of 50 participants',
      imageAlt: 'Workshop participants raising their hands to ask questions',
    },
    objections: [
      {
        question: 'Can I take part if I have no medical training?',
        answer:
          'You do not need any. The workshop is designed for anyone, from curious people through to psychologists, doctors, nutritionists or health entrepreneurs. Ceciu Ramona has a particular ability to translate complex concepts into simple, accessible language. You will understand everything, guaranteed.',
      },
      {
        question: 'Will I manage to understand all this information?',
        answer:
          'Almost all our course participants began with exactly this question and the same uncertainty. But they discovered that understanding comes naturally when you have clear explanations and the right guidance. If you have curiosity, openness and the wish to learn, you already have the basis you need to begin.',
      },
      {
        question: 'Can I really make time for something this important?',
        answer:
          'Often it is not a lack of time, but the postponing of the things that genuinely matter to us. A single well-invested day can bring clarity and answers you have been looking for over whole months. And what you learn here can profoundly influence your health, your work and the people you help every day.',
      },
    ],
    about: {
      title: 'Who I am',
      name: 'Ramona L. Ceciu',
      role: 'University lecturer, PhD, psychologist, neurobiologist-specialist in neurosciences, NLP, psychosomatics, hypnotherapy, nutrition and psycho-nutrition, phytotherapy, biofeedback and integrative health.',
      imageAlt: 'Ramona L. Ceciu, clinical psychologist and psychotherapist',
    },
    testimonialsTitle: 'What those who chose to discover bioresonance have to say',
    closing: {
      title: 'Are you ready to discover bioresonance?',
      lead: 'Places are limited and fill up quickly',
    },
    faqTitle: 'Frequently asked questions from participants',
    faq: [
      {
        question: 'Can I take part in the workshop both online and in person?',
        answer:
          'Yes. The workshop runs both online and in person at the clinic, depending on the scheduled session. It is the same workshop, available in two ways of taking part, for the comfort and preferences of each participant.',
      },
      {
        question: 'Who can take part in the workshop?',
        answer:
          'Anyone interested in complementary therapies, whatever their previous training.',
      },
      {
        question: 'Is it the same thing as the full course?',
        answer:
          'No. The workshop is a practical, intensive one-day introduction. The full course has 4 in-depth modules. Many participants choose the full course after taking part in the workshop.',
      },
      {
        question: 'Do I need experience in complementary therapies?',
        answer:
          'No. The workshop is open to everyone, whatever their training. If you are curious, you are welcome.',
      },
      {
        question: 'Is there a special offer for the course after the workshop?',
        answer:
          'Yes. Workshop participants receive an exclusive offer for enrolling on the bioresonance course, valid only on the day of the event.',
      },
      {
        question: 'What do I need to bring with me?',
        answer:
          'Just something to write with, your curiosity and your openness. I will take care of the rest — the device, the information, the demonstrations.',
      },
    ],
    form: {
      title: 'Fill in the form',
      name: 'Ramona L. Ceciu',
      subtitle: 'Reserve your place',
      note: 'After you fill in the form, I will contact you as soon as possible.',
      whatsappLabel: 'Mobile / WhatsApp',
      fields: {
        fullName: 'Full name',
        phone: 'Telephone',
        email: 'Email',
        occupation: 'Occupation',
        message: 'Message / request',
        consent: 'I agree with the Privacy Policy',
      },
      submit: 'Send the message',
    },
    contact: {
      title: 'Contact',
      address: 'Bucharest, Str. Chiristigiilor 30',
      website: 'www.lifeandmindart.com',
      followLabel: 'Follow me',
      mapAlt: 'Map showing the location of the practice, Strada Chiristigiilor, Bucharest',
    },
  },

  course: {
    meta: {
      title: 'BIORESONANCE COURSES',
      description:
        'The medicine of the future, a new profession. Clinical Biochemistry and the Science of Neurofeedback.',
    },
    eyebrow: 'BIORESONANCE COURSES',
    title: 'THE MEDICINE OF THE FUTURE A NEW PROFESSION INVEST IN YOURSELF',
    subtitle: 'Clinical Biochemistry AND the Science of Neurofeedback',
    imageAlt: 'Ramona L. Ceciu at her desk, with the SCIO bioresonance device',
    modulesTitle: 'Modules',
    modules: [
      { label: 'MODULE 1', day: 'Monday', date: '25 May | 19:00 - 21:00' },
      { label: 'MODULE 2', day: 'Tuesday', date: '26 May | 19:00 - 21:00' },
      { label: 'MODULE 3', day: 'Wednesday', date: '27 May | 19:00 - 21:00' },
      { label: 'MODULE 4', day: 'Thursday', date: '28 May | 19:00 - 21:00' },
    ],
    motto: 'Look at the causes, not only the symptoms.',
    about: {
      title: 'About me',
      name: 'Ceciu L. Ramona, PhD',
      role: 'University lecturer, PhD, psychologist, neurobiologist - specialist in neurosciences, NLP, psychosomatics, hypnotherapy, psycho-nutrition, phytotherapy, energy medicine and integrative health',
      imageAlt: 'Ramona L. Ceciu, clinical psychologist and psychotherapist',
    },
    promise: {
      title: 'Turn your passion for health into a profession',
      lead: 'Our bioresonance courses give you the theoretical foundation, the guided practice and the access to international certification that you need.',
      items: [
        {
          title: 'Structured learning',
          body: 'Each level is structured into modules that give you a well-founded theoretical and practical basis.',
        },
        {
          title: 'Practice on real equipment',
          body: 'After the 4 modules you will receive 10 hours of practice (online) free of charge, included in the fee, on SCIO devices.',
        },
        {
          title: 'A step-by-step method',
          body: 'Our method is based on a gradual path, from the basics towards advanced levels.',
        },
        {
          title: 'Certificate of participation',
          body: 'At the end you will obtain a certificate of participation confirming that you have completed all the modules of each level.',
        },
        {
          title: 'Community and support',
          body: 'You are part of a community of therapists and receive constant guidance from accredited trainers.',
        },
      ],
    },
    benefitsTitle: 'THE BENEFITS OF THE COURSE',
    benefits: [
      {
        title: 'Practice',
        paragraphs: [
          'After completing the 4 free online modules included in the programme fee, participants who go through all the modules receive 10 hours of free one-to-one online practice alongside a specialist trainer.',
          'In these individual sessions a complete assessment of the state of health is carried out, and the practice takes place exclusively on our devices, with the OMNIS® software, in exactly the real conditions of working with future clients.',
        ],
      },
      {
        title: 'Competences',
        paragraphs: [
          'You will learn to carry out energy health assessments, to choose adapted protocols and to build personalised therapeutic plans. In addition, you will develop your skills in communicating with the client and will be able to obtain practical results that increase confidence in your work.',
          'You quickly raise your professional level (psychologists, therapists, doctors, practitioners) through concrete skills in energy assessment and intervention.',
        ],
      },
      {
        title: 'Integration',
        paragraphs: [
          'Bioresonance integrates easily with other disciplines you already practise: medicine, nutrition, alternative therapies, psychotherapy or coaching.',
          'It does not change your professional identity, it adds a valuable, non-invasive instrument that increases your number of clients.',
          'You can combine the protocols with your existing methods, obtaining rapid and lasting results.',
        ],
      },
      {
        title: 'Network',
        paragraphs: [
          'After graduating you are not alone — you enter an international community of QX World therapists and practitioners.',
          'Here you find exchange of experience, supervision, mentoring and opportunities to collaborate on projects.',
          'In addition, your practice can extend beyond borders, through working online at a distance, and you benefit from exclusive resources, events and collaborations that widen your professional field.',
        ],
      },
      {
        title: 'Device',
        paragraphs: [
          'The device lets you put into practice everything you learn, through working with clients at a distance and developing your own activity/business.',
          'How do I do that? Simple!',
          '1. I have my own device; 2. I rent a device for a fee; 3. I buy a device.',
          'To purchase or rent a SCIO device, call 0723 504 025.',
        ],
      },
      {
        title: 'Legislation',
        paragraphs: [
          'In Romania there is unfortunately a mistaken and misleading practice by which some people claim that they can issue national certificates for bioresonance issued by the Ministry of Labour.',
          'The Ministry of Labour of Romania does not issue and does not recognise national certifications for bioresonance.',
          'At present there is a single solution for practising bioresonance in Romania, a solution which I explain in detail in Module 2.',
        ],
      },
      {
        title: 'Certification',
        paragraphs: [
          'International certification is an additional step, distinct from the training programme, and is not included in the cost of the course.',
          'It is available for a fee, in two versions:',
          '– international certification on SCIO devices (you must have a device)',
          '– general international certification, valid for bioresonance therapies.',
        ],
      },
    ],
    scienceEyebrow: 'ABOUT BIOFEEDBACK AND BIORESONANCE?',
    scienceTitle: 'The science of cellular frequencies',
    scienceQuestion: 'How do biofeedback and bioresonance work?',
    scienceParagraphs: [
      'The human body is made up of billions of cells, each vibrating at its own frequency. When these frequencies are disturbed, through stress, tiredness, inappropriate nutrition or emotional factors, the organism falls into imbalance.',
      'Biofeedback records these subtle deviations, and bioresonance transmits the appropriate vibrations in order to restore cellular harmony. In this way the body is not „forced" to heal, but is guided to reactivate its own capacity for self-regulation, self-healing.',
      'It is a gentle, non-invasive and very precise method, which brings visible results both on the physical and on the psycho-emotional level.',
    ],
    scienceImageAlt: 'A rendering of a DNA molecule',
    scienceMoreTitle: 'More about the method',
    scienceMore: [
      {
        question: 'How does it detect the real causes?',
        paragraphs: [
          'Biofeedback is not limited to showing the visible manifestations of a condition. The technology goes deeper, to the level of cellular frequencies, where the subtle imbalances that trigger illness can be identified.',
          'For example, repeated headaches are not just „a symptom", but can be generated by stress, digestive trouble or energy imbalances. Bioresonance manages to identify the deep causes of the imbalances and to act directly on them.',
          'Through this, the practitioner no longer treats only the effect, but helps the client to correct the source of the problem. It is a holistic and profound approach, which changes the way health is understood.',
        ],
      },
      {
        question: 'How does the mind connect with the body?',
        paragraphs: [
          'Bioresonance is a subtle language between consciousness and energy. Health is not merely the absence of illness, but a state of balance between mind, body and emotions.',
          'Biofeedback shows in real time the way in which stress, emotions and thoughts influence the physical state.',
          'Bioresonance intervenes to restore the energy balance, allowing the body to regain its vitality and the mind to find its calm again.',
          'This connection is essential for practitioners: you do not treat only the body or only the psyche, you create a bridge between the two. In this way therapy becomes complete, with visible effects both in reducing symptoms and in increasing the quality of life.',
        ],
      },
      {
        question: 'Does it work at a distance too?',
        paragraphs: [
          'An extraordinary aspect of bioresonance is its capacity to work at a distance as well. By accessing the person’s informational field, the device can identify and harmonise the frequencies even if the client is in another part of the world.',
          'This innovative method allows therapy for people who cannot travel or who live in other cities or countries. It is as if the technology creates an invisible bridge between therapist and client, through the frequencies.',
          'For practitioners, this means an enormous opening: they can help clients from anywhere, offering safe and effective sessions at a distance.',
        ],
      },
      {
        question: 'Does it access the subconscious and the superconscious?',
        paragraphs: [
          'The regulation of emotions and healing at a deep level.',
          'Biofeedback does not stop at the physical body, it penetrates as far as the layers of the subconscious and superconscious, where repressed emotions, traumas and limiting beliefs block the vital energy. By regulating these levels, old tensions are released and space is created for emotional balance and mental clarity.',
          'Bioresonance thus becomes an instrument of personal transformation, not only a therapy for the body. It helps in recognising the emotional causes of illness and in integrating them into a process of holistic healing.',
        ],
      },
      {
        question: 'Does it work on the subtle energy fields?',
        paragraphs: [
          'Beyond matter, towards the unseen dimension of the being.',
          'Bioresonance is not limited to the physical body alone. It acts on the subtle bodies too — emotional, mental and energetic — which directly influence our state of health.',
          'Imbalances that appear in these invisible planes manifest later as illnesses or disorders at the physical level. By accessing the energy fields, biofeedback and bioresonance allow these disturbances to be detected before they become major problems.',
          'In this way therapy is not only curative but also preventive, opening a new perspective on health: a holistic one, combining science with the invisible dimension of the being.',
        ],
      },
      {
        question: 'What is the difference between classical medicine and bioresonance?',
        paragraphs: [
          'Classical therapies (acupuncture, injections, mechanical stimulation) work through direct interventions on the physical body.',
          'Bioresonance, by contrast, needs no needles or painful procedures: it detects the cellular frequencies and harmonises them with the help of technology. It is a completely non-invasive, gentle and safe method, accessible to anyone, including those who do not tolerate classical therapies.',
          'Classical medicine acts predominantly on effects: it treats the visible symptoms through medication or surgery.',
          'Energy medicine goes deeper: it looks for the invisible imbalances in the subtle fields and restores harmony on the energetic, emotional and mental level. In this way the body activates its own healing resources, without side effects.',
          'The two approaches do not exclude each other, they complement each other.',
        ],
      },
    ],
    programme: {
      title: 'THE COURSE PROGRAMME',
      levels: [
        {
          label: 'LEVEL 1',
          body: 'Level 1 comprises 4 foundational modules (theory, logistics, technique and interpretation), giving the participant the complete basis needed to work on the bioresonance device: assessments, identifications and interpretations.',
        },
        {
          label: 'LEVEL 2',
          body: 'Level 2 is the stage of deepening, including 4 modules divided across two therapies, through which the participant progresses from basic knowledge to specific and advanced application.',
        },
      ],
      callToAction: 'For enrolment and information, please call',
    },
    formatEyebrow: 'HOW A COURSE UNFOLDS',
    formatTitle: 'A combination of theory, practice and case studies',
    formatItems: [
      {
        title: 'The course format, structured step by step;',
        body: [
          'The courses are carefully structured and follow a natural progression: we begin with the basic theory, continue with practical demonstrations, introduce concrete examples and close with case studies.',
          'This sequence guarantees that you will understand the concepts step by step and will know how to apply them in practice straight away.',
        ],
      },
      {
        title: 'Private discussion and guidance group on Whatsapp;',
        body: [
          'Access to a private WhatsApp group, dedicated to discussion, guidance and continuous support, where participants can ask questions and receive clarification throughout the programme.',
        ],
      },
      {
        title: 'An interactive method, exclusively through online sessions;',
        body: [
          'All the modules run online, so as to be accessible wherever you are. You will take part in live, interactive sessions, in which you can ask questions and receive answers in real time.',
          'In addition, you benefit from supplementary online trainings and from a set of support materials, so that you have access to the information taught.',
        ],
      },
      {
        title: 'A clear duration and a fixed, established schedule;',
        body: [
          'Each module lasts 2 hours, according to a well-established schedule, displayed on the site. The exact schedule (with days and times) is available in the „Details / payment" section, where you also have the enrolment button for each module.',
          'In this way you know clearly when the course takes place and can organise your time in advance.',
        ],
      },
      {
        title: 'Interactive courses with applied practical exercises.',
        body: [
          'A key element of the programme is interactivity: you do not only listen, you also apply. The live demonstrations on the bioresonance devices show you exactly how the work is done, and the exercises applied on your fellow group members help you gain real practical experience.',
          'Learning becomes dynamic and far more effective.',
        ],
      },
    ],
    testimonialsTitle: 'Testimonials from course participants',
    testimonialsLead:
      'Find out how the bioresonance courses changed the careers of those who chose this unique training.',
    faqTitle: 'Frequently asked questions from participants',
    faqImageAlt: 'A participant raising her hand to ask a question',
    faq: [
      {
        question: 'Who can take part in these courses?',
        answer:
          'Anyone interested in complementary therapies, whatever their previous training. The courses are ideal for psychologists, doctors and therapists, but also for those who want to begin a new career.',
      },
      {
        question: 'Do I need medical knowledge?',
        answer:
          'No, anyone can take part, although having it adds value. The training starts from zero, and the foundational modules are created so that every participant understands the concepts step by step.',
      },
      {
        question: 'How do the courses unfold?',
        answer:
          'The courses take place online, live, in interactive two-hour sessions, completed with support materials. They include both theory and practical applications on the bioresonance devices.',
      },
      {
        question: 'Do I need to have a bioresonance device?',
        answer:
          'Not necessarily. During the training you will work on the devices made available by the organisers. Afterwards, you can purchase a device through our special assisted-purchase programme.',
      },
      {
        question: 'Is the method safe?',
        answer:
          'Yes. Bioresonance and biofeedback are non-invasive methods, used widely across the world. The training prepares you to apply them responsibly and professionally.',
      },
      {
        question: 'Can I open a bioresonance practice of my own?',
        answer:
          'Yes. Anyone can open a bioresonance practice and obtain a supplementary or even a principal income. The internationally recognised certificate gives you the legal and professional basis to work independently, to open your own practice or to integrate bioresonance into your current activity, whether you are a doctor, a psychologist, a therapist or simply passionate about health.',
      },
    ],
    contact: {
      title: 'For more details?',
      nameLabel: 'Full name',
      name: 'Ceciu Ramona',
      phoneLabel: 'Telephone',
      emailLabel: 'Email',
      whatsappTitle: 'WhatsApp',
      whatsappBody: [
        'For other details, you can contact me by telephone or on WhatsApp at the number alongside.',
        'After enrolling, you will be added to the course WhatsApp group.',
        '📞 You can call or write to me any time!',
      ],
    },
  },

  legal: {
    meta: {
      title: 'Privacy policy',
      description:
        'CECIU LUCIA-RAMONA – CABINET INDIVIDUAL PSIHOLOGIE takes the confidentiality of its visitors’ data seriously.',
    },
    eyebrow: 'Privacy policy',
    lastUpdatedLabel: 'Last revised',
  },

  cookies: {
    title: 'Tracking data and cookies',
    body: 'We use cookies and similar tracking technologies to track the activity on our services and to hold certain information.',
    accept: 'Accept',
    reject: 'Decline',
    settings: 'Settings',
    policyLink: 'Privacy policy',
    saved: 'Your preferences have been saved.',
    manage: 'Cookies',
    categories: {
      necessary: {
        title: 'Strictly necessary',
        description:
          'Cookies are sent to your browser from a website and stored on your device for various purposes (e.g. the ability to stay logged in to a site without re-entering the password each time, remembering personal preferences, settings you have chosen, and so on).',
      },
      analytics: {
        title: 'Analytics',
        description:
          'We may use third-party service providers to monitor and analyse the use of our services.',
      },
    },
    alwaysOn: 'Always on',
    save: 'Save',
  },

  footer: {
    menuTitle: 'Menu',
    contactTitle: 'Contact',
    address: 'Bucharest, Ilfov, Romania, EU',
    copyright: '© Copyright 2022 lideandmindart.com',
    credit: 'Website by',
  },

  notFound: {
    meta: {
      title: 'Page not found',
      description: 'The page was not found.',
    },
    title: 'Page not found',
    cta: 'Home',
  },
};
