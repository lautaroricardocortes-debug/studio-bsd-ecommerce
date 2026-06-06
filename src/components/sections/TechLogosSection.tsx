"use client";

const technologies = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "WordPress", icon: "W" },
  { name: "WooCommerce", icon: "🛒" },
  { name: "WebPay", icon: "💳" },
  { name: "Tailwind CSS", icon: "🎨" },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.111 12.888.697 14.1 1.75 14.1h9.3l.149 8.864c.015.986 1.26 1.41 1.874.637l9.262-11.652c.653-.838.067-2.05-.986-2.05h-9.3L11.9 1.036z" fill="#3ECF8E"/>
      </svg>
    ),
  },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "N" },
  { name: "Vercel", icon: "V" },
];

export function TechLogosSection() {
  return (
    <section className="overflow-hidden bg-bsd-bg-alt py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-bsd-text-secondary">
          Tecnologías que utilizamos
        </p>
      </div>
      <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 2,
            background: "linear-gradient(to right, #0D0D12, transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: "80px",
            zIndex: 2,
            background: "linear-gradient(to left, #0D0D12, transparent)",
            pointerEvents: "none",
          }}
        />

        <div
          className="tech-marquee-track"
          style={{ display: "flex", width: "max-content" }}
        >
          {[
            ...technologies,
            ...technologies,
            ...technologies,
            ...technologies,
          ].map((tech, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 24px",
                margin: "0 8px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "50px",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              {tech.icon}
              <span
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.85rem",
                  fontWeight: 500,
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
