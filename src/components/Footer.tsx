"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const tapCountRef = useRef(0);
  const tapTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [secretHint, setSecretHint] = useState(false);

  const handleLogoTap = useCallback(() => {
    tapCountRef.current += 1;

    // Show subtle hint after 2 taps
    if (tapCountRef.current === 2) {
      setSecretHint(true);
    }

    // Navigate on 3 taps
    if (tapCountRef.current >= 3) {
      tapCountRef.current = 0;
      setSecretHint(false);
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      router.push("/admin");
      return;
    }

    // Reset after 1.5 seconds of inactivity
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
    tapTimerRef.current = setTimeout(() => {
      tapCountRef.current = 0;
      setSecretHint(false);
    }, 1500);
  }, [router]);

  return (
    <footer className="py-12 section-padding border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo — triple-tap/click to open admin */}
          <div className="relative">
            <motion.button
              onClick={handleLogoTap}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.92 }}
              className="text-xl font-bold select-none cursor-pointer"
            >
              <span className="gradient-text">IU</span>
              <span className="text-white/60">.</span>
            </motion.button>

            {/* Subtle hint after 2 taps */}
            {secretHint && (
              <motion.span
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: -16 }}
                exit={{ opacity: 0 }}
                className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] text-violet-400/60 whitespace-nowrap pointer-events-none"
              >
                one more...
              </motion.span>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, url: "https://github.com/gloriousnetworker" },
              { icon: FaWhatsapp, url: "https://wa.me/2348024983733" },
              { icon: FaLinkedin, url: "https://www.linkedin.com/in/ini-udofot-va-net-worker/" },
              { icon: FiMail, url: "mailto:iniubongudofot2000@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 text-white/30 hover:text-white/60 transition-colors"
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/20 flex items-center gap-1">
            &copy; {currentYear} Iniubong Udofot. Built with{" "}
            <FiHeart className="text-red-500/50 inline" size={12} />
          </p>
        </div>
      </div>
    </footer>
  );
}
