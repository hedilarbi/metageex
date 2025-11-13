import React from "react";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";

const PropositionSection = ({ locale = defaultLocale }) => {
  const copy =
    aboutContent.proposition[locale] || aboutContent.proposition[defaultLocale];

  return (
    <section className="w-full relative mb-40 ">
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className=" lg:px-20 w-full px-6  lg:mt-20">
          <div className="text-center">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center inline-block  ">
              {copy.title}
              <div className="titleUnderline" />
            </h2>
          </div>

          {copy.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropositionSection;
