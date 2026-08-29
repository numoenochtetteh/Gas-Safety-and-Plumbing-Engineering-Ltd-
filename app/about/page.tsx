import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Target,
  Sparkles,
} from "lucide-react";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { StatsBar } from "@/components/stats-bar";
import { CtaBanner } from "@/components/cta-banner";
import { Reveal } from "@/components/reveal";
import { pexelsPhoto, photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Gas Safety and Plumbing Engineering Ltd — our story, our values, and the team behind our gas, heating, plumbing and electrical services in Enfield, London.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "Safety first, always",
    description:
      "Every job is carried out to current safety standards — no shortcuts, no compromises.",
  },
  {
    icon: HeartHandshake,
    title: "Honest & transparent",
    description:
      "Clear pricing and straight answers, so you always know what's happening and why.",
  },
  {
    icon: Target,
    title: "Get it right first time",
    description:
      "We take the time to diagnose properly, so repairs last and installations perform.",
  },
  {
    icon: Sparkles,
    title: "Respect for your property",
    description:
      "Tidy work, protected floors and surfaces, and a clean site when we're done.",
  },
];

const team = [
  {
    role: "Lead Gas & Heating Engineer",
    focus: "Gas installations, boiler servicing & safety checks",
    image: photos.workerHardhat1,
  },
  {
    role: "Senior Plumbing Engineer",
    focus: "Bathroom fit-outs, leak detection & pipework",
    image: photos.workerPortrait1,
  },
  {
    role: "Electrical Engineer",
    focus: "Installations, fault-finding & repairs",
    image: "/images/electrical-engineer.jpg",
  },
  {
    role: "Operations & Scheduling",
    focus: "Bookings, quotes & customer support",
    image: photos.workerOrangeHardhat,
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About us"
        title="Reliable engineers, honest service"
        description="Gas Safety and Plumbing Engineering Ltd was built on a simple promise: turn up, do the job properly, and treat every property like it's our own."
        image="/images/1.jpg"
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="section-y">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="grid grid-cols-2 gap-4">
              <img
                src={pexelsPhoto(photos.plumberPipeFittings, 700)}
                alt="Engineer installing pipework"
                className="rounded-2xl object-cover aspect-[3/4] w-full mt-8"
                loading="lazy"
              />
              <img
                src={pexelsPhoto(photos.electricianSockets1, 700)}
                alt="Engineer carrying out electrical work"
                className="rounded-2xl object-cover aspect-[3/4] w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
          <div>
            <SectionHeading
              eyebrow="Our story"
              title="Gas, heating and plumbing expertise under one roof"
            />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Gas Safety and Plumbing Engineering provides professional gas,
                heating, plumbing, electrical and general maintenance services
                for domestic and commercial properties across Enfield and
                London.
              </p>
              <p>
                From boiler installations, servicing and repairs to central
                heating systems, hot water solutions, plumbing repairs,
                electrical works and property maintenance, our team delivers
                reliable, safe and efficient solutions tailored to your needs.
              </p>
              <p>
                Whether it's a routine service, a planned installation, or an
                emergency repair, we keep your property safe, warm and running
                efficiently — with the same attention to detail every time.
              </p>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/services"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-700 group"
              >
                Explore our services
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-20 lg:pb-28">
        <div className="container-custom">
          <div className="rounded-[2rem] gradient-brand p-8 lg:p-10 noise-overlay">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y bg-brand-blue-50/60">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind every job"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-white p-6">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
                    <value.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-display font-bold text-brand-blue-950">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-y">
        <div className="container-custom">
          <SectionHeading
            align="center"
            eyebrow="Our team"
            title="Qualified engineers behind every job"
            description="Our engineers bring years of combined hands-on experience across gas, heating, plumbing and electrical work."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <Reveal key={member.role} delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white overflow-hidden card-hover">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={pexelsPhoto(member.image, 600)}
                      alt={member.role}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-brand-blue-950 text-sm">
                      {member.role}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      {member.focus}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to work with a team you can trust?"
        description="Get in touch today for a free, no-obligation quote — or call now if it's urgent."
      />
    </SiteShell>
  );
}
