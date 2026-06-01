"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Palette,
  Code,
  Rocket,
  type LucideIcon,
} from "lucide-react";

const steps: {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    number: "01",
    title: "Briefing",
    description: "Conversamos sobre tu proyecto y objetivos",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Diseño",
    description: "Creamos mockups y prototipos para tu aprobación",
    icon: Palette,
  },
  {
    number: "03",
    title: "Desarrollo",
    description: "Construimos tu sitio con las mejores tecnologías",
    icon: Code,
  },
  {
    number: "04",
    title: "Entrega",
    description: "Lanzamos tu proyecto y te capacitamos",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section id="proceso" className="bg-bsd-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="relative w-full px-6 md:px-0">
          <div className="absolute top-16 right-0 left-0 hidden h-0.5 bg-bsd-border md:block">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-[linear-gradient(90deg,#00E5FF,#6B21FF)]"
            />
          </div>

          <div className="flex flex-col md:hidden">
            {steps.map((step, i) => (
              <div key={step.number}>
                {i > 0 && (
                  <div
                    className="h-px w-full"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                )}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 py-6"
                >
                  <div className="flex shrink-0 flex-col items-center">
                    <p
                      className="font-heading font-extrabold text-bsd-primary"
                      style={{ fontSize: "2.5rem", lineHeight: 1 }}
                    >
                      {step.number}
                    </p>
                    <div className="mt-2 flex h-10 w-10 items-center justify-center rounded-full glass">
                      <step.icon className="h-5 w-5 text-bsd-primary" />
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-heading text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-bsd-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          <div className="hidden w-full grid-cols-4 gap-8 md:grid">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <p className="font-heading text-5xl font-extrabold gradient-text">
                  {step.number}
                </p>
                <div className="mx-auto my-4 flex h-12 w-12 items-center justify-center rounded-full glass">
                  <step.icon className="h-5 w-5 text-bsd-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-bsd-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
