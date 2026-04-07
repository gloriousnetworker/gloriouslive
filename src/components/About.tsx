"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiUser, FiMessageCircle, FiExternalLink } from "react-icons/fi";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaYoutube,
  FaRocket,
} from "react-icons/fa";

const WHATSAPP_URL =
  "https://wa.me/2348024983733?text=Hi%20Iniubong%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!";

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "Projects Shipped", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Developers Mentored", value: "50+" },
];

const ventures = [
  {
    title: "CPG Network",
    role: "Founder & Lead Instructor",
    description:
      "A tech education company streaming beginner-friendly programming classes and mentoring aspiring developers into the industry remotely.",
    link: "https://www.youtube.com/@CPG-Network",
    icon: FaYoutube,
    color: "text-red-400",
  },
  {
    title: "Corpers Connect",
    role: "Founder & CEO",
    description:
      "A global chat and social platform built for Nigerian corps members to connect, share resources, and build communities during NYSC service.",
    link: "https://corpersconnect.com.ng",
    icon: FaRocket,
    color: "text-violet-400",
  },
  {
    title: "Einstein's CBT",
    role: "Creator & Lead Developer",
    description:
      "A computer-based testing platform enabling secondary school students to practice for WAEC examinations with real-time simulation and analytics.",
    link: "https://einstein-s-cbt.vercel.app",
    icon: FaRocket,
    color: "text-cyan-400",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 section-padding relative" ref={ref}>
      {/* Background accent */}
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
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
            Know Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image / Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-72 h-72 sm:w-80 sm:h-80"
            >
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-500 via-cyan-500 to-violet-500 animate-spin-slow opacity-70 blur-sm group-hover:opacity-100 transition-opacity duration-500" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-[3px] rounded-3xl bg-dark-100 flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:bg-dark-200">
                <FiUser className="text-6xl text-white/20 group-hover:text-violet-400 transition-colors duration-500" />
                <div className="text-center">
                  <p className="text-white/40 group-hover:text-white/60 text-sm font-medium transition-colors">
                    Click to connect on
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <FiMessageCircle className="text-green-400" />
                    <p className="text-green-400 font-semibold">WhatsApp</p>
                  </div>
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs text-white/30 font-mono">
                    Send me a message
                  </span>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              I&apos;m{" "}
              <span className="text-white font-semibold">
                Iniubong Uko Udofot
              </span>
              , a dynamic Full Stack Software Engineer with over{" "}
              <span className="text-violet-400 font-semibold">6 years</span> of
              professional experience. Based in Abuja, Nigeria, I specialize in
              architecting scalable, high-performance web applications and leading
              frontend teams to deliver production-grade products.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Currently a core frontend engineer at{" "}
              <span className="text-cyan-400">DCarbon</span>, a climate technology
              company, where I&apos;ve built and maintained an entire ecosystem of 4
              interconnected applications. Beyond my day job, I&apos;m a{" "}
              <span className="text-violet-400">founder and builder</span> — I
              launched{" "}
              <span className="text-white font-semibold">CPG Network</span> to
              mentor aspiring developers, created{" "}
              <span className="text-white font-semibold">
                Einstein&apos;s CBT
              </span>{" "}
              to help students prepare for WAEC exams, and built{" "}
              <span className="text-white font-semibold">Corpers Connect</span>{" "}
              as a social platform for Nigerian corps members.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              I&apos;m passionate about building things that people use. I love the
              craft of engineering — taking a complex problem and turning it into
              an elegant solution that just works.
            </p>

            {/* Info chips */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { icon: FaMapMarkerAlt, text: "Abuja, Nigeria" },
                { icon: FaBriefcase, text: "Frontend Engineer @ DCarbon" },
                { icon: FaGraduationCap, text: "B.Sc.(Ed) Computer Science, UniJos" },
                { icon: FaCode, text: "6+ Years Experience" },
              ].map((item, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm text-white/60"
                >
                  <item.icon className="text-violet-400" />
                  {item.text}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + i * 0.1 }}
              className="glass rounded-2xl p-6 text-center glass-hover"
            >
              <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Personal Ventures */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            Beyond the Day Job —{" "}
            <span className="gradient-text">My Ventures</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, i) => (
              <motion.a
                key={i}
                href={venture.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.15 }}
                className="glass rounded-2xl p-6 glass-hover group block"
              >
                <div className="flex items-center gap-3 mb-3">
                  <venture.icon className={`text-xl ${venture.color}`} />
                  <div>
                    <h4 className="font-bold text-white group-hover:text-violet-400 transition-colors">
                      {venture.title}
                    </h4>
                    <p className="text-xs text-white/30 font-mono">
                      {venture.role}
                    </p>
                  </div>
                  <FiExternalLink className="ml-auto text-white/20 group-hover:text-white/50 transition-colors" />
                </div>
                <p className="text-sm text-white/40 leading-relaxed">
                  {venture.description}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
