import { cn } from "@/lib/utils";

const fullLogoAlt = "Gas Safety and Plumbing Engineering Ltd";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/brand/gsp-logo-mark-64.png"
      srcSet="/brand/gsp-logo-mark-64.png 1x, /brand/gsp-logo-mark-128.png 2x"
      width={64}
      height={64}
      alt=""
      aria-hidden="true"
      className={cn("h-9 w-9 rounded-lg object-contain", className)}
    />
  );
}

export function Logo({
  className,
  imageClassName,
  priority = false,
}: {
  className?: string;
  imageClassName?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-xl bg-white px-2 py-1.5",
        className,
      )}
    >
      <img
        src="/brand/gsp-logo-174.png"
        srcSet="/brand/gsp-logo-174.png 174w, /brand/gsp-logo-348.png 348w, /brand/gsp-logo-522.png 522w"
        sizes="(max-width: 639px) 112px, 140px"
        width={174}
        height={64}
        alt={fullLogoAlt}
        fetchPriority={priority ? "high" : "auto"}
        className={cn("h-10 w-auto object-contain", imageClassName)}
      />
    </span>
  );
}
