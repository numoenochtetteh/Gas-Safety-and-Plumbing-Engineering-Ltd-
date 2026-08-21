import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  light?: boolean
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] mb-4",
              light ? "bg-white/10 text-white/90" : "bg-brand-blue-50 text-brand-blue-700",
            )}
          >
            <span className={cn("size-1.5 rounded-full", light ? "bg-brand-red-400" : "bg-brand-red-500")} />
            {eyebrow}
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight text-balance leading-[1.1]",
            light ? "text-white" : "text-brand-blue-950",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className={cn("mt-4 text-base sm:text-lg leading-relaxed", light ? "text-white/70" : "text-muted-foreground")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
