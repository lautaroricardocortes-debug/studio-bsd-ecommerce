"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Testimonial } from "@/types";

const testimonials: Testimonial[] = [
  {
    name: "María González",
    company: "Dueña de tienda",
    city: "Valparaíso",
    rating: 5,
    text: "BSD transformó mi negocio online, mis ventas aumentaron un 40% en el primer mes",
    avatar: "MG",
  },
  {
    name: "Carlos Muñoz",
    company: "Gerente Pyme",
    city: "Santiago",
    rating: 5,
    text: "Profesionales, rápidos y el resultado superó todas mis expectativas",
    avatar: "CM",
  },
  {
    name: "Valentina Rojas",
    company: "Emprendedora",
    city: "Viña del Mar",
    rating: 5,
    text: "El mejor precio del mercado con la mejor calidad. 100% recomendados",
    avatar: "VR",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="relative overflow-hidden bg-bsd-bg-alt py-24">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=60"
          alt=""
          fill
          className="object-cover opacity-[0.03]"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          Lo que dicen nuestros clientes
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col rounded-2xl p-6"
            >
              <div className="mb-4 text-yellow-400">⭐⭐⭐⭐⭐</div>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-bsd-text-secondary">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] text-xs font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-bsd-text-secondary">
                    {t.company}, {t.city}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
