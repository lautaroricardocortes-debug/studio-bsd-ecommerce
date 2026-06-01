"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function CheckoutSuccessPage() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const num = Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(`#BSD-${num}`);
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col items-center justify-center bg-bsd-bg px-4 pt-24 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative mb-8"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 2.5, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 rounded-full bg-green-500/30"
          />
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500/20">
            <Check className="h-12 w-12 text-green-400" strokeWidth={3} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="font-heading text-3xl font-extrabold sm:text-4xl"
        >
          ¡Pago exitoso!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mx-auto mt-4 max-w-md text-bsd-text-secondary"
        >
          Hemos recibido tu pedido. Te contactaremos en menos de 24 horas
          hábiles para comenzar con tu proyecto.
        </motion.p>

        {orderNumber && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 font-heading text-xl font-bold text-bsd-primary"
          >
            Orden {orderNumber}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            href="/"
            className="rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-8 py-3 text-sm font-semibold text-white"
          >
            Volver al inicio
          </Link>
          <a
            href="https://wa.me/56900000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#25D366] px-8 py-3 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/10"
          >
            Contáctanos por WhatsApp
          </a>
        </motion.div>
      </div>
    </>
  );
}
