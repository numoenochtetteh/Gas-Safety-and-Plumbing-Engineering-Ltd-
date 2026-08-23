import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock3, ArrowUpRight } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { siteConfig } from "@/lib/site-config";
import { photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gas Safety and Plumbing Engineering Ltd for a free quote, or call our 24/7 line for emergency gas, heating, plumbing and electrical call-outs in Enfield and London.",
};

const infoCards = [
  {
    icon: Phone,
    title: "Call us",
    label: "Speak directly to our team",
    detail: siteConfig.phoneDisplay,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    title: "Email us",
    label: "Send your enquiry anytime",
    detail: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    title: "Visit us",
    label: "Find us in Enfield",
    detail: siteConfig.address.full,
    href: siteConfig.mapLink,
  },
  {
    icon: Clock3,
    title: "Opening hours",
    label: "Emergency help available",
    detail: siteConfig.hours,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <SiteShell>
      {/* Hero */}
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your job"
        description="Send us the details for a free quote, or call our 24/7 line if you need help right now."
        image={photos.londonThinHouse}
        crumbs={[{ label: "Contact" }]}
      />

      <section className="section-y overflow-hidden bg-slate-50/60">
        <div className="container-custom">
          {/* Contact information */}
          <div className="noise-overlay relative mb-16 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-blue-700 via-brand-blue-800 to-brand-blue-900 p-5 shadow-[0_25px_80px_rgba(15,23,42,0.12)] sm:p-8 lg:p-10">
            {/* Decorative backgrounds */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-white/10 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-brand-red-500/20 blur-3xl"
            />

            {/* Panel heading */}
            <div className="relative mb-7 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
                  <span className="size-1.5 rounded-full bg-brand-red-400" />
                  Contact information
                </div>

                <h2 className="mt-4 font-display text-2xl font-bold text-white sm:text-3xl">
                  Choose the easiest way to reach us
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-white/75">
                Our team is available for general enquiries, free quotes and
                urgent call-outs across Enfield and London.
              </p>
            </div>

            {/* Contact cards */}
            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;

                const content = (
                  <div className="group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-2xl border border-white/20 bg-white/[0.11] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.16]">
                    {/* Red top hover line */}
                    <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-red-400 transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between gap-4">
                      {/* Red icon */}
                      <div className="flex size-11 items-center justify-center rounded-xl border border-brand-red-400/20 bg-brand-red-500/20 text-brand-red-300">
                        <Icon className="size-5" />
                      </div>

                      {/* Red arrow hover */}
                      {card.href && (
                        <div className="flex size-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-300 group-hover:border-brand-red-400 group-hover:bg-brand-red-500 group-hover:text-white">
                          <ArrowUpRight className="size-4" />
                        </div>
                      )}
                    </div>

                    <div className="mt-auto pt-6">
                      <p className="text-xs font-medium text-white/60">
                        {card.label}
                      </p>

                      <h3 className="mt-1.5 font-display text-base font-semibold text-white">
                        {card.title}
                      </h3>

                      <p className="mt-2 break-words text-sm leading-relaxed text-white/80 transition-colors group-hover:text-white">
                        {card.detail}
                      </p>
                    </div>
                  </div>
                );

                return (
                  <Reveal key={card.title} delay={index * 0.06}>
                    {card.href ? (
                      <a
                        href={card.href}
                        target={
                          card.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          card.href.startsWith("http")
                            ? "noreferrer"
                            : undefined
                        }
                        className="block h-full"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Form and map */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact form */}
            <div>
              <SectionHeading
                eyebrow="Send an enquiry"
                title="Request your free quote"
                description="Fill in the form and we'll get back to you as soon as possible — usually the same day."
                className="mb-8"
              />

              <div className="rounded-3xl border border-border bg-white p-5 shadow-sm sm:p-7">
                <ContactForm />
              </div>
            </div>

            {/* Map */}
            <Reveal delay={0.15}>
              <div className="relative h-full min-h-[460px] overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-sm">
                <iframe
                  title="Map showing our location at 232a Hertford Road, Enfield, London"
                  src={siteConfig.mapEmbedSrc}
                  className="h-full min-h-[440px] w-full rounded-[1.25rem]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Map information card */}
                <a
                  href={siteConfig.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="group pointer-events-auto absolute inset-x-5 bottom-5 rounded-2xl border border-white/30 bg-brand-blue-900/90 p-4 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-blue-900"
                >
                  <div className="flex items-start gap-3">
                    {/* Location icon */}
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-red-500">
                      <MapPin className="size-5" />
                    </div>

                    {/* Address */}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold">GSP Engineering</p>

                      <p className="mt-1 text-xs leading-relaxed text-white/75">
                        {siteConfig.address.full}
                      </p>
                    </div>

                    {/* Directions */}
                    <div className="mt-0.5 flex shrink-0 items-center gap-1 text-xs font-medium text-white/70 transition-colors group-hover:text-white">
                      <span className="hidden sm:inline">Directions</span>

                      <ArrowUpRight className="size-3.5" />
                    </div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
