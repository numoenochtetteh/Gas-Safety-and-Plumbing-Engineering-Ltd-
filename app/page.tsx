import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { HeroSection } from "@/components/hero-section"
import { TrustMarquee } from "@/components/trust-marquee"
import { SectionHeading } from "@/components/section-heading"
import { ServiceCard } from "@/components/service-card"
import { ProcessSteps } from "@/components/process-steps"
import { TestimonialCard } from "@/components/testimonial-card"
import { FaqAccordion } from "@/components/faq-accordion"
import { CtaBanner } from "@/components/cta-banner"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { services, testimonials, whyChooseUs, projects } from "@/lib/data"
import { pexelsPhoto, photos } from "@/lib/media"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <SiteShell>
      <HeroSection />
      <TrustMarquee />

      {/* Services */}
      <section className="section-y">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              eyebrow="What we do"
              title="One trusted team for every trade"
              description="From a single leaking tap to a full boiler installation, our engineers cover the full range of gas, heating, plumbing, electrical and maintenance work."
            />
            <Reveal>
              <Button asChild variant="outline" className="rounded-full shrink-0 bg-transparent">
                <Link href="/services">
                  View all services
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => (
              <ServiceCard key={service.slug} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section-y bg-brand-blue-50/60">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] max-w-md">
                <img
                  src={pexelsPhoto(photos.workerHardhat1, 900)}
                  alt="GSP Engineering technician on-site, ready to carry out gas and plumbing work"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:flex absolute -bottom-8 -right-6 lg:-right-10 w-56 rounded-2xl bg-white border border-border shadow-xl p-5 flex-col gap-2">
                <div className="flex -space-x-2">
                  {[photos.workerPortrait1, photos.workerSafetyHelmet, photos.workerOrangeHardhat].map((id) => (
                    <img
                      key={id}
                      src={pexelsPhoto(id, 120)}
                      alt=""
                      className="size-9 rounded-full object-cover border-2 border-white"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-brand-blue-950">Experienced, vetted engineers</p>
                <p className="text-xs text-muted-foreground">On call across Enfield &amp; London</p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Why choose us"
              title="Safety-first work you can rely on"
              description="We built GSP Engineering around one idea: do the job properly, communicate clearly, and always put safety first."
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <CheckCircle2 className="size-5 text-brand-red-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-brand-blue-950 text-sm">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <Button asChild className="mt-9 rounded-full bg-brand-blue-700 hover:bg-brand-blue-800">
                <Link href="/about">
                  More about our team
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Simple from first call to finished job"
            description="No jargon, no surprises — just a clear process from your first message to a completed, safety-checked job."
            className="mb-12"
          />
          <ProcessSteps />
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-y bg-brand-blue-950 noise-overlay">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <SectionHeading
              light
              eyebrow="Recent work"
              title="A track record you can see"
              description="A selection of recent installations, repairs and maintenance projects from around Enfield and North London."
            />
            <Reveal>
              <Button
                asChild
                variant="outline"
                className="rounded-full shrink-0 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
              >
                <Link href="/portfolio">
                  View full portfolio
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 0.1}>
                <Link href="/portfolio" className="group relative block overflow-hidden rounded-2xl aspect-[4/5]">
                  <img
                    src={pexelsPhoto(project.image, 800)}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-wide text-brand-red-400">
                      {project.category}
                    </span>
                    <h3 className="mt-1 font-display font-bold text-white">{project.title}</h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading align="center" eyebrow="Customer feedback" title="What people are saying" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.slice(0, 6).map((t, i) => (
              <TestimonialCard key={t.name} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="section-y bg-brand-blue-50/60">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <SectionHeading
              eyebrow="Common questions"
              title="Answers before you call"
              description="Can't find what you're looking for? Get in touch and we'll be glad to help."
            />
            <Reveal delay={0.15}>
              <Button asChild variant="outline" className="mt-8 rounded-full bg-transparent">
                <Link href="/faq">
                  View all FAQs
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
          <FaqAccordion limit={5} />
        </div>
      </section>

      <CtaBanner />
    </SiteShell>
  )
}
