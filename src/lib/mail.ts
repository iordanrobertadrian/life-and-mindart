import { site } from '@/content/site';

/**
 * Outbound e-mail, via the Resend HTTP API.
 *
 * Deliberately no SDK: one `fetch` against a documented REST endpoint is smaller, has no
 * transitive dependencies, and cannot break on a minor version bump. Swap the URL and headers
 * here if the practice ever moves to another provider — nothing else in the codebase knows
 * how mail is sent.
 */

export interface Attachment {
  filename: string;
  /** Base64, as Resend expects. */
  content: string;
}

interface ContactMessage {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
  otherInfo: string;
  location: string;
  preferredLanguage: string;
  attachments: Attachment[];
  locale: string;
  submittedAt: Date;
}

interface WorkshopMessage {
  fullName: string;
  phone: string;
  email: string;
  occupation: string;
  message: string;
  locale: string;
  submittedAt: Date;
}

/** Never interpolate visitor input into HTML without escaping it. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

/** One `<tr>` per filled-in field; empty fields are left out rather than shown blank. */
function rows(entries: [string, string][]): string {
  return entries
    .filter(([, value]) => value.trim() !== '')
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#6e6474;vertical-align:top;white-space:nowrap;">${label}</td>` +
        `<td style="padding:8px 0;font-weight:600;">${escapeHtml(value)}</td></tr>`,
    )
    .join('');
}

function wrap(heading: string, locale: string, body: string): string {
  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#1e1420;line-height:1.65;">
      <p style="margin:0 0 4px;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#5e3a6a;">
        ${site.name} &middot; ${locale.toUpperCase()}
      </p>
      <h1 style="margin:0 0 20px;font-size:20px;">${heading}</h1>
      ${body}
    </div>
  `;
}

async function send(payload: Record<string, unknown>): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) {
    throw new Error(
      'Mail is not configured. Set RESEND_API_KEY and CONTACT_FROM_EMAIL (see .env.example).',
    );
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [process.env.CONTACT_TO_EMAIL ?? site.contact.email],
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend responded ${response.status}: ${await response.text()}`);
  }
}

export async function sendContactMessage(payload: ContactMessage): Promise<void> {
  const name = `${payload.firstName} ${payload.lastName}`.trim();

  const html = wrap(
    'Mesaj nou din formularul de contact',
    payload.locale,
    `<table style="border-collapse:collapse;width:100%;max-width:560px;">
       ${rows([
         ['Nume', payload.firstName],
         ['Prenume', payload.lastName],
         ['Telefon', payload.phone],
         ['Email', payload.email],
         ['Subiect', payload.topic],
         ['Locație', payload.location],
         ['Limba preferată', payload.preferredLanguage],
         ['Alte informații', payload.otherInfo],
         ['Primit', payload.submittedAt.toISOString()],
       ])}
     </table>
     <div style="margin-top:20px;padding:18px 20px;background:#faf6fb;border-left:3px solid #c9a961;border-radius:0 10px 10px 0;">
       ${escapeHtml(payload.message).replace(/\n/g, '<br>')}
     </div>`,
  );

  await send({
    subject: `Mesaj nou de la ${name}`,
    html,
    ...(payload.attachments.length > 0 ? { attachments: payload.attachments } : {}),
    ...(looksLikeEmail(payload.email) ? { reply_to: payload.email } : {}),
  });
}

export async function sendWorkshopMessage(payload: WorkshopMessage): Promise<void> {
  const html = wrap(
    'Rezervare nouă — Workshop biorezonanță',
    payload.locale,
    `<table style="border-collapse:collapse;width:100%;max-width:560px;">
       ${rows([
         ['Nume și prenume', payload.fullName],
         ['Telefon', payload.phone],
         ['Email', payload.email],
         ['Ocupație', payload.occupation],
         ['Primit', payload.submittedAt.toISOString()],
       ])}
     </table>
     ${
       payload.message.trim()
         ? `<div style="margin-top:20px;padding:18px 20px;background:#faf6fb;border-left:3px solid #c9a961;border-radius:0 10px 10px 0;">
              ${escapeHtml(payload.message).replace(/\n/g, '<br>')}
            </div>`
         : ''
     }`,
  );

  await send({
    subject: `Rezervare workshop — ${payload.fullName}`,
    html,
    reply_to: payload.email,
  });
}
