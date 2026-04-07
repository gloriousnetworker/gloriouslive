"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiAmazonwebservices,
  SiD3Dotjs,
  SiAngular,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "React.js", icon: SiReact, level: 95 },
      { name: "Next.js", icon: SiNextdotjs, level: 92 },
      { name: "TypeScript", icon: SiTypescript, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 95 },
      { name: "TailwindCSS", icon: SiTailwindcss, level: 93 },
      { name: "Redux", icon: SiRedux, level: 85 },
      { name: "Angular", icon: SiAngular, level: 75 },
      { name: "HTML5", icon: SiHtml5, level: 98 },
      { name: "CSS3", icon: SiCss3, level: 95 },
      { name: "D3.js", icon: SiD3Dotjs, level: 78 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 88 },
      { name: "Express.js", icon: SiExpress, level: 85 },
      { name: "Python", icon: SiPython, level: 75 },
      { name: "MongoDB", icon: SiMongodb, level: 85 },
      { name: "PostgreSQL", icon: SiPostgresql, level: 80 },
      { name: "MySQL", icon: SiMysql, level: 78 },
      { name: "Firebase", icon: SiFirebase, level: 88 },
    ],
  },
  {
    title: "Tools & DevOps",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Git", icon: SiGit, level: 92 },
      { name: "GitHub", icon: SiGithub, level: 90 },
      { name: "Docker", icon: SiDocker, level: 70 },
      { name: "AWS", icon: SiAmazonwebservices, level: 72 },
      { name: "Figma", icon: SiFigma, level: 85 },
      { name: "VS Code", icon: TbBrandVscode, level: 95 },
    ],
  },
];

function SkillBar({
  skill,
  index,
  isInView,
  categoryColor,
}: {
  skill: { name: string; icon: React.ElementType; level: number };
  index: number;
  isInView: boolean;
  categoryColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="glass rounded-xl p-4 glass-hover">
        <div className="flex items-center gap-3 mb-3">
          <skill.icon className="text-xl text-white/60 group-hover:text-white transition-colors" />
          <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
            {skill.name}
          </span>
          <span className="ml-auto text-xs font-mono text-white/30">
            {skill.level}%
          </span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3 + index * 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`h-full rounded-full bg-gradient-to-r ${categoryColor}`}
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 section-padding relative" ref={ref}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
            Technical Proficiency
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: catIndex * 0.15 }}
            >
              <h3
                className={`text-xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={skillIndex}
                    isInView={isInView}
                    categoryColor={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
