import React from "react";
import styles from "./BenefitCard.module.css";

import Image from "next/image";
const BenefitCard = ({ reverse, icon, title, content }) => {
  return (
    <div className={reverse ? styles.containerReverse : styles.container}>
      <Image src={icon} alt="advantage1" className="w-18" />
      <h3 className="text-pr font-inter font-semibold lg:text-lg text-base text-center mt-4 px-4">
        {title}
      </h3>
      <p className="text-white text-opacity-60 font-inter font-light lg:text-base text-sm text-center mt-4 leading-relaxed">
        {content}
      </p>
    </div>
  );
};

export default BenefitCard;
