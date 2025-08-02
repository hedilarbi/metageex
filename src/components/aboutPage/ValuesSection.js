import React from "react";
import ValueCard from "../valueCard/ValueCard";
import value1 from "../../../public/images/value1.svg";
import value2 from "../../../public/images/value2.svg";
import value3 from "../../../public/images/value3.svg";
import value4 from "../../../public/images/value4.svg";
const ValuesSection = () => {
  return (
    <section className="w-full lg:mt-48 mt-14 relative ">
      <div className=" z-20 w-full h-full flex flex-col items-center  ">
        <div className="w-full h-full flex flex-col items-center pb-20 lg:px-20 px-10">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
            Nos Valeurs Fondamentales
            <div className="titleUnderline" />
          </h2>
          <div className=" flex w-full gap-10 lg:gap-6 lg:flex-row flex-col  flex-1  lg:justify-between lg:mt-20 mt-10">
            <ValueCard
              icon={value1}
              title="Innovation"
              content="Nous croyons en l'importance de l'innovation continue pour rester à la pointe de la technologie et fournir des solutions de pointe"
            />
            <ValueCard
              reverse={true}
              icon={value2}
              title="Qualité"
              content="La qualité est au cœur de notre travail. Nous nous engageons à fournir des produits et services qui répondent aux standards les plus élevés."
            />
            <ValueCard
              icon={value3}
              title="Excellence"
              content="Nous visons l'excellence dans chaque projet, cherchant constamment à dépasser les attentes de nos clients."
            />
            <ValueCard
              reverse={true}
              icon={value4}
              title="Intégrité"
              content="Nous agissons avec honnêteté et transparence, établissant des relations de confiance avec nos clients et partenaires"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
