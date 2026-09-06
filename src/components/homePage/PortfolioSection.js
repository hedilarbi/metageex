"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";
import { FadeIn } from "../animations/FadeIn";
import portfolioWeb1 from "@public/images/portfolioWeb1.png";

const portfolioCopy = {
  en: {
    title: "Selected work built for real business outcomes.",
    viewCaseStudy: "View Case Study",
    projects: [
      {
        id: "01",
        name: "Lecourteau",
        industry: "E-commerce & Retail",
        services: "Web App, Mobile App, Architecture",
        challenge: "Scale operations and digitize the B2B catalog.",
        outcome: "Increased digital orders by 300% in 1 year.",
        image: portfolioWeb1,
        link: "#", // Add proper link later
      },
      {
        id: "02",
        name: "Hexadone",
        industry: "Data & Enterprise Software",
        services: "Custom Platform, Technical Support",
        challenge: "Build a secure data orchestration platform.",
        outcome: "Delivered scalable infrastructure handling 1M+ daily events.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder
        link: "#",
      }
    ]
  },
  fr: {
    title: "Réalisations conçues pour des résultats concrets.",
    viewCaseStudy: "Voir l'étude de cas",
    projects: [
      {
        id: "01",
        name: "Lecourteau",
        industry: "E-commerce & Retail",
        services: "Web App, Mobile App, Architecture",
        challenge: "Digitaliser le catalogue B2B et scaler les opérations.",
        outcome: "Augmentation des commandes digitales de 300% en 6 mois.",
        image: portfolioWeb1,
        link: "#",
      },
      {
        id: "02",
        name: "Hexadone",
        industry: "Data & Enterprise Software",
        services: "Plateforme Sur-mesure, Support Technique",
        challenge: "Construire une plateforme d'orchestration de données sécurisée.",
        outcome: "Infrastructure évolutive gérant +1M d'événements par jour.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Placeholder
        link: "#",
      }
    ]
  }
};

const PortfolioSection = ({ locale = defaultLocale }) => {
  const copy = portfolioCopy[locale] || portfolioCopy[defaultLocale];

  return (
    <section className="w-full relative py-24 lg:py-32 bg-[#050A0F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up" className="mb-20">
          <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl leading-tight max-w-3xl">
            {copy.title}
          </h2>
        </FadeIn>

        <div className="flex flex-col gap-32">
          {copy.projects.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={project.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}>

                {/* Image Column */}
                <FadeIn direction={isEven ? "right" : "left"} className="w-full lg:w-1/2 relative">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-pr/30 transition-colors duration-500">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-transparent to-transparent opacity-60" />
                  </div>
                  {/* Decorative Number Behind Image */}
                  <div className={`absolute top-[-40px] ${isEven ? 'left-[-20px]' : 'right-[-20px]'} text-[120px] font-bold text-white/5 select-none pointer-events-none z-[-1]`}>
                    {project.id}
                  </div>
                </FadeIn>

                {/* Content Column */}
                <FadeIn direction={isEven ? "left" : "right"} className="w-full lg:w-1/2 flex flex-col justify-center">

                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-3 py-1 text-xs uppercase tracking-widest text-pr border border-pr/20 rounded-full bg-pr/5">
                      {project.industry}
                    </span>
                  </div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-inter group-hover:text-pr transition-colors duration-300">
                    {project.name}
                  </h3>

                  <div className="grid grid-cols-1 gap-6 mb-10">
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Services</p>
                      <p className="text-white/90 font-medium">{project.services}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-white/70 font-light">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Outcome</p>
                      <p className="text-white/90 font-medium">{project.outcome}</p>
                    </div>
                  </div>

                  {/* <Link href={project.link} className="inline-flex items-center gap-3 text-white hover:text-pr transition-colors font-medium text-sm tracking-wide uppercase">
                    <span>{copy.viewCaseStudy}</span>
                    <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
                  </Link> */}
                  <div className="inline-flex items-center gap-3 text-white/50 cursor-not-allowed font-medium text-sm tracking-wide uppercase">
                    <span>Case study coming soon</span>
                  </div>

                </FadeIn>

              </div>
            );
          })}
        </div>

        <div className="mt-24 text-center">
          <Link
            href={getLocalizedRoute(locale, "portfolio")}
            className="inline-flex items-center gap-3 py-4 px-8 rounded-lg text-center border border-white/20 bg-white/5 text-white font-medium transition-all hover:bg-white/10 hover:border-pr/50 hover:text-pr"
          >
            <span>{locale === 'fr' ? 'Voir tout le portfolio' : 'View full portfolio'}</span>
            <FaArrowRightLong />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
