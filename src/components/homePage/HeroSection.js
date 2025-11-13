import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import hero1 from "@public/images/hero1.svg";
import { getLocalizedRoute } from "@/lib/localePath";
import { defaultLocale } from "@/lib/i18n";

const heroCopy = {
  en: {
    title: "Turn your ideas into innovative digital products",
    subtitle:
      "Web & mobile apps, showcase websites, e-commerce and SaaS platforms built to accelerate your growth.",
    primaryCta: "Contact us",
    secondaryCta: "Book a call",
  },
  fr: {
    title: "Transformez vos idées en solutions digitales innovantes",
    subtitle:
      "Applications web et mobiles, sites vitrines, e-commerce et SaaS conçus pour propulser votre entreprise.",
    primaryCta: "Contactez-nous",
    secondaryCta: "Planifier un appel",
  },
};

const HeroSection = ({ locale = defaultLocale }) => {
  const copy = heroCopy[locale] || heroCopy[defaultLocale];

  return (
    <section className="w-full h-[70vh] mt-20 md:mt-32 relative ">
      <div className="top-half-elipse"></div>

      <div className="hero1">
        <Image
          src={hero1}
          alt="hero 1"
          className="object-contain"
          priority
          sizes="(min-width:1024px) 900px, 100vw"
        />
      </div>

      <div className=" flex flex-col items-center justify-center  px-6 pt-4 z-10  w-full h-full ">
        <h1 className="text-white font-inter font-semibold lg:text-5xl text-xl w-full text-center lg:w-2/3  leading-tight">
          {copy.title}
        </h1>
        <p className="text-white opacity-60 font-inter font-light lg:text-2xl text-sm text-center lg:w-2/3 mt-8 leading-loose ">
          {copy.subtitle}
        </p>

        <div className="mt-8 flex space-x-5 text-xs lg:text-base">
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="flex justify-center lg:gap-5  gap-2   items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
          >
            <p>{copy.primaryCta}</p>
            <FaArrowRightLong />
          </Link>
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="gradient-stroke-box"
          >
            <p>{copy.secondaryCta}</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
