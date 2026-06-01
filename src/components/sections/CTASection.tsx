"use client";

import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #00E5FF, #6B21FF)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            ¿Listo para llevar tu negocio al siguiente nivel?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Únete a los 50+ clientes que ya confían en BSD Creaciones
            Digitales
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contacto"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 text-lg font-bold text-bsd-secondary shadow-xl"
          >
            Comenzar mi proyecto ahora →
          </motion.a>
          <p className="mt-6 text-sm text-white/80">
            Sin compromiso · Cotización gratuita · Respuesta en 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
