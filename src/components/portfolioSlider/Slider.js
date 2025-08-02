import React from "react";
import styles from "./portfolioSlider.module.css";

import Image from "next/image";

const Slider = ({ slides, current }) => {
  return (
    <div className="slider-wrapper">
      <div
        className="slides"
        style={{
          transform:
            current >= 0
              ? `translateX(-${current * 33.33}%)`
              : `translateX(${current * -1 * 33.33}%)`,
        }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className={`slide ${
              current === slides.indexOf(slide) - 1 ? "active" : ""
            }`}
          >
            <Image
              src={slide.image}
              alt="project"
              className="h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
