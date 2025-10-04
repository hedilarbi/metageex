import HeroSection from "@/components/servicePage/HeroSection";
import Portfolio from "@/components/servicePage/portfolio/Portfolio";
import Technologies from "@/components/servicePage/technologies/Technologies";
import Techs from "@/components/servicePage/techs/Techs";
import WebAppServicesSection from "@/components/servicePage/WebAppServicesSection";
import React from "react";

const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden pb-20">
      <HeroSection
        title="Développement d'Applications Web"
        description="Transformez vos idées en applications web modernes, scalables et
            sécurisées. Notre expertise technique et notre approche agile
            garantissent des solutions sur mesure qui propulsent votre business."
      />
      <WebAppServicesSection />
      <Technologies />
      <Techs />
      <Portfolio />
    </main>
  );
};

export default page;
