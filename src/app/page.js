import { FaArrowRightLong } from "react-icons/fa6";
import hero1 from "../../public/images/hero1.svg";
import hero2 from "../../public/images/hero2.svg";
import hero3 from "../../public/images/hero3.svg";
import hero4 from "../../public/images/hero4.svg";
import hero5 from "../../public/images/hero5.svg";
import metageex from "../../public/images/metagex3.png";
import Image from "next/image";
import ServiceCard from "@/components/serviceCard/ServiceCard";
import webDev from "../../public/images/app-development1.svg";
import mobileDev from "../../public/images/app-development2.svg";
import vitrine from "../../public/images/app-development3.svg";
import WideServiceCard from "@/components/serviceCard/WideServiceCard";
import productBg from "../../public/images/productBg.png";
import productBg2 from "../../public/images/productBg2.png";
import product1 from "../../public/images/product1.png";
import PortfolioSlider from "@/components/portfolioSlider/PortfolioSlider";

export default function Home() {
  return (
    <main className=" w-full h-full relative">
      <section className="w-full h-screen relative ">
        <div className="top-half-elipse"></div>
        <div className="full-elipse" />
        <div className="hero1">
          <Image src={hero1} alt="hero 1" className="object-contain" />
        </div>
        <div className="z-10 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center justify-center h-full mt-4">
            <h1 className="text-white font-inter font-semibold text-6xl text-center px-64 leading-tight">
              Transformez Vos Idées En Solutions Digitales Innovantes
            </h1>
            <p className="text-white opacity-60 font-inter font-light text-2xl text-center px-60 mt-4 leading-loose ">
              Des applications web et mobiles, des sites vitrines, des sites
              e-commerce et des solutions SaaS conçus pour propulser votre
              entreprise vers l&apos;avenir
            </p>

            <div className="mt-8 flex space-x-5">
              <button className="flex justify-center gap-5 items-center py-3 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white">
                <p>Contactez Nous</p>
                <FaArrowRightLong />
              </button>
              <button className="gradient-stroke-box">
                <p>Planifier une demo</p>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[130vh] relative mt-16">
        <div className="hero2">
          <Image src={hero2} alt="hero 2" className="object-contain" />
        </div>
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold text-5xl text-center px-64 leading-tight">
              Nos Services
            </h2>
            <div className="flex w-full mt-24 px-24 justify-between gap-10 ">
              <ServiceCard
                icon={webDev}
                title="Développement d'applications web"
                description="Conception et développement d'applications web sur mesure."
              />
              <ServiceCard
                icon={mobileDev}
                title="Développement d'applications mobiles"
                description="Création d'applications mobiles pour iOS et Android."
              />
              <ServiceCard
                icon={vitrine}
                title="Sites vitrines"
                description="Réalisation de sites vitrines pour une présence en ligne professionnelle."
              />
            </div>
            <div className="flex w-full mt-8 px-24 justify-between gap-10">
              <WideServiceCard
                icon={webDev}
                title="Développement d'applications web"
                description="Conception et développement d'applications web sur mesure."
              />
              <WideServiceCard
                icon={webDev}
                title="Développement d'applications web"
                description="Conception et développement d'applications web sur mesure."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[150vh] relative   ">
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold text-5xl text-center px-64 leading-tight">
              Nos Produits
            </h2>
            <div className="flex w-full mt-16 px-24 justify-between items-center  ">
              <div className="relative">
                <Image
                  src={productBg}
                  alt="product bg"
                  className="object-contain"
                />
                <Image
                  src={product1}
                  alt="product 1"
                  className="object-contain absolute left-0 top-10 z-10"
                />
              </div>
              <div className="font-inter ml-20">
                <h3 className="font-semibold text-3xl text-white ">
                  Solution de restauration
                </h3>
                <p className="font-light text-xl text-white opacity-60 mt-4">
                  Solution complète pour la gestion de restaurants.
                </p>
              </div>
            </div>
            <div className="flex w-full mt-8 px-24 justify-between items-center  ">
              <div className="font-inter ">
                <h3 className="font-semibold text-3xl text-white ">
                  Solution de restauration
                </h3>
                <p className="font-light text-xl text-white opacity-60 mt-4">
                  Solution complète pour la gestion de restaurants.
                </p>
              </div>
              <div className="relative ml-20">
                <Image
                  src={productBg2}
                  alt="product bg"
                  className="object-contain"
                />
                <Image
                  src={product1}
                  alt="product 1"
                  className="object-contain absolute left-0 top-10 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[120vh] relative mt-32  ">
        <div className="elipse3" />
        <div className="hero3">
          <Image src={hero3} alt="hero 1" className="object-contain" />
        </div>
        <div className="hero4">
          <Image src={hero4} alt="hero 1" className="object-contain" />
        </div>
        <div className="half-elipse-white" />
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold text-5xl text-center px-64 leading-tight">
              Porfolio
            </h2>
            <div className="mt-52 w-full px-24 ">
              <PortfolioSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[80vh] relative mt-32  ">
        <div className="hero5">
          <Image src={hero5} alt="hero 1" className="object-contain" />
        </div>
        <div className="elipse4" />

        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold text-5xl text-center px-64 leading-tight">
              À propos de nous
            </h2>
            <div className="flex font-inter mt-20 px-36 ">
              <Image src={metageex} alt="metageex" className=" " />

              <p className="text-white text-xl leading-loose font-normal ">
                <span className="text-pr font-semibold text-3xl">
                  Chez METAGEEX
                </span>
                , nous croyons fermement que la digitalisation est la clé pour
                propulser les entreprises vers l&apos;avenir. Notre mission est
                de fournir des solutions modernes et performantes qui
                transforment les idées en réalité digitales. Que ce soit par le
                développement d&apos;applications web et mobiles, de sites
                vitrines, de sites e-commerce ou de solutions SaaS, nous nous
                engageons à offrir des produits innovants et de haute qualité
                qui répondent aux besoins spécifiques de chaque client.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-screen relative  mt-8  ">
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold text-5xl text-center px-64 leading-tight">
              Contactez-nous
            </h2>
            <div className="font-inter mt-24  w-full px-24">
              <div className="flex items-center justify-between gap-8">
                <div className="w-1/3">
                  <label className="text-white font-medium ml-4">Nom</label>
                  <input
                    type="text"
                    placeholder="Saisir votre nom"
                    className="w-full py-5 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
                  />
                </div>

                <div className="w-1/3">
                  <label className="text-white font-medium ml-4">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Saisir votre uméro de téléphone"
                    className="w-full py-5 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
                  />
                </div>

                <div className="w-1/3">
                  <label className="text-white font-medium ml-4">Email</label>
                  <input
                    type="text"
                    placeholder="Saisir votre mail"
                    className="w-full py-5 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-6 ">
                <label className="text-white font-medium ml-4">Message</label>
                <textarea
                  placeholder="Faites-nous part de vos besoins"
                  className="w-full py-5 px-4 rounded-lg mt-2 border-pr border bg-transparent h-40  text-white outline-none"
                />
              </div>
              <div className="mt-10 flex justify-center">
                <button className="flex justify-center gap-5 items-center py-3 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white">
                  <p>Envoyer</p>
                  <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
