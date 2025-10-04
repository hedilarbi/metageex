import React from "react";

import HeroSection from "@/components/restoPage/HeroSection";

import FunctionalitiesSection from "@/components/restoPage/FunctionalitiesSection";
import AdvantagesSection from "@/components/restoPage/AdvantagesSection";
export const metadata = {
  title: "Solution Restauration",
  description: "Solution Restauration metageex",
};
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <HeroSection />
      {/* <VideoSection /> */}
      <FunctionalitiesSection />
      <AdvantagesSection />
    </main>
  );
};

export default page;
