"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import HeroSection from "@/components/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TechLogosSection } from "@/components/sections/TechLogosSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhyBSDSection } from "@/components/sections/WhyBSDSection";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <HeroSection />
        <TechLogosSection />
        <ServicesSection />
        <WhyBSDSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
