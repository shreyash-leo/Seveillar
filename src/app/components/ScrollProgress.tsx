"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollPercentage(progress);
      setShowButton(scrollTop > 400);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  const radius = 28;
  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (scrollPercentage / 100) * circumference;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-[9999]"
        >
          <button
            onClick={scrollToTop}
            className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#1E1513]/90 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)] hover:scale-110 transition-all duration-300 group"
          >
            {/* Progress Circle */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90"
              viewBox="0 0 70 70"
            >
              {/* Background */}
              <circle
                cx="35"
                cy="35"
                r={radius}
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="4"
                fill="transparent"
              />

              {/* Progress */}
              <circle
                cx="35"
                cy="35"
                r={radius}
                stroke="#E95A25"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-150"
              />
            </svg>

            {/* Arrow */}
            <span className="text-white text-xl group-hover:-translate-y-1 transition-transform duration-300">
              ↑
            </span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}