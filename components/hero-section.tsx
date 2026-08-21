"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, ArrowRight, ShieldCheck, Clock3, Star } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { pexelsVideoPoster, videos, photos } from "@/lib/media"
import { Button } from "@/components/ui/button"
import { StatsBar } from "@/components/stats-bar"

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue-950">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-45"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={pexelsVideoPoster(photos.heroPlumberRadiator, 1920)}
        >
          <source src={videos.plumbingHands} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-950 via-brand-blue-950/80 to-brand-blue-900/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-950/70 via-brand-blue-950/20 to-transparent" />
      </div>

      <div className="container-custom relative pt-36 pb-20 lg:pt-44 lg:pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white/90"
          >
            <span className="relative flex size-1.5">
              <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />
              <span className="relative inline-flex size-1.5 rounded-full bg-brand-red-500" />
            </span>
            24/7 Emergency Call-Outs &middot; Enfield &amp; London
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="mt-6 font-display text-4xl sm:text-5xl lg:text-[4rem] font-bold tracking-tight text-white leading-[1.04] text-balance"
          >
            Gas, heating & plumbing engineers you can trust
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed"
          >
            {siteConfig.name} delivers safe, reliable gas, heating, plumbing, electrical and property
            maintenance services — for homes and businesses across Enfield and London, day or night.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-3"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full bg-brand-red-600 hover:bg-brand-red-700 text-white shadow-xl shadow-brand-red-600/30 w-full sm:w-auto"
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
              className="rounded-full border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent w-full sm:w-auto"
            >
              <Link href="/contact">
                Get a free quote
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand-red-400" />
              Qualified &amp; insured
            </div>
            <div className="flex items-center gap-2">
              <Clock3 className="size-4 text-brand-red-400" />
              Fast, same-day response
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 fill-brand-red-400 text-brand-red-400" />
              Trusted local engineers
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-16 lg:mt-20"
        >
          <StatsBar />
        </motion.div>
      </div>
    </section>
  )
}
