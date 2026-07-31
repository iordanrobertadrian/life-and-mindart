import type { Dictionary } from './dictionary';

/**
 * Romanian copy — transcribed from lifeandmindart.com.
 *
 * Every sentence below appears on the original website. Nothing has been rewritten,
 * shortened or "improved", and no marketing copy has been invented: what changed is only
 * the typography and the order in which the same words are laid out on the page.
 *
 * Two deliberate corrections to obvious typing errors in the source:
 *   • "Sunde te acold cu Politica de Confidențialitate" → "Sunt de acord cu…"
 *   • "Worksop biorezonanță" → "Workshop biorezonanță"
 * The footer's "© Copyright 2022 lideandmindart.com" is left exactly as written. The build
 * credit next to it is the one line that is ours rather than the client's.
 */
export const ro: Dictionary = {
  nav: {
    home: 'Home',
    about: 'About',
    services: 'Consultanță',
    events: 'Evenimente',
    publications: 'Publicații',
    contact: 'Contact',
    privacy: 'Politica de confidențialitate',
    menu: 'Meniu',
    close: 'Închide',
    skipToContent: 'Sari la conținut',
    languageLabel: 'Limbă',
  },

  actions: {
    contact: 'Contact',
    readMore: 'Detalii',
    reserve: 'REZERVĂ-ȚI LOCUL ACUM',
  },

  home: {
    meta: {
      title: 'Cabinet Psihologie acreditat CPR — Ceciu L. Ramona',
      description:
        'Cabinetul de Psihologie este acreditat CPR și vă oferă servicii la cele mai înalte standarde pentru sănătate și echilibru psiho-emoțional.',
    },
    hero: {
      eyebrow: 'HOME',
      title: 'Bună și bine ai venit!',
      lead: 'Un spațiu creat din dorința sinceră de a sprijini evoluția',
      imageAlt: 'Ramona L. Ceciu, psiholog clinician și psihoterapeut',
    },
    intro: {
      paragraphs: [
        'Ramona L. Ceciu (Ph.D.) este lector universitar doctor, psiholog clinician și psihoterapeut atestat, cu specializări în psihologie clinică, psihoterapii cognitiv-comportamentale, hipnoterapie și psihosomatică, dar și cercetător științific, având studii postuniversitare în psihologie clinică și intervenție psihologică, psihoterapii cognitiv-comportamentale, neurobiologie – neuroștiințe ș.a. Are experiență în cercetare științifică în psihologie, neuroștiințe, științe umaniste și studii interdisciplinare, în proiecte multiculturale, competențe și specializări complementare în terapii alternative, medicină energetică, biorezonanță, fitoterapie și remedii naturale, dar și competențe psihopedagogice și lingvistice – studii în mai multe limbi străine. Astfel de abilități susțin o comunicare eficientă și o relație terapeutică de încredere cu oameni din medii și culturi diferite, în scopul promovării sănătății și stării de bine pe toate planurile.',
      ],
      invitation:
        'Vă invit să începeți alături de mine o călătorie de dezvoltare personală, transformare și descoperire a celor mai bune resurse pe care le aveți în propria ființă pentru a învăța cum să gestionați mai bine anxietatea și stresul pentru a vă regăsi echilibrul interior, bucuria de a trăi și a avea o viață împlinită.',
    },
    training: {
      title: 'Informații privind pregătirea mea profesională',
      lead: 'Selecție cursuri studiate în programe post/universitare, de cercetare științifică și specializare profesională:',
      /* The three columns exactly as they run on the original page. */
      columns: [
        [
          'Psihologie generală și evaluare psihologică',
          'Psihodiagnoză clinică',
          'Testare Psihologică',
          'Psihologie clinică și intervenție psihologică',
          'Consiliere psihologică şi psihoterapie',
          'Psihiatrie şi Psihopatologie',
          'Psihologia dezvoltării',
          'Psihologie cognitivă',
          'Psihologia copilului',
          'Psihologia educației',
          'Psihologia creativității',
          'Psihologia artei și teorie critică',
          'Psihologia cuplului și familiei',
          'Psihologia sănătăţii',
        ],
        [
          'Inteligența emoțională/ socială și stiluri de comunicare',
          'Process Communication Model – comunicare eficientă',
          'Imunopsihologie și Psihosomatică',
          'Neuropsihologie clinică şi neuropsihopatologie',
          'Psiho-traumatologie',
          'Psihoterapii cognitiv-comportamentale și hipnoză',
          'Stresul vieții moderne și tulburările afective',
          'Comunicare terapeutică',
          'Hipnoza clinică',
          'Psihoterapii de profunzime',
          'Neurobiologie – Neuroștiințe',
          'Etologie umană',
          'Neurofiziologia comportamentelor motivate homeostatic',
          'Neurofiziologia emoției și a proceselor cognitive',
        ],
        [
          'Psihofarmacologie şi psihoterapie',
          'Genetica comportamentului uman',
          'Metodologia cercetării și Psihologie experimentală',
          'Sociologie și Psihologie socială',
          'Psihologie Inter/Culturală',
          'Psihologie organizaţională',
          'Psihologie educațională și a carierei',
          'Psihonutriție; Nutriție și stil de alimentație',
          'Anxietate, scheme cognitive și comportamente alimentare',
          'Efectele psihosomatice ale anxietății',
          'Reziliența și stilurile de coping',
          'Depășirea dependențelor',
          'Consiliere de cuplu și psihosexologie',
          'Consiliere dezvoltare personală – Life coaching',
          'Psihologie holistică – relația minte-suflet-corp',
          'Telepsihologia – fundamente și aspecte critice',
          'Business & Career coaching.',
        ],
      ],
    },
    competences: {
      eyebrow: 'Informații',
      title: 'Competențe principale în:',
      items: [
        'Psihologie clinică, evaluare psihologică, psihodiagnostic',
        'Intervenție/asistență/consultanță psihologică',
        'Psihoterapie – TCC - conceptualizarea cazurilor și intervenţie psihologică/ psihoterapeutică specifică',
        'Hipnoterapie și imagerie ghidată',
        'Psihosomatică',
        'Cercetare în psihologie și studii interdisciplinare',
        'Educație, coaching și training (psihoeducație, psihopedagogie și predare cursuri & workshop-uri pentru copii și adulți pe baza expertizei profesionale)',
        'Optimizare și dezvoltare personală',
        'Abilități de comunicare în mai multe limbi (engleză, franceză, spaniolă, italiană, română).',
      ],
    },
    practice: {
      title: 'Sănătatea ta emoțională este prioritatea mea',
      subtitle: 'Profesionalism | Empatie | Echilibru',
      paragraphs: [
        'Cabinetul de Psihologie este acreditat CPR și vă oferă servicii la cele mai înalte standarde pentru sănătate și echilibru psiho-emoțional. Serviciile includ evaluare psihologică, psihoterapie, psihologie clinică, terapie cognitiv-comportamentală, psihosomatică, hipnoterapie, dezvoltare personală, terapie pentru wellbeing, sănătate, psihonutriție, terapie de familie și de cuplu, servicii corporate, telehealth/ telepsihologie și alte servicii psihologice. Aici găsiți sprijin profesional de încredere în diverse provocări emoționale, psihologice, psihosomatice și comportamentale cu care vă puteți confrunta în căutarea stării de bine.',
        'Prin evaluarea psihologică și dezvoltarea planurilor de terapie pentru diferite tulburări psiho-emoționale și psihosomatice, oferim tratamente personalizate pentru clienți, sesiuni de terapie individuală, de cuplu și de grup pentru copii și adulți în diferite limbi de circulație internațională.',
      ],
    },
    testimonials: {
      title: 'Mărturii ale cursanților',
    },
    cta: {
      title: 'Mă poți contacta oricînd',
    },
  },

  about: {
    meta: {
      title: 'About — Ceciu L. Ramona',
      description:
        'Ramona L. Ceciu (Ph.D.) este lector universitar doctor, psiholog clinician și psihoterapeut atestat.',
    },
    eyebrow: 'About',
    title: 'Un spațiu creat din dorința sinceră de a sprijini evoluția',
    lead: 'Informații privind pregătirea mea profesională',
    imageAlt: 'Ramona L. Ceciu, psiholog clinician și psihoterapeut',
  },

  services: {
    meta: {
      title: 'SERVICII',
      description:
        'Telehealth/ Telepsychology, Psihologie Clinică, Psihoterapie, Hipnoterapie, Servicii Corporate.',
    },
    eyebrow: 'SERVICII',
    title: 'SERVICII',
    motto:
      'I am here to support your wellbeing and growth, because you matter and we grow together!',
    mottoAuthor: 'R.L.C.',
    detail: {
      otherServices: 'SERVICII',
    },
  },

  events: {
    meta: {
      title: 'EVENIMENTE, OFERTE & RESURSE',
      description:
        'Workshop-uri & Cursuri Gratuite: Sănătatea și Traumele psihoemoționale, Sănătatea și Remediile naturale.',
    },
    eyebrow: 'oferte',
    title: 'EVENIMENTE, OFERTE & RESURSE',
    offersLabel: 'oferte',
    freeCoursesTitle: 'Workshop-uri & Cursuri Gratuite:',
    freeCoursesItems: [
      '1. Sănătatea și Traumele psihoemoționale',
      '2. Sănătatea și Remediile naturale',
    ],
    freeCoursesParagraphs: [
      'În fiecare lună, vă oferim un curs sau workshop online gratuit pe tema Sănătatea și Traumele psiho-emoționale, pentru a vă ajuta să intrați în contact cu unele emoții și suferințe care vă afectează starea de bine, sănătatea și succesul în viață, indiferent că sunt conștientizate sau inconștiente. Traumele pot include totul de la neglijență, abuzuri psihologice și verbale până la vătămări fizice.',
      'Sănătatea este importantă atât în plan psiho-emoțional, cât și fizic, fiind influențată de microbiom și de toxicitate, de tot ceea ce consumăm. Iar stilul de viață sănătos începe cu o curățare și echilibrare bio-chimică profundă, cu procesele de homeostazie sau echilibrare pe toate planurile, iar plantele și remediile naturale pot fi cei mai buni aliați în starea noastră de bine. Descoperiți ce puteți face pentru starea de bine și sănătatea dvs pentru a trăi cu bucurie în fiecare zi!',
      'Locuri limitate! Pentru participarea la Workshop este necesară înscrierea prin e-mail la psy.office8@gmail.com. La înscriere primiți informații privind data și ora următorului workshop la care avem locuri disponibile. Puteți de asemenea accesa pagina de Facebook unde postăm constant evenimente importante pentru sănătatea dvs.',
    ],
    freeCoursesImageAlt: 'Copil la o întâlnire cu psihologul, în cabinet',
    facebookLinkLabel: 'pagina de Facebook',
    timeLabel: 'Timp',
    contentLabel: 'Conținut',
    note: {
      title: 'Nota!',
      paragraphs: [
        'Confidențialitatea și confortul dumneavoastră sunt importante pentru noi. Grupurile noastre de terapie sunt menite să vă sprijine în mod egal pe toți în călătoria voastră către sănătate și bunăstare, astfel încât subiectele abordate vor fi variate și, în general valabile pentru fiecare grup și temele sale centrale. Desigur, există probleme pe care ați putea dori să le discutați în privat, așa că putem aranja să lucrăm și în ședințe individuale și să abordăm acele dificultăți pe care este posibil să nu doriți să le dezvăluiți în fața grupului. În orice caz, atât sesiunile de terapie individuală, cât și sesiunile de grup au o mare influență asupra transformării tale/ dvs. și ajută la îmbunătățirea calității vieții. Totul depinde de tine, de dorința ta de a accepta și de a face față acestor dificultăți, de efortul tău și de dorința ta de a fi mai bine cu tine și viața ta. Vom face tot posibilul să te susținem în procesul de dezvoltare, de vindecare și în călătoria ta către un nivel de sănătate optimă.',
        'Suntem aici pentru a promova starea de bine și sănătatea dvs., și suntem întotdeauna bine informați și la curent cu cele mai recente cercetări științifice și descoperiri relevante pentru sănătatea umană.',
        'Pentru orice întrebări sau propuneri care vă putem susține dezvoltarea și sănătatea, nu ezitați să ne contactați.',
      ],
    },
    payment: {
      title: 'Plată ședințe și politici de anulare!',
      paragraphs: [
        'Plata se realizează prin transfer bancar și dovada de plată trebuie trimisă prin e-mail la psy.office8@gmail.com cu cel puțin 8 ore înainte de ora programării. Neprezentarea la ședințele individuale fără anularea prealabilă în scris (cu cel puțin 48 de ore înainte de sesiune/ programare) înseamnă că taxa plătită nu poate fi rambursată. Dacă anularea este anunțată cu cel puțin 48 de ore înainte de ora programării, urmată de o nouă programare, plata deja efectuată poate fi luată în considerare pentru următoarea ședință de terapie. Dacă psihologul/ terapeutul are o situație sau o urgență care necesită anularea/ amânarea unei ședințe, acesta informează Clientul prin telefon sau e-mail și oferă posibilitatea alegerii unei noi date pentru ședința amânată.',
        'Pentru sesiunile de grup nu se returnează banii în caz de absență sau participare parțială.',
        'Pentru detalii privind plata și programul de interes vă rugăm să trimiteți e-mail pe adresa psy.office8@gmail.com. Mulțumim.',
      ],
    },
    bioresonanceTitle: 'Biorezonanță',
  },

  publications: {
    meta: {
      title: 'REVISTĂ & PUBLICAȚII',
      description: 'Life and Mind Art Research journal.',
    },
    eyebrow: 'REVISTĂ & PUBLICAȚII',
    title: 'REVISTĂ & PUBLICAȚII',
    publishedOn: 'Publicat la data de',
    readingTime: 'min',
    backToAll: 'REVISTĂ & PUBLICAȚII',
    empty: '—',
  },

  contact: {
    meta: {
      title: 'CONTACT',
      description: 'Ne puteți scrie aici. Cabinet Psihologie acreditat CPR.',
    },
    eyebrow: 'CONTACT',
    title: 'Contact',
    lead: 'Ne puteți scrie aici.',
    form: {
      firstName: 'Nume',
      lastName: 'Prenume',
      phone: 'Telefon',
      email: 'Email',
      topic: 'Despre ce doriți să discutăm?',
      message: 'Mesaj / solicitare',
      otherInfo: 'Alte informații',
      location: 'Locație',
      preferredLanguage: 'Limba preferată',
      attachments: 'Atașați aici documente',
      attachmentsHint: 'PDF, DOC, JPG, PNG',
      consent: 'Sunt de acord cu',
      consentLink: 'Politica de Confidențialitate',
      submit: 'Trimite',
      submitting: 'Se trimite…',
      successTitle: 'Vă mulțumim!',
      successBody: 'Mesajul dumneavoastră a fost trimis.',
      errorTitle: 'Mesajul nu a putut fi trimis.',
      errorBody: 'Ne puteți scrie direct la psy.office8@gmail.com.',
      optional: 'opțional',
      errors: {
        firstName: 'Completați numele.',
        lastName: 'Completați prenumele.',
        contact: 'Completați un telefon sau un email.',
        message: 'Completați mesajul.',
        consent: 'Este necesar acordul cu Politica de Confidențialitate.',
      },
    },
    details: {
      name: 'Ceciu L. Ramona',
      accreditation: 'Cabinet Psihologie acreditat CPR',
      title: 'Date de contact',
      address: 'Online, Bucuresti, Romania, EU',
      mobileLabel: 'Mobile/ WhatsApp',
      followLabel: 'Follow us on Facebook',
    },
  },

  workshop: {
    meta: {
      title: 'Workshop biorezonanță',
      description: 'Descoperă Puterea Biorezonanței - într-o singură zi. Workshop online intensiv.',
    },
    eyebrow: 'Workshop biorezonanță',
    kicker: 'WORKSHOP BIOREZONANȚĂ - GRATUIT',
    title: 'Descoperă Puterea Biorezonanței - într-o singură zi',
    subtitle: 'Workshop online intensiv cu Ramona L. Ceciu',
    logistics: 'Locuri limitate | Data: 10 Iunie | Ora: 19:00 | Zoom',
    lead: [
      'Nu știi nimic despre biorezonanță? Perfect. Vino și apoi ia decizia.',
      'Este o experiență live, unde vei vedea cu ochii tăi cum funcționează medicina viitorului.',
    ],
    cta: 'REZERVĂ-ȚI LOCUL ACUM',
    imageAlt: 'Ramona L. Ceciu la birou, cu aparatul de biorezonanță SCIO',
    takeaways: {
      title: 'Într-o singură zi, vei pleca cu:',
      items: [
        'O înțelegere clară a cum funcționează biorezonanța și biofeedback-ul;',
        'O demonstrație live pe aparat, vei vedea evaluarea energetică în timp real;',
        'Răspunsuri directe de la formatori cu zeci de ani de practică;',
        'Claritate despre dacă și cum poți integra biorezonanța în viața sau cariera ta;',
        'Acces la comunitatea cursanților și o ofertă exclusivă pentru cursul complet.',
      ],
    },
    beforeAfter: {
      title: 'Înainte și după workshop',
      beforeLabel: 'ÎNAINTE',
      before: [
        'Te întrebi cum funcționează biorezonanța?',
        'Ai dubii dacă e o metodă serioasă?',
        'Nu știi dacă poți practica legal?',
        'Ești singur cu întrebările tale?',
      ],
      afterLabel: 'DUPĂ',
      after: [
        'Înțelegi mecanismul energetic al corpului;',
        'Ai văzut live rezultatele pe aparat;',
        'Știi exact ce pași urmezi;',
        'Faci parte dintr-o comunitate de practicieni.',
      ],
      note: [
        'Majoritatea oamenilor nu ratează oportunități din lipsă de informații. Le ratează din lipsă de claritate.',
        'Workshopul acesta există exact pentru asta.',
      ],
    },
    programme: {
      title: 'Program workshop',
      slots: [
        {
          time: '11:00 - 11:30',
          items: [
            'Deschidere și întâlnirea grupului;',
            'Ce este biorezonanța pe înțelesul tuturor;',
            'Principiile de bază ale biorezonanței;',
            'Cum eliminăm cauza din spatele afecțiunilor;',
          ],
        },
        {
          time: '13:00 - 13:30',
          items: [
            'Cum poți evalua starea de sănătate;',
            'Cum putem preveni apariția dezechilibrelor energetice;',
            'Cum să echilibrezi emoțiile, mintea și corpul.;',
            'Metode prin care ameliorăm starea de sănătate;',
          ],
        },
        {
          time: '13:30 - 14:00',
          items: [
            'Demonstrație practică pe aparatul SCIO;',
            'Cum poți construi o carieră sau un cabinet de biorezonanță;',
            'Sesiune de întrebări și răspunsuri.',
          ],
        },
      ],
      seats: 'Locuri disponibile: maxim 50 participanți',
      imageAlt: 'Participanți la workshop ridicând mâna pentru a pune întrebări',
    },
    objections: [
      {
        question: 'Pot participa dacă nu am pregătire medicală?',
        answer:
          'Nu ai nevoie. Workshopul este conceput pentru oricine, de la persoane curioase, la psihologi, medici, nutriționiști sau antreprenori în sănătate. Ceciu Ramona are o abilitate aparte de a traduce concepte complexe în limbaj simplu, accesibil. Vei înțelege totul, garantat.',
      },
      {
        question: 'Voi reuși să înțeleg toate aceste informații?',
        answer:
          'Aproape toți cursanții noștri au început exact cu această întrebare și aceeași nesiguranță. Dar au descoperit că înțelegerea vine natural atunci când ai explicații clare și ghidaj potrivit. Dacă ai curiozitate, deschidere și dorința de a învăța, ai deja baza necesară pentru a începe.',
      },
      {
        question: 'Oare îmi pot face timp pentru ceva atât de important?',
        answer:
          'De multe ori nu este lipsa timpului, ci amânarea lucrurilor care contează cu adevărat pentru noi. O singură zi bine investită poate aduce claritate și răspunsuri pe care le cauți de luni întregi. Iar ceea ce înveți aici poate influența profund sănătatea, munca și oamenii pe care îi ajuți zilnic.',
      },
    ],
    about: {
      title: 'Cine sunt eu',
      name: 'Ramona L. Ceciu',
      role: 'Lector universitar dr., psiholog, neurobiolog-specialist neuroștiințe, NLP, psihosomatică, hipnoterapie, nutriție și psiho-nutriție, fitoterapie, biofeedback și sănătate integrativă.',
      imageAlt: 'Ramona L. Ceciu, psiholog clinician și psihoterapeut',
    },
    testimonialsTitle: 'Ce spun cei care au ales să descopere biorezonanța',
    closing: {
      title: 'Ești gata să descoperi biorezonanța?',
      lead: 'Locurile sunt limitate și se epuizează repede',
    },
    faqTitle: 'Întrebări frecvente de la participanți',
    faq: [
      {
        question: 'Pot participa atât online, cât și fizic la workshop?',
        answer:
          'Da. Workshopul se desfășoară atât în format online, cât și fizic, la clinică, în funcție de sesiunea programată. Este același workshop, disponibil în două variante de participare, pentru confortul și preferințele fiecărui participant.',
      },
      {
        question: 'Cine poate participa la workshop?',
        answer:
          'Oricine este interesat de terapiile complementare, indiferent de pregătirea anterioară.',
      },
      {
        question: 'Este același lucru cu cursul complet?',
        answer:
          'Nu. Workshopul este o introducere practică, intensivă, de o zi. Cursul complet are 4 module aprofundate. Mulți participanți aleg cursul complet după ce participă la workshop.',
      },
      {
        question: 'Trebuie să am experiență în terapii complementare?',
        answer:
          'Nu. Workshopul este deschis tuturor, indiferent de pregătire. Dacă ești curios, ești binevenit.',
      },
      {
        question: 'Există o ofertă specială pentru cursul după workshop?',
        answer:
          'Da. Participanții la workshop primesc o ofertă exclusivă pentru înscrierea la cursul de biorezonanță, valabilă doar în ziua evenimentului.',
      },
      {
        question: 'Ce trebuie să aduc cu mine?',
        answer:
          'Doar ceva de notat, curiozitatea și deschiderea. Eu mă voi ocupa de restul, aparat, informații, demonstrații.',
      },
    ],
    form: {
      title: 'Completați formularul',
      name: 'Ramona L. Ceciu',
      subtitle: 'Rezervă locul',
      note: 'După completarea formularului, te voi contacta în cel mai scurt timp.',
      whatsappLabel: 'Mobile / WhatsApp',
      fields: {
        fullName: 'Nume și prenume',
        phone: 'Telefon',
        email: 'Email',
        occupation: 'Ocupație',
        message: 'Mesaj / solicitare',
        consent: 'Sunt de acord cu Politica de Confidențialitate',
      },
      submit: 'Trimite mesajul',
    },
    contact: {
      title: 'Contact',
      address: 'Bucuresti, Str. Chiristigiilor 30',
      website: 'www.lifeandmindart.com',
      followLabel: 'Follow me',
      mapAlt: 'Harta cu localizarea cabinetului, Strada Chiristigiilor, București',
    },
  },

  course: {
    meta: {
      title: 'CURSURI DE BIOREZONANȚĂ',
      description:
        'Medicina viitorului, o profesie nouă. Biochimie Clinică și Știința Neurofeedback-ului.',
    },
    eyebrow: 'CURSURI DE BIOREZONANȚĂ',
    title: 'MEDICINA VIITORULUI O PROFESIE NOUĂ INVESTEȘTE ÎN TINE',
    subtitle: 'Biochimie Clinică ȘI Știința Neurofeedback-ului',
    imageAlt: 'Ramona L. Ceciu la birou, cu aparatul de biorezonanță SCIO',
    modulesTitle: 'Module',
    modules: [
      { label: 'MODUL 1', day: 'Luni', date: '25 Mai | 19:00 - 21:00' },
      { label: 'MODUL 2', day: 'Marți', date: '26 Mai | 19:00 - 21:00' },
      { label: 'MODUL 3', day: 'Miercuri', date: '27 Mai | 19:00 - 21:00' },
      { label: 'MODUL 4', day: 'Joi', date: '28 Mai | 19:00 - 21:00' },
    ],
    motto: 'Privește cauzele, nu doar simptomele.',
    about: {
      title: 'Despre mine',
      name: 'Ceciu L. Ramona, PhD',
      role: 'Lect.univ.dr., psiholog, neurobiolog - specialist neuroștiințe, NLP, psihosomatică, hipnoterapie, psiho-nutriție, fitoterapie, medicină energetică și sănătate integrativă',
      imageAlt: 'Ramona L. Ceciu, psiholog clinician și psihoterapeut',
    },
    promise: {
      title: 'Transformă pasiunea pentru sănătate într-o profesie',
      lead: 'Cursurile noastre de biorezonanță îți oferă baza teoretică, practica ghidată și accesul la certificarea internațională de care ai nevoie.',
      items: [
        {
          title: 'Învățare structurată',
          body: 'Fiecare nivel este structurat în module care îți asigură o bază teoretică și practică bine fundamentată.',
        },
        {
          title: 'Practică pe aparatură reală',
          body: 'După cele 4 module, vei primi 10 ore practică (online) gratuit, inclus în taxă, pe dispozitivele SCIO.',
        },
        {
          title: 'Metodă pas cu pas',
          body: 'Metoda noastră se bazează pe un parcurs gradual, de la bază către niveluri avansate.',
        },
        {
          title: 'Diplomă de participare',
          body: 'La final, vei obține o diplomă de participare care confirmă parcurgerea integrală a modulelor aferente fiecărui nivel.',
        },
        {
          title: 'Comunitate și suport',
          body: 'Faci parte dintr-o comunitate de terapeuți și primești ghidaj constant de la formatori acreditați.',
        },
      ],
    },
    benefitsTitle: 'BENEFICIILE CURSULUI',
    benefits: [
      {
        title: 'Practică',
        paragraphs: [
          'După finalizarea celor 4 module online gratuite incluse în taxa programului, participanții care parcurg toate modulele beneficiază de 10 ore de practică online gratuită, unu la unu, alături de un trainer specializat.',
          'În cadrul acestor sesiuni individuale se realizează evaluarea completă a stării de sănătate, iar practica se desfășoară exclusiv pe aparatele noastre, cu software-ul OMNIS®, exact în condițiile reale de lucru cu viitorii clienți.',
        ],
      },
      {
        title: 'Competențe',
        paragraphs: [
          'Vei învăța să faci evaluări energetice de sănătate, să alegi protocoale adaptate și să construiești planuri terapeutice personalizate. În plus, îți vei dezvolta abilități de comunicare cu clientul și vei putea obține rezultate practice care cresc încrederea în munca ta.',
          'Îți crești rapid nivelul profesional (psihologi, terapeuți, medici, practicieni) prin abilități concrete de evaluare energetică și intervenție.',
        ],
      },
      {
        title: 'Integrare',
        paragraphs: [
          'Biorezonanța se integrează ușor cu alte discipline pe care le practici deja: medicină, nutriție, terapii alternative, psihoterapie sau coaching.',
          'Nu îți schimbă identitatea profesională, ci îți adaugă un instrument valoros, non-invaziv, care îți amplifică numărul clienților.',
          'Poți combina protocoalele cu metodele existente, obținând rezultate rapide și durabile.',
        ],
      },
      {
        title: 'Rețea',
        paragraphs: [
          'După absolvire, nu ești singur, intri într-o comunitate internațională de terapeuți și practicieni QX World.',
          'Aici găsești schimb de experiență, supervizare, mentorat și oportunități de colaborare pe proiecte.',
          'În plus, practica ta se poate extinde dincolo de granițe, prin lucrul online la distanță, iar tu beneficiezi de resurse exclusive, evenimente și colaborări care îți lărgesc aria profesională.',
        ],
      },
      {
        title: 'Aparat',
        paragraphs: [
          'Aparatul îți permite să pui în practică tot ceea ce înveți prin lucrul la distanță cu clienții și dezvoltarea propriei activități/afacere.',
          'Cum fac asta? Simplu!',
          '1. Am aparatul meu; 2. Închiriez aparat contracost; 3. Cumpăr aparat.',
          'Pentru achiziția sau închirierea unui aparat SCIO, sună la 0723 504 025.',
        ],
      },
      {
        title: 'Legislatie',
        paragraphs: [
          'În România, există din păcate o practică eronată și înșelătoare prin care unele persoane susțin că pot emite certificate naționale pentru biorezonanță eliberate de către Ministerul Muncii.',
          'Ministerul Muncii din România nu emite și nu recunoaște certificări naționale pentru biorezonanță.',
          'În prezent, există o singură soluție pentru practicarea biorezonanței în România, soluție pe care o explic detaliat în cadrul Modulului 2.',
        ],
      },
      {
        title: 'Certificare',
        paragraphs: [
          'Certificarea internațională reprezintă un pas suplimentar, distinct de programul de formare, și nu este inclusă în costul cursului.',
          'Aceasta este disponibilă contra cost, în două variante:',
          '– certificare internațională pe aparatele SCIO (obligatoriu să ai aparat)',
          '– certificare internațională generală, valabilă pentru terapiile prin biorezonanță.',
        ],
      },
    ],
    scienceEyebrow: 'DESPRE BIOFEEDBACK ȘI BIOREZONANȚĂ?',
    scienceTitle: 'Știința frecvențelor celulare',
    scienceQuestion: 'Cum lucrează biofeedback-ul și biorezonanța?',
    scienceParagraphs: [
      'Corpul omenesc este alcătuit din miliarde de celule, fiecare vibrând la o frecvență proprie. Atunci când aceste frecvențe sunt perturbate, prin stres, oboseală, alimentație necorespunzătoare sau factori emoționali, organismul intră în dezechilibru.',
      'Biofeedback-ul înregistrează aceste deviații subtile, iar biorezonanța transmite vibrațiile potrivite pentru a restabili armonia celulară. Astfel, corpul nu este „forțat" să se vindece, ci este ghidat să-și reactiveze propria capacitate de auto-reglare, Auto-vindecare.',
      'Este o metodă blândă, non-invazivă și foarte precisă, care aduce rezultate vizibile atât la nivel fizic, cât și psiho-emoțional.',
    ],
    scienceImageAlt: 'Reprezentare a unei molecule de ADN',
    scienceMoreTitle: 'Mai multe despre metodă',
    scienceMore: [
      {
        question: 'Cum detectează cauzele reale?',
        paragraphs: [
          'Biofeedback-ul nu se limitează la a arăta manifestările vizibile ale unei afecțiuni. Tehnologia merge mai adânc, la nivelul frecvențelor celulare, unde pot fi identificate dezechilibrele subtile care declanșează bolile.',
          'De exemplu, durerile de cap repetate nu sunt doar „un simptom", ci pot fi generate de stres, tulburări digestive sau dezechilibre energetice. Biorezonanța reușește să identifice cauzele profunde ale dezechilibrelor și să acioneze direct asupra lor.',
          'Prin aceasta, practicianul nu mai tratează doar efectul, ci ajută clientul să corecteze sursa problemei. Este o abordare holistică și profundă, care schimbă modul de înțelegere a sănătății.',
        ],
      },
      {
        question: 'Cum se conectează mintea cu corpul?',
        paragraphs: [
          'Biorezonanța este un limbaj subtil între conștiință și energie. Sănătatea nu este doar absența bolii, ci o stare de echilibru între minte, corp și emoții.',
          'Biofeedback-ul arată în timp real modul în care stresul, emoțiile și gândurile influențează starea fizică.',
          'Biorezonanța intervine pentru a restabili echilibrul energetic, permițând corpului să-și recapete vitalitatea, iar minții să-și regăsească liniștea.',
          'Această conexiune este esențială pentru practicieni: nu tratezi doar corpul sau doar psihicul, ci creezi o punte între cele două. Astfel, terapia devine completă, cu efecte vizibile atât în reducerea simptomelor, cât și în creșterea calității vieții.',
        ],
      },
      {
        question: 'Funcționează și la distanță?',
        paragraphs: [
          'Un aspect extraordinar al biorezonanței este capacitatea ei de a lucra și la distanță. Prin accesarea câmpului informațional al persoanei, aparatul poate identifica și armoniza frecvențele chiar dacă clientul se află în altă parte a lumii.',
          'Această metodă inovatoare permite terapie pentru persoane care nu se pot deplasa sau care trăiesc în alte orașe sau țări. Este ca și cum tehnologia creează o punte invizibilă între terapeut și client, prin intermediul frecvențelor.',
          'Pentru practicieni, aceasta înseamnă o deschidere enormă: pot ajuta clienți de oriunde, oferind sesiuni sigure și eficiente la distanță.',
        ],
      },
      {
        question: 'Accesează subconștientului și supraconștientului?',
        paragraphs: [
          'Reglarea emoțiilor și vindecarea la nivel profund.',
          'Biofeedback-ul nu se oprește la corpul fizic, ci pătrunde până în straturile subconștientului și supraconștientului, acolo unde emoțiile reprimate, traumele și convingerile limitative blochează energia vitală. Prin reglarea acestor niveluri, se eliberează tensiuni vechi și se creează spațiu pentru echilibru emoțional și claritate mentală.',
          'Biorezonanța devine astfel un instrument de transformare personală, nu doar o terapie pentru corp. Ea ajută la recunoașterea cauzelor emoționale ale bolii și la integrarea lor într-un proces de vindecare holistică.',
        ],
      },
      {
        question: 'Lucrează pe câmpurile energetice subtile?',
        paragraphs: [
          'Dincolo de materie, către dimensiunea nevăzută a ființei.',
          'Biorezonanța nu se limitează doar la corpul fizic. Ea acționează și asupra corpurilor subtile, emoțional, mental și energetic, care influențează direct starea noastră de sănătate.',
          'Dezechilibrele apărute în aceste planuri invizibile se manifestă mai târziu ca boli sau tulburări la nivel fizic. Prin accesarea câmpurilor energetice, biofeedback-ul și biorezonanța permit detectarea acestor perturbări înainte să devină probleme majore.',
          'Astfel, terapia nu este doar curativă, ci și preventivă, deschizând o nouă perspectivă asupra sănătății: una holistică, ce îmbină știința cu dimensiunea invizibilă a ființei.',
        ],
      },
      {
        question: 'Care este diferența între medicina clasică și biorezonanță?',
        paragraphs: [
          'Terapiile clasice (acupunctură, injecții, stimulare mecanică) lucrează prin intervenții directe asupra corpului fizic.',
          'Biorezonanța, în schimb, nu are nevoie de ace sau proceduri dureroase: ea detectează frecvențele celulare și le armonizează cu ajutorul tehnologiei. Este o metodă complet non-invazivă, blândă și sigură, accesibilă oricui, inclusiv celor care nu tolerează terapiile clasice.',
          'Medicina clasică acționează predominant asupra efectelor: tratează simptomele vizibile prin medicamente sau intervenții chirurgicale.',
          'Medicina energetică merge mai adânc: ea caută dezechilibrele invizibile din câmpurile subtile și restabilește armonia la nivel energetic, emoțional și mental. Astfel, corpul își activează singur resursele de vindecare, fără efecte secundare.',
          'Cele două abordări nu se exclud, ci se completează.',
        ],
      },
    ],
    programme: {
      title: 'PROGRAMUL CURSURILOR',
      levels: [
        {
          label: 'NIVELUL 1',
          body: 'Nivelul 1 cuprinde 4 module fundamentale (teorie, logistică, tehnică și interpretare), oferind cursantului bazele complete necesare pentru a lucra pe aparatul de biorezonanță: evaluări, identificări și interpretări.',
        },
        {
          label: 'NIVELUL 2',
          body: 'Nivelul 2 reprezintă etapa de aprofundare, incluzând 4 module repartizate în două terapii, prin care cursantul evoluează de la cunoașterea de bază la aplicarea specifică și avansată.',
        },
      ],
      callToAction: 'Pentru înscriei și informații, vă rugăm să sunați la',
    },
    formatEyebrow: 'CUM DECURGE UN CURS',
    formatTitle: 'O combinație de teorie, practică și studii de caz',
    formatItems: [
      {
        title: 'Formatul cursurilor pas cu pas structurat;',
        body: [
          'Cursurile sunt atent structurate și urmăresc o progresie naturală: începem cu teoria de bază, continuăm cu demonstrații practice, introducem exemple concrete și încheiem cu studii de caz.',
          'Această succesiune îți garantează că vei înțelege conceptele pas cu pas și vei ști să le aplici imediat în practică.',
        ],
      },
      {
        title: 'Grup privat de discuții și îndrumări pe Whatsapp;',
        body: [
          'Acces la un grup privat de WhatsApp, dedicat discuțiilor, îndrumării și suportului continuu, unde cursanții pot adresa întrebări și primi clarificări pe parcursul programului.',
        ],
      },
      {
        title: 'Metodă interactivă exclusiv prin sesiuni online;',
        body: [
          'Toate modulele se desfășoară online, pentru a fi accesibile oriunde te afli. Vei participa la sesiuni live, interactive, în care poți pune întrebări și primi răspunsuri în timp real.',
          'În plus, beneficiezi de traininguri online suplimentare și de un set de materiale suport, astfel încât să ai acces la informația predată.',
        ],
      },
      {
        title: 'Durata clară și program fix stabilit;',
        body: [
          'Fiecare modul durează 2 ore, conform unui program bine stabilit, afișat pe site. Programul exact (cu zile și ore) este disponibil în secțiunea „Detalii / plătă", unde ai și butonul de înscriere pentru fiecare modul.',
          'În acest fel, știi clar când se desfășoară cursul și îți poți organiza timpul în avans.',
        ],
      },
      {
        title: 'Cursuri interactive cu exerciții practice aplicate.',
        body: [
          'Un element cheie al programului este interactivitatea: nu doar asculți, ci și aplici. Demonstrațiile live pe aparatele de biorezonanță îți arată exact cum se lucrează, iar exercițiile aplicate pe colegii de grup te ajută să câștigi experiență practică reală.',
          'Învățarea devine dinamică și mult mai eficientă.',
        ],
      },
    ],
    testimonialsTitle: 'Mărturii ale cursanților',
    testimonialsLead:
      'Află cum cursurile de biorezonanță au schimbat carierele celor care au ales această formare unică.',
    faqTitle: 'Întrebări frecvente de la participanți',
    faqImageAlt: 'Participantă ridicând mâna pentru a pune o întrebare',
    faq: [
      {
        question: 'Cine poate participa la aceste cursuri?',
        answer:
          'Oricine este interesat de terapiile complementare, indiferent de pregătirea anterioară. Cursurile sunt ideale pentru psihologi, medici, terapeuți, dar și pentru cei care vor să înceapă o nouă carieră.',
      },
      {
        question: 'Am nevoie de cunoaștere medicală?',
        answer:
          'Nu, poate participa orcine, însă dacă există aduce un plus de valoare. Formarea pornește de la zero, iar modulele fundamentale sunt create astfel încât fiecare cursant să înțeleagă conceptele pas cu pas.',
      },
      {
        question: 'Cum se desfășoară cursurile?',
        answer:
          'Cursurile au loc online, live, în sesiuni interactive de două ore, completate cu materiale suport. Include atât teorie, cât și aplicații practice pe aparatele de biorezonanță.',
      },
      {
        question: 'Este necesar să am aparat de biorezonanță?',
        answer:
          'Nu neapărat. În timpul formării vei lucra pe aparatele puse la dispoziție de organizatori. Ulterior, poți achiziționa aparatul prin programul nostru special de achiziție asistată.',
      },
      {
        question: 'Este metoda sigură?',
        answer:
          'Da. Biorezonanța și biofeedback-ul sunt metode non-invazive, utilizate pe scară largă la nivel global. Formarea te pregătește să le aplici responsabil și profesionist.',
      },
      {
        question: 'Pot să îmi deschid un cabinet cu biorezonanță?',
        answer:
          'Da. Oricine poate să își deschidă un cabinet de biorezonanță și să obțină un venit suplimentar sau chiar principal. Certificatul recunoscut internațional îți oferă baza legală și profesională pentru a lucra independent, a-ți deschide propriul cabinet sau a integra biorezonanța în activitatea ta actuală, fie că ești medic, psiholog, terapeut sau pur și simplu pasionat de sănătate.',
      },
    ],
    contact: {
      title: 'Pentru mai multe detalii?',
      nameLabel: 'Nume și Prenume',
      name: 'Ceciu Ramona',
      phoneLabel: 'Telefon',
      emailLabel: 'Email',
      whatsappTitle: 'WhatsApp',
      whatsappBody: [
        'Pentru alte detalii, mă poți contacta telefonic sau pe WhatsApp la numărul alăturat.',
        'După înscriere, vei fi adăugat în grupul de WhatsApp al cursului.',
        '📞 Mă poți suna sau scrie oricând!',
      ],
    },
  },

  legal: {
    meta: {
      title: 'Politica de confidențialitate',
      description:
        'CECIU LUCIA-RAMONA – CABINET INDIVIDUAL PSIHOLOGIE tratează cu seriozitate confidențialitatea datelor vizitatorilor săi.',
    },
    eyebrow: 'Politica de confidențialitate',
    lastUpdatedLabel: 'Ultima revizuire',
  },

  cookies: {
    title: 'Date de urmărire și cookie-uri',
    /* Quoted from the site's own Politica de confidențialitate. */
    body: 'Folosim cookie-uri și tehnologii de urmărire similare pentru a urmări activitatea din serviciile noastre și pentru a păstra anumite informații.',
    accept: 'Accept',
    reject: 'Refuz',
    settings: 'Setări',
    policyLink: 'Politica de confidențialitate',
    saved: 'Preferințele au fost salvate.',
    manage: 'Cookie-uri',
    categories: {
      necessary: {
        title: 'Strict necesare',
        description:
          'Cookie-urile sunt trimise browserului dumneavoastră de pe un site web și stocate pe dispozitivul dumneavoastră având scopuri diverse (ex: posibilitatea de a rămâne autentificat pe un site fără a reintroduce parola de fiecare dată, reținerea preferințelor personale, setări alese de dumneavoastră ș.a.).',
      },
      analytics: {
        title: 'Analytics',
        description:
          'Putem folosi furnizori de servicii terți pentru a monitoriza și analiza utilizarea serviciilor noastre.',
      },
    },
    alwaysOn: 'Activ permanent',
    save: 'Salvează',
  },

  footer: {
    menuTitle: 'Meniu',
    contactTitle: 'Contact',
    address: 'București, Ilfov, Romania, EU',
    copyright: '© Copyright 2022 lideandmindart.com',
    credit: 'Site realizat de',
  },

  notFound: {
    meta: {
      title: 'Pagina nu a fost găsită',
      description: 'Pagina nu a fost găsită.',
    },
    title: 'Pagina nu a fost găsită',
    cta: 'Home',
  },
};
