"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const points = [
  {
    icon: "⚡",
    title: "Entrega Rápida",
    description:
      "Proyectos entregados en tiempo récord sin sacrificar calidad",
  },
  {
    icon: "💎",
    title: "Código Premium",
    description: "Desarrollamos con las últimas tecnologías del mercado",
  },
  {
    icon: "🛡️",
    title: "Soporte Incluido",
    description: "Acompañamiento post-lanzamiento sin costo adicional",
  },
  {
    icon: "🔒",
    title: "Pago Seguro",
    description:
      "WebPay Plus integrado para máxima seguridad en transacciones",
  },
];

const counters = [
  { value: 50, suffix: "+", label: "proyectos" },
  { value: 3, suffix: "", label: "años experiencia" },
  { value: 100, suffix: "%", label: "satisfacción" },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = value / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function WhyBSDSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="por-que-bsd" className="bg-bsd-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          ¿Por qué elegir BSD Creaciones Digitales?
        </motion.h2>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div ref={ref}>
            <div className="mb-10 grid grid-cols-3 gap-6">
              {counters.map((counter) => (
                <div key={counter.label} className="text-center">
                  <p className="font-heading text-3xl font-bold text-bsd-primary">
                    <AnimatedCounter
                      value={counter.value}
                      suffix={counter.suffix}
                      inView={inView}
                    />
                  </p>
                  <p className="mt-1 text-xs text-bsd-text-secondary">
                    {counter.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              {points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <span className="text-3xl">{point.icon}</span>
                  <div>
                    <h3 className="font-heading font-semibold">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm text-bsd-text-secondary">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-md pb-12 lg:max-w-none lg:pb-0"
          >
            <div className="relative rounded-2xl border border-bsd-border shadow-2xl shadow-purple-900/20">
              <Image
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=85"
                alt="Mano con smartphone y app"
                width={700}
                height={525}
                className="h-auto w-full rounded-2xl object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -bottom-6 -left-4 w-[45%] overflow-hidden rounded-xl border-2 border-bsd-secondary/40 shadow-xl shadow-violet-500/20 sm:-left-8"
            >
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
                alt="App en celular"
                width={400}
                height={300}
                className="h-auto w-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-4 w-[45%] overflow-hidden rounded-xl border-2 border-bsd-secondary/40 shadow-xl shadow-violet-500/20 sm:-right-8"
            >
              <Image
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=85"
                alt="Sitio web en computador de escritorio"
                width={400}
                height={300}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
