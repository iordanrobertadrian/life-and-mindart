import { notFound } from 'next/navigation';

/**
 * Catches every URL that no real route claims and hands it to `not-found.tsx`.
 *
 * Without this, Next serves its own bare black 404 page outside the site's layout — no
 * header, no way back, no branding. With it, a mistyped address still lands somewhere that
 * looks like the practice and offers a route onward.
 */
export default function UnmatchedRoute(): never {
  notFound();
}
