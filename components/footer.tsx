import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react"
import { siteConfig } from "@/lib/site-config"
import { services } from "@/lib/data"
import { Logo } from "@/components/logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const company = [
    { name: "About us", href: "/about" },
    { name: "Our services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ]

  return (
    <footer className="bg-brand-blue-950 text-white/85 noise-overlay">
      <div className="container-custom py-16 lg:py-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-14">
          <div className="lg:col-span-4">
            <Logo dark />
            <p className="mt-5 text-sm leading-relaxed text-white/60 max-w-sm">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 w-fit">
              <span className="relative flex size-2">
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-red-500" />
              </span>
              <span className="text-xs font-medium text-white/80">{siteConfig.hours}</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200 group inline-flex items-center"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={13}
                      className="ml-1 opacity-0 -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-display font-semibold text-white mb-4 text-sm tracking-wide uppercase">Get in touch</h4>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="flex items-start gap-2.5 hover:text-white transition-colors">
                  <Phone className="size-4 mt-0.5 shrink-0 text-brand-red-400" />
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-start gap-2.5 hover:text-white transition-colors break-all">
                  <Mail className="size-4 mt-0.5 shrink-0 text-brand-red-400" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="size-4 mt-0.5 shrink-0 text-brand-red-400" />
                {siteConfig.address.full}
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="size-4 mt-0.5 shrink-0 text-brand-red-400" />
                {siteConfig.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45 text-center sm:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/45">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-white/80 transition-colors">
                {l.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
