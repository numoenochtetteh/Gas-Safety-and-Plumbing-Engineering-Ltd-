"use client";

import { useState } from "react";
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
  const [mobilePaused, setMobilePaused] = useState(false);

  const toggleMobilePause = () => {
    if (window.matchMedia("(max-width: 639px)").matches) {
      setMobilePaused((paused) => !paused);
    }
  };

  return (
    <div
      className={`testimonial-marquee relative ${
        mobilePaused ? "testimonial-mobile-paused" : ""
      }`}
    >
      <div
        className="testimonial-viewport overflow-hidden py-3"
        onClick={toggleMobilePause}
        aria-label={
          mobilePaused ? "Resume customer reviews" : "Pause customer reviews"
        }
      >
        <div className="testimonial-track flex w-max will-change-transform">
          <TestimonialGroup />
          <TestimonialGroup duplicate />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-brand-red-500" />

        {/* Phone instruction */}
        <span className="sm:hidden">
          {mobilePaused ? "Tap to continue" : "Tap to pause and read"}
        </span>

        {/* Tablet and desktop instruction */}
        <span className="hidden sm:inline">Hover to pause and read</span>
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

        @media (hover: hover) and (pointer: fine) {
          .testimonial-marquee:hover .testimonial-track,
          .testimonial-marquee:focus-within .testimonial-track {
            animation-play-state: paused;
          }
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

          .testimonial-mobile-paused .testimonial-track {
            animation-play-state: paused;
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
