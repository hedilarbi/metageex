import React from "react";
import styles from "./FeatureCard.module.css";
const FeatureCard = ({ title, content, ul }) => {
  return (
    <div className={styles.container}>
      <div className={styles.shadowCircle} />
      <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
        {title}
        <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  " />
      </h3>
      <p className="font-inter font-normal text-white text-opacity-60 text-base mt-8 leading-relaxed lg:text-base text-sm">
        {content}
      </p>
      {ul && (
        <ul className="list-disc font-inter font-normal text-white text-opacity-60 lg:text-base text-sm mt-4 ">
          <li>gérez les commandes</li>
          <li>gérez les utilisateurs</li>
          <li>
            gérer le menu (categories, articles , tailles , supplément,offres)
          </li>
          <li>système de point de fidélité</li>
          <li>système de code promo</li>
          <li>communication avec client via sms et notification</li>
        </ul>
      )}
    </div>
  );
};

export default FeatureCard;
