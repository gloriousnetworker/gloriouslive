"use client";

import { FiDownload, FiArrowLeft } from "react-icons/fi";

export default function ResumePage() {
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

      {/* Resume Content */}
      <div className="resume-page min-h-screen bg-dark print:bg-white pt-20 print:pt-0 pb-16 print:pb-0">
        <div className="max-w-[800px] mx-auto px-8 print:px-12 py-10 print:py-8 bg-dark-100 print:bg-white text-white print:text-black">
          {/* Header */}
          <header className="text-center border-b-2 border-violet-500 print:border-blue-700 pb-5 mb-6">
            <h1 className="text-3xl print:text-[28px] font-bold tracking-wide text-white print:text-black uppercase">
              Iniubong Uko Udofot
            </h1>
            <p className="mt-2 text-sm print:text-[11px] text-white/60 print:text-gray-600 font-medium tracking-wide">
              FULLSTACK SOFTWARE ENGINEER | ABUJA, NIGERIA | +234 802 498 3733
            </p>
            <p className="mt-1 text-sm print:text-[11px] text-white/50 print:text-gray-500">
              <a href="mailto:iniubongudofot2000@gmail.com" className="hover:text-violet-400 print:text-blue-700 print:underline">
                iniubongudofot2000@gmail.com
              </a>
              {" | "}
              <a href="https://www.linkedin.com/in/ini-udofot-va-net-worker/" className="hover:text-violet-400 print:text-blue-700 print:underline">
                LinkedIn
              </a>
              {" | "}
              <a href="https://github.com/gloriousnetworker" className="hover:text-violet-400 print:text-blue-700 print:underline">
                GitHub
              </a>
              {" | "}
              <a href="https://gloriouslive.vercel.app" className="hover:text-violet-400 print:text-blue-700 print:underline">
                gloriouslive.vercel.app
              </a>
            </p>
          </header>

          {/* Career Summary */}
          <Section title="CAREER SUMMARY">
            <p className="text-sm print:text-[11px] text-white/70 print:text-gray-700 leading-relaxed">
              Dynamic and innovative <strong className="text-white print:text-black">Full Stack Software Engineer</strong> with{" "}
              <strong className="text-white print:text-black">6+ years</strong> of professional experience specializing
              in <strong className="text-white print:text-black">React.js, Next.js, TypeScript</strong>, and modern web technologies.
              Proven track record of architecting and delivering multi-application ecosystems from scratch — including user-facing platforms,
              admin dashboards, and backend APIs. Currently building climate technology at DCarbon while simultaneously founding
              and scaling three personal ventures: a developer mentorship company (CPG Network), a social platform for
              Nigerian corps members (Corpers Connect), and an EdTech exam simulation platform (Einstein&apos;s CBT). A builder at heart
              who thrives on turning complex problems into elegant, user-centered products.
            </p>
          </Section>

          {/* Skills */}
          <Section title="TECHNICAL SKILLS">
            <div className="space-y-2 text-sm print:text-[11px]">
              <SkillRow
                category="Frontend Development"
                skills="React.js, Next.js, Redux, JavaScript (ES6+), TypeScript, TailwindCSS, HTML5, CSS3, Framer Motion, GSAP, D3.js, SVG, Angular"
              />
              <SkillRow
                category="Backend Development"
                skills="Node.js, Express.js, Python, RESTful APIs, Strapi (Headless CMS)"
              />
              <SkillRow
                category="Databases"
                skills="PostgreSQL, MongoDB, MySQL, Firebase (Firestore & Auth), Supabase"
              />
              <SkillRow
                category="DevOps & Cloud"
                skills="Git, GitHub, Docker, CI/CD Pipelines, Vercel, AWS, Microsoft Azure"
              />
              <SkillRow
                category="Design & Tooling"
                skills="Figma, Responsive Design, Wireframing, Prototyping, Jira, Trello, Slack"
              />
              <SkillRow
                category="Soft Skills"
                skills="Team Leadership, Mentorship, Cross-functional Collaboration, Agile/Scrum, Technical Communication"
              />
            </div>
          </Section>

          {/* Professional Experience */}
          <Section title="PROFESSIONAL WORK EXPERIENCE">
            <ExperienceEntry
              role="Frontend Engineer"
              company="DCarbon — EDUMARCO Services"
              location="Abuja, Nigeria (Remote)"
              period="Jan 2024 — Present"
              bullets={[
                "Architected and delivered 4 interconnected frontend applications from scratch: main user platform, admin dashboard, email CMS frontend, and Strapi-powered backend — serving as the sole frontend architect of the entire ecosystem.",
                "Built comprehensive data-driven visualization dashboards for environmental impact metrics, carbon credit analytics, and sustainability tracking using React.js, Next.js, and TypeScript.",
                "Integrated a headless CMS (Strapi) for automated email campaign management, enabling the marketing team to manage campaigns without developer intervention.",
                "Implemented responsive, accessible design systems using TailwindCSS and modern component patterns, ensuring consistent UX across all 4 applications.",
                "Collaborated with backend engineers, designers, and product stakeholders in an agile environment to ship features on tight deadlines.",
              ]}
              tech="React.js, Next.js, TypeScript, TailwindCSS, Strapi, Node.js, Vercel"
            />
            <ExperienceEntry
              role="Frontend Team Leader"
              company="HermexTravels"
              location="Abuja, Nigeria (Remote)"
              period="Nov 2023 — Dec 2023"
              bullets={[
                "Led the frontend team in designing and shipping a travel booking platform tailored to a global audience with real-time booking updates and interactive data visualization.",
                "Achieved a 40% improvement in page load times through API integration optimization, code splitting, and lazy loading strategies.",
                "Increased customer satisfaction and engagement metrics by 30% through mobile-first responsive redesign.",
                "Managed the full UI/UX pipeline from wireframing in Figma to production-ready implementation, ensuring design consistency and accessibility.",
                "Mentored junior developers through code reviews, pair programming sessions, and documentation of frontend best practices.",
              ]}
              tech="React.js, Next.js, React Native, TailwindCSS, Figma, JavaScript"
            />
            <ExperienceEntry
              role="AI & LLM Systems Developer"
              company="Sohclick Technology Limited"
              location="Remote"
              period="Jan 2022 — Dec 2023"
              bullets={[
                "Developed seamless frontend solutions for AI and NLP-powered enterprise applications using React.js and Next.js.",
                "Integrated complex graphical representations and data visualization components into AI-driven tools, enhancing data interpretation and user engagement.",
                "Collaborated with data scientists and backend engineers to integrate Hugging Face models into intuitive React-based user experiences.",
                "Enhanced AI-driven feature performance by over 25% through optimized frontend rendering, efficient data flow, and strategic caching.",
              ]}
              tech="Python, React.js, Next.js, AWS, Hugging Face, D3.js"
            />
            <ExperienceEntry
              role="Software Developer"
              company="Sohclick Technology Limited"
              location="Jos, Plateau State"
              period="Jan 2021 — Dec 2022"
              bullets={[
                "Built data-driven web applications for financial and educational sector clients, focusing on interactive dashboards and robust data visualization using D3.js and React.",
                "Developed and maintained responsive web applications ensuring cross-device accessibility and WCAG compliance.",
                "Optimized application performance, reducing initial load times by 30%+ and improving Lighthouse scores across all key metrics.",
                "Worked closely with UI/UX designers to refine interfaces and translate high-fidelity mockups into pixel-perfect implementations.",
              ]}
              tech="React.js, Next.js, Angular, TailwindCSS, D3.js, Git"
            />
            <ExperienceEntry
              role="Software Developer"
              company="HeroyFoods Ltd."
              location="Jos, Nigeria (Remote)"
              period="Jan 2020 — Sept 2020"
              bullets={[
                "Developed responsive, user-friendly applications for a fintech platform focused on financial management tools for startups.",
                "Improved page load speeds by 25% through code optimization, lazy loading, and bundle size reduction.",
                "Implemented consistent design patterns using TailwindCSS component libraries and reusable React components.",
                "Participated in agile ceremonies including sprint planning, daily standups, and retrospectives, ensuring efficient delivery cycles.",
              ]}
              tech="React.js, Next.js, TailwindCSS, JavaScript"
            />
          </Section>

          {/* Personal Ventures */}
          <Section title="PERSONAL VENTURES & ENTREPRENEURSHIP">
            <div className="space-y-4">
              <VentureEntry
                title="CPG Network — Founder & Lead Instructor"
                period="2024 — Present"
                description="Founded a tech education company dedicated to building the next generation of developers. Stream live beginner-friendly programming classes on YouTube, run remote mentorship programs, and help individuals from all backgrounds break into the tech industry."
                link="youtube.com/@CPG-Network"
              />
              <VentureEntry
                title="Corpers Connect — Founder & CEO"
                period="2024 — Present"
                description="Conceived and built a full-stack social media and chat platform connecting Nigerian NYSC corps members nationwide. Features real-time messaging, community forums, event management, and a comprehensive admin dashboard with role-based access control across 4 interconnected applications."
                link="corpersconnect.com.ng"
              />
              <VentureEntry
                title="Einstein's CBT — Creator & Lead Developer"
                period="2024 — Present"
                description="Built an EdTech platform enabling secondary school students to practice for WAEC examinations through realistic computer-based testing simulation. Features a three-tier admin hierarchy, real-time exam simulation, question bank management, and automated performance analytics across 5 interconnected applications."
                link="einstein-s-cbt.vercel.app"
              />
            </div>
          </Section>

          {/* Education */}
          <Section title="EDUCATION">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-sm print:text-[11px] text-white print:text-black">
                  B.Sc.(Ed) — Computer Science
                </p>
                <p className="text-sm print:text-[11px] text-white/50 print:text-gray-600">
                  University of Jos, Jos, Plateau State, Nigeria
                </p>
              </div>
              <span className="text-sm print:text-[11px] text-white/40 print:text-gray-500 font-mono flex-shrink-0 ml-4">
                2022
              </span>
            </div>
          </Section>

          {/* Certifications */}
          <Section title="CERTIFICATIONS">
            <ul className="space-y-1 text-sm print:text-[11px] text-white/70 print:text-gray-700">
              <li>• HackerRank — Frontend Developer Certificate</li>
              <li>• HackerRank — React.js Developer Certificate</li>
              <li>• HNG Internship — Completion Certificate</li>
            </ul>
          </Section>

          {/* References */}
          <div className="mt-6 pt-4 border-t border-white/10 print:border-gray-300">
            <p className="text-sm print:text-[11px] text-white/30 print:text-gray-400 italic">
              References available on request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-6">
      <h2 className="text-sm print:text-[12px] font-bold tracking-widest text-violet-400 print:text-blue-700 uppercase border-b border-white/10 print:border-gray-300 pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function SkillRow({
  category,
  skills,
}: {
  category: string;
  skills: string;
}) {
  return (
    <p className="text-white/70 print:text-gray-700">
      <strong className="text-white print:text-black">{category}:</strong>{" "}
      {skills}
    </p>
  );
}

function ExperienceEntry({
  role,
  company,
  location,
  period,
  bullets,
  tech,
}: {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tech: string;
}) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <div>
          <p className="font-bold text-sm print:text-[11px] text-white print:text-black">
            {role}
          </p>
          <p className="text-sm print:text-[11px] text-white/50 print:text-gray-600">
            {company}, {location}
          </p>
        </div>
        <span className="text-sm print:text-[11px] text-white/40 print:text-gray-500 font-mono flex-shrink-0">
          {period}
        </span>
      </div>
      <ul className="mt-2 space-y-1.5">
        {bullets.map((bullet, i) => (
          <li
            key={i}
            className="text-sm print:text-[11px] text-white/60 print:text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-violet-400 print:before:text-black leading-relaxed"
          >
            {bullet}
          </li>
        ))}
      </ul>
      <p className="mt-1.5 text-xs print:text-[10px] text-white/40 print:text-gray-500">
        <strong className="text-white/50 print:text-gray-600">Technologies:</strong>{" "}
        {tech}
      </p>
    </div>
  );
}

function VentureEntry({
  title,
  period,
  description,
  link,
}: {
  title: string;
  period: string;
  description: string;
  link: string;
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
        <p className="font-bold text-sm print:text-[11px] text-white print:text-black">
          {title}
        </p>
        <span className="text-sm print:text-[11px] text-white/40 print:text-gray-500 font-mono flex-shrink-0">
          {period}
        </span>
      </div>
      <p className="text-sm print:text-[11px] text-white/60 print:text-gray-700 mt-1 leading-relaxed">
        {description}
      </p>
      <p className="text-xs print:text-[10px] text-violet-400 print:text-blue-700 mt-1">
        {link}
      </p>
    </div>
  );
}
