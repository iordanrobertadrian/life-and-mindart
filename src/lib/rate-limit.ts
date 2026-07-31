/**
 * A deliberately small, in-memory rate limiter for the contact form.
 *
 * Enough to stop a bot hammering the endpoint from one address. It is per-instance, which is
 * the right trade-off here: a therapy practice receives a handful of messages a day, and the
 * alternative — a hosted key-value store — would be a recurring cost and another vendor
 * holding data for no real gain.
 */

const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds: number } {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recent.length >= MAX_REQUESTS) {
    const oldest = recent[0] ?? now;
    return { allowed: false, retryAfterSeconds: Math.ceil((WINDOW_MS - (now - oldest)) / 1000) };
  }

  recent.push(now);
  hits.set(key, recent);

  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [entryKey, timestamps] of hits) {
      if (timestamps.every((timestamp) => now - timestamp >= WINDOW_MS)) hits.delete(entryKey);
    }
  }

  return { allowed: true, retryAfterSeconds: 0 };
}
