import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/lib/site-config"
import { photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${siteConfig.name}.`,
}

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}`}
        image={photos.londonTerraced1}
        crumbs={[{ label: "Terms of Service" }]}
      />

      <section className="section-y">
        <div className="container-custom max-w-3xl">
          <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              These terms govern your use of this website and the engagement of {siteConfig.name} for gas,
              heating, plumbing, electrical and property maintenance services. By using this website or
              booking our services, you agree to these terms.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Quotes &amp; pricing</h2>
              <p>
                Quotes are provided based on the information available at the time and may be subject to
                change if the scope of work differs once an engineer is on site. We will always confirm any
                changes with you before additional work is carried out.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Bookings &amp; cancellations</h2>
              <p>
                We ask for reasonable notice if you need to reschedule or cancel a booked appointment. Repeated
                late cancellations or missed appointments may be subject to a call-out charge.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Workmanship</h2>
              <p>
                All work is carried out by qualified, insured engineers in accordance with relevant industry
                regulations and safety standards. Any issues with completed work should be reported to us
                promptly so we can put things right.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Payment</h2>
              <p>
                Payment terms are confirmed at the time of quoting. We accept bank transfer and card payment.
                Any deposit or staged payment requirements for larger installations will be agreed in advance.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Liability</h2>
              <p>
                We carry appropriate insurance for the work we undertake. Our liability is limited to the cost
                of the service provided, except where liability cannot be excluded by law.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Website use</h2>
              <p>
                This website is provided for general information about our services. While we aim to keep
                content accurate and up to date, we make no guarantees about completeness and recommend
                confirming specific details with us directly before booking.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Contact us</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${siteConfig.email}`} className="text-brand-blue-700 font-medium">
                  {siteConfig.email}
                </a>{" "}
                or {siteConfig.phoneDisplay}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}
