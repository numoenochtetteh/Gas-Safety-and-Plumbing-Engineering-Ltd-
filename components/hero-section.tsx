"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight, ShieldCheck, Clock3, Star } from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const HERO_VIDEO = "/video/vid1.mp4";

export function HeroSection() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-brand-blue-950 lg:min-h-[760px]">
      {/* Background video */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero.jpg"
          aria-hidden="true"
          tabIndex={-1}
          disablePictureInPicture
          className="h-full w-full object-cover object-center"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      </div>

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

      {/* Hero content */}
      <div className="container-custom relative z-10 flex min-h-[680px] items-start pb-14 pt-[110px] sm:items-center sm:pb-16 sm:pt-32 lg:min-h-[760px] lg:pb-24 lg:pt-40">
        <div className="w-full max-w-[780px]">
          {/* Emergency badge — visible on all screens */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mt-30 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/25 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-white/90 backdrop-blur-md sm:mt-0 sm:px-4 sm:text-xs sm:tracking-[0.12em]"
          >
            <span className="relative flex size-2">
              <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />

              <span className="relative inline-flex size-2 rounded-full bg-brand-red-500" />
            </span>

            <span>24/7 Emergency Call-Outs</span>

            <span className="hidden sm:inline">
              &middot; Enfield &amp; London
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="mt-4 max-w-[760px] text-balance font-display text-[2.15rem] font-bold leading-[1.05] tracking-[-0.035em] text-white sm:mt-6 sm:text-5xl lg:text-[3.75rem]"
          >
            Gas, Heating &amp; Plumbing Engineers you can trust
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease,
            }}
            className="mt-5 max-w-[640px] text-[15px] leading-7 text-white/90 sm:mt-6 sm:text-lg sm:leading-relaxed"
          >
            {siteConfig.name} delivers safe and reliable gas, heating, plumbing,
            electrical and property maintenance services for homes and
            businesses across Enfield and London—day or night.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease,
            }}
            className="mt-7 flex flex-col items-stretch gap-3 sm:mt-9 sm:flex-row sm:items-center"
          >
            <Button
              asChild
              size="lg"
              className="min-h-12 w-full rounded-full bg-brand-red-600 px-6 text-white shadow-xl shadow-brand-red-950/30 hover:bg-brand-red-700 sm:w-auto"
            >
              <a href={`tel:${siteConfig.phone}`}>
                <Phone className="size-4" />
                Call {siteConfig.phoneDisplay}
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-12 w-full rounded-full border-white/40 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white hover:text-brand-blue-950 sm:w-auto"
            >
              <Link href="/contact">
                Get a free quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust badges — hidden on phones, visible from tablet upward */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
            }}
            className="mt-10 hidden flex-wrap items-center gap-3 text-sm font-medium text-white/90 sm:flex sm:gap-x-6"
          >
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <ShieldCheck className="size-4 shrink-0 text-brand-red-400" />
              <span>Qualified &amp; insured</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <Clock3 className="size-4 shrink-0 text-brand-red-400" />
              <span>Fast, same-day response</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-2 backdrop-blur-sm">
              <Star className="size-4 shrink-0 fill-brand-red-400 text-brand-red-400" />
              <span>Trusted local engineers</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
