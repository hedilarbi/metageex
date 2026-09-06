"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";
import { FadeIn } from "../animations/FadeIn";

const ctaCopy = {
  en: {
    heading: "Build the next stage of your growth.",
    subheading: "Tell us about your objectives, challenges, and digital ambitions. We'll help you define the right direction and build the systems to move forward.",
    button: "Start a Conversation"
  },
  fr: {
    heading: "Construisez la prochaine étape de votre croissance.",
    subheading: "Parlez-nous de vos objectifs, de vos défis et de vos ambitions digitales. Nous vous aiderons à définir la bonne direction et à construire les systèmes pour avancer.",
    button: "Démarrer une conversation"
  }
};

const FinalCtaSection = ({ locale = defaultLocale }) => {
  const copy = ctaCopy[locale] || ctaCopy[defaultLocale];

  return (
    <section className="w-full relative py-32 lg:py-48 bg-[#050A0F] overflow-hidden border-t border-white/5">
      
      {/* Subtle blue glow and layered parallax elements */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] bg-pr/20 rounded-full blur-[150px] opacity-70" />
        <div className="absolute w-[300px] h-[300px] bg-[#0994F8]/30 rounded-full blur-[100px] opacity-80" />
        
        {/* Parallax elements simulation (CSS based for simplicity and performance) */}
        <div className="absolute top-10 left-10 w-32 h-32 border border-pr/10 rounded-full" />
        <div className="absolute bottom-20 right-20 w-64 h-64 border border-pr/5 rounded-full" />
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-pr/5 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        <FadeIn direction="up">
          <h2 className="text-white font-inter font-bold lg:text-6xl text-4xl leading-tight mb-8">
            {copy.heading}
          </h2>
          <p className="text-white/70 font-inter font-light text-lg lg:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            {copy.subheading}
          </p>
          
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="inline-flex items-center gap-3 py-4 px-10 rounded-lg text-center bg-pr text-black font-medium transition-all hover:bg-white hover:scale-105 shadow-[0_0_30px_rgba(107,193,255,0.3)] hover:shadow-[0_0_40px_rgba(107,193,255,0.5)]"
          >
            <span>{copy.button}</span>
            <FaArrowRightLong />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default FinalCtaSection;
