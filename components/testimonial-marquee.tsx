"use client";

import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

type Testimonial = (typeof testimonials)[number];

function splitIntoColumns(items: Testimonial[], columns: number) {
  const result: Testimonial[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, i) => result[i % columns].push(item));
  return result;
}

// Slightly different speed & direction per column so the columns don't scroll in lockstep
const COLUMN_CONFIG = [
  { duration: 38, reverse: false },
  { duration: 46, reverse: true },
  { duration: 34, reverse: false },
];

function TestimonialTile({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="rounded-2xl border border-border bg-white p-6 shadow-sm shadow-black/[0.02]">
      <p className="text-[15px] leading-relaxed text-slate-700">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-100 text-sm font-semibold text-brand-blue-800">
            {testimonial.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="text-sm font-semibold text-brand-blue-950 truncate">
              {testimonial.name}
            </div>
            <div className="text-xs text-muted-foreground truncate">
              {testimonial.location}
            </div>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-brand-red-50 px-3 py-1 text-xs font-medium text-brand-red-700 whitespace-nowrap">
          {testimonial.service}
        </span>
      </div>
    </div>
  );
}

export function TestimonialMarquee() {
  const columns = splitIntoColumns(testimonials, 3);

  return (
    <div className="pause-on-hover relative h-[560px] sm:h-[620px] overflow-hidden fade-edges-y">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 h-full">
        {columns.map((col, colIndex) => {
          const config = COLUMN_CONFIG[colIndex % COLUMN_CONFIG.length];
          // Hide the 2nd/3rd columns on mobile so we don't cram three tall scrolling
          // columns into a narrow viewport — a single column reads much better there.
          return (
            <div
              key={colIndex}
              className={cn(
                "overflow-hidden",
                colIndex > 0 && "hidden sm:block",
              )}
            >
              <div
                className="flex flex-col gap-5 animate-marquee-vertical will-change-transform"
                style={{
                  animationDuration: `${config.duration}s`,
                  animationDirection: config.reverse ? "reverse" : "normal",
                }}
              >
                {[...col, ...col].map((testimonial, i) => (
                  <TestimonialTile
                    key={`${testimonial.name}-${i}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
