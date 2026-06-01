"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("bsd-preloader");
    if (hasLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      sessionStorage.setItem("bsd-preloader", "true");
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[300] flex flex-col items-center justify-center bg-bsd-bg"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl font-extrabold gradient-text">
              BSD
            </h1>
            <p className="mt-2 text-xs tracking-[0.3em] text-bsd-primary">
              CREACIONES DIGITALES
            </p>
          </motion.div>
          <motion.div
            className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-bsd-border"
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full w-full bg-[linear-gradient(90deg,#00E5FF,#6B21FF)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
