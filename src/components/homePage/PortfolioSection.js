import Image from "next/image";
import React from "react";
import PortfolioSlider from "../portfolioSlider/PortfolioSlider";
import MobilePortfolioSlider from "../portfolioSlider/MobilePortfolioSlider";
import hero3 from "../../../public/images/hero3.svg";
import hero4 from "../../../public/images/hero4.svg";
const PortfolioSection = () => {
  return (
    <section className="w-full  relative mt-32 ">
      <div className="elipse3" />
      <div className="hero3">
        <Image src={hero3} alt="hero 1" className="object-contain" />
      </div>
      <div className="hero4">
        <Image src={hero4} alt="hero 1" className="object-contain" />
      </div>
      <div className="half-elipse-white" />
      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center px-64 leading-tight">
            Porfolio
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="mt-52 w-full px-24 hidden lg:block ">
            <PortfolioSlider />
          </div>

          <div className="lg:hidden mt-32 px-6 w-full">
            <MobilePortfolioSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
