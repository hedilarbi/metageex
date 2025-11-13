import Image from "next/image";
import Link from "next/link";
import React from "react";

import productBg from "@public/images/productBg.png";
import productBg2 from "@public/images/productBg2.png";
import dashboard from "@public/images/dashboard.png";
import digivault from "@public/images/digivault.png";
import { defaultLocale } from "@/lib/i18n";
import { getLocalizedRoute } from "@/lib/localePath";

const content = {
  en: {
    title: "Our products",
    products: [
      {
        title: "Restaurant suite",
        description: "Complete solution to orchestrate restaurant operations.",
        route: "productRestaurant",
        imageBg: productBg,
        foreground: dashboard,
        reverse: false,
      },
      {
        title: "Digital archive SaaS",
        description: "Secure platform to manage and share digital archives.",
        route: "productArchive",
        imageBg: productBg2,
        foreground: digivault,
        reverse: true,
      },
    ],
  },
  fr: {
    title: "Nos produits",
    products: [
      {
        title: "Solution de restauration",
        description: "Solution complète pour la gestion de restaurants.",
        route: "productRestaurant",
        imageBg: productBg,
        foreground: dashboard,
        reverse: false,
      },
      {
        title: "SaaS archive digitale",
        description: "Solution de gestion d'archives numériques sécurisée.",
        route: "productArchive",
        imageBg: productBg2,
        foreground: digivault,
        reverse: true,
      },
    ],
  },
};

const ProductsSection = ({ locale = defaultLocale }) => {
  const copy = content[locale] || content[defaultLocale];

  return (
    <section className="w-full  relative  lg:mt-24 mt-16 ">
      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center leading-tight ">
            {copy.title}
            <div className="mobileTitleUnderLine" />
          </h2>
          {copy.products.map((product, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={product.title}
                className={`flex w-full mt-16 lg:px-24 px-6 justify-between items-center ${
                  isReversed ? "flex-col-reverse lg:flex-row" : "lg:flex-row flex-col"
                }`}
              >
                <div
                  className={`font-inter ${
                    isReversed
                      ? "text-center lg:text-left lg:mt-0 mt-4"
                      : "lg:ml-20 mt-4 lg:mt-0 text-center lg:text-left"
                  }`}
                >
                  <h3 className="font-semibold lg:text-3xl text-xl text-white ">
                    {product.title}
                  </h3>
                  <p className="font-light lg:text-xl text-sm text-white opacity-60 lg:mt-4 mt-2">
                    {product.description}
                  </p>
                  <div className="w-full mt-4 flex justify-center lg:justify-start">
                    <Link
                      href={getLocalizedRoute(locale, product.route)}
                      className="gradient-stroke-box"
                    >
                      <p>{locale === "fr" ? "Voir plus" : "Learn more"}</p>
                    </Link>
                  </div>
                </div>

                <div className={`relative ${isReversed ? "lg:ml-20" : ""}`}>
                  <Image
                    src={product.imageBg}
                    alt="product background"
                    className="object-contain"
                  />
                  <Image
                    src={product.foreground}
                    alt={product.title}
                    className="object-contain absolute left-0 top-10 z-10 rounded-3xl"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
