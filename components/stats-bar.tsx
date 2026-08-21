import { stats } from "@/lib/data"
import { Reveal } from "@/components/reveal"

export function StatsBar() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 rounded-2xl overflow-hidden border border-white/10">
      {stats.map((stat, i) => (
        <Reveal key={stat.label} delay={i * 0.06}>
          <div className="px-6 py-8 text-center">
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">
              {stat.value}
              <span className="text-brand-red-400">{stat.suffix}</span>
            </div>
            <div className="mt-1.5 text-xs sm:text-sm text-white/60">{stat.label}</div>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
