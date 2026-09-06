"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocalizedRoute } from "@/lib/localePath";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";

const introCopy = {
  en: {
    heading: "More than development. A partner for your growth.",
    paragraph: "At Auxis Digital, we don't just write code. We bridge the gap between your business strategy and digital execution. We build robust e-commerce platforms, scalable web applications, and optimize your technical infrastructure to ensure sustainable, long-term growth.",
    highlight: "We build systems that generate measurable value and scale with your ambition.",
    link: "Discover Auxis Digital"
  },
  fr: {
    heading: "Plus que du développement. Un partenaire pour votre croissance.",
    paragraph: "Chez Auxis Digital, nous ne nous contentons pas d'écrire du code. Nous faisons le lien entre votre stratégie d'entreprise et l'exécution digitale. Nous concevons des plateformes e-commerce robustes, des applications web évolutives et optimisons votre infrastructure technique pour assurer une croissance durable à long terme.",
    highlight: "Nous construisons des systèmes qui génèrent une valeur mesurable et évoluent avec votre ambition.",
    link: "Découvrir Auxis Digital"
  }
};

const IntroImage = () => (
  <div className="relative w-full aspect-square md:aspect-[4/5] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 group">
    <Image 
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop"
      alt="Auxis Digital Consulting"
      fill
      className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#050A0F] via-transparent to-pr/20 opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#050A0F] via-[#050A0F]/20 to-transparent opacity-80" />
  </div>
);

const IntroductionSection = ({ locale = defaultLocale }) => {
  const copy = introCopy[locale] || introCopy[defaultLocale];

  return (
    <section className="w-full py-24 lg:py-32 bg-[#050A0F] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="right" className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold font-inter text-white leading-tight">
              {copy.heading}
            </h2>
            
            <div className="mt-8 space-y-6 text-white/70 font-light text-lg leading-relaxed">
              <p>{copy.paragraph}</p>
            </div>
            
            <div className="mt-8 p-6 rounded-xl border-l-2 border-pr bg-pr/5 backdrop-blur-sm">
              <p className="text-white text-lg font-medium leading-snug">
                &quot;{copy.highlight}&quot;
              </p>
            </div>

            <div className="mt-10">
              <Link
                href={getLocalizedRoute(locale, "about")}
                className="inline-flex items-center gap-3 text-pr hover:text-white transition-colors font-medium text-sm tracking-wide uppercase group"
              >
                <span>{copy.link}</span>
                <FaArrowRightLong className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="h-full flex items-center">
            <IntroImage />
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
