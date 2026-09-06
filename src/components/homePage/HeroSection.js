"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocalizedRoute } from "@/lib/localePath";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";

const heroCopy = {
  en: {
    title: "Technology that turns ambition into measurable growth.",
    subtitle:
      "Auxis Digital combines development, consulting, and ongoing support to help businesses increase revenue while optimizing technical and infrastructure costs.",
    primaryCta: "Discuss Your Project",
    secondaryCta: "Explore Our Services",
    strip: ["E-commerce", "Digital Platforms", "Business Systems", "Revenue Growth"],
    label: "Technology · Strategy · Growth · Support"
  },
  fr: {
    title: "La technologie qui transforme l'ambition en croissance mesurable.",
    subtitle:
      "Auxis Digital allie développement, conseil et accompagnement continu pour aider les entreprises à accroître leurs revenus tout en optimisant leurs coûts techniques et d'infrastructure.",
    primaryCta: "Discuter de votre projet",
    secondaryCta: "Explorer nos services",
    strip: ["E-commerce", "Plateformes Digitales", "Systèmes Métiers", "Croissance des Revenus"],
    label: "Technologie · Stratégie · Croissance · Support"
  },
};

const AbstractVisual = () => (
  <div className="absolute inset-0 z-0 flex items-center justify-center opacity-60 pointer-events-none overflow-hidden">
    
    <style>
      {`
        .spin-slow {
          transform-origin: 600px 400px;
          animation: spin-slow 40s linear infinite;
        }
        .spin-reverse {
          transform-origin: 600px 400px;
          animation: spin-reverse 30s linear infinite;
        }
        .pulse {
          animation: pulse-glow 4s ease-in-out infinite;
        }
        .flow {
          stroke-dasharray: 6 12;
          animation: dash-flow 1s linear infinite;
        }
        .float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow { 100% { transform: rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: rotate(-360deg); } }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; filter: drop-shadow(0 0 8px rgba(107, 193, 255, 0.8)); }
          50% { opacity: 0.5; filter: drop-shadow(0 0 2px rgba(107, 193, 255, 0.2)); }
        }
        @keyframes dash-flow {
          to { stroke-dashoffset: -18; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}
    </style>

    {/* Abstract Grid and Lines */}
    <div className="absolute inset-0" style={{
      backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
      maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)",
      WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 100%)"
    }} />
    
    <svg width="100%" height="100%" viewBox="0 0 1200 800" className="absolute" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6BC1FF" stopOpacity="1" />
          <stop offset="100%" stopColor="#0994F8" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="15" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Compass Outer Rings */}
      <circle className="spin-slow" cx="600" cy="400" r="180" fill="none" stroke="rgba(107, 193, 255, 0.15)" strokeWidth="1" strokeDasharray="4 12" />
      <circle className="spin-reverse" cx="600" cy="400" r="160" fill="none" stroke="rgba(107, 193, 255, 0.2)" strokeWidth="1" strokeDasharray="20 40" />
      <circle cx="600" cy="400" r="120" fill="none" stroke="rgba(107, 193, 255, 0.05)" strokeWidth="1" />
      
      {/* Compass Cardinal Points */}
      <g stroke="rgba(107, 193, 255, 0.5)" strokeWidth="2" className="pulse">
        <line x1="600" y1="210" x2="600" y2="230" />
        <line x1="600" y1="570" x2="600" y2="590" />
        <line x1="410" y1="400" x2="430" y2="400" />
        <line x1="770" y1="400" x2="790" y2="400" />
      </g>

      <g className="float">
        {/* Stylized Robot/Tech Core inside Compass */}
        <g fill="none" stroke="url(#blueGlow)" strokeWidth="1.5" className="pulse">
          {/* Hexagonal Head/Core shape */}
          <path d="M 540,430 L 540,370 L 600,330 L 660,370 L 660,430 L 600,470 Z" />
          {/* Inner circuit/eyes */}
          <circle cx="570" cy="390" r="6" fill="rgba(107, 193, 255, 0.8)" filter="url(#glow)" />
          <circle cx="630" cy="390" r="6" fill="rgba(107, 193, 255, 0.8)" filter="url(#glow)" />
          {/* Mouth/Data Port */}
          <line x1="585" y1="425" x2="615" y2="425" />
          <line x1="590" y1="435" x2="610" y2="435" strokeWidth="1" />
        </g>
        
        {/* Arrow Up breaking out of the Compass */}
        <g stroke="#6BC1FF" strokeWidth="3" fill="none" filter="url(#glow)">
          {/* Main Shaft extending from the robot core */}
          <path d="M 600,330 L 600,120" />
          {/* Arrow Heads */}
          <path d="M 560,180 L 600,100 L 640,180" strokeWidth="4" />
          <path d="M 575,210 L 600,155 L 625,210" opacity="0.6" strokeWidth="2" />
          <path d="M 585,230 L 600,195 L 615,230" opacity="0.3" strokeWidth="2" />
        </g>
      </g>
      
      {/* Connecting Circuit Lines (Digital Growth/Energy Flow) */}
      <g stroke="url(#blueGlow)" strokeWidth="1.5" opacity="0.8" fill="none" className="flow">
        <path d="M 600,590 L 600,660 L 750,660" />
        <path d="M 430,400 L 320,400 L 320,280" />
        <path d="M 790,400 L 880,400 L 880,520" />
        <path d="M 540,370 L 460,320" />
        <path d="M 660,370 L 740,320" />
      </g>
      
      {/* Data Nodes */}
      <g fill="#6BC1FF" filter="url(#glow)" className="pulse">
        <circle cx="750" cy="660" r="4" />
        <circle cx="320" cy="280" r="4" />
        <circle cx="880" cy="520" r="4" />
        <circle cx="460" cy="320" r="4" />
        <circle cx="740" cy="320" r="4" />
        <circle cx="600" cy="100" r="4" />
      </g>
    </svg>
    
    {/* Blue Ambient Lights */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pr/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0994F8]/10 rounded-full blur-[120px]" />
    <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-64 h-64 bg-pr/15 rounded-full blur-[100px]" />
  </div>
);

const HeroSection = ({ locale = defaultLocale }) => {
  const copy = heroCopy[locale] || heroCopy[defaultLocale];

  return (
    <section className="w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#050A0F] pt-32 lg:pt-48 pb-20 min-h-[90vh]">
      <AbstractVisual />

      <FadeIn delay={0.2} direction="up" className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-5xl mx-auto flex-grow mt-12">
        


        <h1 className="text-white font-inter font-bold lg:text-[4.5rem] md:text-6xl text-4xl text-center leading-[1.1] tracking-tight drop-shadow-2xl">
          {copy.title}
        </h1>
        <p className="text-white/60 font-inter font-light lg:text-xl text-base text-center lg:w-3/4 mt-8 leading-relaxed">
          {copy.subtitle}
        </p>

        <div className="mt-12 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 text-sm lg:text-base w-full sm:w-auto">
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="flex justify-center gap-3 items-center py-4 px-8 rounded-lg text-center bg-pr text-black font-medium transition-all hover:bg-white hover:scale-105"
          >
            <p>{copy.primaryCta}</p>
            <FaArrowRightLong />
          </Link>
          <Link
            href={getLocalizedRoute(locale, "services")}
            className="flex justify-center gap-3 items-center py-4 px-8 rounded-lg text-center border border-white/10 bg-white/5 backdrop-blur-md text-white font-medium transition-all hover:bg-white/10 hover:border-white/20 hover:scale-105"
          >
            <p>{copy.secondaryCta}</p>
          </Link>
        </div>
      </FadeIn>

      {/* Trust and Credibility Strip */}
      <FadeIn delay={0.6} direction="up" className="relative z-10 w-full max-w-6xl mx-auto mt-24 border-t border-white/5 pt-8">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 px-6 text-sm font-medium text-white/40 uppercase tracking-widest">
          {copy.strip.map((item, index) => (
            <div key={index} className="flex items-center gap-x-12">
              <span>{item}</span>
              {index < copy.strip.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-pr/40 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default HeroSection;
