import { CheckCircle } from "lucide-react"

export default function TermsAndConditions() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r flex items-center justify-center border-white/20 border-b h-[80vh]">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2 text-sm font-light">Last updated on May 21, 2025</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Terms & Conditions</h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-3xl px-4 py-16">
          {/* Agreement */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">1. Agreement</h2>
            <p className="text-lg text-zinc-400">
              By engaging <span className="font-bold text-white">Arafa Webs</span> for any service—including but not limited to web development (MERN Stack, Shopify, WordPress) and telemetry solutions—clients agree to abide by the terms outlined in this document.
            </p>
          </section>

          {/* Scope of Services */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">2. Scope of Services</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Full-stack web development (MERN stack, Shopify, WordPress)
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Anonymous telemetry services, system reports, and dashboards
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Maintenance & support plans (optional service-level agreements)
              </li>
            </ul>
            <p className="mt-4 text-lg text-zinc-400">
              Additional services must be confirmed through a formal proposal or written agreement.
            </p>
          </section>

          {/* Client Responsibilities */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">3. Client Responsibilities</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Provide accurate project requirements and timely feedback
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Use all services and telemetry data for lawful and ethical purposes
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Notify their own users (if applicable) about data collection practices
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Ensure all third-party assets provided are properly licensed
              </li>
            </ul>
          </section>

          {/* Limitations */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">4. Limitations & Disclaimers</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Not liable for client-side data loss or misuse
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Telemetry accuracy may vary due to ad-blockers or browser restrictions
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Not responsible for business losses post-handover unless under a support plan
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Telemetry is a support tool, not a replacement for formal QA processes
              </li>
            </ul>
          </section>

          {/* Confidentiality */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">5. Confidentiality & Data Protection</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                All client data and logs are treated as confidential
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                No client data is sold or shared with third parties
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Some data may be stored securely on third-party platforms
              </li>
            </ul>
          </section>

          {/* Payment & Termination */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">6. Payment & Termination</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Payments are due per milestone or as agreed
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Late payments may result in temporary service suspension
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Arafa Webs may terminate services for violations of these terms
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 text-green-500" />
                Client data may be deleted upon service expiration or request
              </li>
            </ul>
          </section>

          {/* Jurisdiction */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">7. Legal Jurisdiction</h2>
            <p className="text-lg text-zinc-400">
              This agreement is governed by the laws of the UK, USA, and Pakistan based on the client’s primary business location.
            </p>
          </section>

          {/* Revisions */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">8. Revisions</h2>
            <p className="text-lg text-zinc-400">
              These Terms & Conditions are subject to change. Clients will be notified of major revisions via email or dashboard alerts.
            </p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold">Questions About These Terms?</h2>
            <p className="mb-8 text-lg text-zinc-400">
              Reach out to us at <code className="text-green-400">support@arafawebs.com</code> for clarifications or concerns.
            </p>
            <button className="rounded-md bg-white px-6 py-3 text-lg font-medium text-black hover:bg-zinc-200 transition-colors">
              Contact Us
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
