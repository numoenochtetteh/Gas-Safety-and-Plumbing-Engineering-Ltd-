import { cn } from "@/lib/utils"

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-9 w-9", className)}
      aria-hidden="true"
    >
      <rect width="40" height="40" rx="10" fill="url(#gsp-logo-grad)" />
      <path
        d="M20.4 8c.3 3.1-1.1 4.9-2.7 6.6-1.8 1.9-3.7 3.9-3.5 7.4.1 2.3 1.4 4 3.1 5-1-1.6-1.1-3-.4-4.4.5 1 1.3 1.7 2.3 2 .1-1 .5-1.7 1.2-2.3.3 1 .9 1.6 1.8 1.9 1.4.5 2.5 1.7 2.6 3.4.1 2.1-1.3 3.9-3.2 4.7 3.5-.3 6.6-2.9 6.9-6.7.4-4.6-2.6-6.9-4.9-9.2-2.1-2.1-3.9-4.2-3.2-8.4Z"
        fill="white"
      />
      <defs>
        <linearGradient id="gsp-logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--brand-blue-600)" />
          <stop offset="1" stopColor="var(--brand-red-600)" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function Logo({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-base font-bold tracking-tight", dark ? "text-white" : "text-brand-blue-900")}>
          GSP <span className="text-brand-red-600">Engineering</span>
        </span>
        <span className={cn("text-[10px] font-semibold uppercase tracking-[0.16em]", dark ? "text-white/60" : "text-muted-foreground")}>
          Gas &middot; Heating &middot; Plumbing
        </span>
      </span>
    </span>
  )
}
