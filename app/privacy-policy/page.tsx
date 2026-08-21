import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { PageHero } from "@/components/page-hero"
import { siteConfig } from "@/lib/site-config"
import { photos } from "@/lib/media"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}.`,
}

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "long" })}`}
        image={photos.londonStreetHouses}
        crumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="section-y">
        <div className="container-custom max-w-3xl prose-content">
          <div className="space-y-8 text-muted-foreground leading-relaxed text-[15px]">
            <p>
              {siteConfig.name} ("we", "us", "our") is committed to protecting your privacy. This policy
              explains what information we collect when you use this website or contact us, how we use it,
              and the choices you have.
            </p>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Information we collect</h2>
              <p>
                When you submit our contact form, call, or email us, we may collect your name, phone number,
                email address, property address and details of the work you need carried out. We only collect
                the information necessary to respond to your enquiry and provide our services.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">How we use your information</h2>
              <p>
                We use your information to respond to enquiries, provide quotes, schedule and carry out work,
                issue certificates or documentation where required, and communicate with you about your job. We
                do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Cookies &amp; website data</h2>
              <p>
                This website may use essential cookies required for basic functionality. We do not use
                third-party advertising cookies. Standard technical information (such as browser type and
                approximate location) may be collected automatically by our hosting provider for security and
                performance purposes.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Data retention &amp; security</h2>
              <p>
                We retain personal information only for as long as necessary to provide our services and meet
                legal or regulatory requirements (for example, gas safety records). We take reasonable steps to
                protect your information from unauthorised access, loss or misuse.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Your rights</h2>
              <p>
                You can ask us what personal information we hold about you, request a correction, or ask us to
                delete it, subject to any legal obligations we have to retain certain records. To make a
                request, contact us using the details below.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-brand-blue-950 mb-3">Contact us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at{" "}
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
