"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Clock, ShoppingCart, Trash2, X } from "lucide-react";
import { formatCLP } from "@/lib/services";
import { useCartStore } from "@/lib/store";

function WebPayButton({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#E52521] px-6 py-4 text-base font-bold text-white shadow-lg transition-shadow hover:shadow-red-500/30"
    >
      <span className="rounded bg-white px-2 py-0.5 text-xs font-black text-[#E52521]">
        webpay
      </span>
      {label}
    </motion.button>
  );
}

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, subtotal, iva, total } =
    useCartStore();
  const item = items[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 250 }}
            className="fixed right-0 top-0 z-[90] flex h-full w-full flex-col border-l-2 border-transparent bg-bsd-card sm:w-[420px]"
            style={{
              borderImage: "linear-gradient(180deg, #00E5FF, #6B21FF) 1",
            }}
          >
            <div
              className="absolute left-0 top-0 h-full w-[2px]"
              style={{
                background: "linear-gradient(180deg, #00E5FF, #6B21FF)",
              }}
            />

            <div className="flex items-center justify-between border-b border-bsd-border p-6">
              <h2 className="font-heading text-xl font-bold">
                Tu carrito
              </h2>
              <button
                onClick={closeCart}
                className="rounded-lg p-2 text-bsd-text-secondary transition-colors hover:bg-white/5 hover:text-white"
                aria-label="Cerrar carrito"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex flex-1 flex-col overflow-y-auto p-6">
              {item ? (
                <>
                  <div className="glass rounded-xl p-5">
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="font-heading text-lg font-semibold">
                        {item.service.name}
                      </h3>
                      <button
                        onClick={() => removeItem(item.service.id)}
                        className="rounded-lg p-1.5 text-red-400 transition-colors hover:bg-red-500/10"
                        aria-label="Eliminar servicio"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mb-4 text-2xl font-bold text-bsd-primary">
                      {item.service.priceLabel}
                    </p>
                    <ul className="space-y-2">
                      {item.service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-bsd-text-secondary"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-bsd-primary" />
                          {feature}
                        </li>
                      ))}
                      {item.service.features.length > 4 && (
                        <li className="text-xs text-bsd-text-secondary">
                          +{item.service.features.length - 4} beneficios más
                        </li>
                      )}
                    </ul>
                    <div className="mt-4 flex items-center gap-2 text-sm text-bsd-text-secondary">
                      <Clock className="h-4 w-4 text-bsd-primary" />
                      Entrega: {item.service.deliveryTime}
                    </div>
                  </div>

                  <div className="mt-auto space-y-3 pt-8">
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
                        <span className="text-bsd-primary glow-cyan">
                          {formatCLP(total)}
                        </span>
                      </div>
                    </div>

                    <Link href="/checkout" onClick={closeCart}>
                      <WebPayButton label="PAGAR CON WEBPAY" />
                    </Link>
                    <p className="text-center text-xs text-bsd-text-secondary">
                      🔒 Pago 100% seguro con WebPay Plus
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                  <svg
                    className="mb-6 h-32 w-32 text-bsd-text-secondary/30"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="8 4"
                    />
                    <path
                      d="M35 45h50l-5 35H40L35 45z"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle cx="48" cy="88" r="4" fill="currentColor" />
                    <circle cx="72" cy="88" r="4" fill="currentColor" />
                    <path
                      d="M45 45l5-15h20l5 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  <h3 className="mb-2 font-heading text-lg font-semibold">
                    Tu carrito está vacío
                  </h3>
                  <p className="mb-6 text-sm text-bsd-text-secondary">
                    Agrega un servicio para comenzar tu proyecto
                  </p>
                  <Link
                    href="#servicios"
                    onClick={closeCart}
                    className="flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-6 py-3 text-sm font-semibold text-white"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Ver servicios
                  </Link>
                </div>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
