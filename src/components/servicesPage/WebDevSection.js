import Image from "next/image";
import React from "react";
import servicesWebDev from "@public/images/servicesWebDev.svg";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { servicesPageContent } from "@/content/services";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const WebDevSection = ({ locale = defaultLocale }) => {
  const section = servicesPageContent.sections.web;
  const copy = section[locale] || section.en;
  const href = getLocalizedRoute(locale, section.routeKey || "servicesWeb");

  return (
    <section className="w-full  relative mt-12 lg:mt-24 ">
      <div className="serviceBlueHalfElipse" />
      <div className=" z-20 w-full h-full flex flex-col items-center">
        <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
          <div className="lg:w-3/5 w-full">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
              {copy.title}
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  hidden lg:block " />

            <p className="text-white opacity-60 font-inter lg:text-xl text-base font-light leading-normal mt-8 text-center lg:text-left">
              {copy.body}
            </p>
            <Link
              href={href}
              className="inline-flex items-center gap-5 lg:py-4 py-2 px-6 rounded-lg bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-8"
            >
              <p>{copy.linkLabel}</p>
              <FaArrowRightLong />
            </Link>
          </div>
          <Image
            src={servicesWebDev}
            alt="web dev"
            className="w-40 h-44 lg:flex-1 lg:h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default WebDevSection;
