import { Star, Quote } from "lucide-react"
import type { testimonials } from "@/lib/data"
import { Reveal } from "@/components/reveal"

type Testimonial = (typeof testimonials)[number]

export function TestimonialCard({ testimonial, index = 0 }: { testimonial: Testimonial; index?: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <div className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 lg:p-7 card-hover">
        <Quote className="size-7 text-brand-blue-200" />
        <div className="mt-3 flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-brand-red-500 text-brand-red-500" />
          ))}
        </div>
        <p className="mt-3 text-sm sm:text-[15px] text-slate-700 leading-relaxed flex-1">&ldquo;{testimonial.quote}&rdquo;</p>
        <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
          <div className="flex size-9 items-center justify-center rounded-full bg-brand-blue-100 text-sm font-semibold text-brand-blue-800">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <div className="text-sm font-semibold text-brand-blue-950">{testimonial.name}</div>
            <div className="text-xs text-muted-foreground">{testimonial.location}</div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
