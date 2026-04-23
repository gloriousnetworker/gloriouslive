"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FiDownload, FiArrowLeft } from "react-icons/fi";

export default function ProposalPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dark" />}>
      <ProposalContent />
    </Suspense>
  );
}

function ProposalContent() {
  const searchParams = useSearchParams();
  const [clientName, setClientName] = useState("");
  const [proposalDate, setProposalDate] = useState("");

  useEffect(() => {
    const nameParam = searchParams.get("name");
    const dateParam = searchParams.get("date");

    if (nameParam) setClientName(nameParam);
    else setClientName("[CLIENT NAME]");

    if (dateParam) setProposalDate(dateParam);
    else {
      const today = new Date();
      setProposalDate(
        today.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    }
  }, [searchParams]);

  return (
    <>
      {/* Screen-only controls */}
      <div className="print:hidden fixed top-0 left-0 right-0 z-50 bg-dark/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <FiArrowLeft /> Back to Portfolio
          </a>
          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-light text-white rounded-full text-sm font-medium transition-all hover:shadow-[0_0_30px_rgba(109,40,217,0.3)]"
          >
            <FiDownload /> Save as PDF
          </button>
        </div>
      </div>

      {/* Tip banner — hidden in print */}
      <div className="print:hidden max-w-4xl mx-auto px-6 pt-24 pb-2">
        <div className="glass rounded-xl p-4 border border-violet-500/20">
          <p className="text-sm text-white/60">
            <span className="text-violet-400 font-semibold">Tip:</span>{" "}
            Edit the client name and date below, then click <strong>Save as PDF</strong>.
            You can also generate pre-filled links like{" "}
            <code className="text-cyan-400 bg-white/5 px-2 py-0.5 rounded text-xs">
              /client-docs/proposal?name=John&date=April%2023%202026
            </code>
          </p>
        </div>
      </div>

      {/* Proposal Content */}
      <div className="proposal-page min-h-screen bg-dark print:bg-white pt-4 print:pt-0 pb-16 print:pb-0">
        <div className="max-w-[800px] mx-auto px-8 print:px-12 py-10 print:py-8 bg-dark-100 print:bg-white text-white print:text-black rounded-2xl print:rounded-none">
          {/* Cover */}
          <header className="border-b-2 border-violet-500 print:border-blue-700 pb-6 mb-8">
            <p className="text-xs font-mono tracking-[0.2em] text-violet-400 print:text-blue-700 uppercase mb-2">
              Website Proposal &middot; v1.0
            </p>
            <h1 className="text-3xl sm:text-4xl print:text-3xl font-bold leading-tight mb-3 text-white print:text-black">
              Custom Portfolio Website<br />
              for{" "}
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="gradient-text print:text-blue-700 bg-transparent border-b border-dashed border-violet-500/40 print:border-none focus:outline-none focus:border-violet-500 min-w-[200px] print:min-w-0"
                style={{ width: `${Math.max(clientName.length, 14)}ch` }}
              />
            </h1>
            <p className="text-white/60 print:text-gray-600 text-sm">
              A bespoke cinematic portfolio designed to showcase your work,
              tell your story, and convert visitors into clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6 text-xs">
              <div>
                <p className="font-semibold text-white print:text-black">Prepared by</p>
                <p className="text-white/60 print:text-gray-600 mt-1">Iniubong Udofot</p>
                <p className="text-white/40 print:text-gray-500">iniubongudofot2000@gmail.com</p>
                <p className="text-white/40 print:text-gray-500">+234 802 498 3733</p>
              </div>
              <div className="sm:text-right">
                <p className="font-semibold text-white print:text-black">Date</p>
                <input
                  type="text"
                  value={proposalDate}
                  onChange={(e) => setProposalDate(e.target.value)}
                  className="text-white/60 print:text-gray-600 bg-transparent sm:text-right border-b border-dashed border-violet-500/40 print:border-none focus:outline-none focus:border-violet-500 mt-1 w-full"
                />
                <p className="text-white/40 print:text-gray-500 mt-1">Valid for 14 days</p>
              </div>
            </div>
          </header>

          {/* Overview */}
          <Section title="Project Overview">
            <p>
              You need a portfolio that reflects the quality of your craft — not a
              generic template, not a cookie-cutter drag-and-drop build, but a site
              that feels like <em>yours</em>. This proposal covers the design,
              development, and launch of a fully custom, mobile-optimized,
              performance-tuned portfolio website built specifically around your
              work as a cinematographer.
            </p>
            <p className="mt-3">
              The goal: when a prospective client lands on your site, they spend 90
              seconds watching your reel, another 3 minutes scrolling your work,
              and reach for the contact form with a clear sense of who you are and
              what you deliver.
            </p>
          </Section>

          {/* What you get */}
          <Section title="What You Get">
            <div className="grid sm:grid-cols-2 gap-3 my-3">
              {[
                { emoji: "🎬", title: "Cinematic Hero", desc: "Autoplay showreel background with your name, tagline, and clear CTA." },
                { emoji: "🎞️", title: "Film Grid", desc: "6–12 project thumbnails with hover-play previews and case-study pages." },
                { emoji: "📖", title: "About Page", desc: "Story-driven bio, style, philosophy, gear, and testimonials." },
                { emoji: "💼", title: "Services", desc: "Clear breakdown of what you offer with optional pricing display." },
                { emoji: "📬", title: "Contact + Admin", desc: "Live contact form. Every inquiry lands in your inbox instantly. Private admin dashboard to manage all leads." },
                { emoji: "📱", title: "Installable PWA", desc: "Site is installable as a mobile app. Works offline." },
              ].map((item) => (
                <div key={item.title} className="border border-white/10 print:border-gray-200 rounded-xl p-4 bg-white/3 print:bg-gray-50">
                  <p className="font-semibold text-white print:text-black text-sm mb-1">
                    <span className="mr-1.5">{item.emoji}</span>
                    {item.title}
                  </p>
                  <p className="text-xs text-white/50 print:text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-base font-semibold text-white print:text-black mt-4 mb-2">
              Technical foundation
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP", "Firebase", "Resend", "Cloudflare Stream / Mux"].map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-violet-500/15 print:bg-blue-100 text-violet-300 print:text-blue-700">
                  {t}
                </span>
              ))}
            </div>
          </Section>

          {/* Timeline */}
          <Section title="Timeline &amp; Phases">
            {[
              { num: "01", title: "Discovery & Brief", desc: "You fill out the intake form, upload assets, I review and align on vision.", time: "Week 1 · Day 1–2" },
              { num: "02", title: "Design Direction", desc: "Figma mockup of homepage + one case study. Feedback. Lock the visual language.", time: "Week 1 · Day 3–5" },
              { num: "03", title: "Development", desc: "Frontend build, animations, content integration, video CDN setup, contact form, admin dashboard.", time: "Week 2 · Day 6–11" },
              { num: "04", title: "Review & Revisions", desc: "Staging link goes live. You review. Two rounds of revisions included.", time: "Week 2 · Day 12–13" },
              { num: "05", title: "Launch & Handover", desc: "Deploy to production. Connect your domain. 30-minute handover call.", time: "Week 2 · Day 14" },
            ].map((phase) => (
              <div key={phase.num} className="flex gap-3 py-3 border-b border-white/5 print:border-gray-200 last:border-none">
                <div className="font-mono text-violet-400 print:text-blue-700 font-bold text-sm w-8 flex-shrink-0">
                  {phase.num}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white print:text-black text-sm">{phase.title}</p>
                  <p className="text-xs text-white/50 print:text-gray-600 mt-0.5">{phase.desc}</p>
                  <p className="text-xs text-white/30 print:text-gray-500 mt-1 font-mono">{phase.time}</p>
                </div>
              </div>
            ))}
          </Section>

          {/* Investment */}
          <Section title="Investment">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-violet-500/30 print:border-blue-300">
                  <th className="text-left py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Line Item</th>
                  <th className="text-right py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Design strategy, wireframes, visual direction", "60,000"],
                  ["Frontend development, animations, responsive layouts", "150,000"],
                  ["Video/image optimization, CDN setup, lazy loading", "30,000"],
                  ["Contact form + private admin dashboard", "40,000"],
                  ["Case study pages (up to 12 projects)", "50,000"],
                  ["Deployment, domain setup, handover call, documentation", "20,000"],
                  ["2 rounds of revisions", "Included"],
                ].map(([label, amount]) => (
                  <tr key={label} className="border-b border-white/5 print:border-gray-200">
                    <td className="py-2 px-2 text-white/70 print:text-gray-700">{label}</td>
                    <td className="py-2 px-2 text-right font-mono text-white/80 print:text-gray-800">{amount}</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-violet-500 print:border-blue-700">
                  <td className="py-3 px-2 font-bold text-white print:text-black">Total</td>
                  <td className="py-3 px-2 text-right font-mono font-bold text-white print:text-black">₦350,000</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-sm font-semibold text-white print:text-black mt-5 mb-2">
              Pass-through costs (you pay directly, at cost)
            </h3>
            <ul className="text-xs space-y-1 text-white/60 print:text-gray-700">
              <li>&bull; <strong className="text-white print:text-black">Domain</strong> (.com from Namecheap): ~₦15,000/year</li>
              <li>&bull; <strong className="text-white print:text-black">Hosting</strong> (Vercel): free tier usually sufficient</li>
              <li>&bull; <strong className="text-white print:text-black">Video CDN</strong> (Mux or Cloudflare Stream): ~₦5,000–20,000/month depending on traffic</li>
            </ul>
          </Section>

          {/* Payment terms */}
          <Section title="Payment Terms">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-violet-500/30 print:border-blue-300">
                  <th className="text-left py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Milestone</th>
                  <th className="text-right py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">%</th>
                  <th className="text-right py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Deposit to begin work", "50%", "175,000"],
                  ["Design approval", "30%", "105,000"],
                  ["On handover / launch", "20%", "70,000"],
                ].map(([m, p, a]) => (
                  <tr key={m} className="border-b border-white/5 print:border-gray-200">
                    <td className="py-2 px-2 text-white/70 print:text-gray-700">{m}</td>
                    <td className="py-2 px-2 text-right font-mono text-white/80 print:text-gray-800">{p}</td>
                    <td className="py-2 px-2 text-right font-mono text-white/80 print:text-gray-800">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Add-ons */}
          <Section title="Optional Add-ons">
            <table className="w-full text-sm mt-2">
              <thead>
                <tr className="border-b border-violet-500/30 print:border-blue-300">
                  <th className="text-left py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Feature</th>
                  <th className="text-right py-2 px-2 text-xs font-mono uppercase tracking-widest text-violet-400 print:text-blue-700">Amount (₦)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Blog module", "40,000"],
                  ["Booking / calendar integration", "60,000"],
                  ["Multi-language support", "50,000"],
                  ["Logo design (if needed)", "50,000"],
                  ["Monthly maintenance retainer", "20,000/mo"],
                ].map(([f, a]) => (
                  <tr key={f} className="border-b border-white/5 print:border-gray-200">
                    <td className="py-2 px-2 text-white/70 print:text-gray-700">{f}</td>
                    <td className="py-2 px-2 text-right font-mono text-white/80 print:text-gray-800">{a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>

          {/* Not Included */}
          <Section title="What's Not Included">
            <ul className="text-xs space-y-1 text-white/60 print:text-gray-700">
              <li>&bull; Video editing or color grading of footage — deliver final versions</li>
              <li>&bull; Photography/stills — provide hi-res files</li>
              <li>&bull; Copywriting beyond polishing what you provide</li>
              <li>&bull; Ongoing hosting or monthly costs after launch (you own these directly)</li>
              <li>&bull; Major scope changes after design approval (quoted separately)</li>
            </ul>
          </Section>

          {/* CTA */}
          <div className="bg-violet-500/10 print:bg-blue-50 border border-violet-500/30 print:border-blue-300 rounded-xl p-5 mt-6">
            <h3 className="font-bold text-violet-300 print:text-blue-700 text-base mb-2">
              Ready to move forward?
            </h3>
            <p className="text-sm text-white/70 print:text-gray-700 mb-3">
              If this proposal works, reply with{" "}
              <strong className="text-violet-400 print:text-blue-700">&ldquo;Let&apos;s go&rdquo;</strong> and I&apos;ll send:
            </p>
            <ul className="text-sm space-y-1 text-white/70 print:text-gray-700 mb-3">
              <li>&bull; The intake form link (fill this out first)</li>
              <li>&bull; Google Drive link for your assets</li>
              <li>&bull; Payment details for the 50% deposit</li>
            </ul>
            <p className="text-sm text-white/70 print:text-gray-700 m-0">
              Work begins the day the deposit clears. Launch in ~2 weeks.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-8">
            <p className="text-sm text-white/70 print:text-gray-700">Excited to build this with you.</p>
            <p className="font-semibold text-white print:text-black text-base mt-2">Iniubong Udofot</p>
            <p className="text-xs text-white/40 print:text-gray-500">Fullstack Software Engineer</p>
            <p className="text-xs text-white/40 print:text-gray-500">gloriouslive.vercel.app · +234 802 498 3733</p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 print:border-gray-200 text-center">
            <p className="text-xs text-white/30 print:text-gray-400 italic">
              This proposal is valid for 14 days from the date above. Pricing is in Nigerian Naira.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6 mb-4">
      <h2 className="text-sm font-bold tracking-widest uppercase text-violet-400 print:text-blue-700 border-b border-white/10 print:border-gray-300 pb-1 mb-3">
        {title}
      </h2>
      <div className="text-sm text-white/70 print:text-gray-700 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
