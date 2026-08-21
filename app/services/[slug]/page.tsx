import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ArrowRight, Phone } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { ServiceIcon } from "@/components/service-icon"
import { ProcessSteps } from "@/components/process-steps"
import { CtaBanner } from "@/components/cta-banner"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { services, getServiceBySlug } from "@/lib/data"
import { pexelsPhoto } from "@/lib/media"
import { siteConfig } from "@/lib/site-config"

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}
  return {
    title: service.title,
    description: service.summary,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <SiteShell>
      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        description={service.summary}
        image={service.image}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.shortTitle }]}
      />

      <section className="section-y">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14">
          <div>
            <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-blue-50 text-brand-blue-700 mb-6">
              <ServiceIcon icon={service.icon} className="size-7" />
            </div>
            <Reveal>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-blue-950 text-balance">
                {service.title}
              </h2>
            </Reveal>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              {service.description.map((para, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.15}>
              <div className="mt-8 grid sm:grid-cols-2 gap-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-2.5 rounded-xl bg-brand-blue-50/60 p-3.5">
                    <CheckCircle2 className="size-4 text-brand-blue-700 shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-blue-950">{bullet}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="rounded-full bg-brand-red-600 hover:bg-brand-red-700">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="size-4" />
                    Call {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
                  <Link href="/contact">
                    Get a free quote
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={pexelsPhoto(service.gallery[0], 700)}
                alt={service.title}
                className="col-span-2 rounded-2xl object-cover aspect-[16/10] w-full"
                loading="lazy"
              />
              <img
                src={pexelsPhoto(service.gallery[1], 500)}
                alt=""
                className="rounded-2xl object-cover aspect-square w-full"
                loading="lazy"
              />
              <img
                src={pexelsPhoto(service.gallery[2], 500)}
                alt=""
                className="rounded-2xl object-cover aspect-square w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-brand-blue-50/60">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="Our process"
            title="What to expect when you book this service"
            className="mb-12"
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section-y">
        <div className="container-custom">
          <SectionHeading eyebrow="Explore more" title="Related services" className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteShell>
  )
}
