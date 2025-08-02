"use client";
import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "./Slider";
import westmount from "../../../public/images/westmount.png";
import digivault from "../../../public/images/digivault.png";
import restau1 from "../../../public/images/restau1.png";
import syrma from "../../../public/images/syrma.png";
import wanderwave from "../../../public/images/wanderwave.png";
const slides = [
  { id: 1, image: westmount },
  { id: 2, image: digivault },
  { id: 3, image: restau1 },
  { id: 4, image: syrma },
  { id: 5, image: wanderwave },
];

const PortfolioSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 2 ? prev : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === -1 ? prev : prev - 1));
  };
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <button
          className="bg-pr text-white p-3 rounded-full"
          onClick={prevSlide}
        >
          <IoChevronBack size={20} />
        </button>

        <Slider slides={slides} current={current} />
        <button
          className="bg-pr text-white p-3 rounded-full"
          onClick={nextSlide}
        >
          <IoChevronForward size={20} />
        </button>
      </div>
      <div className="w-full mt-24 flex justify-center">
        <button className="gradient-stroke-box">
          <p>Voir plus</p>
        </button>
      </div>
    </div>
  );
};

export default PortfolioSlider;
