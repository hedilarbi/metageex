import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import Image from "next/image";
import hero2 from "@public/images/hero2.svg";
import webDev from "@public/images/app-development1.svg";
import mobileDev from "@public/images/app-development2.svg";
import vitrine from "@public/images/app-development3.svg";
import { defaultLocale } from "@/lib/i18n";

const servicesCopy = {
  en: {
    title: "Our services",
    cards: [
      {
        icon: webDev,
        title: "Web app development",
        description: "Custom web platforms, portals and internal tools.",
      },
      {
        icon: mobileDev,
        title: "Mobile app development",
        description: "Native-quality apps for iOS, Android and tablets.",
      },
      {
        icon: vitrine,
        title: "Showcase websites",
        description: "Brand websites, corporate sites and landing pages.",
      },
    ],
  },
  fr: {
    title: "Nos services",
    cards: [
      {
        icon: webDev,
        title: "Développement d'applications web",
        description: "Applications web, portails clients et outils internes.",
      },
      {
        icon: mobileDev,
        title: "Développement d'applications mobiles",
        description: "Applications iOS, Android et tablettes.",
      },
      {
        icon: vitrine,
        title: "Sites vitrines",
        description: "Sites de marque, corporate et landing pages sur-mesure.",
      },
    ],
  },
};

const ServicesSection = ({ locale = defaultLocale }) => {
  const copy = servicesCopy[locale] || servicesCopy[defaultLocale];

  return (
    <section className="w-full  relative lg:mt-16">
      <div className="hero2">
        <Image src={hero2} alt="hero 2" className="object-contain" />
      </div>
      <div className="full-elipse" />
      <div className="z-20  w-screen  h-full ">
        <div className="w-full flex flex-col items-center h-full mt-4 z-30  ">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-center text-xl leading-tight">
            {copy.title}
            <div className="mobileTitleUnderLine" />
          </h2>
          <div className="flex flex-col lg:flex-row w-full lg:mt-24 mt-16 lg:px-24 px-6 justify-between gap-10   ">
            {copy.cards.map((card) => (
              <ServiceCard
                key={card.title}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
            {/* <div className="lg:hidden">
              <ServiceCard
                icon={ecommerceDev}
                title="Sites e-commerce"
                description="Développement de boutiques en ligne performantes et sécurisées."
              />
            </div>
            <div className="lg:hidden">
              <ServiceCard
                icon={saasDev}
                title="SaaS (Software as a Service)"
                description="Développement de solutions SaaS adaptées à vos besoins d'affaires."
              />
            </div> */}
          </div>
          {/* <div className=" lg:flex  w-full lg:mt-8 mt-10 px-6 lg:px-24 justify-between gap-10 hidden ">
            <WideServiceCard
              icon={ecommerceDev}
              title="Sites e-commerce"
              description="Développement de boutiques en ligne performantes et sécurisées."
            />
            <WideServiceCard
              icon={saasDev}
              title="SaaS (Software as a Service)"
              description="Développement de solutions SaaS adaptées à vos besoins d'affaires."
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
