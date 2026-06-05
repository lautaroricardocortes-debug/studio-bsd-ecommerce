"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { services } from "@/lib/services";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "El nombre es requerido";
  if (!data.email.trim()) {
    errors.email = "El email es requerido";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email válido";
  }
  if (!data.phone.trim()) {
    errors.phone = "El teléfono es requerido";
  } else if (!/^[\d\s+()-]{8,}$/.test(data.phone)) {
    errors.phone = "Ingresa un teléfono válido";
  }
  if (!data.service) errors.service = "Selecciona un servicio";
  if (!data.message.trim()) errors.message = "El mensaje es requerido";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const allTouched = Object.keys(form).reduce(
      (acc, key) => ({ ...acc, [key]: true }),
      {} as Record<keyof FormData, boolean>,
    );
    setTouched(allTouched);
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const nombre = form.name;
      const email = form.email;
      const telefono = form.phone;
      const servicio =
        services.find((s) => s.id === form.service)?.name ?? form.service;
      const mensaje = form.message;

      const emailSubject = `Nueva consulta - ${nombre}`;
      const emailBody = `Nombre: ${nombre}
Email: ${email}
Teléfono: ${telefono}
Servicio de interés: ${servicio}
Mensaje: ${mensaje}`;

      window.open(
        `https://mail.google.com/mail/?view=cm&to=creacionesdigitalesbsd@gmail.com&su=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`,
        "_blank",
      );
      setSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="bg-bsd-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center font-heading text-3xl font-bold sm:text-4xl"
        >
          Contáctanos
        </motion.h2>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative min-h-[480px] overflow-hidden rounded-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
              alt="Persona trabajando con múltiples pantallas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bsd-bg via-bsd-bg/80 to-bsd-bg/40" />

            <div className="relative flex h-full flex-col justify-end space-y-6 p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bsd-primary/20 backdrop-blur-sm">
                  <Mail className="h-5 w-5 text-bsd-primary" />
                </div>
                <div>
                  <p className="text-sm text-bsd-text-secondary">Email</p>
                  <a
                    href="mailto:creacionesdigitalesbsd@gmail.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    creacionesdigitalesbsd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bsd-primary/20 backdrop-blur-sm">
                  <Phone className="h-5 w-5 text-bsd-primary" />
                </div>
                <div>
                  <p className="text-sm text-bsd-text-secondary">WhatsApp</p>
                  <a
                    href="https://wa.me/56982452185?text=Hola%20BSD%20Creaciones%20Digitales%20%F0%9F%91%8B%20Estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20desarrollo%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white"
                  >
                    +56 9 8245 2185
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bsd-primary/20 backdrop-blur-sm">
                  <MapPin className="h-5 w-5 text-bsd-primary" />
                </div>
                <div>
                  <p className="text-sm text-bsd-text-secondary">Ubicación</p>
                  <p className="font-medium">Viña del Mar, Chile</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-bsd-primary/20 backdrop-blur-sm">
                  <Clock className="h-5 w-5 text-bsd-primary" />
                </div>
                <div>
                  <p className="text-sm text-bsd-text-secondary">Horario</p>
                  <p className="font-medium">Lun-Vie 9:00-18:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass space-y-5 rounded-2xl p-6 sm:p-8"
            noValidate
          >
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-lg font-semibold text-bsd-primary">
                  ¡Consulta enviada!
                </p>
                <p className="mt-2 text-sm text-bsd-text-secondary">
                  Te responderemos en menos de 24 horas.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm">
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    className="w-full rounded-lg border border-bsd-border bg-bsd-bg px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  />
                  {errors.name && touched.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    className="w-full rounded-lg border border-bsd-border bg-bsd-bg px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  />
                  {errors.email && touched.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-sm">
                    Teléfono
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className="w-full rounded-lg border border-bsd-border bg-bsd-bg px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  />
                  {errors.phone && touched.phone && (
                    <p className="mt-1 text-xs text-red-400">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    onBlur={() => handleBlur("service")}
                    className="w-full rounded-lg border border-bsd-border bg-bsd-bg px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  >
                    <option value="">Seleccionar servicio</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                  {errors.service && touched.service && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    className="w-full resize-none rounded-lg border border-bsd-border bg-bsd-bg px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  />
                  {errors.message && touched.message && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-xl bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] py-3.5 text-sm font-semibold text-white"
                >
                  Enviar consulta
                </motion.button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
