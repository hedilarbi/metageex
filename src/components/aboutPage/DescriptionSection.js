import Image from "next/image";
import React from "react";
import aboutImage from "@public/images/aboutImage.svg";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { Parallax } from "../animations/Parallax";

const DescriptionSection = ({ locale = defaultLocale }) => {
  const copy =
    aboutContent.description[locale] || aboutContent.description[defaultLocale];

  return (
    <section className="w-full  relative mt-12 lg:mt-24 ">
      <div className="serviceBlueHalfElipse" />
      <FadeIn direction="up" className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center justify-between lg:px-24 w-full px-6 lg:mt-10 gap-12">
          <Parallax offset={40} className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={aboutImage}
              alt="About image"
              className="w-80 object-cover lg:w-full max-w-md rounded-2xl shadow-2xl"
            />
          </Parallax>

          <div className="w-full lg:w-1/2 text-white font-inter lg:text-lg text-base font-light leading-loose mt-8 lg:mt-0 text-center lg:text-left">
            <h2 className="text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pr to-pr-light">Notre Mission</h2>
            {copy.body}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default DescriptionSection;
