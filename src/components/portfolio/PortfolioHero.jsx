"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";
import { FadeIn } from "../animations/FadeIn";

const heroCopy = {
  en: {
    title: "Our Work",
    description:
      "Web & mobile applications, back-offices, showcase websites and e-commerce. Here’s a selection of shipped projects.",
    cta: "Discuss a project",
  },
  fr: {
    title: "Nos Réalisations",
    description:
      "Applications web & mobiles, backoffices, sites vitrines et e-commerce. Voici une sélection de projets livrés.",
    cta: "Discuter d’un projet",
  },
};

const PortfolioHero = ({ locale = defaultLocale }) => {
  const copy = heroCopy[locale] || heroCopy.en;

  return (
    <section className="w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#050A0F] pt-32 lg:pt-48 pb-20 min-h-[60vh]">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
        {/* Subtle Grid */}
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)"
        }} />
        
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pr/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0994F8]/10 rounded-full blur-[120px]" />
      </div>

      <FadeIn delay={0.2} direction="up" className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto flex-grow text-center">
        <h1 className="text-white font-inter font-bold lg:text-[4.5rem] md:text-6xl text-4xl leading-[1.1] tracking-tight drop-shadow-2xl">
          {copy.title}
        </h1>
        <p className="text-white/60 font-inter font-light lg:text-xl text-base lg:w-4/5 mt-8 leading-relaxed">
          {copy.description}
        </p>
        <div className="mt-12">
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="flex justify-center gap-3 items-center py-4 px-8 rounded-lg text-center bg-pr text-black font-medium transition-all hover:bg-white hover:scale-105 shadow-[0_0_15px_rgba(107,193,255,0.2)] hover:shadow-[0_0_25px_rgba(107,193,255,0.4)]"
          >
            <span>{copy.cta}</span>
            <FaArrowRightLong />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
};

export default PortfolioHero;
