import { NextResponse, type NextRequest } from 'next/server';

import { defaultLocale, isLocale, toInternalSegment, type Locale } from '@/lib/i18n';
import { legacyRedirects } from '@/lib/legacy-redirects';

/**
 * Runs before every matching request. (Named `proxy`, not `middleware` — Next 16 renamed the
 * convention; the behaviour is identical.)
 *
 * Two jobs, in this order:
 *
 *  1. 301 every URL of the old WordPress site to its new home, so no Google ranking and no
 *     link anyone ever shared is lost. (Doing this here rather than in `next.config.ts`
 *     guarantees it runs *before* the locale rewrite below.)
 *  2. Rewrite the public, localised path onto the canonical internal route
 *     (`/en/about` -> `/en/despre`, `/despre` -> `/ro/despre`).
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // ---- 1. Legacy URLs -------------------------------------------------------------------
  const normalised = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const legacyTarget = legacyRedirects[decodeURIComponent(normalised).toLowerCase()];
  if (legacyTarget) {
    return NextResponse.redirect(new URL(legacyTarget + search, request.url), 301);
  }

  // A trailing slash is one extra redirect for every visitor — normalise it away.
  if (normalised !== pathname) {
    return NextResponse.redirect(new URL(normalised + search, request.url), 301);
  }

  const segments = pathname.split('/').filter(Boolean);

  // `/ro/...` is never a public URL: Romanian lives at the root.
  if (segments[0] === defaultLocale) {
    const stripped = '/' + segments.slice(1).join('/');
    return NextResponse.redirect(new URL(stripped + search, request.url), 301);
  }

  // ---- 2. Locale rewrite ----------------------------------------------------------------
  let locale: Locale = defaultLocale;
  let rest = segments;

  if (segments[0] && isLocale(segments[0])) {
    locale = segments[0];
    rest = segments.slice(1);
  }

  const [publicSegment, ...tail] = rest;
  const internalSegment = publicSegment ? toInternalSegment(locale, publicSegment) : null;

  // Unknown first segment -> let it fall through so the localised 404 page renders.
  const internalPath = ['', locale, ...(internalSegment ? [internalSegment, ...tail] : rest)].join('/');

  const url = request.nextUrl.clone();
  url.pathname = internalPath;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Everything except:
     *  - Next internals and API routes
     *  - files with an extension (/images/*, robots.txt, sitemap.xml, icon.svg …)
     *  - generated metadata images, which live at their real paths (`/ro/opengraph-image`)
     *    and must not be rewritten, or every WhatsApp link preview would 404.
     */
    '/((?!api|_next/static|_next/image|.*opengraph-image|.*twitter-image|apple-icon|.*\\.[\\w]+$).*)',
  ],
};
