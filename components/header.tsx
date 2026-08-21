"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, Phone, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { siteConfig, navLinks } from "@/lib/site-config"
import { services } from "@/lib/data"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      {/* Top utility strip */}
      <div className="hidden lg:block bg-brand-blue-950 text-white/80 text-xs">
        <div className="container-custom flex items-center justify-between h-9">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="size-3" /> {siteConfig.phoneDisplay}
            </a>
            <span className="flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />
                <span className="relative inline-flex size-1.5 rounded-full bg-brand-red-500" />
              </span>
              {siteConfig.hours}
            </span>
          </div>
          <div>{siteConfig.address.full}</div>
        </div>
      </div>

      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "glass-panel shadow-sm shadow-black/[0.03]" : "bg-white/90 backdrop-blur-sm",
        )}
      >
        <div className="container-custom">
          <div className="flex h-16 lg:h-[72px] items-center justify-between">
            <Link href="/" aria-label={`${siteConfig.name} home`}>
              <Logo />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                link.label === "Services" ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                        pathname.startsWith("/services")
                          ? "text-brand-blue-700"
                          : "text-slate-700 hover:text-brand-blue-700",
                      )}
                    >
                      {link.label}
                      <ChevronDown className="size-3.5" />
                    </Link>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[560px]"
                        >
                          <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/[0.08] p-3 grid grid-cols-2 gap-1">
                            {services.map((s) => (
                              <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-brand-blue-50 transition-colors"
                              >
                                <span className="text-sm font-semibold text-brand-blue-900">{s.shortTitle}</span>
                                <span className="text-xs text-muted-foreground line-clamp-1">{s.summary}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-brand-blue-700"
                        : "text-slate-700 hover:text-brand-blue-700",
                      link.label === "Emergency" && "text-brand-red-600 hover:text-brand-red-700",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button asChild variant="outline" className="rounded-full border-brand-blue-200 text-brand-blue-800 hover:bg-brand-blue-50 bg-transparent">
                <Link href="/contact">Get a free quote</Link>
              </Button>
              <Button asChild className="rounded-full bg-brand-red-600 hover:bg-brand-red-700 text-white shadow-lg shadow-brand-red-600/25">
                <a href={`tel:${siteConfig.phone}`}>
                  <Phone className="size-4" />
                  Call now
                </a>
              </Button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <Button asChild size="icon" className="rounded-full bg-brand-red-600 hover:bg-brand-red-700">
                <a href={`tel:${siteConfig.phone}`} aria-label="Call us">
                  <Phone className="size-4" />
                </a>
              </Button>
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button size="icon" variant="outline" aria-label="Open menu">
                    <Menu className="size-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[85%] sm:w-80 p-0">
                  <SheetHeader className="p-5 border-b">
                    <SheetTitle asChild>
                      <Logo />
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col p-3">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "px-4 py-3 rounded-xl text-base font-medium transition-colors",
                            pathname === link.href ? "bg-brand-blue-50 text-brand-blue-700" : "text-slate-700",
                            link.label === "Emergency" && "text-brand-red-600",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                    <div className="mt-2 pt-3 border-t space-y-1">
                      <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Services
                      </p>
                      {services.map((s) => (
                        <SheetClose asChild key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block px-4 py-2 rounded-xl text-sm text-slate-600 hover:bg-brand-blue-50"
                          >
                            {s.shortTitle}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </nav>
                  <div className="mt-auto p-5 border-t space-y-3">
                    <Button asChild className="w-full rounded-full bg-brand-red-600 hover:bg-brand-red-700">
                      <a href={`tel:${siteConfig.phone}`}>
                        <Phone className="size-4" />
                        {siteConfig.phoneDisplay}
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-full rounded-full">
                      <Link href="/contact">Get a free quote</Link>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.header>
    </>
  )
}
