"use client";

const technologies = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.9 1.036c-.015-.986-1.26-1.41-1.874-.637L.764 12.05C.111 12.888.697 14.1 1.75 14.1h9.3l.149 8.864c.015.986 1.26 1.41 1.874.637l9.262-11.652c.653-.838.067-2.05-.986-2.05h-9.3L11.9 1.036z" fill="#3ECF8E"/>
      </svg>
    ),
  },
  { name: "WooCommerce", icon: "🛒" },
  { name: "WebPay", icon: "💳" },
  { name: "Tailwind CSS", icon: "🎨" },
];

export function TechLogosSection() {
  const items = [...technologies, ...technologies];

  return (
    <section className="overflow-hidden bg-bsd-bg-alt py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-bsd-text-secondary">
          Tecnologías que utilizamos
        </p>
      </div>
      <div className="relative">
        <div className="tech-track flex animate-scroll-x gap-12 whitespace-nowrap">
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex shrink-0 items-center gap-3 rounded-full border border-bsd-border bg-bsd-card/50 px-6 py-3"
            >
              <span className="text-lg text-bsd-text-secondary/60">
                {tech.icon}
              </span>
              <span className="text-sm font-medium text-bsd-text-secondary">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
