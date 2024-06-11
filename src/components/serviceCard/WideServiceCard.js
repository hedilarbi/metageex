import React from "react";

import styles from "./ServiceCard.module.css";
import Image from "next/image";
const WideServiceCard = ({ icon, title, description }) => {
  return (
    <div className={styles.wideContainer}>
      <div>
        <h3 className="font-inter text-white text-2xl font-bold mt-4 ">
          {title}
        </h3>
        <p className="font-inter text-white text-base opacity-65 font-normal mt-2  ">
          {description}
        </p>
      </div>
      <div className="relative w-36 h-36 mx-auto">
        <Image src={icon} alt="icon" className="w-36 h-36 object-contain" />
        <div className={styles.shadowCircle} />
      </div>
    </div>
  );
};

export default WideServiceCard;
