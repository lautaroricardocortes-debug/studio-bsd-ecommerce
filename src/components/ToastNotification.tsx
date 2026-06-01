"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useCartStore } from "@/lib/store";

export function ToastNotification() {
  const { toastMessage, hideToast } = useCartStore();

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: -20, x: 20 }}
          className="fixed right-4 top-24 z-[100] flex max-w-sm items-center gap-3 rounded-xl glass border border-bsd-primary/30 px-4 py-3 shadow-lg glow-box"
        >
          <CheckCircle className="h-5 w-5 shrink-0 text-bsd-primary" />
          <p className="flex-1 text-sm font-medium">{toastMessage}</p>
          <button
            onClick={hideToast}
            className="text-bsd-text-secondary hover:text-white"
            aria-label="Cerrar notificación"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
