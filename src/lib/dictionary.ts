import type { Dictionary } from '@/content/dictionary';
import { en } from '@/content/en';
import { ro } from '@/content/ro';

import type { Locale } from './i18n';

const dictionaries: Record<Locale, Dictionary> = { ro, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export type { Dictionary };
