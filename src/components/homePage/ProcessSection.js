"use client";

import React, { useRef } from "react";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { useScroll, useTransform, motion } from "framer-motion";

const processCopy = {
  en: {
    title: "A clear path from challenge to growth.",
    steps: [
      {
        id: "01",
        title: "Understand",
        desc: "Analyze the business, objectives, customers, and existing systems.",
      },
      {
        id: "02",
        title: "Strategize",
        desc: "Identify priorities, opportunities, and the right digital direction.",
      },
      {
        id: "03",
        title: "Build",
        desc: "Develop reliable, scalable, high-performance solutions.",
      },
      {
        id: "04",
        title: "Optimize",
        desc: "Improve revenue, conversion, speed, efficiency, and costs.",
      },
      {
        id: "05",
        title: "Support",
        desc: "Maintain, monitor, and evolve the system over time.",
      },
    ],
  },
  fr: {
    title: "Un chemin clair, du défi à la croissance.",
    steps: [
      {
        id: "01",
        title: "Comprendre",
        desc: "Analyser l'entreprise, les objectifs, les clients et les systèmes existants.",
      },
      {
        id: "02",
        title: "Stratégie",
        desc: "Identifier les priorités, les opportunités et la bonne direction numérique.",
      },
      {
        id: "03",
        title: "Construire",
        desc: "Développer des solutions fiables, évolutives et performantes.",
      },
      {
        id: "04",
        title: "Optimiser",
        desc: "Améliorer les revenus, la conversion, la vitesse, l'efficacité et les coûts.",
      },
      {
        id: "05",
        title: "Support",
        desc: "Maintenir, surveiller et faire évoluer le système au fil du temps.",
      },
    ],
  },
};

const StepContent = ({ step, idx, scrollYProgress, isMobile }) => {
  // We want the entire animation to finish when scrollYProgress is 0.8
  const maxProgress = 0.8;
  const threshold = (idx / 4) * maxProgress;
  const start = Math.max(0, threshold - 0.1);
  const end = threshold;
  
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(255, 255, 255, 0.2)", "#6BC1FF"]
  );
  const textShadow = useTransform(
    scrollYProgress,
    [start, end],
    ["0px 0px 0px rgba(107, 193, 255, 0)", "0px 0px 20px rgba(107, 193, 255, 0.6)"]
  );
  
  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    [0, 1]
  );
  
  const borderColor = useTransform(
    scrollYProgress,
    [start, end],
    ["rgba(255, 255, 255, 0.2)", "#6BC1FF"]
  );

  return (
    <div className={`relative ${isMobile ? "pl-8" : "flex flex-col items-center text-center"}`}>
      
      {/* Node (dot) */}
      <motion.div 
        style={{ borderColor }}
        className={`w-4 h-4 rounded-full bg-[#050A0F] border-2 relative z-10 ${isMobile ? "absolute left-[-23px] top-1" : "mb-8"}`}
      >
        <motion.div style={{ opacity }} className="absolute inset-[2px] rounded-full bg-pr shadow-[0_0_10px_#6BC1FF]" />
      </motion.div>
      
      {/* Number */}
      <motion.div 
        style={{ color, textShadow }}
        className={`font-inter font-bold ${isMobile ? "text-4xl mb-2" : "text-6xl mb-8"}`}
      >
        {step.id}
      </motion.div>

      {/* Title & Desc */}
      <h3 className="text-white font-inter font-semibold text-xl mb-3">
        {step.title}
      </h3>
      <p className={`text-white/60 font-inter font-light text-sm leading-relaxed ${!isMobile && "px-4"}`}>
        {step.desc}
      </p>
    </div>
  );
};

const ProcessSection = ({ locale = defaultLocale }) => {
  const copy = processCopy[locale] || processCopy[defaultLocale];
  const containerRef = useRef(null);
  
  // Adjusted offset so it finishes slightly earlier when scrolling past
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 80%"]
  });

  // Calculate the progress of the line (finishes at 80% of the defined scroll area to fix the bug)
  const lineProgress = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section className="w-full relative py-24 lg:py-32 bg-[#050A0F] overflow-hidden" ref={containerRef}>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        <FadeIn direction="up" className="w-full max-w-3xl mb-16 lg:mb-24 mx-auto text-center">
          <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl leading-tight">
            {copy.title}
          </h2>
        </FadeIn>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative pt-12 pb-24">
          {/* Background Line */}
          <div className="absolute top-[88px] left-0 right-0 h-px bg-white/10" />
          
          {/* Animated Blue Line */}
          <motion.div 
            className="absolute top-[88px] left-0 h-px bg-pr shadow-[0_0_15px_#6BC1FF]" 
            style={{ width: lineProgress }}
          />
          
          <div className="grid grid-cols-5 gap-8">
            {copy.steps.map((step, idx) => (
              <StepContent 
                key={step.id} 
                step={step} 
                idx={idx} 
                scrollYProgress={scrollYProgress} 
                isMobile={false} 
              />
            ))}
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="lg:hidden relative py-12 pl-8">
          {/* Background Line */}
          <div className="absolute top-12 bottom-12 left-[15px] w-px bg-white/10" />
          
          {/* Animated Blue Line */}
          <motion.div 
            className="absolute top-12 left-[15px] w-px bg-pr shadow-[0_0_15px_#6BC1FF]" 
            style={{ height: lineProgress }}
          />

          <div className="flex flex-col gap-12">
            {copy.steps.map((step, idx) => (
              <StepContent 
                key={step.id} 
                step={step} 
                idx={idx} 
                scrollYProgress={scrollYProgress} 
                isMobile={true} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
