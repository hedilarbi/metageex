import React from "react";
import { defaultLocale } from "@/lib/i18n";

const statsContent = {
  en: {
    title: "Impact in numbers",
    subtitle:
      "We partner with founders and teams across industries to ship reliable digital products.",
    stats: [
      { value: "20+", label: "Projects delivered" },
      { value: "30%", label: "Average faster delivery vs. previous vendor" },
      { value: "3 continents", label: "Clients in Europe, Africa & NA" },
    ],
  },
  fr: {
    title: "Quelques chiffres",
    subtitle:
      "Nous accompagnons des équipes dans plusieurs secteurs pour livrer des produits digitaux fiables.",
    stats: [
      { value: "20+", label: "Projets livrés" },
      { value: "30%", label: "Livraison plus rapide qu'avant notre arrivée" },
      {
        value: "3 continents",
        label: "Clients en Europe, Afrique & Am. Nord ",
      },
    ],
  },
};

const StatsSection = ({ locale = defaultLocale }) => {
  const copy = statsContent[locale] || statsContent[defaultLocale];

  return (
    <section className="w-full relative mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16 rounded-3xl border border-white/10 bg-gradient-to-r from-[#0F1B2C] via-[#101828] to-[#0B1320]">
        <div className="text-center">
          <h2 className="text-white font-inter font-semibold lg:text-4xl text-2xl">
            {copy.title}
          </h2>
          <p className="text-white/70 mt-4 lg:text-xl text-base">
            {copy.subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 text-center">
          {copy.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/5 py-8 px-6"
            >
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="text-white/70 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
