/**
 * Every URL that existed on the old WordPress site, mapped to its new home.
 *
 * These are served as 301 (permanent) from `proxy.ts`, which means Google transfers the
 * ranking of the old page to the new one and nobody who saved or shared a link ever lands on
 * a 404. Keys are lower-cased, decoded, and written *without* a trailing slash — the
 * proxy normalises the incoming path the same way before looking it up.
 */
export const legacyRedirects: Readonly<Record<string, string>> = {
  // --- Romanian ---------------------------------------------------------------------------
  '/about': '/despre',
  '/telehealth-telepsychology-psihologie-online': '/servicii/telehealth-telepsychology',
  '/psihologie-clinica': '/servicii/psihologie-clinica',
  '/psihoterapie': '/servicii/psihoterapie',
  '/hipnoterapie': '/servicii/hipnoterapie',
  '/servicii-corporate': '/servicii/servicii-corporate',
  '/evenimente-oferte-resurse': '/evenimente',
  '/cursuri-dezvoltare-personala': '/evenimente',
  // The workshop page was published with "Worksop" in its slug.
  '/worksop-biorezonanta': '/evenimente/workshop-biorezonanta',
  '/curs-biorezonanta': '/evenimente/cursuri-biorezonanta',
  '/revista-publicatii': '/publicatii',
  '/politica-de-confidentialitate': '/legal/politica-de-confidentialitate',

  // Old WordPress post permalinks (date-based).
  '/2022/08/25/anxietatea-si-tulburarile-psihosomatice': '/publicatii/anxietatea-si-tulburarile-psihosomatice',
  // The original permalink ended in an OBJECT REPLACEMENT CHARACTER (%EF%BF%BC).
  '/2022/08/25/anxietatea-si-tulburarile-psihosomatice￼':
    '/publicatii/anxietatea-si-tulburarile-psihosomatice',
  '/2022/08/25/hello-world': '/publicatii/rolul-dopaminei-in-creier-si-sanatate',

  // WordPress plumbing that should never have been public.
  '/wp-admin': '/',
  '/wp-login.php': '/',
  '/feed': '/publicatii',
  '/category/uncategorized': '/publicatii',

  // --- English ----------------------------------------------------------------------------
  '/en/servicii': '/en/services',
  '/en/telehealth-telepsychology-psihologie-online': '/en/services/telehealth-telepsychology',
  '/en/psihologie-clinica': '/en/services/clinical-psychology',
  '/en/psihoterapie': '/en/services/psychotherapy',
  '/en/hipnoterapie': '/en/services/hypnotherapy',
  '/en/servicii-corporate': '/en/services/corporate-services',
  '/en/evenimente-oferte-resurse': '/en/events',
  '/en/worksop-biorezonanta': '/en/events/bioresonance-workshop',
  '/en/curs-biorezonanta': '/en/events/bioresonance-courses',
  '/en/revista-publicatii': '/en/publications',
  '/en/politica-de-confidentialitate': '/en/legal/privacy-policy',
  '/en/2022/08/25/hello-world': '/en/publications/rolul-dopaminei-in-creier-si-sanatate',
};
