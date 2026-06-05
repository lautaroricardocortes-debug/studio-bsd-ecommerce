import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "landing-page-profesional",
    name: "Landing Page Profesional",
    slug: "landing-page-profesional",
    shortDescription:
      "Presencia digital impactante para captar clientes desde el primer clic.",
    longDescription:
      "Landing page profesional diseñada para convertir visitantes en clientes con diseño responsivo, hosting incluido y entrega rápida.",
    features: [
      "Diseño web responsivo y adaptable",
      "Hosting y dominio GRATIS por 1 año",
      "Estructura web optimizada",
      "Integración de redes sociales",
      "Correo corporativo incluido (1 cuenta)",
      "Entrega en 7 días hábiles",
      "Soporte post-lanzamiento 30 días",
    ],
    price: 70000,
    priceLabel: "Desde $70.000 CLP",
    deliveryTime: "7 días hábiles",
    badge: "IDEAL PARA EMPEZAR",
    category: "landing",
    icon: "Globe",
    popular: false,
  },
  {
    id: "sitio-corporativo",
    name: "Sitio Corporativo",
    slug: "sitio-corporativo",
    shortDescription:
      "Sitio web corporativo premium con panel de administración y SEO optimizado.",
    longDescription:
      "Sitio corporativo completo con diseño premium, panel de administración, analytics y correos corporativos incluidos.",
    features: [
      "SEO amigable y optimizado",
      "Formulario de contacto avanzado",
      "Velocidad de carga optimizada",
      "Correos corporativos",
      "Diseño premium personalizado",
      "Soporte post-lanzamiento 30 días",
      "Entrega en 15 días hábiles",
      "Hosting y dominio GRATIS por 1 año",
      "Integración de redes sociales",
    ],
    price: 120000,
    priceLabel: "Desde $120.000 CLP",
    deliveryTime: "15 días hábiles",
    badge: "MÁS POPULAR",
    category: "corporativo",
    icon: "Building2",
    popular: true,
  },
  {
    id: "ecommerce-profesional",
    name: "E-commerce Profesional",
    slug: "ecommerce-profesional",
    shortDescription:
      "Tienda online completa con WebPay Plus, inventario y panel de administración.",
    longDescription:
      "E-commerce profesional con integración WebPay Plus, gestión de productos e inventario, y diseño premium responsive.",
    features: [
      "Integración de productos",
      "Gestión de imagen, categoría, etiqueta y atributo",
      "WebPay Plus integrado (pago seguro)",
      "Integración de redes sociales",
      "Control de inventario",
      "Diseño premium responsive",
      "Hosting y dominio GRATIS por 1 año",
      "Entrega en 21 días hábiles",
      "Correos corporativos",
      "Soporte post-lanzamiento 30 días",
    ],
    price: 300000,
    priceLabel: "Desde $300.000 CLP",
    deliveryTime: "21 días hábiles",
    badge: "SOLUCIÓN COMPLETA",
    category: "ecommerce",
    icon: "ShoppingBag",
    popular: false,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}
