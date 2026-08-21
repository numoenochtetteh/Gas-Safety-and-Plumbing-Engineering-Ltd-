"use client"

import { useMemo, useState } from "react"
import { MapPin, X, ArrowLeft, ArrowRight } from "lucide-react"
import { projects } from "@/lib/data"
import { pexelsPhoto } from "@/lib/media"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Reveal } from "@/components/reveal"

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))]

export function PortfolioGrid() {
  const [active, setActive] = useState("All")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active],
  )

  const openProject = openIndex !== null ? filtered[openIndex] : null

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActive(cat)
              setOpenIndex(null)
            }}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium border transition-colors",
              active === cat
                ? "bg-brand-blue-700 text-white border-brand-blue-700"
                : "bg-white text-slate-600 border-border hover:border-brand-blue-300 hover:text-brand-blue-700",
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project, i) => (
          <Reveal key={project.id} delay={(i % 3) * 0.08}>
            <button
              onClick={() => setOpenIndex(i)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border bg-white text-left card-hover"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={pexelsPhoto(project.image, 900)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-blue-800">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-brand-blue-950">{project.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5" />
                  {project.location}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <Dialog open={openIndex !== null} onOpenChange={(open) => !open && setOpenIndex(null)}>
        <DialogContent
          showCloseButton={false}
          className="max-w-3xl p-0 border-none bg-transparent shadow-none overflow-hidden"
        >
          <DialogTitle className="sr-only">{openProject?.title}</DialogTitle>
          {openProject && (
            <div className="relative rounded-2xl overflow-hidden bg-brand-blue-950">
              <img
                src={pexelsPhoto(openProject.image, 1400)}
                alt={openProject.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <button
                onClick={() => setOpenIndex(null)}
                className="absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close"
              >
                <X className="size-4" />
              </button>
              {filtered.length > 1 && (
                <>
                  <button
                    onClick={() => setOpenIndex((idx) => (idx! - 1 + filtered.length) % filtered.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                    aria-label="Previous project"
                  >
                    <ArrowLeft className="size-4" />
                  </button>
                  <button
                    onClick={() => setOpenIndex((idx) => (idx! + 1) % filtered.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex size-9 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                    aria-label="Next project"
                  >
                    <ArrowRight className="size-4" />
                  </button>
                </>
              )}
              <div className="p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wide text-brand-red-400">
                  {openProject.category}
                </span>
                <h3 className="mt-1.5 font-display text-xl font-bold">{openProject.title}</h3>
                <p className="mt-2 text-sm text-white/70 leading-relaxed">{openProject.description}</p>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-white/50">
                  <MapPin className="size-3.5" />
                  {openProject.location}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
