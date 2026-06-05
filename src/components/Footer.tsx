import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const serviceLinks = [
  { href: "#servicios", label: "Landing Page" },
  { href: "#servicios", label: "Sitio Corporativo" },
  { href: "#servicios", label: "E-commerce" },
];

const companyLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/creacionesdigitalesbsd",
    icon: InstagramIcon,
    label: "Instagram",
  },
  {
    href: "https://mail.google.com/mail/?view=cm&to=creacionesdigitalesbsd@gmail.com",
    icon: GmailIcon,
    label: "Gmail",
  },
  {
    href: "https://wa.me/56982452185?text=Hola%20BSD%20Creaciones%20Digitales%20%F0%9F%91%8B%20Estoy%20interesado%2Fa%20en%20sus%20servicios%20de%20desarrollo%20web%20y%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n.",
    icon: WhatsAppIcon,
    label: "WhatsApp",
  },
];

export function Footer() {
  return (
    <footer className="bg-bsd-bg-footer">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="#inicio" className="inline-block">
              <span className="font-heading text-2xl font-extrabold gradient-text">
                BSD
              </span>
              <p className="text-[10px] tracking-[0.2em] text-bsd-primary">
                CREACIONES DIGITALES
              </p>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bsd-text-secondary">
              Agencia de desarrollo web en Viña del Mar. Transformamos ideas en
              experiencias digitales que venden.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Servicios
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bsd-text-secondary transition-colors hover:text-bsd-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-bsd-text-secondary transition-colors hover:text-bsd-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm text-bsd-text-secondary">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=creacionesdigitalesbsd@gmail.com"
                  target="_blank"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  creacionesdigitalesbsd@gmail.com
                </a>
              </li>
              <li>Viña del Mar, Chile</li>
              <li>Lun-Vie 9:00-18:00</li>
            </ul>
          </div>
        </div>

        <div
          className="my-10 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, #00E5FF, #6B21FF, transparent)",
          }}
        />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-xs text-bsd-text-secondary sm:text-left">
            © 2025 BSD Creaciones Digitales — Viña del Mar, Chile · Todos los
            derechos reservados
          </p>
          <div className="flex items-center" style={{ gap: "20px" }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{ color: "rgba(255,255,255,0.5)", transition: "all 0.2s" }}
                  className="hover:text-white"
                >
                  <Icon />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
