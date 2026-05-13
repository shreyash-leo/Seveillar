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

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div className="hidden md:block">
      <motion.div
  animate={{
    x: mousePosition.x - 8,
    y: mousePosition.y - 8,
  }}
  transition={{
    type: "spring",
    stiffness: 500,
    damping: 28,
    mass: 0.5,
  }}
  className="fixed top-0 left-0 h-4 w-4 rounded-full bg-orange-500 pointer-events-none z-[9999] mix-blend-difference"
/>
    </div>
  );
}