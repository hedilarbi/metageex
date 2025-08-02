import React from "react";

import Image from "next/image";
const MobileSlider = ({ slides, current }) => {
  return (
    <div className="mobile-slider-wrapper">
      <div
        className="mobile-slides"
        style={{
          transform:
            current >= 0
              ? `translateX(-${current * 100}%)`
              : `translateX(${current * -1 * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={`mobile-slide `}>
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

export default MobileSlider;
