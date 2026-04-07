"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiAward, FiX, FiZoomIn } from "react-icons/fi";

const certificates = [
  {
    title: "HackerRank Frontend Developer Certificate",
    issuer: "HackerRank",
    image: "/frontend.jpg",
    description:
      "Certified proficiency in frontend development including HTML, CSS, JavaScript, and responsive design principles.",
  },
  {
    title: "HackerRank React.js Certificate",
    issuer: "HackerRank",
    image: "/frontend2.jpg",
    description:
      "Demonstrated advanced expertise in React.js development, component architecture, and state management.",
  },
  {
    title: "HNG Internship Certificate",
    issuer: "HNG",
    image: "/HNG.jpg",
    description:
      "Successfully completed the HNG Internship program, demonstrating real-world software development skills in a collaborative environment.",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  return (
    <section
      id="certificates"
      className="py-32 section-padding relative"
      ref={ref}
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-mono text-amber-400 tracking-widest uppercase">
            Certifications
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
            Badges & <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        {/* Certificate Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden glass-hover group cursor-pointer"
              onClick={() => setSelectedCert(i)}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute top-3 right-3 p-2 glass rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiZoomIn className="text-white text-sm" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <FiAward className="text-amber-400" />
                  <span className="text-xs font-mono text-amber-400/70">
                    {cert.issuer}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-white/40 mt-2">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedCert !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute -top-12 right-0 p-2 text-white/60 hover:text-white transition-colors"
              >
                <FiX size={24} />
              </button>
              <div className="relative aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={certificates[selectedCert].image}
                  alt={certificates[selectedCert].title}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold text-white">
                  {certificates[selectedCert].title}
                </h3>
                <p className="text-white/40 mt-1">
                  {certificates[selectedCert].issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
