import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CtaBanner({
  title = "Need an engineer out today?",
  description = "Call now for a fast response, or send us the details and we'll get back to you with a free quote.",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  return (
    <section className={compact ? "py-14 lg:py-16" : "section-y"}>
      <div className="container-custom">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] gradient-red px-6 py-14 sm:px-14 sm:py-16 lg:px-20 lg:py-20 text-center noise-overlay">
            <div className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-brand-blue-900/30 blur-3xl" />
            <div className="relative max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight text-balance leading-[1.1]">
                {title}
              </h2>
              <p className="mt-4 text-white/85 text-base sm:text-lg leading-relaxed">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-white text-brand-red-700 hover:bg-white/90 w-full sm:w-auto shadow-xl"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="size-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/40 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
                >
                  <Link href="/contact">
                    Request a free quote
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
