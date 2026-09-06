"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";

const ServiceHeroSection = ({ data }) => {
  return (
    <section className="w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#050A0F] pt-32 lg:pt-48 pb-20 min-h-[60vh]">
      {/* Abstract Background for Service Pages */}
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
        
        {/* Minimalist Tech Circles */}
        <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute opacity-30" preserveAspectRatio="xMidYMid slice">
          <circle cx="600" cy="400" r="250" fill="none" stroke="rgba(107, 193, 255, 0.1)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="600" cy="400" r="200" fill="none" stroke="rgba(107, 193, 255, 0.2)" strokeWidth="1" />
        </svg>
      </div>

      <FadeIn delay={0.2} direction="up" className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto flex-grow text-center">
        <h1 className="text-white font-inter font-bold lg:text-[4rem] md:text-5xl text-4xl leading-[1.1] tracking-tight drop-shadow-2xl">
          {data.hero.title}
        </h1>
        <h2 className="text-pr font-inter font-medium lg:text-2xl text-xl mt-6">
          {data.hero.subtitle}
        </h2>
        <p className="text-white/60 font-inter font-light lg:text-lg text-base lg:w-4/5 mt-6 leading-relaxed">
          {data.hero.description}
        </p>
      </FadeIn>
    </section>
  );
};

export default ServiceHeroSection;
