import { MailIcon, PhoneIcon, WhatsAppIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { Reveal } from '@/components/ui/reveal';
import { site } from '@/content/site';

/**
 * "Mă poți contacta oricînd" — the closing line of the original home page, given the three
 * channels the site actually publishes. No promise is made here that the old site did not
 * already make: the heading is its own sentence, and the buttons are the contact details.
 */
export function ContactCta({ title, contactLabel, contactHref }: {
  title: string;
  contactLabel: string;
  contactHref: string;
}) {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(85% 70% at 20% 0%, #f6e6dc 0%, rgba(246,230,220,0) 60%),' +
            'radial-gradient(80% 70% at 85% 100%, #e9e3f0 0%, rgba(233,227,240,0) 65%),' +
            'linear-gradient(180deg, #f3ebe1 0%, #fbf8f4 100%)',
        }}
      />

      <Container width="narrow" className="text-center">
        <Reveal>
          <h2 className="text-h2 text-plum-950">{title}</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={contactHref} size="lg">
              {contactLabel}
            </Button>
            <Button href={`tel:${site.contact.phone}`} variant="outline" size="lg">
              <PhoneIcon className="h-4 w-4" />
              {site.contact.phoneDisplay}
            </Button>
            <Button href={site.contact.whatsapp} variant="outline" size="lg" external>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </Reveal>

        <Reveal delay={190}>
          <a
            href={`mailto:${site.contact.email}`}
            className="mt-9 inline-flex items-center gap-2.5 text-sm text-ink-muted transition-colors duration-200 hover:text-plum-800"
          >
            <MailIcon className="h-4 w-4 text-gold-600" />
            {site.contact.email}
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
