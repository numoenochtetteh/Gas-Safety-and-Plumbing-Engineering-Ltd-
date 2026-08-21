import { Phone, MessageSquare } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/site-config"

export function MobileCallBar() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 glass-panel border-t border-black/5 shadow-[0_-8px_24px_rgba(10,20,40,0.08)]">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center gap-2 rounded-full bg-brand-red-600 text-white text-sm font-semibold py-3 active:scale-[0.98] transition-transform"
        >
          <Phone className="size-4" />
          Call now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-full bg-brand-blue-800 text-white text-sm font-semibold py-3 active:scale-[0.98] transition-transform"
        >
          <MessageSquare className="size-4" />
          Free quote
        </Link>
      </div>
    </div>
  )
}
