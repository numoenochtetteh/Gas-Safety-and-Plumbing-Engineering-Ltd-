import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Service } from "@/lib/data"
import { ServiceIcon } from "@/components/service-icon"
import { Reveal } from "@/components/reveal"

export function ServiceCard({ service, index = 0 }: { service: Service; index?: number }) {
  return (
    <Reveal delay={(index % 4) * 0.08}>
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex h-full flex-col rounded-2xl border border-border bg-white p-6 lg:p-7 card-hover"
      >
        <div className="flex items-start justify-between">
          <div className="flex size-12 items-center justify-center rounded-xl bg-brand-blue-50 text-brand-blue-700 group-hover:bg-brand-blue-700 group-hover:text-white transition-colors duration-300">
            <ServiceIcon icon={service.icon} className="size-6" />
          </div>
          <ArrowUpRight className="size-5 text-muted-foreground opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
        </div>
        <h3 className="mt-5 font-display text-lg font-bold text-brand-blue-950 leading-snug">{service.title}</h3>
        <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed flex-1">{service.summary}</p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-700">
          Learn more
        </span>
      </Link>
    </Reveal>
  )
}
