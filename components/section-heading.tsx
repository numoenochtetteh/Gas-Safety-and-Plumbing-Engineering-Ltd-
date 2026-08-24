import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}) {
  const isCentered = align === "center";

  return (
    <div className={cn("max-w-2xl", isCentered && "mx-auto", className)}>
      {/* Eyebrow */}
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "flex",
              isCentered ? "justify-center" : "justify-start",
            )}
          >
            <div
              className={cn(
                "mb-4 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em]",
                light
                  ? "bg-white/10 text-white/90"
                  : "bg-brand-blue-50 text-brand-blue-700",
              )}
            >
              <span
                className={cn(
                  "size-1.5 rounded-full",
                  light ? "bg-brand-red-400" : "bg-brand-red-500",
                )}
              />

              {eyebrow}
            </div>
          </div>
        </Reveal>
      )}

      {/* Heading */}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance font-display text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            isCentered ? "text-center" : "text-left",
            light ? "text-white" : "text-brand-blue-950",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {/* Description */}
      {description && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-base leading-relaxed sm:text-lg",
              isCentered ? "text-center" : "text-left",
              light ? "text-white/70" : "text-muted-foreground",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
