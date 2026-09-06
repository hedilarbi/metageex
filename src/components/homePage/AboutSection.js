import Image from "next/image";
import React from "react";
import hero5 from "@public/images/hero5.svg";
import auxisdigital from "@public/images/symbol.png";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { Parallax } from "../animations/Parallax";
import { FaEye, FaTools, FaHandshake } from "react-icons/fa";

const aboutCopy = {
  en: {
    title: "About us",
    highlight: "At Auxis Digital,",
    intro: "we are more than just a development agency. We are your technical partner dedicated to business growth.",
    blocks: [
      {
        icon: <FaEye className="w-6 h-6 text-pr" />,
        title: "Our Vision",
        text: "To bridge the gap between complex engineering and measurable business results for ambitious brands worldwide.",
      },
      {
        icon: <FaTools className="w-6 h-6 text-pr" />,
        title: "Our Expertise",
        text: "We specialize in scalable e-commerce architectures, custom SaaS platforms, and high-performance mobile applications.",
      },
      {
        icon: <FaHandshake className="w-6 h-6 text-pr" />,
        title: "Why Choose Us",
        text: "We combine technology, consulting, and ongoing support to increase your revenue while optimizing infrastructure costs.",
      },
    ],
  },
  fr: {
    title: "À propos de nous",
    highlight: "Chez Auxis Digital,",
    intro: "nous sommes plus qu'une agence de développement. Nous sommes votre partenaire technique dédié à la croissance.",
    blocks: [
      {
        icon: <FaEye className="w-6 h-6 text-pr" />,
        title: "Notre Vision",
        text: "Faire le pont entre l'ingénierie complexe et des résultats concrets pour les marques ambitieuses à travers le monde.",
      },
      {
        icon: <FaTools className="w-6 h-6 text-pr" />,
        title: "Notre Expertise",
        text: "Nous sommes spécialisés dans les architectures e-commerce évolutives, les plateformes SaaS sur-mesure et les applications mobiles.",
      },
      {
        icon: <FaHandshake className="w-6 h-6 text-pr" />,
        title: "Pourquoi Nous Choisir",
        text: "Nous allions technologie, conseil et accompagnement continu pour augmenter vos revenus tout en optimisant vos coûts.",
      },
    ],
  },
};

const AboutSection = ({ locale = defaultLocale }) => {
  const copy = aboutCopy[locale] || aboutCopy[defaultLocale];

  return (
    <section className="w-full relative py-32 bg-[#050914] overflow-hidden border-t border-white/5">
      <Parallax offset={80} className="absolute inset-0 pointer-events-none opacity-20 flex justify-center items-center">
        <Image src={hero5} alt="background pattern" className="object-cover w-full h-full mix-blend-lighten" />
      </Parallax>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pr/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="w-full flex flex-col items-center">
          <FadeIn direction="up">
            <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl text-center leading-tight">
              {copy.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pr to-transparent mx-auto rounded-full mt-6 mb-16" />
          </FadeIn>

          <FadeIn delay={0.2} direction="up" className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full mb-16">
            <div className="relative group shrink-0 lg:w-1/3 flex justify-center">
              <div className="absolute inset-0 bg-pr filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full" />
              <Image
                src={auxisdigital}
                alt="Auxis Digital Symbol"
                className="relative z-10 w-48 h-48 lg:w-64 lg:h-64 object-contain drop-shadow-[0_0_30px_rgba(107,193,255,0.4)]"
              />
            </div>

            <div className="lg:w-2/3">
              <p className="text-white/80 lg:text-3xl text-xl leading-relaxed font-light text-center lg:text-left mb-12">
                <span className="text-pr font-bold block mb-2">
                  {copy.highlight}
                </span>
                {copy.intro}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {copy.blocks.map((block, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 bg-[#0B1320] rounded-xl flex items-center justify-center mb-4 border border-white/5">
                      {block.icon}
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{block.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{block.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
