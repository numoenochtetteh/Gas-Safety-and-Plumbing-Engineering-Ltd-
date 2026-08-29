import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about our gas, heating, plumbing and electrical services, coverage area, pricing and emergency call-outs.",
};

export default function FaqPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know before you book. Can't find your answer? Get in touch and we'll help."
        image="/images/frequently-asked-questions.jpg"
        imagePosition="68% center"
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="section-y">
        <div className="container-custom max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Common questions, answered"
            className="mb-10"
          />
          <FaqAccordion />
        </div>
      </section>

      <CtaBanner
        title="Still have a question?"
        description="Send us a message or give us a call — we're happy to talk through your job before you book."
      />
    </SiteShell>
  );
}
