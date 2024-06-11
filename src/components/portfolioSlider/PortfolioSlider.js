import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import Slider from "./Slider";
const PortfolioSlider = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full">
        <button className="bg-pr text-white p-3 rounded-full">
          <IoChevronBack size={20} />
        </button>

        <Slider />
        <button className="bg-pr text-white p-3 rounded-full">
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
