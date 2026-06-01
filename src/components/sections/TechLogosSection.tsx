"use client";

const technologies = [
  { name: "Next.js", icon: "▲" },
  { name: "React", icon: "⚛" },
  { name: "WordPress", icon: "W" },
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
        <div className="flex animate-scroll-x gap-12 whitespace-nowrap">
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
