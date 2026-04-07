"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiGithub, FiLayers, FiYoutube } from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiStrapi,
  SiPostgresql,
} from "react-icons/si";

const techIcons: Record<string, React.ElementType> = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Firebase: SiFirebase,
  "Node.js": SiNodedotjs,
  TailwindCSS: SiTailwindcss,
  MongoDB: SiMongodb,
  Express: SiExpress,
  Strapi: SiStrapi,
  PostgreSQL: SiPostgresql,
};

const projects = [
  {
    title: "DCarbon Platform",
    subtitle: "Carbon Credits & Climate Technology — Professional Work",
    badge: "Professional",
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    description:
      "A full-scale climate technology platform for carbon credit management, sustainability tracking, and environmental impact analytics. Built the entire frontend ecosystem from scratch — 4 interconnected applications serving different user roles. Includes a Strapi-powered headless CMS for automated email campaigns, a comprehensive admin dashboard for carbon credit management, and data-driven visualization of environmental metrics.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Strapi",
      "Node.js",
    ],
    links: {
      live: "https://dcarbon-website.vercel.app",
      admin: "https://d-carbon-admin.vercel.app",
      github: "https://github.com/gloriousnetworker/DCarbon-project",
    },
    apps: ["Main Platform", "Admin Dashboard", "Email CMS", "Strapi Backend"],
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
  },
  {
    title: "Corpers Connect",
    subtitle: "Global Social Platform for Nigerian Corps Members — Founder & CEO",
    badge: "Personal Venture",
    badgeColor: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    description:
      "A full-stack social media and chat platform I conceived and built from the ground up to connect Nigerian corps members nationwide. Features real-time messaging, community forums, event management, resource sharing, and a comprehensive admin dashboard with role-based access control. Serving as the go-to social hub for NYSC corps members across Nigeria.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
      "PostgreSQL",
    ],
    links: {
      live: "https://corpersconnect.com.ng",
      admin: "https://corpersconnectadmin.vercel.app",
      github: "https://github.com/gloriousnetworker/corpers-connect",
    },
    apps: ["User App", "Admin Dashboard", "Backend API", "Landing Page"],
    color: "from-violet-500/20 to-purple-500/20",
    borderColor: "border-violet-500/30",
    accentColor: "text-violet-400",
  },
  {
    title: "Einstein's CBT",
    subtitle: "WAEC Exam Simulation Platform — Creator & Lead Developer",
    badge: "Personal Venture",
    badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    description:
      "An EdTech platform I built to help secondary school students practice and prepare for WAEC examinations through realistic computer-based testing simulation. Features a three-tier admin hierarchy (student, admin, super-admin), real-time exam simulation with timers, question bank management, performance analytics, and automated scoring. The platform is currently used by students and educational institutions.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Firebase",
    ],
    links: {
      live: "https://einstein-s-cbt.vercel.app",
      admin: "https://waec-cbt-admin.vercel.app",
      github: "https://github.com/gloriousnetworker/waec-cbt-simulator",
    },
    apps: [
      "Student App",
      "Admin Panel",
      "Super Admin",
      "Backend API",
      "Client Website",
    ],
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
    accentColor: "text-cyan-400",
  },
  {
    title: "CPG Network",
    subtitle: "Tech Education & Developer Mentorship — Founder",
    badge: "Personal Venture",
    badgeColor: "bg-red-500/20 text-red-400 border-red-500/30",
    description:
      "My tech education company dedicated to building the next generation of developers. We stream live beginner-friendly programming classes on YouTube, run remote mentorship programs, and help individuals from all backgrounds break into the tech industry. CPG (Code, Program, Grow) is about taking people from zero to employable.",
    tech: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
    ],
    links: {
      live: "https://www.youtube.com/@CPG-Network",
      admin: null,
      github: null,
    },
    apps: ["YouTube Channel", "Live Streams", "Mentorship Program"],
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    accentColor: "text-red-400",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-32 section-padding relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-violet-400 tracking-widest uppercase">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-white/40 max-w-2xl mx-auto">
            Multi-application ecosystems built from the ground up — professional
            work and personal ventures that showcase end-to-end product engineering.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-12">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className={`glass rounded-3xl overflow-hidden border ${project.borderColor} group hover:border-white/20 transition-all duration-700`}
            >
              <div
                className={`bg-gradient-to-br ${project.color} p-8 sm:p-10`}
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  {/* Left Content */}
                  <div className="flex-1 space-y-6">
                    {/* Badge + Title */}
                    <div>
                      <span
                        className={`inline-block px-3 py-1 text-xs font-mono rounded-full border mb-3 ${project.badgeColor}`}
                      >
                        {project.badge}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p
                        className={`mt-1 font-mono text-sm ${project.accentColor}`}
                      >
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-white/50 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((t) => {
                        const Icon = techIcons[t];
                        return (
                          <span
                            key={t}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm font-mono text-white/60 bg-white/5 border border-white/10 rounded-lg hover:border-white/20 hover:text-white/80 transition-all"
                          >
                            {Icon && <Icon className="text-sm" />}
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                      >
                        {project.title === "CPG Network" ? (
                          <FiYoutube />
                        ) : (
                          <FiExternalLink />
                        )}
                        {project.title === "CPG Network"
                          ? "YouTube Channel"
                          : "Live Demo"}
                      </a>
                      {project.links.admin && (
                        <a
                          href={project.links.admin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300"
                        >
                          <FiLayers /> Admin Panel
                        </a>
                      )}
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 hover:border-white/40 text-white/70 hover:text-white transition-all duration-300"
                        >
                          <FiGithub /> Source Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right - App count badge */}
                  <div className="lg:w-48 flex-shrink-0">
                    <div className="glass rounded-2xl p-6 text-center">
                      <div className="text-4xl font-bold gradient-text">
                        {project.apps.length}
                      </div>
                      <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                        {project.title === "CPG Network"
                          ? "Channels"
                          : "Applications"}
                      </div>
                      <div className="mt-4 space-y-2">
                        {project.apps.map((app) => (
                          <div
                            key={app}
                            className="text-xs text-white/30 font-mono py-1 border-b border-white/5 last:border-0"
                          >
                            {app}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
