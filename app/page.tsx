import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { SiteShell } from "@/components/site-shell";
import { HeroSection } from "@/components/hero-section";
import { SectionHeading } from "@/components/section-heading";
import { ServicesCarousel } from "@/components/services-carousel";
import { TestimonialMarquee } from "@/components/testimonial-marquee";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

import { services, whyChooseUs, projects } from "@/lib/data";
import { pexelsPhoto, photos } from "@/lib/media";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <SiteShell>
      <div className="overflow-x-hidden">
        <HeroSection />

        {/* Services */}
        <section
          id="services"
          className="section-y relative overflow-hidden bg-white"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 -top-40 size-[420px] rounded-full bg-brand-blue-700/10 blur-3xl"
          />

          <div className="container-custom relative">
            <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="What we do"
                title="One trusted team for every trade"
                description="From a single leaking tap to a full boiler installation, our engineers cover the full range of gas, heating, plumbing, electrical and maintenance work."
              />

              <Reveal>
                <Button
                  asChild
                  variant="outline"
                  className="group w-full shrink-0 rounded-full bg-transparent sm:w-auto"
                >
                  <Link href="/services">
                    View all services
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <ServicesCarousel services={services} />
          </div>
        </section>

        {/* Why choose us */}
        <section className="section-y relative overflow-hidden bg-brand-blue-50/60">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-32 size-80 rounded-full bg-brand-red-500/10 blur-3xl"
          />

          <div className="container-custom relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto w-full max-w-xl pb-0 sm:pb-8 lg:mx-0">
                <div
                  aria-hidden="true"
                  className="absolute -left-4 -top-4 size-28 rounded-3xl bg-brand-red-500/10"
                />

                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <div className="aspect-[5/4] sm:aspect-[4/3] lg:aspect-[4/5]">
                    <img
                      src={pexelsPhoto(photos.workerHardhat1, 1100)}
                      alt="GSP Engineering technician ready to carry out professional gas and plumbing work"
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-blue-950/30 via-transparent to-transparent" />
                </div>

                {/* Engineer information */}
                <div className="relative mt-4 flex w-full flex-col gap-3 rounded-2xl border border-border bg-white p-5 shadow-lg sm:absolute sm:-bottom-2 sm:right-4 sm:mt-0 sm:w-64 lg:-right-8">
                  <div className="flex -space-x-2">
                    {[
                      photos.workerPortrait1,
                      photos.workerSafetyHelmet,
                      photos.workerOrangeHardhat,
                    ].map((id) => (
                      <img
                        key={id}
                        src={pexelsPhoto(id, 160)}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="size-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brand-blue-950">
                      Experienced, vetted engineers
                    </p>

                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      Available across Enfield and North London
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div>
              <SectionHeading
                eyebrow="Why choose us"
                title="Safety-first work you can rely on"
                description="We built GSP Engineering around one idea: do the job properly, communicate clearly and always put safety first."
              />

              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {whyChooseUs.map((item, index) => (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <div className="group flex h-full gap-3 rounded-2xl border border-border/70 bg-white/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-red-500/10">
                        <CheckCircle2 className="size-5 text-brand-red-500" />
                      </div>

                      <div>
                        <h3 className="text-sm font-semibold text-brand-blue-950">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.3}>
                <Button
                  asChild
                  className="group mt-8 w-full rounded-full bg-brand-blue-700 hover:bg-brand-blue-800 sm:w-auto"
                >
                  <Link href="/about">
                    More about our team
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Featured projects */}
        <section
          id="projects"
          className="noise-overlay relative overflow-hidden bg-brand-blue-950 py-16 sm:py-20 lg:py-24"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-0 size-96 rounded-full bg-brand-blue-700/20 blur-3xl"
          />

          <div className="container-custom relative">
            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                light
                eyebrow="Recent work"
                title="A track record you can see"
                description="A selection of recent installations, repairs and maintenance projects completed across Enfield and North London."
              />

              <Reveal>
                <Button
                  asChild
                  variant="outline"
                  className="group w-full shrink-0 rounded-full border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white sm:w-auto"
                >
                  <Link href="/portfolio">
                    View full portfolio
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className={
                    index === 2 ? "sm:col-span-2 lg:col-span-1" : undefined
                  }
                >
                  <Reveal delay={index * 0.1}>
                    <Link
                      href="/portfolio"
                      aria-label={`View ${project.title} project`}
                      className="group relative block h-[340px] overflow-hidden rounded-2xl bg-brand-blue-900 shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-blue-950 sm:h-[380px] lg:h-[420px]"
                    >
                      <img
                        src={pexelsPhoto(project.image, 1000)}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/95" />

                      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div className="min-w-0">
                            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-red-400">
                              {project.category}
                            </span>

                            <h3 className="mt-2 font-display text-lg font-bold leading-snug text-white">
                              {project.title}
                            </h3>
                          </div>

                          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-brand-blue-950 transition-all duration-300 group-hover:bg-brand-red-500 group-hover:text-white">
                            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-y overflow-hidden bg-white">
          <div className="container-custom">
            <SectionHeading
              align="center"
              eyebrow="Customer feedback"
              title="What people are saying"
              description="Real feedback from customers who trusted us with their homes, properties and businesses."
              className="mb-10 sm:mb-12"
            />

            <TestimonialMarquee />
          </div>
        </section>

        {/* FAQ preview */}
        <section
          id="faq"
          className="section-y relative overflow-hidden bg-brand-blue-50/60"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 bottom-0 size-80 rounded-full bg-brand-blue-700/10 blur-3xl"
          />

          <div className="container-custom relative grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-16">
            {/* Left side */}
            <div className="self-start">
              {/* Centred on phones */}
              <div className="sm:hidden">
                <SectionHeading
                  align="center"
                  eyebrow="Common questions"
                  title="Answers before you call"
                  description="Can't find what you're looking for? Get in touch and we'll be glad to help."
                />
              </div>

              {/* Left aligned on tablets and laptops */}
              <div className="hidden sm:block">
                <SectionHeading
                  eyebrow="Common questions"
                  title="Answers before you call"
                  description="Can't find what you're looking for? Get in touch and we'll be glad to help."
                />
              </div>

              <Reveal delay={0.15}>
                <div className="flex justify-center sm:justify-start">
                  <Button
                    asChild
                    variant="outline"
                    className="group mt-7 h-11 min-w-[190px] rounded-full bg-transparent px-7 text-sm"
                  >
                    <Link href="/faq">
                      View all FAQs
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right side */}
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-white p-4 shadow-sm sm:p-7">
                <FaqAccordion limit={5} />
              </div>
            </Reveal>
          </div>
        </section>

        <CtaBanner />
      </div>
    </SiteShell>
  );
}
