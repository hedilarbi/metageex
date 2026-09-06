"use client";

import React from "react";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";

const expertiseCopy = {
  en: {
    title: "We understand both the system and the business behind it.",
    capabilities: [
      "Product & Platform Architecture",
      "E-commerce Operations",
      "Customer Journeys",
      "Revenue Strategy",
      "Data & Reporting",
      "Performance & Infrastructure",
      "Continuous Improvement"
    ]
  },
  fr: {
    title: "Nous comprenons le système et le business qui le sous-tend.",
    capabilities: [
      "Architecture Produit & Plateforme",
      "Opérations E-commerce",
      "Parcours Clients",
      "Stratégie de Revenus",
      "Données & Reporting",
      "Performance & Infrastructure",
      "Amélioration Continue"
    ]
  }
};

const ExpertiseSection = ({ locale = defaultLocale }) => {
  const copy = expertiseCopy[locale] || expertiseCopy[defaultLocale];

  return (
    <section className="w-full relative py-24 lg:py-32 bg-[#050A0F] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #6BC1FF 1px, transparent 1px), linear-gradient(to bottom, #6BC1FF 1px, transparent 1px)",
        backgroundSize: "100px 100px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 20%, transparent 100%)"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up" className="mb-16 text-center max-w-4xl mx-auto">
          <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl leading-tight">
            {copy.title}
          </h2>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 mt-16">
          {copy.capabilities.map((cap, idx) => (
            <FadeIn key={idx} delay={0.05 * idx} direction="up">
              <div className="group relative flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-pr/50 hover:bg-white/10 cursor-default">
                {/* Connecting node dot */}
                <div className="w-2 h-2 rounded-full bg-pr/40 group-hover:bg-pr group-hover:shadow-[0_0_10px_#6BC1FF] transition-all duration-300" />
                <span className="text-white/80 font-medium font-inter text-sm lg:text-base group-hover:text-white transition-colors duration-300">
                  {cap}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
