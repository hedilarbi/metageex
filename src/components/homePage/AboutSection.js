import Image from "next/image";
import React from "react";
import hero5 from "@public/images/hero5.svg";
import metageex from "@public/images/metageex3.png";
import { defaultLocale } from "@/lib/i18n";

const aboutCopy = {
  en: {
    title: "About us",
    highlight: "At Metageex",
    body:
      "we believe digital acceleration is the fastest way to unlock growth. Our mission is to ship modern, reliable products that turn bold visions into tangible experiences. From custom web and mobile apps to SaaS platforms, showcase sites and e-commerce, we tailor every project to your business goals.",
  },
  fr: {
    title: "À propos de nous",
    highlight: "Chez Metageex",
    body:
      "nous croyons que la digitalisation est la clé pour propulser les entreprises vers l'avenir. Notre mission est de livrer des solutions modernes et performantes qui transforment les idées en expériences concrètes : applications web et mobiles, SaaS, sites vitrines et e-commerce pensés pour vos objectifs.",
  },
};

const AboutSection = ({ locale = defaultLocale }) => {
  const copy = aboutCopy[locale] || aboutCopy[defaultLocale];

  return (
    <section className="w-full  relative mt-32   ">
      <div className="hero5">
        <Image src={hero5} alt="hero 1" className="object-contain" />
      </div>
      <div className="elipse4" />

      <div className="z-50  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center  leading-tight">
            {copy.title}
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="flex font-inter lg:mt-20 mt-10 lg:px-36 px-6 gap-20">
            <Image
              src={metageex}
              alt="metageex"
              className=" hidden lg:block z-30 w-48 h-48 object-contain"
            />

            <p className="text-white lg:text-xl text-sm leading-10 font-light lg:text-left text-center ">
              <span className="text-pr font-semibold lg:text-2xl text-base ">
                {copy.highlight}
              </span>{" "}
              {copy.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
