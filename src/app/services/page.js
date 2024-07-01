import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import servicesWebDev from "../../../public/images/servicesWebDev.svg";
import servicesMobileDev from "../../../public/images/servicesMobileDev.svg";
import servicesVitrine from "../../../public/images/servicesVitrine.svg";
import servicesEcommerce from "../../../public/images/servicesEcommerce.svg";
import servicesSaaS from "../../../public/images/servicesSaas.svg";
import Link from "next/link";

const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <section className="w-full lg:h-screen h-[70vh] relative ">
        <div className="top-half-elipse" />

        <div className="absolute z-10 w-full h-full lg:top-32 top-20">
          <div className="serviceHeroContainer">
            <div className="relative ">
              <h1 className="font-inter font-semibold lg:text-6xl text-2xl text-white">
                Services
              </h1>
              <div className="shadowCircle" />
            </div>
            <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-8 lg:mt-12">
              Des solutions digitales sur mesure pour répondre à tous vos
              besoins en développement web, mobile et SaaS
            </p>
            <Link
              href="/contact"
              className="flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-8"
            >
              <p>Contactez Nous</p>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[100vh] xl:h-[80vh] h-[120vh] relative  ">
        <div className="serviceBlueHalfElipse" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
            <div className="lg:w-3/5 w-full">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
                Développement d&apos;applications web
                <div className="mobileTitleUnderLine" />
              </h2>
              <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  hidden lg:block " />

              <p className="text-white opacity-60 font-inter lg:text-xl text-base font-light leading-normal mt-8 text-center lg:text-left">
                Nous créons des applications web sur mesure qui répondent
                précisément aux besoins de votre entreprise. Nos solutions sont
                conçues pour être robustes, évolutives et sécurisées,
                garantissant une expérience utilisateur fluide et performante.
                Que vous ayez besoin d&apos;une plateforme de gestion interne,
                d&apos;un portail client ou d&apos;une application web complexe,
                notre équipe d&apos;experts en développement web utilise les
                dernières technologies et les meilleures pratiques pour vous
                offrir des solutions innovantes et adaptées à vos exigences.
              </p>
            </div>
            <Image
              src={servicesWebDev}
              alt="web dev"
              className="w-40 h-44 lg:flex-1 lg:h-80"
            />
          </div>
        </div>
      </section>
      <section className="w-full lg:h-screen xl:h-[80vh] h-[130vh] relative  ">
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col items-center lg:px-24 w-full px-6 lg:gap-20">
            <Image
              src={servicesMobileDev}
              alt="web dev"
              className="w-40 h-44 lg:flex-1 lg:h-80"
            />
            <div className="lg:w-3/5 w-full">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left">
                Développement d&apos;applications mobiles
                <div className="mobileTitleUnderLine" />
              </h2>
              <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
              <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
                Nous développons des applications mobiles natives et hybrides
                pour iOS et Android qui permettent à votre entreprise de rester
                connectée avec ses clients, où qu&apos;ils soient. Nos
                applications mobiles sont conçues pour offrir une expérience
                utilisateur optimale avec des interfaces intuitives et des
                performances élevées. Que vous ayez besoin d&apos;une
                application de commerce électronique, d&apos;une application de
                service à la demande ou d&apos;une solution mobile
                personnalisée, nous nous engageons à fournir des applications de
                haute qualité qui répondent à vos besoins spécifiques.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-screen xl:h-[80vh] h-[130vh] relative  ">
        <div className="serviceBlueHalfElipse2" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
            <div className="lg:w-3/5 w-full">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
                Sites vitrines
                <div className="mobileTitleUnderLine" />
              </h2>
              <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]  hidden lg:block  " />
              <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
                Nous réalisons des sites vitrines professionnels qui mettent en
                valeur votre entreprise et vos services en ligne. Un site
                vitrine est essentiel pour établir une présence en ligne
                crédible et attirer de nouveaux clients. Nous créons des designs
                élégants et modernes, optimisés pour les moteurs de recherche
                (SEO) et entièrement responsive pour garantir une expérience
                utilisateur parfaite sur tous les appareils. Notre objectif est
                de fournir un site web qui reflète fidèlement l&apos;image de
                votre entreprise et qui vous aide à atteindre vos objectifs
                commerciaux.
              </p>
            </div>
            <Image
              src={servicesVitrine}
              alt="web dev"
              className="w-40 h-44 lg:flex-1 lg:h-80"
            />
          </div>
        </div>
      </section>
      <section className="w-full lg:h-screen xl:h-[80vh] h-[130vh] relative  ">
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col items-center lg:px-24 w-full px-6 lg:gap-20">
            <Image
              src={servicesEcommerce}
              alt="web dev"
              className="w-40 h-44 lg:flex-1 lg:h-80"
            />
            <div className="lg:w-3/5 w-full">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left mt-4 lg:mt-0">
                Sites e-commerce
                <div className="mobileTitleUnderLine" />
              </h2>
              <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
              <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
                Nous développons des sites e-commerce performants et sécurisés
                qui vous permettent de vendre vos produits et services en ligne
                avec efficacité. Nos solutions e-commerce incluent des
                fonctionnalités avancées telles que la gestion des produits, des
                commandes, des paiements en ligne sécurisés, des options de
                livraison et des outils de marketing intégrés. Nous nous
                assurons que votre boutique en ligne offre une expérience
                d&apos;achat fluide et agréable à vos clients, tout en vous
                fournissant les outils nécessaires pour gérer et développer
                votre activité en ligne.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[140vh] xl:h-[80vh] lg:h-screen  relative  ">
        <div className="serviceWhiteElipse" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col-reverse items-center lg:px-24 w-full px-6 lg:gap-20">
            <div className="lg:w-3/5 w-full">
              <h2 className="font-inter text-white font-semibold text-4xl">
                SaaS (Software as a Service)
                <div className="mobileTitleUnderLine" />
              </h2>
              <div className="h-1 w-3/5 mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
              <p className="text-white opacity-60 font-inter lg:text-xl text-base  text-center lg:text-left font-light leading-normal mt-8">
                Nous concevons et développons des solutions SaaS sur mesure qui
                répondent aux besoins spécifiques de votre entreprise. Les
                solutions SaaS que nous créons sont accessibles en ligne et
                peuvent être utilisées par vos clients sans nécessiter
                d&apos;installation complexe. Nos produits SaaS sont conÃ§us
                pour être évolutifs, sécurisés et faciles à utiliser, vous
                permettant de vous concentrer sur la croissance de votre
                entreprise tout en bénéficiant de solutions logicielles
                puissantes et flexibles. Que ce soit pour la gestion
                d&apos;archives digitales, des solutions de restauration ou tout
                autre besoin, nous fournissons des solutions performantes et
                adaptées à votre secteur d&apos;activité.
              </p>
            </div>
            <Image
              src={servicesSaaS}
              alt="web dev"
              className="w-40 h-44 lg:flex-1 lg:h-80"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
