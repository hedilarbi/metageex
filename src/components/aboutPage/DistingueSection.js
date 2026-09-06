import Image from "next/image";
import React from "react";
import fingerprint from "@public/images/fingerprint.svg";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";
import { Parallax } from "../animations/Parallax";

const DistingueSection = ({ locale = defaultLocale }) => {
  const copy =
    aboutContent.distinction[locale] || aboutContent.distinction[defaultLocale];

  return (
    <section className="w-full  relative   ">
      <FadeIn direction="up" className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center justify-between lg:px-24 w-full px-6 lg:mt-20 gap-12">
          <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left ">
              {copy.title}
              <div className="mobileTitleUnderLine" />
              <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
            </h2>

            <p className="text-white font-inter lg:text-lg text-base font-light leading-loose mt-8 text-center lg:text-left">
              {copy.body}
            </p>
          </div>

          <Parallax offset={40} className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={fingerprint}
              alt="Ce qui nous distingue"
              className="w-80 object-cover lg:w-full max-w-md rounded-2xl shadow-2xl "
            />
          </Parallax>
        </div>
      </FadeIn>
    </section>
  );
};

export default DistingueSection;
