import Image from "next/image";
import React from "react";
import contactHero from "@public/images/contactHero.svg";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";

const HeroSection = ({ locale = defaultLocale }) => {
  const copy = aboutContent.hero[locale] || aboutContent.hero[defaultLocale];

  return (
    <section className="w-full lg:h-[70vh] h-[50vh] relative mt-20 lg:mt-32 ">
      <div className="top-half-elipse" />

      <div className=" z-10 w-full h-full ">
        <div className="contactHero">
          <Image src={contactHero} alt="contactHero" />
        </div>
        <div className="serviceHeroContainer">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="font-inter font-semibold md:text-4xl text-white inline-block text-xl">
              {copy.title}
              <div className="titleUnderline" />
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
