"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocalizedRoute } from "@/lib/localePath";

const servicesCopy = {
  en: {
    title: "What we build. What we improve. What we support.",
    services: [
      {
        num: "01",
        title: "E-commerce Development",
        desc: "High-performance online stores built for scale and speed.",
        outcome: "Increased sales and conversion rates.",
        colSpan: "lg:col-span-2 md:col-span-2",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceEcommerce"
      },
      {
        num: "02",
        title: "Custom Web Platforms",
        desc: "Tailored portals, SaaS, and internal business tools.",
        outcome: "Streamlined operations and efficiency.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceCustomWeb"
      },
      {
        num: "03",
        title: "Mobile Applications",
        desc: "Native-quality apps for iOS and Android.",
        outcome: "Enhanced user engagement and loyalty.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceMobile"
      },
      {
        num: "04",
        title: "Business & Growth Consulting",
        desc: "Strategic guidance to align technology with business goals.",
        outcome: "Clear digital roadmap and ROI.",
        colSpan: "lg:col-span-2 md:col-span-2",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceConsulting"
      },
      {
        num: "05",
        title: "Revenue & Conversion Optimization",
        desc: "Data-driven improvements to maximize value.",
        outcome: "Higher customer lifetime value.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceOptimization"
      },
      {
        num: "06",
        title: "Infrastructure Cost Optimization",
        desc: "Cloud architecture review and optimization.",
        outcome: "Reduced monthly server and hosting costs.",
        colSpan: "lg:col-span-2 md:col-span-1",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceInfrastructure"
      },
      {
        num: "07",
        title: "Ongoing Technical Support",
        desc: "Proactive maintenance, monitoring, and updates.",
        outcome: "Stable, secure, and always-online systems.",
        colSpan: "lg:col-span-1 md:col-span-2",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceSupport"
      },
    ],
  },
  fr: {
    title: "Ce que nous créons. Ce que nous optimisons. Ce que nous maintenons.",
    services: [
      {
        num: "01",
        title: "Développement E-commerce",
        desc: "Des boutiques en ligne ultra-performantes conçues pour la croissance.",
        outcome: "Augmentation des ventes et du taux de conversion.",
        colSpan: "lg:col-span-2 md:col-span-2",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceEcommerce"
      },
      {
        num: "02",
        title: "Plateformes Web Sur-mesure",
        desc: "Portails, SaaS et outils métiers internes personnalisés.",
        outcome: "Opérations rationalisées et gain d'efficacité.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceCustomWeb"
      },
      {
        num: "03",
        title: "Applications Mobiles",
        desc: "Des applications de qualité native pour iOS et Android.",
        outcome: "Engagement et fidélisation accrus des utilisateurs.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceMobile"
      },
      {
        num: "04",
        title: "Conseil en Croissance & Stratégie",
        desc: "Accompagnement stratégique pour aligner technologie et objectifs business.",
        outcome: "Feuille de route digitale claire et ROI maîtrisé.",
        colSpan: "lg:col-span-2 md:col-span-2",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceConsulting"
      },
      {
        num: "05",
        title: "Optimisation de la Conversion",
        desc: "Améliorations basées sur la data pour maximiser la valeur.",
        outcome: "Valeur vie client (LTV) augmentée.",
        colSpan: "lg:col-span-1 md:col-span-1",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceOptimization"
      },
      {
        num: "06",
        title: "Optimisation des Coûts d'Infrastructure",
        desc: "Audit et optimisation de votre architecture cloud.",
        outcome: "Réduction des coûts mensuels d'hébergement.",
        colSpan: "lg:col-span-2 md:col-span-1",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceInfrastructure"
      },
      {
        num: "07",
        title: "Support Technique Continu",
        desc: "Maintenance proactive, monitoring et mises à jour de sécurité.",
        outcome: "Systèmes stables, sécurisés et toujours en ligne.",
        colSpan: "lg:col-span-1 md:col-span-2",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
        slugKey: "serviceSupport"
      },
    ],
  },
};

const ServicesSection = ({ locale = defaultLocale }) => {
  const copy = servicesCopy[locale] || servicesCopy[defaultLocale];

  return (
    <section className="w-full relative py-24 lg:py-32 bg-[#050A0F]">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-start">
        <FadeIn direction="up" className="w-full max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl leading-tight">
            {copy.title}
          </h2>
        </FadeIn>

        {/* Modular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
          {copy.services.map((service, idx) => (
            <FadeIn
              key={service.num}
              delay={0.1 * idx}
              direction="up"
              className={`${service.colSpan} h-full`}
            >
              <Link href={getLocalizedRoute(locale, service.slugKey)} className="block h-full group focus:outline-none">
                <div className="relative h-full flex flex-col justify-between p-8 rounded-2xl bg-[#08101A] border border-white/5 transition-all duration-500 group-hover:border-pr/50 overflow-hidden group-hover:-translate-y-1">
                  
                  {/* Background Image that scales on hover */}
                  <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-40 transition-opacity duration-700 z-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-luminosity"
                    />
                    {/* Overlay gradient to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-[#050A0F]/80 to-[#050A0F]/40" />
                  </div>
                  
                  {/* Background blue glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pr/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none z-0" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-12">
                      <span className="text-white/30 font-inter font-light text-xl group-hover:text-white/60 transition-colors duration-300">
                        {service.num}
                      </span>
                      <FaArrowRightLong className="text-white/20 group-hover:text-pr group-hover:translate-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100" />
                    </div>
                    
                    <div className="mt-auto">
                      <h3 className="text-white font-inter font-medium text-2xl mb-4 group-hover:text-pr transition-colors duration-300">
                        {service.title}
                      </h3>
                      
                      {/* Hidden content revealed on hover via max-height and opacity */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                        <div className="overflow-hidden">
                          <p className="text-white/70 font-inter font-light text-base mb-4 leading-relaxed mt-2 group-hover:text-white transition-colors duration-300">
                            {service.desc}
                          </p>
                          <div className="flex items-start gap-2 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-pr mt-2 flex-shrink-0" />
                            <p className="text-white/80 font-inter text-sm group-hover:text-white transition-colors duration-300">
                              <span className="text-white/50 group-hover:text-white/70 block text-xs uppercase tracking-wider mb-1 transition-colors duration-300">Business Outcome</span>
                              {service.outcome}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
