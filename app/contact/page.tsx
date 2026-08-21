import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock3 } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/reveal"
import { siteConfig } from "@/lib/site-config"
import { photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gas Safety and Plumbing Engineering Ltd for a free quote, or call our 24/7 line for emergency gas, heating, plumbing and electrical call-outs in Enfield and London.",
}

const infoCards = [
  {
    icon: Phone,
    title: "Call us",
    detail: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email us",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    detail: siteConfig.address.full,
    href: siteConfig.mapLink,
  },
  {
    icon: Clock3,
    title: "Opening hours",
    detail: siteConfig.hours,
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your job"
        description="Send us the details for a free quote, or call our 24/7 line if you need help right now."
        image={photos.londonThinHouse}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {infoCards.map((card, i) => {
              const content = (
                <div className="h-full rounded-2xl border border-border bg-white p-6 card-hover">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700">
                    <card.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-semibold text-brand-blue-950 text-sm">{card.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed break-words">{card.detail}</p>
                </div>
              )
              return (
                <Reveal key={card.title} delay={i * 0.06}>
                  {card.href ? (
                    <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </Reveal>
              )
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
            <div>
              <SectionHeading
                eyebrow="Send an enquiry"
                title="Request your free quote"
                description="Fill in the form and we'll get back to you as soon as possible — usually the same day."
                className="mb-8"
              />
              <ContactForm />
            </div>
            <Reveal delay={0.15}>
              <div className="h-full min-h-[420px] rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="Map showing our location at 232a Hertford Road, Enfield, London"
                  src={siteConfig.mapEmbedSrc}
                  className="h-full w-full min-h-[420px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
