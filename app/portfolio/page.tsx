import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { CtaBanner } from "@/components/cta-banner"
import { photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "See recent gas, heating, plumbing and electrical projects completed by Gas Safety and Plumbing Engineering Ltd across Enfield and London.",
}

export default function PortfolioPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Our work"
        title="Recent projects across Enfield & London"
        description="A selection of installations, repairs and maintenance projects — filter by category to see work relevant to your job."
        image={photos.bathroomFreestandingTub}
        crumbs={[{ label: "Portfolio" }]}
      />

      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Project gallery"
            title="Browse our recent work"
            description="Click any project to see more detail. New projects are added regularly."
            className="mb-10"
          />
          <PortfolioGrid />
        </div>
      </section>

      <CtaBanner
        title="Have a project in mind?"
        description="Tell us what you're planning and we'll put together a free, no-obligation quote."
      />
    </SiteShell>
  )
}
