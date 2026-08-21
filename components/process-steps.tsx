import { processSteps } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3">
      {processSteps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.08}>
          <div className="relative h-full rounded-2xl border border-border bg-white p-6">
            <span className="font-display text-3xl font-bold text-brand-blue-100">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-display text-base font-bold text-brand-blue-950">{step.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block absolute top-1/2 -right-3 w-3 h-px bg-border" />
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
