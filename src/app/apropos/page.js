import React from "react";
import HeroSection from "@/components/aboutPage/HeroSection";
import DescriptionSection from "@/components/aboutPage/DescriptionSection";
import ValuesSection from "@/components/aboutPage/ValuesSection";
import DistingueSection from "@/components/aboutPage/DistingueSection";
import PropositionSection from "@/components/aboutPage/PropositionSection";
export const metadata = {
  title: "A propos ",
  description: "a propos de nous metageex",
};
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <HeroSection />
      <DescriptionSection />
      <ValuesSection />
      <DistingueSection />
      <PropositionSection />
    </main>
  );
};

export default page;
