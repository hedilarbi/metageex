import Image from "next/image";
import Link from "next/link";
import React from "react";

import productBg from "../../../public/images/productBg.png";
import productBg2 from "../../../public/images/productBg2.png";
import dashboard from "../../../public/images/dashboard.png";
import digivault from "../../../public/images/digivault.png";

const ProductsSection = () => {
  return (
    <section className="w-full  relative  lg:mt-24 mt-16 ">
      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center leading-tight ">
            Nos Produits
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="lg:flex w-full mt-16 lg:px-24  px-6 justify-between items-center  ">
            <div className="relative">
              <Image
                src={productBg}
                alt="product bg"
                className="object-contain"
              />
              <Image
                src={dashboard}
                alt="product 1"
                className="object-contain absolute left-0 top-10 z-10 rounded-3xl"
              />
            </div>
            <div className="font-inter lg:ml-20   mt-4 lg:mt-0 ">
              <h3 className="font-semibold lg:text-3xl text-xl text-white text-center lg:text-left">
                Solution de restauration
              </h3>
              <p className="font-light lg:text-xl text-sm text-white opacity-60 lg:mt-4 mt-2 text-center lg:text-left">
                Solution complète pour la gestion de restaurants.
              </p>
              <div className="w-full mt-4 flex justify-center">
                <Link
                  href="/produits/solution-restauration"
                  className="gradient-stroke-box"
                >
                  <p>Voir plus</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-10 lg:px-24 px-6 justify-between items-center flex-col-reverse lg:flex-row ">
            <div className="font-inter text-center lg:text-left lg:mt-0 mt-4 ">
              <h3 className="font-semibold lg:text-3xl text-xl text-white ">
                SaaS Archive Digitale
              </h3>
              <p className="font-light lg:text-xl text-sm text-white opacity-60 lg:mt-4 mt-2">
                Solution de gestion d&apos;archives numériques.
              </p>
              <div className="w-full mt-4 flex justify-center">
                <Link
                  href="/produits/solution-archive-numerique"
                  className="gradient-stroke-box"
                >
                  <p>Voir plus</p>
                </Link>
              </div>
            </div>
            <div className="relative lg:ml-20 ">
              <Image
                src={productBg2}
                alt="product bg"
                className="object-contain "
              />
              <Image
                src={digivault}
                alt="product 1"
                className="object-contain absolute left-0 top-10 z-10 rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
