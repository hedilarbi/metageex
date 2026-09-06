import React from "react";
import Image from "next/image";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";
import { aboutContent } from "@/content/about";
import { FadeIn } from "@/components/animations/FadeIn";
import { Parallax } from "@/components/animations/Parallax";
import FinalCtaSection from "@/components/homePage/FinalCtaSection";

// Images
import aboutImage from "@public/images/aboutImage.svg";
import fingerprint from "@public/images/fingerprint.svg";
import value1 from "@public/images/value1.svg";
import value2 from "@public/images/value2.svg";
import value3 from "@public/images/value3.svg";
import value4 from "@public/images/value4.svg";

const iconMap = [value1, value2, value3, value4];

const aboutMetadata = {
  en: {
    title: "About Auxis Digital — Team & philosophy",
    description:
      "Our mission, culture and methodology to build tailored web, mobile and SaaS products.",
  },
  fr: {
    title: "À propos de Auxis Digital — Équipe & philosophie",
    description:
      "Notre mission, notre culture et notre méthodologie pour concevoir des solutions web, mobiles et SaaS sur mesure.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = aboutMetadata[locale] || aboutMetadata.en;
  const canonical = getLocalizedRoute(locale, "about");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("about"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image.png"],
    },
  };
}

export default function AboutPage({ params }) {
  const locale = params?.locale || defaultLocale;
  const copy = {
    hero: aboutContent.hero[locale] || aboutContent.hero[defaultLocale],
    description: aboutContent.description[locale] || aboutContent.description[defaultLocale],
    values: aboutContent.values[locale] || aboutContent.values[defaultLocale],
    distinction: aboutContent.distinction[locale] || aboutContent.distinction[defaultLocale],
    proposition: aboutContent.proposition[locale] || aboutContent.proposition[defaultLocale],
  };

  return (
    <main className="min-h-screen bg-[#050A0F] pt-20 overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)"
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pr/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-[#0994F8]/10 rounded-full blur-[150px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 border-b border-white/5">
        <FadeIn direction="up">
          <h1 className="font-inter font-bold lg:text-[4.5rem] md:text-6xl text-4xl text-white tracking-tight drop-shadow-2xl">
            {copy.hero.title}
          </h1>
          <div className="w-24 h-1 bg-pr mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(107,193,255,0.8)]" />
        </FadeIn>
      </section>

      {/* Description Section */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex lg:flex-row flex-col items-center gap-16">
          <Parallax offset={40} className="w-full lg:w-1/2">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(107,193,255,0.1)]">
              <div className="absolute inset-0 bg-pr/20 mix-blend-overlay z-10" />
              <Image src={aboutImage} alt="About us" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </Parallax>
          <div className="w-full lg:w-1/2">
            <FadeIn direction="up">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-pr mb-4">Notre Mission</h2>
              <p className="text-white/70 font-light lg:text-lg text-base leading-relaxed">
                {copy.description.body}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-20 w-full bg-[#08101A] border-y border-white/5 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <FadeIn direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                {copy.values.title}
              </h2>
            </FadeIn>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {copy.values.cards.map((card, idx) => (
              <FadeIn key={idx} delay={0.1 * idx} direction="up" className="h-full">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center backdrop-blur-sm transition-all hover:-translate-y-2 hover:border-pr/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(107,193,255,0.1)]">
                  <div className="w-16 h-16 rounded-2xl bg-pr/10 flex items-center justify-center mb-6">
                    <Image src={iconMap[idx]} alt={card.title} className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed flex-grow">
                    {card.content}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Distinction Section */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 py-24">
        <div className="flex lg:flex-row flex-col-reverse items-center gap-16">
          <div className="w-full lg:w-1/2">
            <FadeIn direction="up">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                {copy.distinction.title}
              </h2>
              <p className="text-white/70 font-light lg:text-lg text-base leading-relaxed">
                {copy.distinction.body}
              </p>
            </FadeIn>
          </div>
          <Parallax offset={40} className="w-full lg:w-1/2">
            <div className="relative rounded-3xl p-1 bg-gradient-to-br from-pr via-pr-dark-opaque to-[#050A0F]">
              <div className="bg-[#050A0F] rounded-[22px] overflow-hidden p-8 flex items-center justify-center">
                <Image src={fingerprint} alt="What makes us different" className="w-full max-w-sm opacity-80" />
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Proposition Section */}
      <section className="relative z-20 w-full max-w-4xl mx-auto px-6 py-24 text-center">
        <FadeIn direction="up">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-pr mb-6">
            {copy.proposition.title}
          </h2>
          <div className="space-y-6">
            {copy.proposition.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="text-white/80 font-light lg:text-xl text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Final CTA */}
      <FinalCtaSection locale={locale} />
    </main>
  );
}
