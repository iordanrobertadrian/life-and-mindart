import type { Locale } from '@/lib/i18n';

/**
 * The two bioresonance pages that hang off "Evenimente".
 *
 * Their copy lives in the dictionary (`workshop` and `course`), because both pages are
 * fully translated prose rather than a repeating record. All that is needed here is the
 * slug table, so the URLs read naturally in each language and `hreflang` can be built.
 */
export type ProgrammeId = 'workshop' | 'course';

export const programmes: readonly { id: ProgrammeId; slug: Record<Locale, string> }[] = [
  { id: 'workshop', slug: { ro: 'workshop-biorezonanta', en: 'bioresonance-workshop' } },
  { id: 'course', slug: { ro: 'cursuri-biorezonanta', en: 'bioresonance-courses' } },
] as const;

export function getProgramme(locale: Locale, slug: string): ProgrammeId | undefined {
  return programmes.find((programme) => programme.slug[locale] === slug)?.id;
}

export function programmeSlug(id: ProgrammeId, locale: Locale): string {
  return programmes.find((programme) => programme.id === id)!.slug[locale];
}

export function programmeSlugs(slug: string, locale: Locale): Record<Locale, string> | undefined {
  return programmes.find((programme) => programme.slug[locale] === slug)?.slug;
}
