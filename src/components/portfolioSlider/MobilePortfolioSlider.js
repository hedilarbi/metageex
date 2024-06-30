import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import MobileSlider from "./MobileSlider";
import styles from "./portfolioSlider.module.css";
const MobilePortfolioSlider = () => {
  return (
    <div>
      <div className={styles.mobileContainer}>
        <button className="bg-pr text-white p-3 rounded-full -left-3 top-1/2 absolute  -translate-y-1/2">
          <IoChevronBack size={16} />
        </button>

        <button className="bg-pr text-white p-3 rounded-full absolute -right-3 top-1/2 -translate-y-1/2">
          <IoChevronForward size={16} />
        </button>
      </div>
      {/* <div className="w-full lg:mt-24 mt-10 flex justify-center">
        <button className="gradient-stroke-box">
          <p>Voir plus</p>
        </button>
      </div> */}
    </div>
  );
};

export default MobilePortfolioSlider;
