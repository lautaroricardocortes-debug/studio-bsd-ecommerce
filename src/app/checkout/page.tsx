"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Lock, Shield, CreditCard } from "lucide-react";
import { formatCLP } from "@/lib/services";
import { useCartStore } from "@/lib/store";
import { Navbar } from "@/components/Navbar";

interface CheckoutForm {
  fullName: string;
  rut: string;
  email: string;
  phone: string;
  company: string;
  currentUrl: string;
  description: string;
  referral: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const { items, subtotal, iva, total } = useCartStore();
  const item = items[0];
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<CheckoutForm>({
    fullName: "",
    rut: "",
    email: "",
    phone: "",
    company: "",
    currentUrl: "",
    description: "",
    referral: "",
  });

  const handlePay = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push("/checkout/exito");
    }, 2000);
  };

  if (!item) {
    return (
      <>
        <Navbar />
        <div className="flex min-h-screen flex-col items-center justify-center bg-bsd-bg px-4 pt-24 text-center">
          <p className="mb-4 text-bsd-text-secondary">
            No hay servicios en tu carrito
          </p>
          <Link
            href="/#servicios"
            className="rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-6 py-3 text-sm font-semibold"
          >
            Ver servicios
          </Link>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-bsd-bg pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-bsd-text-secondary">
            <span className="text-bsd-primary">Carrito</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-bsd-primary">Datos</span>
            <ChevronRight className="h-4 w-4" />
            <span>Pago</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-5">
            <form onSubmit={handlePay} className="space-y-5 lg:col-span-3">
              <h1 className="font-heading text-2xl font-bold">
                Datos del proyecto
              </h1>

              {(
                [
                  { key: "fullName", label: "Nombre completo", required: true },
                  { key: "rut", label: "RUT", required: true },
                  { key: "email", label: "Email", type: "email", required: true },
                  { key: "phone", label: "Teléfono", required: true },
                  { key: "company", label: "Empresa (opcional)", required: false },
                  {
                    key: "currentUrl",
                    label: "URL actual del sitio (opcional)",
                    required: false,
                  },
                ] as const
              ).map((field) => (
                <div key={field.key}>
                  <label className="mb-1.5 block text-sm">{field.label}</label>
                  <input
                    type={"type" in field ? field.type : "text"}
                    required={field.required}
                    value={form[field.key]}
                    onChange={(e) =>
                      setForm({ ...form, [field.key]: e.target.value })
                    }
                    className="w-full rounded-lg border border-bsd-border bg-bsd-card px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                  />
                </div>
              ))}

              <div>
                <label className="mb-1.5 block text-sm">
                  Descripción del proyecto
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                  className="w-full resize-none rounded-lg border border-bsd-border bg-bsd-card px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm">
                  ¿Cómo nos encontraste?
                </label>
                <select
                  required
                  value={form.referral}
                  onChange={(e) =>
                    setForm({ ...form, referral: e.target.value })
                  }
                  className="w-full rounded-lg border border-bsd-border bg-bsd-card px-4 py-3 text-sm outline-none focus:border-bsd-primary"
                >
                  <option value="">Seleccionar</option>
                  <option value="google">Google</option>
                  <option value="instagram">Instagram</option>
                  <option value="referido">Referido</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
            </form>

            <div className="lg:col-span-2">
              <div className="sticky top-28 glass rounded-2xl p-6">
                <h2 className="mb-6 font-heading text-lg font-bold">
                  Resumen del pedido
                </h2>

                <div className="mb-6 rounded-xl border border-bsd-border bg-bsd-bg p-4">
                  <p className="font-semibold">{item.service.name}</p>
                  <p className="mt-1 text-sm text-bsd-text-secondary">
                    {item.service.deliveryTime}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-bsd-text-secondary">
                    <span>Subtotal</span>
                    <span>{formatCLP(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-bsd-text-secondary">
                    <span>IVA (19%)</span>
                    <span>{formatCLP(iva)}</span>
                  </div>
                  <div className="flex justify-between border-t border-bsd-border pt-3 text-lg font-bold">
                    <span>Total</span>
                    <span className="text-bsd-primary">{formatCLP(total)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  onClick={handlePay}
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#E52521] px-6 py-4 text-base font-bold text-white disabled:opacity-70"
                >
                  <span className="rounded bg-white px-2 py-0.5 text-xs font-black text-[#E52521]">
                    webpay
                  </span>
                  {loading
                    ? "Procesando..."
                    : `Pagar ${formatCLP(total)} con WebPay Plus`}
                </motion.button>

                <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-bsd-text-secondary">
                  <span className="flex items-center gap-1">
                    <Lock className="h-3.5 w-3.5" /> SSL
                  </span>
                  <span className="flex items-center gap-1">
                    <CreditCard className="h-3.5 w-3.5" /> WebPay
                  </span>
                  <span className="flex items-center gap-1">
                    <Shield className="h-3.5 w-3.5" /> Datos protegidos
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
