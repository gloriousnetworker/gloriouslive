"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiMail,
  FiSend,
  FiGithub,
  FiPhone,
  FiMapPin,
  FiBell,
  FiZap,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { getDb } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  getCountFromServer,
} from "firebase/firestore";
import { Toast } from "@/components/Toast";

const WHATSAPP_URL =
  "https://wa.me/2348024983733?text=Hi%20Iniubong%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20connect!";

const socials = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/gloriousnetworker",
    color: "hover:text-white",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: WHATSAPP_URL,
    color: "hover:text-green-400",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/ini-udofot-va-net-worker/",
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    icon: FiMail,
    url: "mailto:iniubongudofot2000@gmail.com",
    color: "hover:text-red-400",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [messageCount, setMessageCount] = useState<number | null>(null);
  const [toast, setToast] = useState<{
    show: boolean;
    type: "success" | "error";
    title: string;
    message: string;
  }>({ show: false, type: "success", title: "", message: "" });

  // Fetch total message count from Firestore
  useEffect(() => {
    const fetchCount = async () => {
      try {
        const snap = await getCountFromServer(
          collection(getDb(), "contactMessages")
        );
        setMessageCount(snap.data().count);
      } catch {
        // Silent fail — count just won't show
      }
    };
    fetchCount();
  }, []);

  const closeToast = useCallback(() => {
    setToast((t) => ({ ...t, show: false }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    try {
      await addDoc(collection(getDb(), "contactMessages"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        read: false,
        createdAt: serverTimestamp(),
      });

      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      setSending(false);
      setFormData({ name: "", email: "", message: "" });
      setMessageCount((c) => (c !== null ? c + 1 : null));
      setToast({
        show: true,
        type: "success",
        title: "Message sent!",
        message:
          "Iniubong has been notified and will reply to your email shortly.",
      });
    } catch {
      setSending(false);
      setToast({
        show: true,
        type: "error",
        title: "Failed to send",
        message: "Something went wrong. Please try again or reach out on WhatsApp.",
      });
    }
  };

  return (
    <>
      <section id="contact" className="py-32 section-padding relative" ref={ref}>
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
              Get in Touch
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 text-white">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="mt-4 text-white/40 max-w-xl mx-auto">
              Have a project in mind or want to discuss opportunities? I&apos;d love to
              hear from you.
            </p>

            {/* Live activity badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-6 inline-flex items-center gap-3 px-5 py-3 glass rounded-full border border-emerald-500/20"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm text-white/60">
                <span className="text-emerald-400 font-semibold">
                  Actively responding
                </span>
                {messageCount !== null && messageCount > 0 && (
                  <> &mdash; {messageCount} {messageCount === 1 ? "person has" : "people have"} reached out</>
                )}
              </span>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Info + Social */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Notification promise card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="glass rounded-2xl p-6 border border-violet-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 flex-shrink-0">
                    <FiBell className="text-xl text-violet-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">
                      You&apos;ll hear back fast
                    </h4>
                    <p className="text-sm text-white/50 leading-relaxed">
                      Every message sent through this form lands directly in my
                      inbox. I&apos;m notified <span className="text-violet-400">instantly</span> and
                      will reply to your email address — usually within 24 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5">
                  <FiZap className="text-amber-400 text-sm" />
                  <span className="text-xs text-white/30">
                    Powered by real-time notifications — no message goes unread
                  </span>
                </div>
              </motion.div>

              {/* Contact info */}
              <div className="space-y-4">
                {[
                  {
                    icon: FiMail,
                    label: "Email",
                    value: "iniubongudofot2000@gmail.com",
                    href: "mailto:iniubongudofot2000@gmail.com",
                  },
                  {
                    icon: FiPhone,
                    label: "Phone / WhatsApp",
                    value: "+234 802 498 3733",
                    href: WHATSAPP_URL,
                  },
                  {
                    icon: FiMapPin,
                    label: "Location",
                    value: "Abuja, Nigeria",
                    href: null,
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="glass rounded-xl p-5 glass-hover"
                  >
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-violet-500/10">
                          <item.icon className="text-xl text-violet-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-white/70 hover:text-white transition-colors">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-violet-500/10">
                          <item.icon className="text-xl text-violet-400" />
                        </div>
                        <div>
                          <p className="text-xs text-white/30 uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-white/70">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Socials */}
              <div>
                <p className="text-sm text-white/30 mb-4 uppercase tracking-wider">
                  Connect with me
                </p>
                <div className="flex gap-3">
                  {socials.map((social, i) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 glass rounded-xl text-white/40 ${social.color} transition-colors duration-300`}
                      title={social.name}
                    >
                      <social.icon size={22} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    This form is live — messages go straight to my inbox
                  </span>
                </div>

                <div>
                  <label className="block text-sm text-white/40 mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-white/40 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/20 focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all outline-none resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-accent hover:bg-accent-light text-white font-medium rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(109,40,217,0.3)] flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {sending ? (
                    <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-white/20 text-center">
                  I&apos;ll reply directly to your email — usually within 24 hours
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Toast */}
      <Toast
        show={toast.show}
        type={toast.type}
        title={toast.title}
        message={toast.message}
        onClose={closeToast}
      />
    </>
  );
}
