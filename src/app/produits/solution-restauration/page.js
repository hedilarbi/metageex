import FeatureCard from "@/components/featureCard/FeatureCard";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

import BenefitCard from "@/components/benefitCard/BenefitCard";

import Link from "next/link";
import HeroSection from "@/components/restoPage/HeroSection";
import VideoSection from "@/components/restoPage/VideoSection";
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
