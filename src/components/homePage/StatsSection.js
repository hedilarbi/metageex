"use client";

import React, { useRef, useState, useEffect } from "react";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { useInView } from "framer-motion";

const statsCopy = {
  en: {
    title: "Technology measured by business impact.",
    stats: [
      { id: "projects", value: 150, suffix: "+", label: "Projects delivered", isMonetary: false },
      { id: "revenue", value: 45, suffix: "%", label: "Avg. revenue growth generated", isMonetary: false },
      { id: "costs", value: 30, suffix: "%", label: "Infrastructure costs optimized", isMonetary: false },
      { id: "partnerships", value: 95, suffix: "%", label: "Long-term client retention", isMonetary: false },
    ],
  },
  fr: {
    title: "La technologie mesurée par l'impact business.",
    stats: [
      { id: "projects", value: 150, suffix: "+", label: "Projets livrés", isMonetary: false },
      { id: "revenue", value: 45, suffix: "%", label: "Croissance moyenne générée", isMonetary: false },
      { id: "costs", value: 30, suffix: "%", label: "Coûts d'infrastructure optimisés", isMonetary: false },
      { id: "partnerships", value: 95, suffix: "%", label: "Fidélisation client à long terme", isMonetary: false },
    ],
  },
};

const AnimatedNumber = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-white font-inter font-bold text-5xl md:text-6xl tracking-tight">
      {count}{suffix}
    </span>
  );
};

const StatsSection = ({ locale = defaultLocale }) => {
  const copy = statsCopy[locale] || statsCopy[defaultLocale];

  return (
    <section className="w-full relative py-20 lg:py-24 bg-[#050A0F] border-y border-white/5">
      <div className="absolute inset-0 bg-pr/5 mix-blend-overlay pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <FadeIn direction="right" className="lg:w-1/3">
            <h2 className="text-white font-inter font-bold text-3xl md:text-4xl leading-tight">
              {copy.title}
            </h2>
            <div className="w-16 h-1 bg-pr mt-6 rounded-full" />
          </FadeIn>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full">
            {copy.stats.map((stat, idx) => (
              <FadeIn key={stat.id} delay={0.1 * idx} direction="up" className="flex flex-col items-start lg:items-center text-left lg:text-center">
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                <span className="text-pr font-inter text-sm md:text-base font-medium mt-3">
                  {stat.label}
                </span>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default StatsSection;
