import React from "react";
import ValueCard from "../valueCard/ValueCard";
import value1 from "@public/images/value1.svg";
import value2 from "@public/images/value2.svg";
import value3 from "@public/images/value3.svg";
import value4 from "@public/images/value4.svg";
import { aboutContent } from "@/content/about";
import { defaultLocale } from "@/lib/i18n";

const iconMap = [value1, value2, value3, value4];

const ValuesSection = ({ locale = defaultLocale }) => {
  const copy = aboutContent.values[locale] || aboutContent.values[defaultLocale];

  return (
    <section className="w-full lg:mt-48 mt-14 relative ">
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className="w-full h-full flex flex-col items-center pb-20 lg:px-20 px-10">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <div className=" flex w-full gap-10 lg:gap-6 lg:flex-row flex-col  flex-1  lg:justify-between lg:mt-20 mt-10">
            {copy.cards.map((card, index) => (
              <ValueCard
                key={card.title}
                icon={iconMap[index]}
                title={card.title}
                content={card.content}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
