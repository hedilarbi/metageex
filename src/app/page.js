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
import MobilePortfolioSlider from "@/components/portfolioSlider/MobilePortfolioSlider";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" overflow-hidden w-screen h-full ">
      <section className="w-full h-[70vh] lg:h-screen relative  ">
        <div className="top-half-elipse"></div>

        <div className="hero1">
          <Image src={hero1} alt="hero 1" className="object-contain" />
        </div>
        <div className="z-10 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center lg:justify-center mt-14 h-full px-6 pt-4 ">
            <h1 className="text-white font-inter font-semibold lg:text-5xl text-xl w-full text-center lg:w-2/3  leading-tight">
              Transformez Vos Idées En Solutions Digitales Innovantes
            </h1>
            <p className="text-white opacity-60 font-inter font-light lg:text-2xl text-base text-center lg:w-2/3 mt-8 leading-loose ">
              Des applications web et mobiles, des sites vitrines, des sites
              e-commerce et des solutions SaaS conçus pour propulser votre
              entreprise vers l&apos;avenir
            </p>

            <div className="mt-8 flex space-x-5 text-xs lg:text-base">
              <Link
                href="/contact"
                className="flex justify-center lg:gap-5  gap-2   items-center py-2 lg:py-3 lg:px-6 px-2 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
              >
                <p>Contactez Nous</p>
                <FaArrowRightLong />
              </Link>
              <Link href="/contact" className="gradient-stroke-box">
                <p>Planifier une demo</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[410vh] lg:h-[200vh] relative lg:mt-16">
        <div className="hero2">
          <Image src={hero2} alt="hero 2" className="object-contain" />
        </div>
        <div className="full-elipse" />
        <div className="z-20 absolute left-0 top-0 w-screen  h-full ">
          <div className="w-full flex flex-col items-center h-full mt-4 z-30  ">
            <h2 className="text-white font-inter font-semibold lg:text-5xl text-center text-xl leading-tight">
              Nos Services
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="flex flex-col lg:flex-row w-full lg:mt-24 mt-16 lg:px-24 px-6 justify-between gap-10 z-30  ">
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
              <div className="lg:hidden">
                <ServiceCard
                  icon={webDev}
                  title="Sites vitrines"
                  description="Réalisation de sites vitrines pour une présence en ligne professionnelle."
                />
              </div>
              <div className="lg:hidden">
                <ServiceCard
                  icon={webDev}
                  title="Sites vitrines"
                  description="Réalisation de sites vitrines pour une présence en ligne professionnelle."
                />
              </div>
            </div>
            <div className=" lg:flex  w-full lg:mt-8 mt-10 px-6 lg:px-24 justify-between gap-10 hidden ">
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
      <section className="w-full lg:h-[200vh] md:h-[250vh] h-[150vh] relative   ">
        <div className="z-20 absolute left-0 top-0 w-full h-full">
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
                  src={product1}
                  alt="product 1"
                  className="object-contain absolute left-0 top-10 z-10"
                />
              </div>
              <div className="font-inter lg:ml-20 text-center lg:text-left mt-4 lg:mt-0">
                <h3 className="font-semibold lg:text-3xl text-xl text-white ">
                  Solution de restauration
                </h3>
                <p className="font-light lg:text-xl text-sm text-white opacity-60 lg:mt-4 mt-2">
                  Solution complète pour la gestion de restaurants.
                </p>
              </div>
            </div>
            <div className="flex w-full mt-10 lg:px-24 px-6 justify-between items-center flex-col-reverse lg:flex-row ">
              <div className="font-inter text-center lg:text-left lg:mt-0 mt-4 ">
                <h3 className="font-semibold lg:text-3xl text-xl text-white ">
                  Solution de restauration
                </h3>
                <p className="font-light lg:text-xl text-sm text-white opacity-60 lg:mt-4 mt-2">
                  Solution complète pour la gestion de restaurants.
                </p>
              </div>
              <div className="relative lg:ml-20">
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
      <section className="w-full h-[120vh] relative lg:mt-32  ">
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
            <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center px-64 leading-tight">
              Porfolio
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="mt-52 w-full px-24 hidden lg:block ">
              <PortfolioSlider />
            </div>

            <div className="lg:hidden mt-32 px-6 w-full">
              <MobilePortfolioSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[90vh] relative lg:mt-32  ">
        <div className="hero5">
          <Image src={hero5} alt="hero 1" className="object-contain" />
        </div>
        <div className="elipse4" />

        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold lg:text-5xl text-xl text-center  leading-tight">
              À propos de nous
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="flex font-inter lg:mt-20 mt-10 lg:px-36 px-6 ">
              <Image
                src={metageex}
                alt="metageex"
                className=" hidden lg:block"
              />

              <p className="text-white lg:text-xl text-sm leading-loose font-normal ">
                <span className="text-pr font-semibold lg:text-3xl text-base">
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
      <section className="w-full lg:h-screen h-[130vh] relative  mt-8  ">
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full mt-4">
            <h2 className="text-white font-inter font-semibold lg:text-5xl text-2xl text-center  leading-tight">
              Contactez-nous
              <div className="mobileTitleUnderLine" />
            </h2>
            <div className="font-inter lg:mt-24 mt-10  w-full lg:px-24 px-6">
              <div className="lg:flex lg:flex-row flex-col items-center lg:justify-between gap-8">
                <div className="lg:w-1/3 w-full ">
                  <label className="text-white font-medium ml-4">Nom</label>
                  <input
                    type="text"
                    placeholder="Saisir votre nom"
                    className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
                  />
                </div>

                <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
                  <label className="text-white font-medium ml-4">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="text"
                    placeholder="Saisir votre uméro de téléphone"
                    className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
                  />
                </div>

                <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
                  <label className="text-white font-medium ml-4">Email</label>
                  <input
                    type="text"
                    placeholder="Saisir votre mail"
                    className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none "
                  />
                </div>
              </div>
              <div className="mt-6 ">
                <label className="text-white font-medium ml-4">Message</label>
                <textarea
                  placeholder="Faites-nous part de vos besoins"
                  className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent h-40  text-white outline-none"
                />
              </div>
              <div className="mt-10 flex justify-center">
                <Link
                  href="/contact"
                  className="flex justify-center gap-5 items-center py-3 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
                >
                  <p>Envoyer</p>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
