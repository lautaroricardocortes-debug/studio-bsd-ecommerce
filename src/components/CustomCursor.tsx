"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const desktop = window.matchMedia("(pointer: fine)").matches;
      setIsDesktop(desktop);
      if (desktop) {
        document.body.classList.add("custom-cursor-active");
      } else {
        document.body.classList.remove("custom-cursor-active");
      }
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
      window.removeEventListener("resize", checkDesktop);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[200] h-3 w-3 rounded-full bg-bsd-primary mix-blend-difference"
      animate={{
        x: position.x - 6,
        y: position.y - 6,
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
      style={{ boxShadow: "0 0 20px #00E5FF, 0 0 40px rgba(0,229,255,0.4)" }}
    />
  );
}
