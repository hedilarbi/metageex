import Image from "next/image";
import React from "react";
import aboutImage from "@public/images/aboutImage.svg";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";

const DescriptionSection = ({ locale = defaultLocale }) => {
  const copy =
    aboutContent.description[locale] || aboutContent.description[defaultLocale];

  return (
    <section className="w-full  relative mt-12 lg:mt-24 ">
      <div className="serviceBlueHalfElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center lg:px-12 w-full px-6  lg:mt-10">
          <Image
            src={aboutImage}
            alt="web dev"
            className="w-60 object-cover lg:w-2/5 "
          />

          <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8 lg:mt-0 text-center lg:text-left">
            {copy.body}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
