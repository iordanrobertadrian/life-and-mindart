import type { Locale } from '@/lib/i18n';

/**
 * The five service pages, transcribed from lifeandmindart.com.
 *
 * Each `sections` entry is one heading-and-body block exactly as it runs on the original
 * page. Nothing has been added: where the original had a heading with no body, or a list
 * with no introduction, that is how it appears here too.
 */

export interface ServiceSection {
  /** Rendered as a sub-heading when present. */
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface ServiceCopy {
  slug: string;
  /** Card and navigation label. */
  name: string;
  /** The page's own headline, which on some pages is longer than the card label. */
  title: string;
  sections: ServiceSection[];
  image: string;
  imageAlt: string;
  meta: { title: string; description: string };
}

export interface Service {
  /** Stable identity, independent of language. */
  id: 'telepsihologie' | 'psihologie-clinica' | 'psihoterapie' | 'hipnoterapie' | 'servicii-corporate';
  copy: Record<Locale, ServiceCopy>;
}

export const services: readonly Service[] = [
  {
    id: 'telepsihologie',
    copy: {
      ro: {
        slug: 'telehealth-telepsychology',
        name: 'Telehealth/ Telepsychology',
        title: 'Telehealth/ Telepsychology/ Psihologie online',
        sections: [
          {
            paragraphs: [
              'Psihologia și psihoterapia online vă oferă acces la consult psihologic, terapie și ajutor profesional la distanță, prin intermediul tehnologiei și diferitelor platforme existente de videoconferință.',
              'Potrivit APA, astfel de comunicări pot fi „sincrone cu mai multe părți/ persoane care comunică în timp real (de exemplu, videoconferință interactivă, telefon) sau asincrone (de exemplu, e-mail, buletin online, stocarea și redirecționarea informațiilor). Tehnologiile pot spori serviciile tradiționale de întâlnire personală, fizic față în față, (de exemplu, prin materiale psihoeducaționale online după o sesiune de terapie în persoană) sau pot fi utilizate ca servicii de sine stătătoare (de exemplu, terapie sau dezvoltarea leadership-ului oferite prin videoconferință). Diferite tehnologii pot fi utilizate în diverse combinații și în scopuri diferite în timpul furnizării serviciilor de telepsihologie". Psihologul menține desigur calitatea premium a serviciilor oferite online.',
              'Serviciile de Telehealth/ Telepsychology includ orice consultație, evaluări psihologice și programe de terapie necesare pentru îmbunătățirea sănătății, stării de bine, relațiilor și vieții Clienților.',
              'Consultați următoarele detalii privind Serviciile noastre pentru mai multe informații.',
            ],
          },
        ],
        image: '/images/telepsihologie.jpg',
        imageAlt: 'Telehealth/ Telepsychology/ Psihologie online',
        meta: {
          title: 'Telehealth/ Telepsychology/ Psihologie online',
          description:
            'Psihologia și psihoterapia online vă oferă acces la consult psihologic, terapie și ajutor profesional la distanță.',
        },
      },
      en: {
        slug: 'telehealth-telepsychology',
        name: 'Telehealth/ Telepsychology',
        title: 'Telehealth/ Telepsychology/ Online psychology',
        sections: [
          {
            paragraphs: [
              'Online psychology and psychotherapy give you access to psychological consultation, therapy and professional help at a distance, through technology and the various existing video-conferencing platforms.',
              'According to the APA, such communications may be „synchronous with multiple parties/persons communicating in real time (for example, interactive videoconferencing, telephone) or asynchronous (for example, email, online bulletin board, store-and-forward of information). Technologies may augment traditional in-person, physically face-to-face services (for example, through online psychoeducational materials after an in-person therapy session) or may be used as stand-alone services (for example, therapy or leadership development delivered by videoconference). Different technologies may be used in various combinations and for different purposes during the provision of telepsychology services". The psychologist of course maintains the premium quality of the services offered online.',
              'Telehealth/ Telepsychology services include any consultation, psychological assessments and therapy programmes necessary for improving the health, wellbeing, relationships and lives of Clients.',
              'Please consult the following details about our Services for more information.',
            ],
          },
        ],
        image: '/images/telepsihologie.jpg',
        imageAlt: 'Telehealth/ Telepsychology/ Online psychology',
        meta: {
          title: 'Telehealth/ Telepsychology/ Online psychology',
          description:
            'Online psychology and psychotherapy give you access to psychological consultation, therapy and professional help at a distance.',
        },
      },
    },
  },

  {
    id: 'psihologie-clinica',
    copy: {
      ro: {
        slug: 'psihologie-clinica',
        name: 'Psihologie Clinică',
        title: 'Servicii Psihologie Clinică',
        sections: [
          {
            heading: 'Evaluare clinică, testare psihologică și psihodiagnostic',
            paragraphs: [
              'Evaluarea psihologică este importantă pentru identificarea factorilor psihologici implicați în/ relevanți pentru sănătate și boală, la copii și adulți, pentru individ, cuplu, familie, grup sau organizație. Evaluarea și testarea psihologică se realizează prin metode, tehnici și instrumente de evaluare şi asistenţă psihologică avizate, pe diferite paliere precum:',
            ],
            list: [
              'evaluare subiectiv-emoţională;',
              'evaluare cognitivă și comportamentală;',
              'evaluarea dezvoltării psihologice;',
              'evaluare a personalității și mecanismelor de coping;',
              'evaluarea contextului familial, profesional, social, economic, cultural în care se manifestă problemele psihologice ș.a.',
            ],
          },
          {
            heading: 'Intervenţie/consultanţă/ consiliere psihologică primară',
            paragraphs: [
              'Intervenția/ consilierea psihologică se aplică pentru modificarea factorilor psihologici cu relevanță pentru sănătate și boală, în cazul copiilor și adulților, administrate individual, în cuplu, familie sau grup. Aceasta implică:',
            ],
            list: [
              'educaţie pentru sănătate, promovarea sănătăţii şi a unui stil de viaţă sănătos, prevenirea îmbolnăvirilor (ex. prin modificarea stilului de viaţă); elaborarea, implementarea, monitorizarea şi evaluare programelor de promovare a sănătăţii şi de prevenire a îmbolnăvirilor la nivel individual și de grup;',
              'consiliere şi terapie suportivă;',
              'optimizare şi dezvoltare personală, autocunoaştere; ș.a.',
            ],
          },
        ],
        image: '/images/psihologie-clinica.jpg',
        imageAlt: 'Psihologie Clinică',
        meta: {
          title: 'Psihologie Clinică',
          description:
            'Evaluare clinică, testare psihologică și psihodiagnostic. Intervenţie/consultanţă/ consiliere psihologică primară.',
        },
      },
      en: {
        slug: 'clinical-psychology',
        name: 'Clinical Psychology',
        title: 'Clinical Psychology Services',
        sections: [
          {
            heading: 'Clinical assessment, psychological testing and psychodiagnosis',
            paragraphs: [
              'Psychological assessment is important for identifying the psychological factors involved in/relevant to health and illness, in children and adults, for the individual, the couple, the family, the group or the organisation. Psychological assessment and testing are carried out through approved psychological assessment and support methods, techniques and instruments, on various levels such as:',
            ],
            list: [
              'subjective-emotional assessment;',
              'cognitive and behavioural assessment;',
              'assessment of psychological development;',
              'assessment of personality and coping mechanisms;',
              'assessment of the family, professional, social, economic and cultural context in which the psychological difficulties appear, and others.',
            ],
          },
          {
            heading: 'Primary psychological intervention/consultancy/counselling',
            paragraphs: [
              'Psychological intervention/counselling is applied in order to modify the psychological factors relevant to health and illness, in children and adults, administered individually, in a couple, a family or a group. It involves:',
            ],
            list: [
              'health education, the promotion of health and of a healthy lifestyle, illness prevention (e.g. through lifestyle change); the design, implementation, monitoring and evaluation of health promotion and illness prevention programmes at individual and group level;',
              'counselling and supportive therapy;',
              'optimisation and personal development, self-knowledge; and others.',
            ],
          },
        ],
        image: '/images/psihologie-clinica.jpg',
        imageAlt: 'Clinical Psychology',
        meta: {
          title: 'Clinical Psychology',
          description:
            'Clinical assessment, psychological testing and psychodiagnosis. Primary psychological intervention/consultancy/counselling.',
        },
      },
    },
  },

  {
    id: 'psihoterapie',
    copy: {
      ro: {
        slug: 'psihoterapie',
        name: 'Psihoterapie',
        title: 'Psihoterapie',
        sections: [
          {
            heading: 'LIFE AND MIND ART',
            paragraphs: ['Serviciile de psihoterapie includ:'],
            list: [
              'Evaluarea psihologică și conceptualizarea clinică a cazurilor',
              'Intervenţie psihologică specifică',
              'Psihoterapie individuală şi de grup, a copilului, familiei şi adultului.',
            ],
          },
        ],
        image: '/images/consultatie-psihologica.jpg',
        imageAlt: 'Psihoterapie',
        meta: {
          title: 'Psihoterapie',
          description:
            'Evaluarea psihologică și conceptualizarea clinică a cazurilor, intervenţie psihologică specifică, psihoterapie individuală şi de grup.',
        },
      },
      en: {
        slug: 'psychotherapy',
        name: 'Psychotherapy',
        title: 'Psychotherapy',
        sections: [
          {
            heading: 'LIFE AND MIND ART',
            paragraphs: ['Psychotherapy services include:'],
            list: [
              'Psychological assessment and the clinical conceptualisation of cases',
              'Specific psychological intervention',
              'Individual and group psychotherapy, for the child, the family and the adult.',
            ],
          },
        ],
        image: '/images/consultatie-psihologica.jpg',
        imageAlt: 'Psychotherapy',
        meta: {
          title: 'Psychotherapy',
          description:
            'Psychological assessment and clinical conceptualisation of cases, specific psychological intervention, individual and group psychotherapy.',
        },
      },
    },
  },

  {
    id: 'hipnoterapie',
    copy: {
      ro: {
        slug: 'hipnoterapie',
        name: 'Hipnoterapie',
        title: 'Hipnoterapie',
        sections: [
          {
            paragraphs: [
              'Hipnoterapia este un tip de intervenție care implică hipnoza în tratarea anumitor tulburări emoționale, psihosomatice, cognitive și comportamentale:',
            ],
            list: [
              'Aplicare tehnici de relaxare și imagerie ghidată pe problematici specifice',
              'O intervenție terapeutică pentru vindecare psihoemoțională, psihosomatică și cognitiv-comportamentală, pentru gestionarea unor traume mai profunde sau/și mai vechi ce necesită atenție și a altor dificultăți afective și psihosomatice.',
            ],
          },
          {
            paragraphs: [
              'Hipnoterapia este utilă și eficientă în programe de terapie menite să trateze diverse probleme precum:',
            ],
            list: [
              'tulburări emoționale, psihosomatice, cognitive, comportamentale,',
              'tulburari de somn,',
              'anxietate, temeri și fobii, atacuri de panică,',
              'tulburări psihosomatice,',
              'tulburari de alimentatie,',
              'dificultati in relatie,',
              'tulburări de stres și managementul stresului,',
              'tulburare de stres posttraumatic (PTSD),',
              'vindecarea traumei, dar și alte tulburări.',
            ],
          },
        ],
        image: '/images/hipnoterapie.jpg',
        imageAlt: 'Hipnoterapie',
        meta: {
          title: 'Hipnoterapie',
          description:
            'Hipnoterapia este un tip de intervenție care implică hipnoza în tratarea anumitor tulburări emoționale, psihosomatice, cognitive și comportamentale.',
        },
      },
      en: {
        slug: 'hypnotherapy',
        name: 'Hypnotherapy',
        title: 'Hypnotherapy',
        sections: [
          {
            paragraphs: [
              'Hypnotherapy is a type of intervention which involves hypnosis in the treatment of certain emotional, psychosomatic, cognitive and behavioural disorders:',
            ],
            list: [
              'The application of relaxation techniques and guided imagery to specific difficulties',
              'A therapeutic intervention for psycho-emotional, psychosomatic and cognitive-behavioural healing, for the management of deeper and/or older traumas that require attention, and of other affective and psychosomatic difficulties.',
            ],
          },
          {
            paragraphs: [
              'Hypnotherapy is useful and effective in therapy programmes intended to treat various difficulties such as:',
            ],
            list: [
              'emotional, psychosomatic, cognitive, behavioural disorders,',
              'sleep disorders,',
              'anxiety, fears and phobias, panic attacks,',
              'psychosomatic disorders,',
              'eating disorders,',
              'difficulties in a relationship,',
              'stress disorders and stress management,',
              'post-traumatic stress disorder (PTSD),',
              'the healing of trauma, and other disorders as well.',
            ],
          },
        ],
        image: '/images/hipnoterapie.jpg',
        imageAlt: 'Hypnotherapy',
        meta: {
          title: 'Hypnotherapy',
          description:
            'Hypnotherapy is a type of intervention which involves hypnosis in the treatment of certain emotional, psychosomatic, cognitive and behavioural disorders.',
        },
      },
    },
  },

  {
    id: 'servicii-corporate',
    copy: {
      ro: {
        slug: 'servicii-corporate',
        name: 'Servicii Corporate',
        title: 'Servicii Corporate',
        sections: [
          {
            heading: 'oferte',
            paragraphs: [
              'Oferim ședințe de evaluare psihologică, dezvoltare personală sau/și intervenție psihologică pentru companii și angajații acestora. Ședințele se pot achiziționa ca abonamente cadou pentru angajați sau alte forme de bonus.',
              'Ședințele pot fi individuale sau de grup și pot avea diferite teme și obiective, ca de exemplu:',
            ],
            list: [
              'Gestionarea stresului și anxietății',
              'Nevoia de creștere a productivității',
              'Relații interpersonale conflictuale la locul de muncă',
              'Dezvoltarea rezilienței',
              'Discriminare, bullying și hărțuire',
              'Atmosferă pesimistă',
              'Time management',
              'Creșterea motivației, sau alte obiective cu scopul îmbunătățirii stării de bine a angajaților.',
            ],
          },
        ],
        image: '/images/servicii-corporate.jpg',
        imageAlt: 'Servicii Corporate',
        meta: {
          title: 'Servicii Corporate',
          description:
            'Ședințe de evaluare psihologică, dezvoltare personală sau/și intervenție psihologică pentru companii și angajații acestora.',
        },
      },
      en: {
        slug: 'corporate-services',
        name: 'Corporate Services',
        title: 'Corporate Services',
        sections: [
          {
            heading: 'offers',
            paragraphs: [
              'We offer psychological assessment, personal development and/or psychological intervention sessions for companies and their employees. Sessions can be purchased as gift subscriptions for employees or as other forms of bonus.',
              'Sessions may be individual or in a group and may have different themes and objectives, such as:',
            ],
            list: [
              'Managing stress and anxiety',
              'The need to increase productivity',
              'Conflictual interpersonal relationships at the workplace',
              'Developing resilience',
              'Discrimination, bullying and harassment',
              'A pessimistic atmosphere',
              'Time management',
              'Increasing motivation, or other objectives with the aim of improving employees’ wellbeing.',
            ],
          },
        ],
        image: '/images/servicii-corporate.jpg',
        imageAlt: 'Corporate Services',
        meta: {
          title: 'Corporate Services',
          description:
            'Psychological assessment, personal development and/or psychological intervention sessions for companies and their employees.',
        },
      },
    },
  },
] as const;

export function getServices(locale: Locale): ServiceCopy[] {
  return services.map((service) => service.copy[locale]);
}

export function getService(locale: Locale, slug: string): ServiceCopy | undefined {
  return services.find((service) => service.copy[locale].slug === slug)?.copy[locale];
}

/** The same service in the other language — used to build correct `hreflang` alternates. */
export function getServiceSlugs(slug: string, locale: Locale): Partial<Record<Locale, string>> | undefined {
  const service = services.find((entry) => entry.copy[locale].slug === slug);
  if (!service) return undefined;
  return { ro: service.copy.ro.slug, en: service.copy.en.slug };
}
