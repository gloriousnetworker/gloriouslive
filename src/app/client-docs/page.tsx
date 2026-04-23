"use client";

import { motion } from "framer-motion";
import { FiFileText, FiArrowLeft, FiArrowRight } from "react-icons/fi";

const docs = [
  {
    title: "Portfolio Intake Brief",
    description:
      "Google Form setup guide for onboarding new cinematographer portfolio clients. 10 sections, 44 questions.",
    href: "/client-docs/intake-form",
    badge: "Form Setup",
    accent: "text-cyan-400",
    border: "border-cyan-500/30",
  },
  {
    title: "Website Proposal Template",
    description:
      "Printable proposal document with pricing breakdown, timeline, and payment terms. Customize client name and date via URL params.",
    href: "/client-docs/proposal",
    badge: "Client Proposal",
    accent: "text-violet-400",
    border: "border-violet-500/30",
  },
];

export default function ClientDocsIndex() {
  return (
    <div className="min-h-screen bg-dark">
      <div className="grain-overlay" />

      {/* Header */}
      <div className="sticky top-0 z-40 bg-dark/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          >
            <FiArrowLeft /> Back to Portfolio
          </a>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            Private Utilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 text-white">
            Client <span className="gradient-text">Docs</span>
          </h1>
          <p className="text-white/40 mt-3 max-w-lg mx-auto">
            Printable templates for onboarding new clients. Open any document and
            save it as PDF directly from your browser.
          </p>
        </motion.div>

        <div className="space-y-4">
          {docs.map((doc, i) => (
            <motion.a
              key={doc.href}
              href={doc.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`block glass rounded-2xl p-6 border ${doc.border} hover:border-white/30 glass-hover group`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 flex-shrink-0">
                  <FiFileText className={`text-2xl ${doc.accent}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className={`inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest rounded border mb-2 ${doc.accent} ${doc.border}`}
                  >
                    {doc.badge}
                  </span>
                  <h2 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors">
                    {doc.title}
                  </h2>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">
                    {doc.description}
                  </p>
                </div>
                <FiArrowRight className="text-white/20 group-hover:text-white/60 group-hover:translate-x-1 transition-all mt-1 flex-shrink-0" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-5 border border-white/5">
          <p className="text-xs text-white/40 leading-relaxed">
            <span className="text-violet-400 font-semibold">Tip:</span> Generate
            pre-filled proposals by passing URL params, e.g.{" "}
            <code className="text-cyan-400 bg-white/5 px-2 py-0.5 rounded font-mono">
              /client-docs/proposal?name=John&amp;date=April%2023%202026
            </code>
          </p>
        </div>
      </div>
    </div>
  );
}
