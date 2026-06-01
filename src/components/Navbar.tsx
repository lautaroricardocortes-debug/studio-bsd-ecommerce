"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useCartStore } from "@/lib/store";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-bsd", label: "¿Por qué BSD?" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { items, toggleCart } = useCartStore();
  const itemCount = items.length;

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(10, 10, 15, 0.97)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,229,255,0.08)",
        }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#inicio" className="group flex flex-col leading-none">
            <span className="font-heading text-2xl font-extrabold gradient-text">
              BSD
            </span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-bsd-primary">
              CREACIONES DIGITALES
            </span>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-bsd-text-secondary transition-colors hover:text-bsd-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleCart}
              className="relative rounded-full p-2.5 text-bsd-primary transition-colors hover:bg-white/5 glow-box"
              aria-label="Abrir carrito"
            >
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-bsd-primary text-[10px] font-bold text-bsd-bg">
                  {itemCount}
                </span>
              )}
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href="#servicios"
              className="hidden rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-5 py-2 text-sm font-semibold text-white shadow-lg sm:inline-block"
            >
              Cotizar ahora
            </motion.a>

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-bsd-text lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[280px] flex-col glass border-l border-white/10 lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-white/10 p-4">
                <span className="font-heading text-xl font-bold gradient-text">
                  BSD
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 p-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="rounded-lg px-4 py-3 text-bsd-text-secondary transition-colors hover:bg-white/5 hover:text-bsd-primary"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <motion.a
                  href="#servicios"
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 rounded-full bg-[linear-gradient(135deg,#00E5FF,#6B21FF)] px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Cotizar ahora
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
