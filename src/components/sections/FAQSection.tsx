"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types";

const faqs: FAQ[] = [
  {
    question: "¿Cuánto demoran en entregar mi proyecto?",
    answer:
      "Depende del servicio: Landing Page en 7 días hábiles, Sitio Corporativo en 15 días y E-commerce en 21 días hábiles. Siempre cumplimos los plazos acordados.",
  },
  {
    question: "¿El hosting y dominio están realmente incluidos?",
    answer:
      "Sí, incluimos hosting y dominio GRATIS por 1 año en todos nuestros planes. Después del primer año puedes renovar con nosotros o migrar sin problemas.",
  },
  {
    question: "¿Puedo solicitar cambios después de la entrega?",
    answer:
      "Todos nuestros servicios incluyen soporte post-lanzamiento. La Landing Page incluye 30 días de soporte gratuito para ajustes menores.",
  },
  {
    question: "¿Cómo funciona el pago con WebPay?",
    answer:
      "Al finalizar tu compra serás redirigido a WebPay Plus, la plataforma de pago más segura de Chile. Aceptamos tarjetas de crédito, débito y prepago.",
  },
  {
    question: "¿Trabajan con clientes de todo Chile?",
    answer:
      "¡Por supuesto! Trabajamos 100% remoto con clientes de todo Chile. Nos comunicamos por WhatsApp, email y videollamadas.",
  },
  {
    question: "¿Qué pasa si no me gusta el diseño?",
    answer:
      "Antes de desarrollar, te presentamos mockups para tu aprobación. Trabajamos en iteraciones hasta que estés 100% satisfecho con el diseño.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bsd-bg py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="overflow-hidden rounded-xl border border-bsd-border bg-bsd-card"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="pr-4 text-sm font-medium">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 shrink-0 text-bsd-primary" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="border-t border-bsd-border px-6 py-4 text-sm leading-relaxed text-bsd-text-secondary">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
