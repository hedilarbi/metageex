"use client";

import React, { useState } from "react";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const testimonials = {
  en: [
    {
      id: 1,
      quote: "Our collaboration with Auxis Digital on large-scale e-commerce projects and marketplace dashboards has been exceptional. They designed robust solutions for a mega e-commerce group managing 7 different sites, including complex Prestashop development. We continue to partner with them to this day for their reliable technical expertise.",
      name: "R. Dedenis",
      company: "Zdigital",
      project: "E-commerce & Marketplace"
    },
    {
      id: 2,
      quote: "Auxis Digital significantly improved the UX of our limousine service website. They seamlessly integrated a highly efficient booking mechanism and a comprehensive reservation funnel with accurate cost estimation. Our online booking process is now smoother than ever.",
      name: "O. Romdhani",
      company: "Westmount Limousine",
      project: "UX & Booking System"
    },
    {
      id: 3,
      quote: "They built our entire online ticketing system from scratch, implementing custom mechanisms to manage the complete booking funnel and cinema workflow. We are extremely satisfied with their work and have highly recommended them to other cultural centers.",
      name: "D. Felhi",
      company: "Majestic",
      project: "Ticketing & Workflow"
    },
    {
      id: 4,
      quote: "Auxis Digital developed our complete digital ecosystem: web app, mobile app, backoffice, and dashboard. They also provided invaluable digital strategy consulting, implementing smart offers, loyalty points, and subscriptions. I strongly recommend them to any business looking for a top-tier tech partner.",
      name: "M. L'oranger",
      company: "Business Owner, Quebec",
      project: "Full Digital Platform"
    }
  ],
  fr: [
    {
      id: 1,
      quote: "Notre collaboration avec Auxis Digital sur de gros projets e-commerce et des tableaux de bord marketplace a été exceptionnelle. Ils ont conçu des solutions robustes pour un groupe gérant 7 sites e-commerce, incluant des développements complexes sur Prestashop. Notre partenariat technique se poursuit encore aujourd'hui.",
      name: "R. Dedenis",
      company: "Zdigital",
      project: "E-commerce & Marketplace"
    },
    {
      id: 2,
      quote: "Auxis Digital a grandement amélioré l'UX de notre site web de limousine. Ils ont intégré un mécanisme de réservation très efficace et un tunnel d'achat complet avec estimation des coûts. Notre processus de réservation n'a jamais été aussi fluide.",
      name: "O. Romdhani",
      company: "Westmount Limousine",
      project: "UX & Système de réservation"
    },
    {
      id: 3,
      quote: "Ils ont mis en place notre billetterie en ligne de A à Z, avec des mécanismes sur-mesure pour gérer l'intégralité du tunnel de vente et le workflow de notre cinéma. Nous sommes très satisfaits de leur expertise et les recommandons fortement à d'autres centres culturels.",
      name: "D. Felhi",
      company: "Majestic",
      project: "Billetterie & Workflow"
    },
    {
      id: 4,
      quote: "Auxis Digital a développé toute notre plateforme numérique : application web, app mobile, backoffice et dashboard. Ils nous ont également accompagnés en stratégie digitale (smart offers, fidélité, abonnements). Je les recommande vivement à d'autres entreprises au Québec.",
      name: "M. L'oranger",
      company: "Entrepreneur (Québec)",
      project: "Plateforme Digitale Complète"
    }
  ]
};

const TestimonialSection = ({ locale = defaultLocale }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = testimonials[locale] || testimonials[defaultLocale];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  const current = data[currentIndex];

  return (
    <section className="w-full relative py-24 lg:py-32 bg-[#050A0F]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <FadeIn direction="up">
          <div className="relative">
            {/* Large quotation mark */}
            <div className="absolute -top-12 -left-8 text-8xl font-serif text-white/5 pointer-events-none select-none">
              "
            </div>
            
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl font-inter font-light text-white leading-relaxed mb-12 min-h-[160px] md:min-h-[120px]">
                {current.quote}
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-white/10 pt-8">
                <div>
                  <h4 className="text-white font-medium text-lg mb-1">{current.name}</h4>
                  <p className="text-white/50 text-sm">{current.company} <span className="mx-2">•</span> <span className="text-pr">{current.project}</span></p>
                </div>
                
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none"
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button 
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all focus:outline-none"
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialSection;
