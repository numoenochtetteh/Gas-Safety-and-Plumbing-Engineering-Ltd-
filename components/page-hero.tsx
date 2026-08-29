// import Link from "next/link"
// import { ChevronRight, Home } from "lucide-react"
// import { pexelsPhoto } from "@/lib/media"

// export function PageHero({
//   eyebrow,
//   title,
//   description,
//   image,
//   crumbs,
// }: {
//   eyebrow: string
//   title: string
//   description?: string
//   image: number
//   crumbs: { label: string; href?: string }[]
// }) {
//   return (
//     <section className="relative overflow-hidden bg-brand-blue-950">
//       <div className="absolute inset-0">
//         <img
//           src={pexelsPhoto(image, 1920)}
//           alt=""
//           className="h-full w-full object-cover opacity-30"
//           loading="eager"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/85 to-brand-blue-900/70" />
//         <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/60 via-transparent to-transparent" />
//       </div>

//       <div className="container-custom relative pt-32 pb-20 lg:pt-40 lg:pb-28">
//         <nav className="flex items-center gap-1.5 text-xs font-medium text-white/50 mb-6">
//           <Link href="/" className="flex items-center gap-1 hover:text-white/80 transition-colors">
//             <Home className="size-3.5" />
//           </Link>
//           {crumbs.map((c) => (
//             <span key={c.label} className="flex items-center gap-1.5">
//               <ChevronRight className="size-3" />
//               {c.href ? (
//                 <Link href={c.href} className="hover:text-white/80 transition-colors">
//                   {c.label}
//                 </Link>
//               ) : (
//                 <span className="text-white/85">{c.label}</span>
//               )}
//             </span>
//           ))}
//         </nav>

//         <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 mb-5">
//           <span className="size-1.5 rounded-full bg-brand-red-400" />
//           {eyebrow}
//         </div>
//         <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl text-balance leading-[1.05]">
//           {title}
//         </h1>
//         {description && (
//           <p className="mt-5 text-lg text-white/70 max-w-2xl leading-relaxed">{description}</p>
//         )}
//       </div>
//     </section>
//   )
// }
// import Link from "next/link";
// import { ChevronRight, Home } from "lucide-react";

// import { pexelsPhoto } from "@/lib/media";

// export function PageHero({
//   eyebrow,
//   title,
//   description,
//   image,
//   crumbs,
// }: {
//   eyebrow: string;
//   title: string;
//   description?: string;
//   image: number | string;
//   crumbs: { label: string; href?: string }[];
// }) {
//   const backgroundImage =
//     typeof image === "number" ? pexelsPhoto(image, 1920) : image;

//   return (
//     <section className="relative min-h-[520px] overflow-hidden bg-brand-blue-950 sm:min-h-[580px] lg:min-h-[640px]">
//       {/* Background image */}
//       <div className="absolute inset-0">
//         <img
//           src={backgroundImage}
//           alt=""
//           className="h-full w-full object-cover object-center"
//           loading="eager"
//         />

//         {/* Dark overlays */}
//         <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950/95 via-brand-blue-950/65 to-brand-blue-900/35" />

//         <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/80 via-brand-blue-950/35 to-transparent" />
//       </div>

//       {/* Hero content */}
//       <div className="container-custom relative flex min-h-[520px] flex-col justify-center pb-16 pt-28 sm:min-h-[580px] sm:pb-20 sm:pt-32 lg:min-h-[640px] lg:pb-24 lg:pt-36">
//         {/* Breadcrumbs */}
//         <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/60">
//           <Link
//             href="/"
//             aria-label="Home"
//             className="flex items-center gap-1 transition-colors hover:text-white"
//           >
//             <Home className="size-3.5" />
//           </Link>

//           {crumbs.map((crumb) => (
//             <span key={crumb.label} className="flex items-center gap-1.5">
//               <ChevronRight className="size-3" />

//               {crumb.href ? (
//                 <Link
//                   href={crumb.href}
//                   className="transition-colors hover:text-white"
//                 >
//                   {crumb.label}
//                 </Link>
//               ) : (
//                 <span className="text-white/90">{crumb.label}</span>
//               )}
//             </span>
//           ))}
//         </nav>

//         {/* Eyebrow */}
//         <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90 backdrop-blur-sm">
//           <span className="size-1.5 rounded-full bg-brand-red-400" />
//           {eyebrow}
//         </div>

//         {/* Heading */}
//         <h1 className="max-w-4xl text-balance font-display text-4xl font-bold leading-[1.03] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.5rem]">
//           {title}
//         </h1>

//         {/* Description */}
//         {description && (
//           <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
//             {description}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

import { pexelsPhoto } from "@/lib/media";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center",
  crumbs,
  titleClassName,
  descriptionClassName,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: number | string;
  imagePosition?: string;
  crumbs: { label: string; href?: string }[];
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  const backgroundImage =
    typeof image === "number" ? pexelsPhoto(image, 1920) : image;

  return (
    <section className="relative min-h-[520px] overflow-hidden bg-brand-blue-950 sm:min-h-[580px] lg:min-h-[640px]">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={backgroundImage}
          alt=""
          className="h-full w-full object-cover object-center"
          style={{ objectPosition: imagePosition }}
          loading="eager"
        />

        {/* Lighter black overlays */}
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      </div>

      {/* Hero content */}
      <div className="container-custom relative flex min-h-[520px] flex-col justify-center pb-16 pt-28 sm:min-h-[580px] sm:pb-20 sm:pt-32 lg:min-h-[640px] lg:pb-24 lg:pt-36">
        {/* Breadcrumbs */}
        <nav className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/70">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center gap-1 transition-colors hover:text-white"
          >
            <Home className="size-3.5" />
          </Link>

          {crumbs.map((crumb) => (
            <span key={crumb.label} className="flex items-center gap-1.5">
              <ChevronRight className="size-3" />

              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Eyebrow */}
        <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-brand-red-400" />
          {eyebrow}
        </div>

        {/* Heading */}
        <h1
          className={cn(
            "max-w-4xl text-balance font-display text-4xl font-bold leading-[1.03] tracking-[-0.035em] text-white drop-shadow-sm sm:text-5xl lg:text-[4.5rem]",
            titleClassName,
          )}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className={cn(
              "mt-6 max-w-3xl text-base leading-relaxed text-white/90 drop-shadow-sm sm:text-lg lg:text-xl",
              descriptionClassName,
            )}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
