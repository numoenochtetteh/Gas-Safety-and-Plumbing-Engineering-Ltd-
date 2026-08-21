"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navLinks } from "@/lib/site-config";
import { services } from "@/lib/data";
import { Logo, LogoMark } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="container-custom flex items-center justify-between gap-2">
        {/* Logo pill */}
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="shrink-0"
        >
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 rounded-full bg-brand-blue-950 pl-2.5 pr-3 sm:pr-4 py-2 shadow-lg shadow-black/10"
          >
            <LogoMark className="h-7 w-7" />
            <span className="hidden sm:flex flex-col leading-none">
              <span className="font-display text-sm font-bold text-white">
                GSP <span className="text-brand-red-400">Engineering</span>
              </span>
            </span>
          </motion.div>
        </Link>

        {/* Nav pill (desktop only) */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="hidden lg:flex items-center gap-0.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg shadow-black/5 border border-black/5 px-1.5 py-1.5"
        >
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
                      ? "bg-brand-blue-50 text-brand-blue-700"
                      : "text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700",
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
                            <span className="text-sm font-semibold text-brand-blue-900">
                              {s.shortTitle}
                            </span>
                            <span className="text-xs text-muted-foreground line-clamp-1">
                              {s.summary}
                            </span>
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
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700",
                  link.label === "Emergency" &&
                    "text-brand-red-600 hover:text-brand-red-700 hover:bg-brand-red-50",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </motion.nav>

        {/* Right side pill(s) */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 shrink-0"
        >
          <Button
            asChild
            className="hidden sm:inline-flex rounded-full bg-brand-red-600 hover:bg-brand-red-700 text-white shadow-lg shadow-brand-red-600/25"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="size-4" />
              Call now
            </a>
          </Button>

          {/* Mobile: icon-only call button */}
          <Button
            asChild
            size="icon"
            className="sm:hidden rounded-full bg-brand-red-600 hover:bg-brand-red-700 shadow-lg shadow-brand-red-600/25"
          >
            <a href={`tel:${siteConfig.phone}`} aria-label="Call us">
              <Phone className="size-4" />
            </a>
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="lg:hidden rounded-full bg-brand-blue-950 hover:bg-brand-blue-900 text-white shadow-lg shadow-black/10"
                aria-label="Open menu"
              >
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
                        pathname === link.href
                          ? "bg-brand-blue-50 text-brand-blue-700"
                          : "text-slate-700",
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
                <Button
                  asChild
                  className="w-full rounded-full bg-brand-red-600 hover:bg-brand-red-700"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="size-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full"
                >
                  <Link href="/contact">Get a free quote</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </motion.div>
      </div>
    </header>
  );
}
