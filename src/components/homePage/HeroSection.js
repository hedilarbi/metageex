import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import hero1 from "../../../public/images/hero1.svg";
const HeroSection = () => {
  return (
    <section className="w-full h-screen relative ">
      <div className="top-half-elipse"></div>

      <div className="hero1">
        <Image src={hero1} alt="hero 1" className="object-contain" />
      </div>

      <div className=" flex flex-col items-center justify-center  px-6 pt-4 z-10  w-full h-full ">
        <h1 className="text-white font-inter font-semibold lg:text-5xl text-xl w-full text-center lg:w-2/3  leading-tight">
          Transformez Vos Idées En Solutions Digitales Innovantes
        </h1>
        <p className="text-white opacity-60 font-inter font-light lg:text-2xl text-base text-center lg:w-2/3 mt-8 leading-loose ">
          Des applications web et mobiles, des sites vitrines, des sites
          e-commerce et des solutions SaaS conçus pour propulser votre
          entreprise vers l&apos;avenir
        </p>

        <div className="mt-8 flex space-x-5 text-xs lg:text-base">
          <Link
            href="/contact"
            className="flex justify-center lg:gap-5  gap-2   items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
          >
            <p>Contactez Nous</p>
            <FaArrowRightLong />
          </Link>
          <Link href="/contact" className="gradient-stroke-box">
            <p>Planifier une demo</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
