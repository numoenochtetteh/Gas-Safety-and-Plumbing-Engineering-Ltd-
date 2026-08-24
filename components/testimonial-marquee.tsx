// "use client";

// import { Quote } from "lucide-react";

// import { testimonials } from "@/lib/data";

// type Testimonial = (typeof testimonials)[number];

// function TestimonialSlide({ testimonial }: { testimonial: Testimonial }) {
//   return (
//     <article className="flex min-h-[410px] w-[88vw] max-w-[1100px] shrink-0 flex-col justify-between rounded-[2rem] bg-gradient-to-br from-brand-blue-50 via-white to-slate-50 p-6 sm:min-h-[440px] sm:p-10 lg:min-h-[480px] lg:p-14">
//       {/* Quote */}
//       <div>
//         <div className="flex size-11 items-center justify-center rounded-full bg-brand-red-50 text-brand-red-600 sm:size-12">
//           <Quote className="size-5 fill-current" />
//         </div>

//         <blockquote className="mt-7 sm:mt-9">
//           <p className="max-w-5xl text-balance font-display text-2xl font-semibold leading-[1.25] tracking-[-0.025em] text-brand-blue-950 sm:text-4xl lg:text-5xl lg:leading-[1.18]">
//             “{testimonial.quote}”
//           </p>
//         </blockquote>
//       </div>

//       {/* Customer */}
//       <footer className="mt-10 flex flex-col gap-5 border-t border-brand-blue-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
//         <div className="flex min-w-0 items-center gap-3">
//           <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-950 text-sm font-bold text-white sm:size-12">
//             {testimonial.name.charAt(0).toUpperCase()}
//           </div>

//           <div className="min-w-0">
//             <p className="truncate text-sm font-semibold text-brand-blue-950 sm:text-base">
//               {testimonial.name}
//             </p>

//             <p className="mt-0.5 truncate text-xs text-muted-foreground sm:text-sm">
//               {testimonial.location}
//             </p>
//           </div>
//         </div>

//         <span className="w-fit rounded-full bg-brand-red-50 px-3.5 py-1.5 text-xs font-semibold text-brand-red-700 sm:text-sm">
//           {testimonial.service}
//         </span>
//       </footer>
//     </article>
//   );
// }

// function TestimonialGroup({ duplicate = false }: { duplicate?: boolean }) {
//   return (
//     <div
//       aria-hidden={duplicate ? "true" : undefined}
//       className={`flex shrink-0 gap-5 pr-5 sm:gap-6 sm:pr-6 ${
//         duplicate ? "testimonial-editorial-copy" : ""
//       }`}
//     >
//       {testimonials.map((testimonial, index) => (
//         <TestimonialSlide
//           key={`${duplicate ? "duplicate" : "original"}-${
//             testimonial.name
//           }-${index}`}
//           testimonial={testimonial}
//         />
//       ))}
//     </div>
//   );
// }

// export function TestimonialMarquee() {
//   return (
//     <div className="testimonial-editorial-marquee relative">
//       {/* Moving viewport */}
//       <div className="testimonial-editorial-fade overflow-hidden">
//         <div className="testimonial-editorial-track flex w-max will-change-transform">
//           {/* Original testimonials */}
//           <TestimonialGroup />

//           {/* Duplicate testimonials for the seamless loop */}
//           <TestimonialGroup duplicate />
//         </div>
//       </div>

//       {/* Motion information */}
//       <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
//         <span className="size-1.5 rounded-full bg-brand-red-500" />
//         <span>Reviews from customers across Enfield and London</span>
//       </div>

//       <style jsx global>{`
//         @keyframes testimonial-editorial-scroll {
//           from {
//             transform: translateX(0);
//           }

//           to {
//             transform: translateX(-50%);
//           }
//         }

//         .testimonial-editorial-track {
//           animation: testimonial-editorial-scroll 75s linear infinite;
//         }

//         .testimonial-editorial-marquee:hover .testimonial-editorial-track,
//         .testimonial-editorial-marquee:focus-within
//           .testimonial-editorial-track {
//           animation-play-state: paused;
//         }

//         .testimonial-editorial-fade {
//           -webkit-mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 3%,
//             black 97%,
//             transparent
//           );

//           mask-image: linear-gradient(
//             to right,
//             transparent,
//             black 3%,
//             black 97%,
//             transparent
//           );
//         }

//         @media (max-width: 639px) {
//           .testimonial-editorial-fade {
//             -webkit-mask-image: linear-gradient(
//               to right,
//               transparent,
//               black 1.5%,
//               black 98.5%,
//               transparent
//             );

//             mask-image: linear-gradient(
//               to right,
//               transparent,
//               black 1.5%,
//               black 98.5%,
//               transparent
//             );
//           }

//           .testimonial-editorial-track {
//             animation-duration: 62s;
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .testimonial-editorial-track {
//             animation: none !important;
//           }

//           .testimonial-editorial-copy {
//             display: none;
//           }

//           .testimonial-editorial-fade {
//             overflow-x: auto;
//             scrollbar-width: none;
//             -webkit-mask-image: none;
//             mask-image: none;
//           }

//           .testimonial-editorial-fade::-webkit-scrollbar {
//             display: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
"use client";

import { Quote, Star } from "lucide-react";

import { testimonials } from "@/lib/data";

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="relative flex min-h-[330px] w-[86vw] max-w-[720px] shrink-0 flex-col overflow-hidden rounded-3xl border border-brand-blue-100 bg-white p-6 shadow-[0_16px_50px_rgba(15,23,42,0.06)] sm:min-h-[350px] sm:p-8 lg:min-h-[370px] lg:p-10">
      {/* Subtle red accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-red-500 via-brand-red-400 to-transparent" />

      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex size-10 items-center justify-center rounded-xl bg-brand-red-50 text-brand-red-600">
          <Quote className="size-4 fill-current" />
        </div>

        <div
          className="flex items-center gap-1 text-brand-red-500"
          aria-label={`${testimonial.rating} out of 5 stars`}
        >
          {Array.from({ length: testimonial.rating }).map((_, index) => (
            <Star key={index} className="size-3.5 fill-current sm:size-4" />
          ))}
        </div>
      </div>

      {/* Quote */}
      <blockquote className="my-auto py-8">
        <p className="font-display text-xl font-semibold leading-[1.5] tracking-[-0.015em] text-brand-blue-950 sm:text-2xl sm:leading-[1.45] lg:text-[1.75rem]">
          “{testimonial.quote}”
        </p>
      </blockquote>

      {/* Customer information */}
      <footer className="flex flex-col gap-4 border-t border-brand-blue-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-950 text-sm font-bold text-white">
            {testimonial.name.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-brand-blue-950">
              {testimonial.name}
            </p>

            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {testimonial.location}
            </p>
          </div>
        </div>

        <span className="w-fit rounded-full bg-brand-red-50 px-3 py-1.5 text-xs font-semibold text-brand-red-700">
          {testimonial.service}
        </span>
      </footer>
    </article>
  );
}

function TestimonialGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate ? "true" : undefined}
      className={`flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 ${
        duplicate ? "testimonial-copy" : ""
      }`}
    >
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={`${duplicate ? "copy" : "original"}-${
            testimonial.name
          }-${index}`}
          testimonial={testimonial}
        />
      ))}
    </div>
  );
}

export function TestimonialMarquee() {
  return (
    <div className="testimonial-marquee relative">
      <div className="testimonial-viewport overflow-hidden py-3">
        <div className="testimonial-track flex w-max will-change-transform">
          <TestimonialGroup />
          <TestimonialGroup duplicate />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-brand-red-500" />
        <span>Hover to pause and read</span>
      </div>

      <style jsx global>{`
        @keyframes testimonial-scroll-left {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .testimonial-track {
          animation: testimonial-scroll-left 72s linear infinite;
        }

        .testimonial-marquee:hover .testimonial-track,
        .testimonial-marquee:focus-within .testimonial-track {
          animation-play-state: paused;
        }

        .testimonial-viewport {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );

          mask-image: linear-gradient(
            to right,
            transparent,
            black 3%,
            black 97%,
            transparent
          );
        }

        @media (max-width: 639px) {
          .testimonial-track {
            animation-duration: 60s;
          }

          .testimonial-viewport {
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 1%,
              black 99%,
              transparent
            );

            mask-image: linear-gradient(
              to right,
              transparent,
              black 1%,
              black 99%,
              transparent
            );
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none !important;
          }

          .testimonial-copy {
            display: none;
          }

          .testimonial-viewport {
            overflow-x: auto;
            scrollbar-width: none;
            -webkit-mask-image: none;
            mask-image: none;
          }

          .testimonial-viewport::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
