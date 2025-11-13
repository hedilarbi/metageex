import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { servicesPageContent } from "@/content/services";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const HeroSection = ({ locale = defaultLocale }) => {
  const copy = servicesPageContent.hero[locale] || servicesPageContent.hero.en;

  return (
    <section className="w-full lg:h-[70vh] h-[50vh] relative mt-20 lg:mt-32 ">
      <div className="top-half-elipse" />

      <div className=" flex flex-col items-center lg:justify-center mt-14   z-10  w-full h-full ">
        <div className="serviceHeroContainer">
          <div className="relative ">
            <h1 className="font-inter font-semibold md:text-4xl text-xl text-white">
              {copy.title}
            </h1>
            <div className="shadowCircle" />
          </div>
          <p className="lg:w-2/3 text-white font-inter lg:text-xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-8 lg:mt-12">
            {copy.description}
          </p>
          <Link
            href={getLocalizedRoute(locale, "contact")}
            className="z-30 flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-8"
          >
            <p>{copy.cta}</p>
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
