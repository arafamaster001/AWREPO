import { CheckCircle } from "lucide-react"

export default function telemetry() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r  flex items-center justify-center border-white/20 border-b h-[80vh]">
          <div className="container mx-auto px-4 text-center">
            <p className="mb-2 text-sm font-light">Last updated on May 21, 2025</p>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Telemetry Service</h1>
          </div>
        </section>

        {/* Content Container */}
        <div className="mx-auto max-w-3xl px-4 py-16">
          {/* What is Telemetry */}
          <section className="mb-16">
            <p className="mb-8 text-lg text-zinc-400">
              The <span className="font-bold text-white">Arafa Webs</span> service collects telemetry data to help us
              improve our products. Participation is optional, and you may opt-out at any time.
            </p>

            <h2 className="mb-6 text-2xl font-bold">What is Telemetry?</h2>
            <p className="mb-8 text-lg text-zinc-400">
              Telemetry helps us <span className="font-bold">collect important data</span> from your web apps
              automatically — like how <span className="font-bold">users interact</span>,{" "}
              <span className="font-bold">app speed</span>, <span className="font-bold">errors</span>, and{" "}
              <span className="font-bold">session info</span>. This helps us{" "}
              <span className="font-bold">understand your app better</span> and{" "}
              <span className="font-bold">fix problems quickly</span>.
            </p>
          </section>

          {/* What Data Do We Collect */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">What Data Do We Collect?</h2>
            <p className="mb-4 text-lg text-zinc-400">
              We track general usage information about your web apps and different configuration options. Specifically,
              we track the following data:
            </p>
            <ul className="mb-8 space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">User clicks</span> and page visits
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  App <span className="font-bold">loading speed</span> and server response time
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Any <span className="font-bold">errors or bugs</span> that happen
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Device and browser details</span> (to improve user experience)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Login and logout activity</span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Form submissions</span> and where users leave the process
                </span>
              </li>
            </ul>
          </section>

          {/* Reports and Alerts */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Reports and Alerts — Easy and Useful for You</h2>
            <div className="space-y-4 text-lg text-zinc-400">
              <p>
                We send <span className="font-bold">scheduled reports</span> weekly or monthly so you can easily see how
                your app is performing.
              </p>
              <p>
                If there's a big error or problem, we send you <span className="font-bold">email alerts</span> right
                away so you can act fast.
              </p>
            </div>
          </section>

          {/* Data Security and Privacy */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Data Security and Privacy — Your Data Is Safe With Us</h2>
            <ul className="mb-8 space-y-3 text-lg">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  We keep your data safe for <span className="font-bold">6 months</span>, then delete it securely.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Your data is <span className="font-bold">encrypted</span> so no one else can see it.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  We do <span className="font-bold">not track individual users</span> — only anonymous info to protect
                  privacy.
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  We follow important privacy laws like <span className="font-bold">GDPR and CCPA</span>.
                </span>
              </li>
            </ul>
          </section>

          {/* Flexible and Secure Setup */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">Flexible and Secure Setup</h2>
            <div className="space-y-4 text-lg text-zinc-400">
              <p>
                We use a <span className="font-bold">hybrid approach</span> — some data is stored securely in the cloud,
                some on your own servers, for the best security and flexibility.
              </p>
              <p>
                Each client's data is kept separate (<span className="font-bold">multi-tenant system</span>) to ensure
                privacy and safety.
              </p>
            </div>
          </section>

          {/* How You Benefit */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">How You Benefit</h2>
            <ul className="mb-8 grid gap-3 text-lg md:grid-cols-2">
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Better app performance</span>
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Quick detection</span> and fixing of bugs and errors
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  <span className="font-bold">Understand and improve</span> your users' experience
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                <span>
                  Guaranteed <span className="font-bold">data privacy</span> and legal compliance
                </span>
              </li>
            </ul>
          </section>

          {/* How to Opt Out */}
          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold">How do I opt out?</h2>
            <p className="mb-4 text-lg text-zinc-400">
              You can always opt-out by contacting us. This will disable telemetry across your entire application.
            </p>
            <div className="mb-6 rounded bg-zinc-900 p-4">
              <code className="text-sm text-green-400"># Contact support@arafawebs.com to disable telemetry</code>
            </div>
            <p className="text-lg text-zinc-400">You can re-enable telemetry at any time by contacting us again.</p>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold">Want reliable telemetry for your web app?</h2>
            <p className="mb-8 text-lg text-zinc-400">
              Contact Arafa Webs — we'll help make your digital journey smoother and smarter!
            </p>
            <button className="rounded-md bg-white px-6 py-3 text-lg font-medium text-black hover:bg-zinc-200 transition-colors">
              Contact Us Now
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}
