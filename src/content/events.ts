import type { Locale } from '@/lib/i18n';

/**
 * The three development groups from the EVENIMENTE, OFERTE & RESURSE page.
 *
 * Each one is transcribed whole: its title, the paragraphs that introduce it, the "Timp" and
 * "Conținut" blocks, and its own pricing offer. The prices are the client's — they are quoted
 * exactly, including the sums that do not divide evenly, and none of them has been rounded or
 * "corrected".
 */

export interface OfferCopy {
  title: string;
  /** The paragraphs that open the block, above "Timp". */
  intro: string[];
  time: string;
  content: string;
  /** The heading of the pricing block. */
  priceTitle: string;
  priceItems: string[];
  image: string;
  imageAlt: string;
}

export interface Offer {
  id: 'dezvoltare-personala' | 'psihonutritie' | 'psihosomatic';
  copy: Record<Locale, OfferCopy>;
}

export const offers: readonly Offer[] = [
  {
    id: 'dezvoltare-personala',
    copy: {
      ro: {
        title: 'Grup de Dezvoltare - „Optimizarea Stării de Bine"',
        intro: [
          'Ești interesat(ă) să faci parte dintr-un grup de dezvoltare personală, să-ți îmbunătățești abilitățile emoționale și sociale, să lucrezi cu obstacolele vieții tale și să înveți cum să faci față stresului, anxietății și autosabotării pentru a fi mai împlinit(ă) și mulțumit(ă) de viață, dar și pentru Optimizarea Stării de Bine și a evolua pe toate planurile?',
          'Atunci te/ vă invit să vă alăturați grupului nostru și să descoperiți resursele de care aveți pentru a vă îmbunătăți viața, pentru a învăța cum să aveți încredere în voi înșivă și în capacitatea dvs. de a face față oricăror evenimente și situații pe care viața vi le poate aduce și de a câștiga încredere, stimă de sine și o stare de bine meritată.',
        ],
        time: 'În general ne vom întâlni online o dată pe săptămână timp de 1 oră și jumătate (90 minute) timp de 10 săptămâni (10 sesiuni). Sesiunile vor avea loc, în general, seara, după ora 18, în timpul săptămânii sau uneori în weekend.',
        content:
          'Fiecare sesiune va avea un accent specific menit să acopere mai multe aspecte și domenii importante ale vieții care pot beneficia de îmbunătățiri – emoții, cogniții și modele de gândire, comunicare, inteligență emoțională, interacțiune și relații sociale, relații de familie, aspecte de personalitate și comportamente, evoluție spirituală, starea de bine și sănătatea, printre alte teme abordate.',
        priceTitle: 'Oferta!',
        priceItems: [
          'Ofertă GRUP DEZVOLTARE! Plătești pentru 8 ședințe și primești suplimentar 1-2 ședințe de grup gratuite (minim 3 ore)!',
          'Dacă plătești pentru 8 ședințe în avans, primești o reducere, așa că vei plăti doar 1000 de lei (în loc de 1500 de lei) pentru întregul program.',
          'Pentru 2 rate a câte 4 ședințe veți plăti doar 140 RON/ sesiune, deci 560 RON/ rată (in general sunt 4 sesiuni/ lună).',
          'Dacă doriți să plătiți pentru fiecare ședință în parte, prețul este de 150 RON/ ședință – care se plătește cu minim 48 ore înainte de sesiunea live în fiecare săptămână timp de 9 săptămâni (veți primi în plus sesiunea 10 gratuit).',
          'Aveți numai de câștigat indiferent de planul de rate pe care îl alegeți! Locuri limitate – maxim 12 locuri în grup! Bonus suplimentar surpriză (se comunica pe email după înscriere) pentru cei care aduc alte persoane în grup!',
        ],
        image: '/images/grup-dezvoltare.jpg',
        imageAlt: 'Ședință de consiliere psihologică',
      },
      en: {
        title: 'Development Group – "Optimising Wellbeing"',
        intro: [
          'Are you interested in being part of a personal development group, in improving your emotional and social skills, in working with the obstacles in your life and in learning how to cope with stress, anxiety and self-sabotage so as to be more fulfilled and content with life, and also in Optimising your Wellbeing and growing on every level?',
          'Then I invite you to join our group and to discover the resources you have for improving your life, for learning how to have confidence in yourselves and in your capacity to face any events and situations life may bring you, and to gain confidence, self-esteem and the wellbeing you deserve.',
        ],
        time: 'In general we will meet online once a week for an hour and a half (90 minutes) over 10 weeks (10 sessions). The sessions will generally take place in the evening, after 18:00, during the week or sometimes at the weekend.',
        content:
          'Each session will have a specific focus intended to cover several important aspects and areas of life that can benefit from improvement – emotions, cognitions and patterns of thinking, communication, emotional intelligence, social interaction and relationships, family relationships, aspects of personality and behaviours, spiritual development, wellbeing and health, among other themes addressed.',
        priceTitle: 'The offer!',
        priceItems: [
          'DEVELOPMENT GROUP offer! Pay for 8 sessions and receive an additional 1–2 group sessions free (a minimum of 3 hours)!',
          'If you pay for 8 sessions in advance you receive a discount, so you will pay only 1,000 lei (instead of 1,500 lei) for the whole programme.',
          'For 2 instalments of 4 sessions each you will pay only 140 RON per session, so 560 RON per instalment (there are generally 4 sessions a month).',
          'If you would like to pay for each session separately, the price is 150 RON per session – payable at least 48 hours before the live session each week for 9 weeks (you will receive session 10 free on top).',
          'You gain either way, whichever payment plan you choose! Limited places – a maximum of 12 places in the group! An additional surprise bonus (communicated by e-mail after enrolment) for those who bring other people into the group!',
        ],
        image: '/images/grup-dezvoltare.jpg',
        imageAlt: 'A psychological counselling session',
      },
    },
  },

  {
    id: 'psihonutritie',
    copy: {
      ro: {
        title: 'Psiho-Nutriție, Feminitate, Frumusețe',
        intro: [
          'Te confrunți cu provocări când vine vorba de mâncare, obiceiuri și comportamente alimentare? Ați încercat multe diete, dar nimic nu pare să funcționeze? Te gândești constant la alimente și diete? Mănânci mai mult când ești anxios, trist, supărat, furios sau dezamăgit? Aveți modele de gândire specifice legate de alimentație și comportamente alimentare? Atunci nu ești singur(ă)! Mulți oameni trec prin astfel de provocări și trebuie să vă acceptați dificultățile pentru a le putea face față corect.',
          'Grupul nostru de Psiho-Nutriție, Feminitate și Imagine Corporală se concentrează pe abordarea și tratarea aspectelor legate de psiho-nutriție, energie, vitalitate, sănătate și imaginea corporală pentru a vă ajuta să învățați cum să vă vindecați emoțional, energetic și chiar fizic, cum să vă echilibrați gândurile și emoțiile pentru a vă restabili starea de bine și a adopta un stil de viață sănătos ca stare naturală și pentru încetinirea îmbătrânirii, bazat pe studii științifice.',
        ],
        time: 'În general ne vom întâlni online o dată pe săptămână timp de 1 oră și jumătate într-un program de 12 săptămâni (12 sesiuni). Sesiunile vor avea loc seara după ora 18, în timpul săptămânii, sau uneori în weekend.',
        content:
          'Fiecare sesiune va avea un focus specific menit să acopere aspecte importante legate de psihonutriție, greutate și imagine corporală – emoții, cogniții și modele de gândire, relația minte-suflet-corp, stima de sine, imaginea corporală și greutatea, aspectele de personalitate și comportamentele alimentare, alimentație și emoțiii, psihologia dietei și a postului, relațiile și hrana de „confort emoțional", familia și obiceiurile alimentare, instrumente cognitiv-comportamentale și psihosomatice utile în tulburările de alimentație, cum să integrăm stilul de viață sănătos în rutina noastră ca stare naturală, și alte teme.',
        priceTitle: 'Oferta Grup Psiho-nutriție & Feminitate!',
        priceItems: [
          'Plătești pentru 10 sesiuni de grup și primești încă 2 sesiuni de grup gratuite!',
          'Dacă plătiți pentru toate cele 10 ședințe în avans, primiți o reducere, așa că veți plăti doar 1500 RON (în loc de 2400 RON) pentru întregul program.',
          'Pentru 2 rate a câte 5 ședințe, veți plăti 900 RON/ rata de 5 ședințe (datele pentru achitarea ratelor se vor anunța pe email la confirmarea inscrierii).',
          'Dacă doriți să plătiți pentru fiecare ședință separat, prețul este de 200 RON/ sesiune – se plătește cu cel puțin 48 ore înainte de data sesiunii în fiecare săptămână timp de 10 săptămâni (veți primi în plus sesiunile 11 și 12 gratuit).',
          'Aveți numai de câștigat indiferent de planul de rate pe care îl alegeți! Locuri limitate – maxim 12 locuri în grup!',
          'Pentru orice detalii privind plata și programul de interes vă rugăm să completați formularul de Contact și să trimiteți de asemenea e-mail cu aceleași informații pe adresa psy.office8@gmail.com. Mulțumim',
        ],
        image: '/images/grup-psihonutritie.jpg',
        imageAlt: 'Grup de sprijin, participanți zâmbind și aplaudând',
      },
      en: {
        title: 'Psycho-Nutrition, Femininity, Beauty',
        intro: [
          'Do you face challenges when it comes to food, habits and eating behaviours? Have you tried many diets, but nothing seems to work? Do you think about food and diets constantly? Do you eat more when you are anxious, sad, upset, angry or disappointed? Do you have particular patterns of thinking around food and eating behaviours? Then you are not alone! Many people go through such challenges, and you need to accept your difficulties in order to be able to face them properly.',
          'Our Psycho-Nutrition, Femininity and Body Image group focuses on addressing and treating the aspects related to psycho-nutrition, energy, vitality, health and body image, in order to help you learn how to heal emotionally, energetically and even physically, how to balance your thoughts and emotions so as to restore your wellbeing and adopt a healthy lifestyle as a natural state and to slow ageing, on the basis of scientific studies.',
        ],
        time: 'In general we will meet online once a week for an hour and a half in a 12-week programme (12 sessions). The sessions will take place in the evening after 18:00, during the week, or sometimes at the weekend.',
        content:
          'Each session will have a specific focus intended to cover important aspects related to psycho-nutrition, weight and body image – emotions, cognitions and patterns of thinking, the mind-soul-body relationship, self-esteem, body image and weight, aspects of personality and eating behaviours, food and emotions, the psychology of dieting and of fasting, relationships and „emotional comfort" food, the family and eating habits, cognitive-behavioural and psychosomatic tools useful in eating disorders, how to integrate a healthy lifestyle into our routine as a natural state, and other themes.',
        priceTitle: 'Psycho-nutrition & Femininity group offer!',
        priceItems: [
          'Pay for 10 group sessions and receive another 2 group sessions free!',
          'If you pay for all 10 sessions in advance you receive a discount, so you will pay only 1,500 RON (instead of 2,400 RON) for the whole programme.',
          'For 2 instalments of 5 sessions each, you will pay 900 RON per instalment of 5 sessions (the dates for paying the instalments will be announced by e-mail on confirmation of enrolment).',
          'If you would like to pay for each session separately, the price is 200 RON per session – payable at least 48 hours before the date of the session each week for 10 weeks (you will receive sessions 11 and 12 free on top).',
          'You gain either way, whichever payment plan you choose! Limited places – a maximum of 12 places in the group!',
          'For any details about payment and the programme you are interested in, please fill in the Contact form and also send an e-mail with the same information to psy.office8@gmail.com. Thank you',
        ],
        image: '/images/grup-psihonutritie.jpg',
        imageAlt: 'A support group, participants smiling and applauding',
      },
    },
  },

  {
    id: 'psihosomatic',
    copy: {
      ro: {
        title: 'Grupul de Sănătate Psiho-Somatică',
        intro: [
          'Aveți probleme de sănătate? Vă simțiți adesea obosit și aveți dureri fizice fără un diagnostic medical specific? Ești constant nervos, anxios în diferite contexte, ai migrene, tulburări de somn, tulburări digestive și dificultăți de gestionare a stresului? Atunci s-ar putea să suferi de manifestări psiho-somatice și dezechilibre energetice cauzate de diferite conflicte emoționale, traume, frustrare, furie sau temeri pe care poate nici nu știi că le ai.',
          'Fiind parte integrantă din grupul nostru de Sănătate Psiho-Somatică, puteți descoperi cauzele psihologice ale tulburărilor de sănătate fizică și puteți învăța cum să lucrați cu acestea pentru a vă îmbunătăți sănătatea și viața.',
        ],
        time: 'În general ne vom întâlni online o dată pe săptămână (sau uneori la 2 săptămâni) timp de 1 oră și jumătate (90 minute) timp de 8 săptămâni (8 sesiuni). Sesiunile vor avea loc seara, după ora 18, în timpul săptămânii sau uneori în weekend.',
        content:
          'Fiecare sesiune va avea un accent diferit menit să acopere arii și simptome psiho-somatice specifice – emoții, cogniții și modele de gândire care afectează sistemul digestiv, sistemul respirator, sistemul cardiovascular, sistemul nervos, sistemul reproducător, pielea și alte aspecte importante legate de sănătate pe toate planurile minte – suflet – corp.',
        priceTitle: 'Oferta Grup SĂNĂTATE PSIHOSOMATICĂ!',
        priceItems: [
          'Plătești pentru 8 sesiuni de grup și primești încă 2 sesiuni de grup gratuite!',
          'Dacă plătiți pentru toate cele 8 sesiuni în avans, obțineți o reducere, așa că veți plăti doar 1200 de lei (în loc de 2000 de lei) pentru întregul program.',
          'Pentru 2 rate a câte 4 ședințe (185 RON/ sesiune), veți plăti doar 740 RON/ rata.',
          'Dacă doriți să plătiți pentru fiecare ședință separat, prețul este de 200 RON/ ședință – se plătește cu minim 48 ore în avans (veți primi în plus 2 sesiuni gratuit).',
          'Aveți numai de câștigat indiferent de planul de rate pe care îl alegeți! Locuri limitate – maxim 12 locuri în grup!',
          'Ofertele sunt valabile pentru grupuri mai mari de 6 persoane, pentru grupuri mai mici ofertele se comunică pe e-mail.',
          'Se oferă Bonus suplimentar surpriză (se comunica pe email după înscriere) pentru cei care aduc alte persoane în oricare dintre aceste grupuri dedicate sănătății și dezvoltarii umane!',
        ],
        image: '/images/grup-psihosomatic.jpg',
        imageAlt: 'Participanți discutând într-o ședință de terapie de grup',
      },
      en: {
        title: 'The Psycho-Somatic Health Group',
        intro: [
          'Do you have health problems? Do you often feel tired and have physical pain without a specific medical diagnosis? Are you constantly on edge, anxious in different contexts, do you have migraines, sleep disorders, digestive trouble and difficulty managing stress? Then you may be suffering from psycho-somatic manifestations and energy imbalances caused by various emotional conflicts, traumas, frustration, anger or fears that you may not even know you have.',
          'As an integral part of our Psycho-Somatic Health group, you can discover the psychological causes of physical health disorders and learn how to work with them in order to improve your health and your life.',
        ],
        time: 'In general we will meet online once a week (or sometimes once a fortnight) for an hour and a half (90 minutes) over 8 weeks (8 sessions). The sessions will take place in the evening, after 18:00, during the week or sometimes at the weekend.',
        content:
          'Each session will have a different focus intended to cover specific psycho-somatic areas and symptoms – emotions, cognitions and patterns of thinking that affect the digestive system, the respiratory system, the cardiovascular system, the nervous system, the reproductive system, the skin and other important aspects of health on every level of mind – soul – body.',
        priceTitle: 'PSYCHOSOMATIC HEALTH group offer!',
        priceItems: [
          'Pay for 8 group sessions and receive another 2 group sessions free!',
          'If you pay for all 8 sessions in advance you get a discount, so you will pay only 1,200 lei (instead of 2,000 lei) for the whole programme.',
          'For 2 instalments of 4 sessions each (185 RON per session), you will pay only 740 RON per instalment.',
          'If you would like to pay for each session separately, the price is 200 RON per session – payable at least 48 hours in advance (you will receive 2 sessions free on top).',
          'You gain either way, whichever payment plan you choose! Limited places – a maximum of 12 places in the group!',
          'The offers are valid for groups larger than 6 people; for smaller groups the offers are communicated by e-mail.',
          'An additional surprise bonus is offered (communicated by e-mail after enrolment) to those who bring other people into any of these groups dedicated to human health and development!',
        ],
        image: '/images/grup-psihosomatic.jpg',
        imageAlt: 'Participants talking during a group therapy session',
      },
    },
  },
] as const;

export function getOffers(locale: Locale): (OfferCopy & { id: string })[] {
  return offers.map((offer) => ({ ...offer.copy[locale], id: offer.id }));
}
