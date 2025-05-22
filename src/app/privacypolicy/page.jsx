import { CheckCircle } from "lucide-react"

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r flex items-center justify-center border-white/20 border-b h-[80vh]">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2 text-sm font-light">Last updated on May 21, 2025</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Privacy Policy</h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-3xl px-4 py-16">
          {/* Introduction */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">1. Introduction</h2>
            <p className="text-lg text-zinc-400">
              At <span className="font-bold text-white">Arafa Webs</span>, we value privacy and transparency. This Privacy Policy explains how we collect, use, store, and protect anonymous telemetry data collected through our web-based applications and services. It applies to clients using our telemetry-enabled web solutions in the UK, USA, and Pakistan.
            </p>
          </section>

          {/* What We Collect */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">2. What We Collect</h2>
            <p className="mb-4 text-lg text-zinc-400">We do not collect any personally identifiable information (PII). The data collected includes:</p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Page load times and response metrics</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> API errors and system logs</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Button clicks, navigation flow, and form interactions</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Device/browser types and session duration</li>
            </ul>
            <p className="mt-4 text-lg text-zinc-400">This data is used strictly for performance improvement and analytics.</p>
          </section>

          {/* How We Use the Data */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">3. How We Use the Data</h2>
            <div className="space-y-4 text-lg text-zinc-400">
              <p>We use telemetry data to improve system performance, identify and fix technical issues, and provide insights through scheduled reports.</p>
              <p>We <span className="font-bold text-white">do not</span> use telemetry data for marketing or advertising purposes.</p>
            </div>
          </section>

          {/* Data Storage & Security */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">4. Data Storage & Security</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Secure cloud platforms (e.g., AWS, Firebase, GCP)</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Privately hosted backup servers</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Encryption in transit and at rest</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Access limited to authorized personnel only</li>
            </ul>
          </section>

          {/* Data Retention */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">5. Data Retention Policy</h2>
            <p className="text-lg text-zinc-400">We retain telemetry logs for 6 months by default. Clients may request up to 12 months of access. After the retention period, all data is permanently deleted.</p>
          </section>

          {/* User Rights */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">6. User Rights & Access</h2>
            <ul className="space-y-3 text-lg">
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Request a copy of telemetry data</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Request data deletion or corrections</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Ask about data usage and processing</li>
            </ul>
            <p className="mt-4 text-lg text-zinc-400">To make a request, contact us at <code className="text-green-400">support@arafawebs.com</code>.</p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">7. Third-Party Services</h2>
            <p className="text-lg text-zinc-400">We use third-party platforms like AWS and Firebase for data hosting. These services follow strict industry security and compliance standards.</p>
          </section>

          {/* Compliance */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">8. Jurisdiction & Compliance</h2>
            <p className="text-lg text-zinc-400">This Privacy Policy complies with:</p>
            <ul className="mt-3 space-y-3 text-lg">
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> UK GDPR</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> California Consumer Privacy Act (CCPA)</li>
              <li className="flex items-start"><CheckCircle className="mr-3 h-5 w-5 text-green-500" /> Pakistan Electronic Crimes Act (PECA)</li>
            </ul>
            <p className="mt-4 text-lg text-zinc-400">We regularly review our practices to remain compliant with local laws.</p>
          </section>

          {/* Policy Updates */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">9. Policy Updates</h2>
            <p className="text-lg text-zinc-400">We may update this policy periodically. Clients will be notified via email or dashboard before any major changes take effect.</p>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold">Have Questions About Your Privacy?</h2>
            <p className="mb-8 text-lg text-zinc-400">Reach out to us at <code className="text-green-400">support@arafawebs.com</code>. We're here to help!</p>
            <button className="rounded-md bg-white px-6 py-3 text-lg font-medium text-black hover:bg-zinc-200 transition-colors">
              Contact Support
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
