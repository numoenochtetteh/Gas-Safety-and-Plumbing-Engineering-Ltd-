// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, Phone, ChevronDown } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { siteConfig, navLinks } from "@/lib/site-config";
// import { services } from "@/lib/data";
// import { Logo, LogoMark } from "@/components/logo";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetClose,
//   SheetTrigger,
// } from "@/components/ui/sheet";

// export function Header() {
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const pathname = usePathname();

//   useEffect(() => {
//     setMobileOpen(false);
//   }, [pathname]);

//   return (
//     <header className="fixed top-0 inset-x-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
//       <div className="container-custom flex items-center justify-between gap-2">
//         {/* Logo pill */}
//         <Link
//           href="/"
//           aria-label={`${siteConfig.name} home`}
//           className="shrink-0"
//         >
//           <motion.div
//             initial={{ opacity: 0, y: -12 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex items-center gap-2 rounded-full bg-brand-blue-950 pl-2.5 pr-3 sm:pr-4 py-2 shadow-lg shadow-black/10"
//           >
//             <LogoMark className="h-7 w-7" />
//             <span className="hidden sm:flex flex-col leading-none">
//               <span className="font-display text-sm font-bold text-white">
//                 GSP <span className="text-brand-red-400">Engineering</span>
//               </span>
//             </span>
//           </motion.div>
//         </Link>

//         {/* Nav pill (desktop only) */}
//         <motion.nav
//           initial={{ opacity: 0, y: -12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.05 }}
//           className="hidden lg:flex items-center gap-0.5 rounded-full bg-white/95 backdrop-blur-sm shadow-lg shadow-black/5 border border-black/5 px-1.5 py-1.5"
//         >
//           {navLinks.map((link) =>
//             link.label === "Services" ? (
//               <div
//                 key={link.href}
//                 className="relative"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <Link
//                   href={link.href}
//                   className={cn(
//                     "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors",
//                     pathname.startsWith("/services")
//                       ? "bg-brand-blue-50 text-brand-blue-700"
//                       : "text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700",
//                   )}
//                 >
//                   {link.label}
//                   <ChevronDown className="size-3.5" />
//                 </Link>
//                 <AnimatePresence>
//                   {servicesOpen && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 8 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 8 }}
//                       transition={{ duration: 0.18 }}
//                       className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[560px]"
//                     >
//                       <div className="rounded-2xl border border-border bg-white shadow-xl shadow-black/[0.08] p-3 grid grid-cols-2 gap-1">
//                         {services.map((s) => (
//                           <Link
//                             key={s.slug}
//                             href={`/services/${s.slug}`}
//                             className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 hover:bg-brand-blue-50 transition-colors"
//                           >
//                             <span className="text-sm font-semibold text-brand-blue-900">
//                               {s.shortTitle}
//                             </span>
//                             <span className="text-xs text-muted-foreground line-clamp-1">
//                               {s.summary}
//                             </span>
//                           </Link>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             ) : (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={cn(
//                   "px-4 py-2 rounded-full text-sm font-medium transition-colors",
//                   pathname === link.href
//                     ? "bg-brand-blue-50 text-brand-blue-700"
//                     : "text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700",
//                   link.label === "Emergency" &&
//                     "text-brand-red-600 hover:text-brand-red-700 hover:bg-brand-red-50",
//                 )}
//               >
//                 {link.label}
//               </Link>
//             ),
//           )}
//         </motion.nav>

//         {/* Right side pill(s) */}
//         <motion.div
//           initial={{ opacity: 0, y: -12 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="flex items-center gap-2 shrink-0"
//         >
//           <Button
//             asChild
//             className="hidden sm:inline-flex rounded-full bg-brand-red-600 hover:bg-brand-red-700 text-white shadow-lg shadow-brand-red-600/25"
//           >
//             <a href={`tel:${siteConfig.phone}`}>
//               <Phone className="size-4" />
//               Call now
//             </a>
//           </Button>

//           {/* Mobile: icon-only call button */}
//           <Button
//             asChild
//             size="icon"
//             className="sm:hidden rounded-full bg-brand-red-600 hover:bg-brand-red-700 shadow-lg shadow-brand-red-600/25"
//           >
//             <a href={`tel:${siteConfig.phone}`} aria-label="Call us">
//               <Phone className="size-4" />
//             </a>
//           </Button>

//           <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
//             <SheetTrigger asChild>
//               <Button
//                 size="icon"
//                 className="lg:hidden rounded-full bg-brand-blue-950 hover:bg-brand-blue-900 text-white shadow-lg shadow-black/10"
//                 aria-label="Open menu"
//               >
//                 <Menu className="size-5" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[85%] sm:w-80 p-0">
//               <SheetHeader className="p-5 border-b">
//                 <SheetTitle asChild>
//                   <Logo />
//                 </SheetTitle>
//               </SheetHeader>
//               <nav className="flex flex-col p-3">
//                 {navLinks.map((link) => (
//                   <SheetClose asChild key={link.href}>
//                     <Link
//                       href={link.href}
//                       className={cn(
//                         "px-4 py-3 rounded-xl text-base font-medium transition-colors",
//                         pathname === link.href
//                           ? "bg-brand-blue-50 text-brand-blue-700"
//                           : "text-slate-700",
//                         link.label === "Emergency" && "text-brand-red-600",
//                       )}
//                     >
//                       {link.label}
//                     </Link>
//                   </SheetClose>
//                 ))}
//                 <div className="mt-2 pt-3 border-t space-y-1">
//                   <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
//                     Services
//                   </p>
//                   {services.map((s) => (
//                     <SheetClose asChild key={s.slug}>
//                       <Link
//                         href={`/services/${s.slug}`}
//                         className="block px-4 py-2 rounded-xl text-sm text-slate-600 hover:bg-brand-blue-50"
//                       >
//                         {s.shortTitle}
//                       </Link>
//                     </SheetClose>
//                   ))}
//                 </div>
//               </nav>
//               <div className="mt-auto p-5 border-t space-y-3">
//                 <Button
//                   asChild
//                   className="w-full rounded-full bg-brand-red-600 hover:bg-brand-red-700"
//                 >
//                   <a href={`tel:${siteConfig.phone}`}>
//                     <Phone className="size-4" />
//                     {siteConfig.phoneDisplay}
//                   </a>
//                 </Button>
//                 <Button
//                   asChild
//                   variant="outline"
//                   className="w-full rounded-full"
//                 >
//                   <Link href="/contact">Get a free quote</Link>
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>
//         </motion.div>
//       </div>
//     </header>
//   );
// }
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
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  // Close the mobile menu whenever the page changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Change the phone header background when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      {/* Phone header only */}
      <div className="sm:hidden">
        <div
          className={cn(
            "flex h-[62px] items-center justify-between gap-2 rounded-2xl px-3 transition-all duration-300 ease-out",
            scrolled
              ? "border border-black/5 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.14)]"
              : "border border-white/15 bg-transparent shadow-none",
          )}
        >
          {/* Simplified phone logo */}
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex min-w-0 flex-1 items-center gap-2"
          >
            <LogoMark className="size-7 shrink-0" />

            <div className="flex flex-col leading-none">
              <span
                className={cn(
                  "font-display text-[13px] font-bold uppercase tracking-tight transition-colors duration-300",
                  scrolled ? "text-brand-blue-950" : "text-white",
                )}
              >
                GSP
              </span>

              <span
                className={cn(
                  "mt-1 font-display text-[15px] font-bold transition-colors duration-300",
                  scrolled ? "text-brand-red-600" : "text-white",
                )}
              >
                Engineering
              </span>
            </div>
          </Link>

          {/* Phone actions */}
          <div className="flex shrink-0 items-center gap-2">
            <Button
              asChild
              size="sm"
              className={cn(
                "h-10 rounded-full px-3.5 text-white transition-all duration-300",
                scrolled
                  ? "bg-brand-red-600 shadow-md shadow-brand-red-600/20 hover:bg-brand-red-700"
                  : "border border-white/20 bg-brand-red-600/90 backdrop-blur-md hover:bg-brand-red-600",
              )}
            >
              <a
                href={`tel:${siteConfig.phone}`}
                aria-label="Call GSP Engineering"
              >
                <Phone className="size-4" />
                <span className="text-sm font-semibold">Call</span>
              </a>
            </Button>

            {/* Phone menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  className={cn(
                    "size-10 rounded-full text-white transition-all duration-300",
                    scrolled
                      ? "bg-brand-blue-950 shadow-md hover:bg-brand-blue-900"
                      : "border border-white/20 bg-black/30 backdrop-blur-md hover:bg-black/45",
                  )}
                  aria-label="Open navigation menu"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="flex w-[88%] max-w-sm flex-col p-0"
              >
                <SheetHeader className="border-b bg-white p-5 text-left">
                  <SheetTitle asChild>
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 pr-8"
                    >
                      <LogoMark className="size-8 shrink-0" />

                      <div className="flex flex-col leading-none">
                        <span className="font-display text-sm font-bold uppercase tracking-tight text-brand-blue-950">
                          GSP
                        </span>

                        <span className="mt-1 font-display text-base font-bold text-brand-red-600">
                          Engineering
                        </span>
                      </div>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex-1 overflow-y-auto p-3">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                            pathname === link.href
                              ? "bg-brand-blue-50 text-brand-blue-700"
                              : "text-slate-700 hover:bg-slate-50",
                            link.label === "Emergency" &&
                              "text-brand-red-600 hover:bg-brand-red-50",
                          )}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </div>

                  <div className="mt-3 border-t pt-4">
                    <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      Our services
                    </p>

                    <div className="flex flex-col gap-1">
                      {services.map((service) => (
                        <SheetClose asChild key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="rounded-xl px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-brand-blue-50 hover:text-brand-blue-700"
                          >
                            {service.shortTitle}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                  </div>
                </nav>

                <div className="space-y-3 border-t bg-slate-50 p-5">
                  <Button
                    asChild
                    className="w-full rounded-full bg-brand-red-600 text-white hover:bg-brand-red-700"
                  >
                    <a href={`tel:${siteConfig.phone}`}>
                      <Phone className="size-4" />
                      {siteConfig.phoneDisplay}
                    </a>
                  </Button>

                  <SheetClose asChild>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full rounded-full bg-white"
                    >
                      <Link href="/contact">Get a free quote</Link>
                    </Button>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Tablet and desktop header */}
      <div className="container-custom hidden items-center justify-between gap-2 sm:flex">
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
            className="flex items-center gap-2 rounded-full bg-brand-blue-950 py-2 pl-2.5 pr-4 shadow-lg shadow-black/10"
          >
            <LogoMark className="h-7 w-7" />

            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-bold text-white">
                GSP <span className="text-brand-red-400">Engineering</span>
              </span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.05,
          }}
          className="hidden items-center gap-0.5 rounded-full border border-black/5 bg-white/95 px-1.5 py-1.5 shadow-lg shadow-black/5 backdrop-blur-sm lg:flex"
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
                    "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
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
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      transition={{
                        duration: 0.18,
                      }}
                      className="absolute left-1/2 top-full w-[560px] -translate-x-1/2 pt-3"
                    >
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-border bg-white p-3 shadow-xl shadow-black/[0.08]">
                        {services.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="flex flex-col gap-0.5 rounded-xl px-3.5 py-2.5 transition-colors hover:bg-brand-blue-50"
                          >
                            <span className="text-sm font-semibold text-brand-blue-900">
                              {service.shortTitle}
                            </span>

                            <span className="line-clamp-1 text-xs text-muted-foreground">
                              {service.summary}
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
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-brand-blue-50 text-brand-blue-700"
                    : "text-slate-700 hover:bg-brand-blue-50 hover:text-brand-blue-700",
                  link.label === "Emergency" &&
                    "text-brand-red-600 hover:bg-brand-red-50 hover:text-brand-red-700",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </motion.nav>

        {/* Tablet and desktop actions */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex shrink-0 items-center gap-2"
        >
          <Button
            asChild
            className="rounded-full bg-brand-red-600 text-white shadow-lg shadow-brand-red-600/25 hover:bg-brand-red-700"
          >
            <a href={`tel:${siteConfig.phone}`}>
              <Phone className="size-4" />
              Call now
            </a>
          </Button>

          {/* Tablet menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                size="icon"
                className="rounded-full bg-brand-blue-950 text-white shadow-lg shadow-black/10 hover:bg-brand-blue-900 lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="flex w-80 flex-col p-0">
              <SheetHeader className="border-b p-5">
                <SheetTitle asChild>
                  <Logo />
                </SheetTitle>
              </SheetHeader>

              <nav className="flex-1 overflow-y-auto p-3">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "block rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        pathname === link.href
                          ? "bg-brand-blue-50 text-brand-blue-700"
                          : "text-slate-700 hover:bg-slate-50",
                        link.label === "Emergency" &&
                          "text-brand-red-600 hover:bg-brand-red-50",
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-2 space-y-1 border-t pt-3">
                  <p className="px-4 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Services
                  </p>

                  {services.map((service) => (
                    <SheetClose asChild key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block rounded-xl px-4 py-2 text-sm text-slate-600 hover:bg-brand-blue-50"
                      >
                        {service.shortTitle}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </nav>

              <div className="space-y-3 border-t bg-slate-50 p-5">
                <Button
                  asChild
                  className="w-full rounded-full bg-brand-red-600 text-white hover:bg-brand-red-700"
                >
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="size-4" />
                    {siteConfig.phoneDisplay}
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full rounded-full bg-white"
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
