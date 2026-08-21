import { ShieldCheck, Clock, BadgeCheck, PhoneCall, Wrench, Award } from "lucide-react"

const items = [
  { icon: ShieldCheck, label: "Qualified & insured engineers" },
  { icon: Clock, label: "24/7 emergency availability" },
  { icon: BadgeCheck, label: "Clear, upfront pricing" },
  { icon: PhoneCall, label: "Fast response times" },
  { icon: Wrench, label: "Domestic & commercial work" },
  { icon: Award, label: "Safety-first workmanship" },
]

export function TrustMarquee() {
  const loop = [...items, ...items]
  return (
    <div className="border-y border-border bg-white overflow-hidden">
      <div className="flex w-max animate-marquee">
        {loop.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-8 py-4 text-sm font-medium text-brand-blue-900 whitespace-nowrap"
          >
            <item.icon className="size-4 text-brand-red-600 shrink-0" />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}
