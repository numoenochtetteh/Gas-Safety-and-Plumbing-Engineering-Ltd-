import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

import { siteConfig } from "@/lib/site-config";
import { services } from "@/lib/data";
import { Logo } from "@/components/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const company = [
    { name: "About us", href: "/about" },
    { name: "Our services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ];

  const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/your-page-name",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/your-page-name",
      icon: Instagram,
    },
    {
      name: "WhatsApp",
      href: `https://wa.me/${whatsappNumber}`,
      icon: MessageCircle,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-blue-950 text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-0 size-80 rounded-full bg-brand-red-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-brand-blue-500/10 blur-3xl" />

      <div className="container-custom relative z-10 py-10 lg:py-14">
        {/* Footer CTA */}
        <div className="mb-14 flex flex-col gap-7 rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">
              <span className="relative flex size-2">
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-red-500" />
              </span>
              Available 24/7
            </div>

            <h2 className="max-w-2xl font-display text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">
              Need a reliable engineer today?
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
              Call our team for gas, heating, plumbing, electrical and emergency
              property repairs across Enfield and London.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red-600 px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-brand-red-500"
            >
              <Phone className="size-4" />
              Call now
            </a>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand-blue-950 transition-all duration-300 hover:bg-white/90"
            >
              Get a free quote
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Business information */}
          <div className="sm:col-span-2 lg:col-span-4">
            <Logo
              className="border border-white/10 px-3 py-2 shadow-lg shadow-black/10"
              imageClassName="h-12"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              {siteConfig.description}
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2">
              <span className="relative flex size-2">
                <span className="pulse-dot absolute inline-flex size-full rounded-full bg-brand-red-500" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-red-500" />
              </span>

              <span className="text-xs font-medium text-white/80">
                {siteConfig.hours}
              </span>
            </div>

            {/* Social media */}
            <div className="mt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Connect with us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Follow us on ${social.name}`}
                      title={social.name}
                      className="group flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red-500 hover:bg-brand-red-600 hover:text-white"
                    >
                      <Icon className="size-[18px] transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Company links */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white">
              Company
            </h3>

            <ul className="space-y-3.5">
              {company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {link.name}

                    <ArrowUpRight className="ml-1 size-3.5 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service links */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white">
              Services
            </h3>

            <ul className="space-y-3.5">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-white">
              Get in touch
            </h3>

            <ul className="space-y-4 text-sm text-white/65">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-start gap-3 transition-colors hover:text-white"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-brand-red-400">
                    <Phone className="size-4" />
                  </span>

                  <span className="pt-1.5">{siteConfig.phoneDisplay}</span>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 break-all transition-colors hover:text-white"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-brand-red-400">
                    <Mail className="size-4" />
                  </span>

                  <span className="pt-1.5">{siteConfig.email}</span>
                </a>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-brand-red-400">
                  <MapPin className="size-4" />
                </span>

                <span className="pt-1 leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] text-brand-red-400">
                  <Clock className="size-4" />
                </span>

                <span className="pt-1.5">{siteConfig.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pb-10 pt-7 sm:flex-row lg:pb-12">
          {" "}
          <p className="text-center text-xs text-white/40 sm:text-left">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/40 transition-colors hover:text-white/80"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
