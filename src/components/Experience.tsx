"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const experiences = [
  {
    role: "Frontend Engineer",
    company: "DCarbon (EDUMARCO Services)",
    location: "Abuja, Nigeria (Remote)",
    period: "Jan 2024 - Present",
    type: "Full-time",
    description:
      "Core frontend engineer on a climate technology platform focused on carbon credit management and sustainability tracking. Architected and built the entire frontend ecosystem — the main user-facing platform, an admin dashboard for credit management, and a Strapi-powered email CMS — from the ground up.",
    achievements: [
      "Architected and delivered 4 interconnected applications: main platform, admin panel, email CMS frontend, and Strapi backend",
      "Implemented data-driven visualization dashboards for environmental impact metrics and carbon credit analytics",
      "Built a headless CMS integration with Strapi for automated email campaign management",
      "Ensured responsive, accessible design across all platforms with TailwindCSS and modern component patterns",
      "Collaborated closely with backend and design teams in an agile environment to ship features on tight deadlines",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "TailwindCSS", "Strapi", "Node.js"],
    link: "https://dcarbon-website.vercel.app",
  },
  {
    role: "Frontend Team Leader",
    company: "HermexTravels",
    location: "Abuja, Nigeria (Remote)",
    period: "Nov 2023 - Dec 2023",
    type: "Contract",
    description:
      "Led the frontend team to design and ship a travel booking platform serving a global audience. Coordinated between UI/UX designers and backend developers to deliver real-time booking updates, interactive charts, and a fully responsive multi-device experience.",
    achievements: [
      "Achieved 40% improvement in page load times through API integration optimization and code splitting",
      "Increased customer satisfaction and engagement metrics by 30% via mobile-first responsive redesign",
      "Mentored junior developers through code reviews, pair programming, and enforcing frontend best practices",
      "Managed the full UI/UX pipeline from wireframing in Figma to production-ready implementation",
    ],
    tech: ["React.js", "Next.js", "React Native", "TailwindCSS", "Figma"],
    link: null,
  },
  {
    role: "AI & LLM Systems Developer",
    company: "Sohclick Technology Limited",
    location: "Remote",
    period: "Jan 2022 - Dec 2023",
    type: "Full-time",
    description:
      "Developed frontend solutions for AI and NLP-powered enterprise applications. Integrated complex graphical representations and data visualization into AI-driven tools, enabling enterprise clients to interpret machine learning outputs through intuitive interfaces.",
    achievements: [
      "Enhanced AI-driven feature performance by over 25% through optimized frontend rendering and data flow",
      "Built intelligent data visualization interfaces for enterprise clients using D3.js and custom SVG components",
      "Integrated Hugging Face models into seamless React-based user experiences for NLP tools",
      "Collaborated with cross-functional teams including data scientists and backend engineers on AWS infrastructure",
    ],
    tech: ["Python", "React.js", "Next.js", "AWS", "Hugging Face", "D3.js"],
    link: null,
  },
  {
    role: "Software Developer",
    company: "Sohclick Technology Limited",
    location: "Jos, Plateau State",
    period: "Jan 2021 - Dec 2022",
    type: "Full-time",
    description:
      "Built data-driven web applications for financial and educational sector clients. Created engaging interactive dashboards and optimized application performance for speed and accessibility across web and mobile platforms.",
    achievements: [
      "Developed interactive dashboards for financial analytics using D3.js and React",
      "Built and maintained responsive web applications ensuring cross-device accessibility",
      "Optimized application performance, reducing initial load times and improving Lighthouse scores",
      "Worked closely with UI/UX designers to refine interfaces and improve user experience",
    ],
    tech: ["React.js", "Next.js", "Angular", "TailwindCSS", "D3.js", "Git"],
    link: null,
  },
  {
    role: "Software Developer",
    company: "HeroyFoods Ltd.",
    location: "Jos, Nigeria (Remote)",
    period: "Jan 2020 - Sept 2020",
    type: "Full-time",
    description:
      "Developed responsive, user-friendly applications for a fintech startup. Collaborated with design teams to implement consistent design patterns, participated in agile sprint planning, and contributed to financial management tools built for small businesses.",
    achievements: [
      "Improved page load speeds by 25% through code optimization and lazy loading strategies",
      "Built financial management tools enabling startups to track expenses, invoices, and cash flow",
      "Implemented consistent design patterns using TailwindCSS component libraries",
      "Participated in agile ceremonies ensuring efficient sprint planning and on-time delivery",
    ],
    tech: ["React.js", "Next.js", "TailwindCSS", "JavaScript"],
    link: null,
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      className="py-32 section-padding relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
            Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto">
            6+ years building production-grade web applications — from fintech startups
            to climate tech platforms and AI-powered enterprise tools.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 via-cyan-500 to-transparent md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`relative mb-12 md:mb-16 pl-8 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-2 w-4 h-4 rounded-full border-2 border-violet-500 bg-dark z-10 left-[-7px] md:left-1/2 md:-translate-x-1/2`}
              >
                <div className="absolute inset-1 rounded-full bg-violet-500 animate-pulse" />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 sm:p-8 glass-hover group">
                {/* Period & type badges */}
                <div className={`flex flex-wrap gap-2 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="inline-block px-3 py-1 text-xs font-mono text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-500/5">
                    {exp.period}
                  </span>
                  <span className="inline-block px-3 py-1 text-xs font-mono text-white/30 border border-white/10 rounded-full">
                    {exp.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-violet-400 transition-colors">
                  {exp.role}
                </h3>
                <p className="text-white/50 mt-1">
                  {exp.company}{" "}
                  <span className="text-white/30">• {exp.location}</span>
                </p>

                <p className="text-white/40 mt-4 leading-relaxed text-sm">
                  {exp.description}
                </p>

                {/* Achievements */}
                <ul
                  className={`mt-4 space-y-2 ${
                    i % 2 === 0 ? "md:ml-auto" : ""
                  }`}
                >
                  {exp.achievements.map((achievement, j) => (
                    <li
                      key={j}
                      className={`text-sm text-white/50 flex items-start gap-2 ${
                        i % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {i % 2 !== 0 && (
                        <span className="text-violet-400 mt-1 flex-shrink-0">
                          ▹
                        </span>
                      )}
                      <span>{achievement}</span>
                      {i % 2 === 0 && (
                        <span className="text-violet-400 mt-1 flex-shrink-0 md:order-first">
                          ▹
                        </span>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div
                  className={`flex flex-wrap gap-2 mt-4 ${
                    i % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs font-mono text-violet-400/80 bg-violet-500/10 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Link if available */}
                {exp.link && (
                  <div className={`mt-4 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <FiExternalLink className="text-xs" />
                      View Live Project
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
