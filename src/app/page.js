import AboutSection from "@/components/homePage/AboutSection";
import ContactSection from "@/components/homePage/ContactSection";
import HeroSection from "@/components/homePage/HeroSection";
import PortfolioSection from "@/components/homePage/PortfolioSection";
import ProductsSection from "@/components/homePage/ProductsSection";
import ServicesSection from "@/components/homePage/ServicesSection";

export default function Home() {
  return (
    <main className=" overflow-hidden w-screen h-full ">
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      {/* <PortfolioSection /> */}
      <AboutSection />
      <ContactSection />
    </main>
  );
}
