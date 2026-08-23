// import { stats } from "@/lib/data"
// import { Reveal } from "@/components/reveal"

// export function StatsBar() {
//   return (
//     <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10 rounded-2xl overflow-hidden border border-white/10">
//       {stats.map((stat, i) => (
//         <Reveal key={stat.label} delay={i * 0.06}>
//           <div className="px-6 py-8 text-center">
//             <div className="font-display text-2xl sm:text-3xl font-bold text-white">
//               {stat.value}
//               <span className="text-brand-red-400">{stat.suffix}</span>
//             </div>
//             <div className="mt-1.5 text-xs sm:text-sm text-white/60">{stat.label}</div>
//           </div>
//         </Reveal>
//       ))}
//     </div>
//   )
// }
import { Clock3, Layers3, Zap, MapPin } from "lucide-react";

import { stats } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const statIcons = [Clock3, Layers3, Zap, MapPin];

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = statIcons[index];

        return (
          <Reveal key={stat.label} delay={index * 0.06}>
            <div className="group flex h-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.1] sm:flex-col sm:justify-center sm:gap-3 sm:px-5 sm:py-7 sm:text-center">
              {/* Icon */}
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-brand-red-400">
                <Icon className="size-5" />
              </div>

              {/* Statistic */}
              <div>
                <div className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">
                  {stat.value}

                  <span className="text-brand-red-400">{stat.suffix}</span>
                </div>

                <div className="mt-1.5 text-xs leading-relaxed text-white/65 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
