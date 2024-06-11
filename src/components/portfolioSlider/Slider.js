import React from "react";
import styles from "./portfolioSlider.module.css";
import project1 from "../../../public/images/project1.png";
import Image from "next/image";
const Slider = () => {
  return (
    <div className="flex w-full items-center  px-16">
      <div className={styles.imageContainer}>
        <Image src={project1} alt="project1" className="w-full h-full " />
        <div className={styles.testContainer} />
      </div>
      <div className={styles.activeImageContainer}>
        <Image
          src={project1}
          alt="project1"
          className="w-full h-full object-contain "
        />
        <div className={styles.activeTestContainer} />
      </div>
      <div className={styles.imageContainer}>
        <Image src={project1} alt="project1" className="w-full h-full " />
        <div className={styles.testContainer} />
      </div>
    </div>
  );
};

export default Slider;
