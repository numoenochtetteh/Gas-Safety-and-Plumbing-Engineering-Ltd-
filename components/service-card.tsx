import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Service } from "@/lib/data";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal } from "@/components/reveal";

const THEME: Record<
  Service["icon"],
  {
    gradient: string;
    icon: string;
  }
> = {
  Flame: {
    gradient: "from-cyan-100 via-cyan-50 to-sky-50",
    icon: "text-cyan-600",
  },

  Thermometer: {
    gradient: "from-rose-100 via-pink-50 to-red-50",
    icon: "text-rose-500",
  },

  Waves: {
    gradient: "from-lime-100 via-lime-50 to-yellow-50",
    icon: "text-lime-600",
  },

  Wrench: {
    gradient: "from-purple-100 via-violet-50 to-fuchsia-50",
    icon: "text-purple-500",
  },

  Droplets: {
    gradient: "from-sky-100 via-blue-50 to-cyan-50",
    icon: "text-sky-600",
  },

  Zap: {
    gradient: "from-amber-100 via-yellow-50 to-orange-50",
    icon: "text-amber-600",
  },

  Home: {
    gradient: "from-emerald-100 via-green-50 to-teal-50",
    icon: "text-emerald-600",
  },

  AlertTriangle: {
    gradient: "from-red-100 via-rose-50 to-orange-50",
    icon: "text-red-600",
  },
};

export function ServiceCard({
  service,
  index = 0,
}: {
  service: Service;
  index?: number;
}) {
  const theme = THEME[service.icon];

  return (
    <Reveal delay={(index % 4) * 0.08}>
      <Link
        href={`/services/${service.slug}`}
        className="group flex h-full flex-col rounded-[26px] border border-slate-200/80 bg-white p-2.5 shadow-[0_2px_5px_rgba(15,23,42,0.05),0_12px_30px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_15px_40px_rgba(15,23,42,0.12)]"
      >
        {/* Pastel icon area */}
        <div
          className={`relative flex h-44 shrink-0 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-b sm:h-48 ${theme.gradient}`}
        >
          <div className="absolute inset-0 bg-white/5" />

          <ServiceIcon
            icon={service.icon}
            className={`relative z-10 size-12 transition-transform duration-300 group-hover:scale-110 ${theme.icon}`}
            strokeWidth={1.7}
          />
        </div>

        {/* Card content */}
        <div className="flex flex-1 flex-col px-4 pb-5 pt-5 sm:px-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="max-w-[85%] font-display text-xl font-bold leading-[1.25] tracking-[-0.025em] text-slate-950">
              {service.title}
            </h3>

            <span
              aria-hidden="true"
              className="flex size-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-all duration-300 group-hover:bg-brand-blue-700 group-hover:text-white"
            >
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </div>

          <p className="mt-3 flex-1 text-[15px] leading-[1.55] text-slate-600">
            {service.summary}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
