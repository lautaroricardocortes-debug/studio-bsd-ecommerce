"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Building2,
  Clock,
  Globe,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/services";
import { useCartStore } from "@/lib/store";
import type { Service } from "@/types";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Building2,
  ShoppingBag,
};

const serviceImages: Record<string, { src: string; width: number; height: number }> = {
  "landing-page-profesional": {
    src: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    width: 600,
    height: 400,
  },
  "sitio-corporativo": {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    width: 600,
    height: 400,
  },
  "ecommerce-profesional": {
    src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    width: 600,
    height: 400,
  },
};

function ServiceCard({ service }: { service: Service }) {
  const [added, setAdded] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const Icon = iconMap[service.icon] ?? Globe;
  const image = serviceImages[service.id];

  const handleAdd = () => {
    addItem(service);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className={`relative flex flex-col overflow-hidden rounded-2xl p-[1px] ${
        service.popular
          ? "scale-[1.02] bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] shadow-[0_0_40px_rgba(0,229,255,0.15)]"
          : "bg-bsd-border"
      }`}
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-bsd-card">
        {image && (
          <div className="relative h-[200px] w-full overflow-hidden">
            <Image
              src={image.src}
              alt={service.name}
              width={image.width}
              height={image.height}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bsd-card via-bsd-card/40 to-transparent" />
            <span className="absolute left-4 top-4 rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-3 py-1 text-[10px] font-bold tracking-wide text-white">
              {service.badge}
            </span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-bsd-primary/10">
            <Icon className="h-6 w-6 text-bsd-primary" />
          </div>

          <h3 className="font-heading text-xl font-bold">{service.name}</h3>

          <p className="mt-3 text-2xl font-bold text-bsd-primary">
            {service.priceLabel}
          </p>

          <div className="my-6 h-px bg-bsd-border" />

          <ul className="mb-6 flex-1 space-y-3">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-bsd-text-secondary"
              >
                <span className="mt-0.5 text-bsd-primary">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mb-6 flex items-center gap-2 text-sm text-bsd-text-secondary">
            <Clock className="h-4 w-4 text-bsd-primary" />
            {service.deliveryTime}
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleAdd}
            className={`w-full rounded-xl py-3.5 text-sm font-semibold transition-all ${
              added
                ? "bg-green-500/20 text-green-400"
                : "bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] text-white hover:shadow-lg hover:shadow-cyan-500/20"
            }`}
          >
            {added ? "✓ Agregado" : "Agregar al carrito"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-bsd-bg py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-bsd-text-secondary">
            Soluciones digitales diseñadas para hacer crecer tu negocio con
            tecnología de vanguardia y entrega garantizada.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
