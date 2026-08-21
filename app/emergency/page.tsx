import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Flame, Droplets, Zap, ThermometerSnowflake, ArrowRight, Clock3 } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { pexelsVideoPoster, videos, photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "24/7 Emergency Call-Out",
  description:
    "Gas leak, burst pipe, no heating or electrical fault? Gas Safety and Plumbing Engineering Ltd offers 24/7 emergency call-outs across Enfield and London.",
}

const scenarios = [
  {
    icon: Flame,
    title: "Suspected gas leak",
    advice: "Turn off the gas supply at the meter, open windows and doors, don't use switches or naked flames, and call us immediately.",
  },
  {
    icon: Droplets,
    title: "Burst pipe or major leak",
    advice: "Shut off your stopcock immediately to stop the flow of water, then call us — the faster you act, the less damage caused.",
  },
  {
    icon: ThermometerSnowflake,
    title: "No heating or hot water",
    advice: "Check your thermostat and boiler pressure first — if it's still not working, especially in cold weather, call us for priority attention.",
  },
  {
    icon: Zap,
    title: "Electrical fault or power loss",
    advice: "Check your consumer unit for a tripped switch. If the fault persists or you smell burning, switch off at the mains and call us.",
  },
]

export default function EmergencyPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-brand-red-800">
        <div className="absolute inset-0">
          <video
            className="h-full w-full object-cover opacity-25"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={pexelsVideoPoster(photos.workerOrangeHardhat, 1920)}
          >
            <source src={videos.electricalWork} type="video/mp4" />
          </video>
          <div className="absolute inset-0 gradient-red opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-red-900 via-brand-red-900/40 to-transparent" />
        </div>

        <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-24 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white mx-auto">
              <span className="relative flex size-1.5">
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-white" />
                <span className="relative inline-flex size-1.5 rounded-full bg-white" />
              </span>
              Emergency call-out &middot; Available now
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl mx-auto text-balance leading-[1.05]">
              Gas, heating, plumbing or electrical emergency?
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
              We're available 24 hours a day, every day of the year. Call now and speak directly to our team.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <div className="mt-9">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-white text-brand-red-700 hover:bg-white/90 shadow-2xl text-base h-14 px-10"
              >
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="size-5" />
                  Call {siteConfig.phoneDisplay} now
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-white/70">
              <Clock3 className="size-4" />
              {siteConfig.hours}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="While help is on the way"
            title="What to do in an emergency"
            description="A few immediate safety steps for the most common emergencies — then call us straight away."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {scenarios.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 lg:p-7">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
                    <s.icon className="size-6" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-brand-blue-950">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.advice}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-6 rounded-2xl border border-brand-red-200 bg-brand-red-50 p-5 text-sm text-brand-red-800 leading-relaxed">
              <strong>If you smell gas strongly or suspect a serious gas emergency,</strong> also contact the
              National Gas Emergency Service on <strong>0800 111 999</strong> in addition to calling us.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-brand-blue-950 noise-overlay">
        <div className="container-custom text-center">
          <SectionHeading
            light
            align="center"
            eyebrow="Prefer to send details first?"
            title="Reach us however works for you"
            description="Call for immediate response, or send us the details and we'll get back to you as quickly as possible."
            className="mb-9 mx-auto"
          />
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand-red-600 hover:bg-brand-red-700 w-full sm:w-auto">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="size-4" />
                  {siteConfig.phoneDisplay}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
              >
                <Link href="/contact">
                  Message us
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  )
}
