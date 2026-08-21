import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { CtaBanner } from "@/components/cta-banner"
import { services } from "@/lib/data"
import { photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Gas installation & servicing, boiler repairs, central heating, plumbing, pipework & drainage, electrical work, property maintenance and 24/7 emergency call-outs.",
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our services"
        title="Everything your property needs, from one team"
        description="Gas, heating, plumbing, electrical and property maintenance — carried out safely, efficiently and to a high standard, every time."
        image={photos.plumberPipeFittings}
        crumbs={[{ label: "Services" }]}
      />

      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Full range"
            title="Explore our services"
            description="Select a service below to see exactly what's included, or get in touch if you're not sure what you need — we're happy to advise."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which service you need?"
        description="Tell us what's going on and we'll point you in the right direction — no pressure, just honest advice."
      />
    </SiteShell>
  )
}
