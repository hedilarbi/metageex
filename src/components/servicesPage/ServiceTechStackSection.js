"use client";

import React from "react";
import { FadeIn } from "../animations/FadeIn";

const ServiceTechStackSection = ({ data }) => {
  return (
    <section className="w-full py-24 bg-[#050A0F] border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-pr/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 text-center">
        <FadeIn direction="up">
          <h3 className="text-white/60 font-inter font-medium text-sm tracking-widest uppercase mb-10">
            Powered by modern technologies
          </h3>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} className="flex flex-wrap justify-center gap-4 md:gap-6">
          {data.techStack.map((tech, idx) => (
            <div 
              key={idx}
              className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-pr/50 hover:bg-pr/10 transition-all duration-300 cursor-default"
            >
              <span className="text-white font-inter font-medium tracking-wide">
                {tech}
              </span>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
};

export default ServiceTechStackSection;
