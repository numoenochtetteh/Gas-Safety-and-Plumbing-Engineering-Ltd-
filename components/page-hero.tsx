import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { pexelsPhoto } from "@/lib/media"

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  image: number
  crumbs: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden bg-brand-blue-950">
      <div className="absolute inset-0">
        <img
          src={pexelsPhoto(image, 1920)}
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/85 to-brand-blue-900/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/60 via-transparent to-transparent" />
      </div>

      <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <nav className="flex items-center gap-1.5 text-xs font-medium text-white/50 mb-6">
          <Link href="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
            <Home className="size-3.5" />
          </Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3" />
              {c.href ? (
                <Link href={c.href} className="hover:text-white/80 transition-colors">
                  {c.label}
                </Link>
              ) : (
                <span className="text-white/85">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 mb-5">
          <span className="size-1.5 rounded-full bg-brand-red-400" />
          {eyebrow}
        </div>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl text-balance leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  )
}
