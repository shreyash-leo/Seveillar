"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    setMounted(true);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="hidden md:block">
      <motion.div
        animate={{
          x: mousePosition.x - 2,
          y: mousePosition.y - 2,
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.03,
        }}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_0_6px_rgba(249,115,22,0.6)]"
        >
          <path
            d="M3 3L10 22L12.0513 15.8461C12.6485 14.0544 14.0544 12.6485 15.846 12.0513L22 10L3 3Z"
            fill="#f97316"
            stroke="#000000"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}