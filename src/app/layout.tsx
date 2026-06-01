import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/components/CartProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BSD Creaciones Digitales | Desarrollo Web Profesional en Chile",
  description:
    "Agencia de desarrollo web en Viña del Mar. Landing Pages, Sitios Corporativos y E-commerce profesionales con WebPay Plus. Entrega rápida y soporte incluido.",
  keywords: [
    "desarrollo web chile",
    "landing page chile",
    "ecommerce chile",
    "sitio corporativo",
    "webpay plus",
    "viña del mar",
    "bsd creaciones digitales",
    "agencia digital chile",
  ],
  authors: [{ name: "BSD Creaciones Digitales" }],
  openGraph: {
    title: "BSD Creaciones Digitales | Desarrollo Web Profesional en Chile",
    description:
      "Diseñamos Landing Pages, Sitios Corporativos y E-commerce que convierten visitantes en clientes reales.",
    type: "website",
    locale: "es_CL",
    siteName: "BSD Creaciones Digitales",
  },
  twitter: {
    card: "summary_large_image",
    title: "BSD Creaciones Digitales | Desarrollo Web Profesional en Chile",
    description:
      "Agencia digital en Viña del Mar especializada en desarrollo web de alto rendimiento.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D0D12",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable} h-full`}>
      <body
        className="min-h-full flex flex-col antialiased"
        style={{ backgroundColor: "#0D0D12" }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
