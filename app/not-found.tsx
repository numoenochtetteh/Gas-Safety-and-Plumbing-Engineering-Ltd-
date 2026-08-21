import Link from "next/link"
import { Phone, ArrowRight, Home } from "lucide-react"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"

export default function NotFound() {
  return (
    <SiteShell>
      <section className="section-y min-h-[70vh] flex items-center">
        <div className="container-custom text-center">
          <span className="font-display text-[7rem] sm:text-[9rem] font-bold leading-none text-gradient-brand">
            404
          </span>
          <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-brand-blue-950">
            This page has gone missing
          </h1>
          <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or may have moved. Let's get you back on track.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full bg-brand-blue-700 hover:bg-brand-blue-800">
              <Link href="/">
                <Home className="size-4" />
                Back to homepage
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent">
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="size-4" />
                Call us instead
              </a>
            </Button>
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700"
          >
            Or browse our services
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteShell>
  )
}
