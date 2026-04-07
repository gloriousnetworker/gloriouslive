"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiAlertCircle, FiX } from "react-icons/fi";

export type ToastType = "success" | "error";

interface ToastProps {
  show: boolean;
  type: ToastType;
  title: string;
  message: string;
  onClose: () => void;
}

export function Toast({ show, type, title, message, onClose }: ToastProps) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-[100] w-80 max-w-[calc(100vw-2rem)]"
        >
          <div
            className={`glass rounded-2xl p-4 border ${
              type === "success"
                ? "border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                : "border-red-500/40 shadow-[0_0_30px_rgba(239,68,68,0.15)]"
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center ${
                  type === "success" ? "bg-emerald-500/20" : "bg-red-500/20"
                }`}
              >
                {type === "success" ? (
                  <FiCheck className="text-emerald-400 text-lg" />
                ) : (
                  <FiAlertCircle className="text-red-400 text-lg" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="text-xs text-white/50 mt-0.5 leading-relaxed">
                  {message}
                </p>
              </div>

              {/* Close */}
              <button
                onClick={onClose}
                className="flex-shrink-0 text-white/30 hover:text-white/60 transition-colors"
              >
                <FiX size={16} />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-0.5 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 5, ease: "linear" }}
                className={`h-full rounded-full ${
                  type === "success" ? "bg-emerald-500" : "bg-red-500"
                }`}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
