"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&q=85",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85",
  "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=85",
  "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=900&q=85",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&q=85",
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=85",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=85",
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&q=85",
];

const LOOP_IMAGES = [...IMAGES, ...IMAGES];

function BackgroundCarousel() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div className="carousel-track flex h-full w-max gap-[3px] bg-[#0D0D12]">
        {LOOP_IMAGES.map((src, i) => (
          <div key={`${src}-${i}`} className="relative shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{
                width: 500,
                height: "100vh",
                objectFit: "cover",
                objectPosition: "center",
                flexShrink: 0,
                display: "block",
              }}
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,13,18,0.3), transparent, rgba(13,13,18,0.3))",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function Typewriter({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, 80);
    const c = setInterval(() => setCursor((p) => !p), 500);
    return () => {
      clearInterval(t);
      clearInterval(c);
    };
  }, [text]);

  return (
    <span
      style={{
        background: "linear-gradient(135deg, #00E5FF, #6B21FF)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {displayed}
      <span style={{ opacity: cursor ? 1 : 0, WebkitTextFillColor: "#00E5FF" }}>
        |
      </span>
    </span>
  );
}

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-[#0D0D12]"
    >
      <BackgroundCarousel />

      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div
          className="absolute inset-0"
          style={{ background: "rgba(13,13,18,0.72)" }}
        />
        <div
          className="absolute top-0 bottom-0 left-0 w-1/4"
          style={{
            background: "linear-gradient(to right, #0D0D12, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 bottom-0 w-1/4"
          style={{
            background: "linear-gradient(to left, #0D0D12, transparent)",
          }}
        />
        <div
          className="absolute top-0 right-0 left-0 h-[30%]"
          style={{
            background: "linear-gradient(to bottom, #0D0D12, transparent)",
          }}
        />
        <div
          className="absolute right-0 bottom-0 left-0 h-[35%]"
          style={{
            background: "linear-gradient(to top, #0D0D12, transparent)",
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-[800px] px-6 text-center"
        >
          <h1
            className="font-heading mt-6 text-center font-black text-white"
            style={{
              fontSize: "clamp(3.2rem, 7vw, 6rem)",
              lineHeight: 1,
            }}
          >
            Creamos tu presencia
            <br />
            digital para
            <br />
            <Typewriter text="DESTACAR, VENDER Y CRECER" />
          </h1>

          <p
            className="mx-auto mt-5 max-w-[600px] text-center text-[1.05rem] leading-[1.8]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Diseñamos y desarrollamos Landing Pages, Sitios Corporativos y
            E-commerce profesionales que transforman visitantes en clientes
            reales.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              href="#servicios"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full px-10 py-4 text-base font-semibold text-white"
              style={{
                background: "linear-gradient(135deg, #00E5FF, #6B21FF)",
                boxShadow: "0 0 50px rgba(0,229,255,0.35)",
              }}
            >
              Ver nuestros servicios →
            </motion.a>
            <motion.a
              href="https://wa.me/56982452185?text=Hola%20BSD%20Creaciones%20Digitales%20%F0%9F%91%8B%20Estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20desarrollo%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, borderColor: "#00E5FF", color: "#00E5FF" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-full border px-10 py-4 text-base font-semibold text-white transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                background: "transparent",
              }}
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "8px",
                  flexShrink: 0,
                }}
                fill="#25D366"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablar por WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
