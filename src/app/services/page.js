import EcommerceSection from "@/components/servicesPage/EcommerceSection";
import HeroSection from "@/components/servicesPage/HeroSection";
import MobileDevSection from "@/components/servicesPage/MobileDevSection";
import SaasSection from "@/components/servicesPage/SaasSection";
import StaticSection from "@/components/servicesPage/StaticSection";
import WebDevSection from "@/components/servicesPage/WebDevSection";

export const metadata = {
  title: "Services ",
  description: "developpement web, mobile et SaaS metageex",
};
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <HeroSection />
      <WebDevSection />
      <MobileDevSection />
      <StaticSection />
      <EcommerceSection />
      <SaasSection />
    </main>
  );
};

export default page;
