"use client";

import { FiDownload, FiArrowLeft } from "react-icons/fi";

interface Question {
  q: string;
  type: string;
  required: boolean;
  help?: string;
  options?: string[];
}

interface Section {
  number: string;
  title: string;
  description?: string;
  questions: Question[];
}

const sections: Section[] = [
  {
    number: "01",
    title: "Identity & Brand",
    questions: [
      { q: "Full legal name", type: "Short answer", required: true },
      { q: "Professional name / brand name", type: "Short answer", required: true, help: 'e.g., "John Doe Films"' },
      { q: "Pronouns (optional)", type: "Short answer", required: false },
      { q: "Tagline (one short line)", type: "Short answer", required: true, help: 'e.g., "Director of Photography. Storyteller."' },
      { q: "City, Country (where you're based)", type: "Short answer", required: true },
      { q: "Years working in cinematography", type: "Short answer", required: true },
      { q: "Languages you work in", type: "Short answer", required: false, help: "e.g., English, Yoruba, French" },
    ],
  },
  {
    number: "02",
    title: "Bio & Story",
    questions: [
      { q: "Short bio — one paragraph (~50 words)", type: "Paragraph", required: true },
      { q: "Long bio — three paragraphs (~200 words)", type: "Paragraph", required: true },
      { q: "Describe your cinematic style in 3 words", type: "Short answer", required: true },
      { q: "What first drew you to cinematography?", type: "Paragraph", required: false },
      { q: "Notable achievements, awards, or festival selections", type: "Paragraph", required: false },
    ],
  },
  {
    number: "03",
    title: "Contact",
    questions: [
      { q: "Public email address", type: "Short answer", required: true },
      { q: "Phone / WhatsApp number (with country code)", type: "Short answer", required: true },
      { q: "Available for travel?", type: "Multiple choice", required: true, options: ["Yes, worldwide", "Yes, within Africa", "Nigeria only", "Local city only"] },
    ],
  },
  {
    number: "04",
    title: "Social Media & Links",
    description: "Paste the full URL, not just the handle. Leave blank if you don't have one.",
    questions: [
      { q: "Instagram URL", type: "Short answer", required: false },
      { q: "YouTube channel URL", type: "Short answer", required: false },
      { q: "Vimeo URL", type: "Short answer", required: false },
      { q: "TikTok URL", type: "Short answer", required: false },
      { q: "Behance / other portfolio URL", type: "Short answer", required: false },
      { q: "IMDb URL (if applicable)", type: "Short answer", required: false },
      { q: "LinkedIn URL", type: "Short answer", required: false },
      { q: "X / Twitter URL", type: "Short answer", required: false },
    ],
  },
  {
    number: "05",
    title: "Showreel",
    questions: [
      { q: "Main showreel URL (YouTube or Vimeo — must be public or unlisted)", type: "Short answer", required: true },
      { q: "Showreel duration (in seconds)", type: "Short answer", required: true },
      { q: "Year the reel was cut", type: "Short answer", required: true },
      { q: "Brief description of the reel", type: "Paragraph", required: false },
    ],
  },
  {
    number: "06",
    title: "Featured Projects",
    description: "List your 6–12 strongest projects. Paste all projects into the paragraph field, using --- on its own line to separate.",
    questions: [
      { q: "Project details (copy template below for each)", type: "Paragraph", required: true, help: "For each: Title, Type, Year, Role, Client, Synopsis, Video URL, Credits. Separate projects with ---" },
    ],
  },
  {
    number: "07",
    title: "Project Assets",
    description: "After submission, I'll send you a Google Drive upload link. Create one folder per project with 3–5 high-res stills.",
    questions: [
      { q: "Confirm you'll upload assets to Drive", type: "Checkbox", required: true, options: ["Yes, I'll upload when you send the link"] },
    ],
  },
  {
    number: "08",
    title: "Services & Rates",
    questions: [
      { q: "What services do you offer? (one per line)", type: "Paragraph", required: true },
      { q: "Do you want to display pricing publicly?", type: "Multiple choice", required: true, options: ["Yes, show starting prices", "No, inquiries only", "Show ranges only"] },
      { q: "If yes — starting price per service", type: "Paragraph", required: false, help: 'e.g., "Music Video — ₦500,000"' },
      { q: "Describe your ideal client or project", type: "Paragraph", required: false },
    ],
  },
  {
    number: "09",
    title: "Gear & Testimonials",
    questions: [
      { q: 'Do you want a "Gear" section on the site?', type: "Multiple choice", required: true, options: ["Yes", "No", "Maybe later"] },
      { q: "If yes — list your main gear", type: "Paragraph", required: false, help: "Cameras, signature lenses, accessories" },
      { q: "Testimonials (paste 3–5, separated by ---)", type: "Paragraph", required: false, help: "For each: Quote, Name, Role/Company" },
    ],
  },
  {
    number: "10",
    title: "Design & Domain",
    questions: [
      { q: "Share 3 portfolio sites you love", type: "Paragraph", required: true, help: "Paste URLs" },
      { q: "Preferred overall vibe", type: "Multiple choice", required: true, options: ["Dark & moody", "Bright & minimal", "Colorful & bold", "Editorial / magazine", "Cinematic / film grain"] },
      { q: "Do you have brand colors? If yes, list them", type: "Short answer", required: false },
      { q: "Do you have a logo?", type: "Multiple choice", required: true, options: ["Yes, I'll send the file", "No, need one designed", "No, use my name"] },
      { q: "Do you own a domain already?", type: "Multiple choice", required: true, options: ["Yes", "No"] },
      { q: "If yes — what's the domain? / If no — preferred name?", type: "Short answer", required: true },
      { q: "Professional headshot — drop Google Drive link", type: "Short answer", required: true },
      { q: "Any final notes, requests, or inspirations", type: "Paragraph", required: false },
    ],
  },
];

export default function IntakeFormPage() {
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

      {/* Content */}
      <div className="intake-page min-h-screen bg-dark print:bg-white pt-24 print:pt-0 pb-16 print:pb-0">
        <div className="max-w-[800px] mx-auto px-8 print:px-12 py-10 print:py-8 bg-dark-100 print:bg-white text-white print:text-black rounded-2xl print:rounded-none">
          {/* Header */}
          <header className="border-b-2 border-violet-500 print:border-blue-700 pb-5 mb-8">
            <p className="text-xs font-mono tracking-[0.2em] text-violet-400 print:text-blue-700 uppercase mb-2">
              Google Form Setup Guide
            </p>
            <h1 className="text-3xl sm:text-4xl print:text-3xl font-bold leading-tight text-white print:text-black">
              Portfolio Intake Brief
            </h1>
            <p className="text-white/60 print:text-gray-600 text-sm mt-3">
              A structured question set for onboarding cinematographer portfolio clients. Open{" "}
              <a
                href="https://forms.new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 print:text-blue-700 underline"
              >
                forms.new
              </a>{" "}
              and build the form section by section using this guide.
            </p>
          </header>

          {/* Setup Instructions */}
          <div className="bg-violet-500/10 print:bg-blue-50 border border-violet-500/30 print:border-blue-300 rounded-xl p-5 mb-8">
            <h3 className="font-bold text-violet-300 print:text-blue-700 text-sm mb-3">
              Before you start
            </h3>
            <ul className="text-xs space-y-1 text-white/70 print:text-gray-700">
              <li>
                <strong>Form title:</strong>{" "}
                <code className="bg-white/5 print:bg-white px-1.5 py-0.5 rounded text-violet-300 print:text-blue-700">
                  Portfolio Intake Brief
                </code>
              </li>
              <li>
                <strong>Description:</strong>{" "}
                <span className="italic">
                  &ldquo;Fill in every section as thoroughly as you can. The more detail you give me, the
                  more accurately your portfolio will represent you. Budget ~30–45 minutes.&rdquo;
                </span>
              </li>
              <li>In Settings, enable <strong>&ldquo;Show progress bar&rdquo;</strong> and <strong>&ldquo;Collect email addresses&rdquo;</strong>.</li>
              <li>Add a <strong>page break</strong> between each section below so the form feels manageable.</li>
            </ul>
          </div>

          {/* Sections */}
          {sections.map((section) => (
            <div key={section.number} className="mb-8 break-inside-avoid">
              <div className="flex items-baseline gap-3 mb-3 pb-2 border-b border-white/10 print:border-gray-300">
                <span className="font-mono text-violet-400 print:text-blue-700 text-sm font-bold">
                  Section {section.number}
                </span>
                <h2 className="text-lg font-bold text-white print:text-black">
                  {section.title}
                </h2>
              </div>

              {section.description && (
                <p className="text-xs italic text-white/50 print:text-gray-600 mb-3">
                  <strong>Section description:</strong> {section.description}
                </p>
              )}

              <div className="space-y-3">
                {section.questions.map((item, i) => (
                  <div
                    key={i}
                    className="border border-white/10 print:border-gray-200 rounded-lg p-3 bg-white/3 print:bg-gray-50"
                  >
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-xs text-white/40 print:text-gray-500 flex-shrink-0 mt-0.5">
                        Q{i + 1}
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm text-white print:text-black font-medium">
                            {item.q}
                          </p>
                          {item.required ? (
                            <span className="text-[10px] font-mono text-red-400 print:text-red-600 border border-red-500/30 print:border-red-400 px-1.5 py-0.5 rounded">
                              REQUIRED
                            </span>
                          ) : (
                            <span className="text-[10px] font-mono text-white/30 print:text-gray-500 border border-white/10 print:border-gray-300 px-1.5 py-0.5 rounded">
                              OPTIONAL
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-violet-400 print:text-blue-700 font-mono mt-1">
                          Type: {item.type}
                        </p>
                        {item.options && (
                          <div className="mt-2 pl-3 border-l-2 border-violet-500/30 print:border-blue-300">
                            <p className="text-[10px] uppercase tracking-widest text-white/40 print:text-gray-500 mb-1">
                              Options
                            </p>
                            <ul className="text-xs text-white/60 print:text-gray-700 space-y-0.5">
                              {item.options.map((opt) => (
                                <li key={opt}>&bull; {opt}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {item.help && (
                          <p className="text-[11px] italic text-white/40 print:text-gray-500 mt-1.5">
                            Help text: {item.help}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Final */}
          <div className="bg-violet-500/10 print:bg-blue-50 border border-violet-500/30 print:border-blue-300 rounded-xl p-5 mt-8">
            <h3 className="font-bold text-violet-300 print:text-blue-700 text-sm mb-3">
              Final Step — Confirmation Message
            </h3>
            <p className="text-xs text-white/70 print:text-gray-700 mb-2">
              In Settings → Presentation → Confirmation message, paste:
            </p>
            <div className="bg-white/5 print:bg-white border border-white/10 print:border-gray-300 rounded p-3 text-xs text-white/80 print:text-gray-800 italic">
              &ldquo;Thanks for the detailed brief! I&apos;ll review everything within 48 hours and get
              back to you with next steps — including the asset upload link and the kickoff
              timeline. If you need to update anything, just reply to my email. — Iniubong&rdquo;
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-white/5 print:border-gray-200 text-center">
            <p className="text-xs text-white/30 print:text-gray-400 italic">
              Once your form is built, send the link to your client along with a Google Drive
              upload folder and your proposal PDF. Set a 48-hour follow-up reminder.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
