import type { MetadataRoute } from 'next';

import { site } from '@/content/site';

/**
 * Saved to a phone's home screen, the old site appeared as a screenshot with no name and a
 * grey browser bar. This gives it an icon, a name and the brand's plum.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.practitioner.name}`,
    short_name: site.name,
    description:
      'Cabinet de psihologie acreditat CPR. Psihoterapie, hipnoterapie și evaluare clinică, în București și online.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf8f4',
    theme_color: '#1e1420',
    lang: 'ro-RO',
    categories: ['health', 'medical', 'lifestyle'],
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  };
}
