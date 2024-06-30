import Image from "next/image";
import React from "react";
import contactHero from "../../../public/images/contactHero.svg";
import aboutImage from "../../../public/images/aboutImage.svg";
import BenefitCard from "@/components/benefitCard/BenefitCard";
import value1 from "../../../public/images/value1.svg";
import value2 from "../../../public/images/value2.svg";
import value3 from "../../../public/images/value3.svg";
import value4 from "../../../public/images/value4.svg";
import fingerprint from "../../../public/images/fingerprint.svg";
import ValueCard from "@/components/valueCard/ValueCard";
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <section className="w-full lg:h-screen h-[70vh] relative ">
        <div className="top-half-elipse" />

        <div className="absolute z-10 w-full h-full lg:top-32 top-20">
          <div className="contactHero">
            <Image src={contactHero} alt="contactHero" />
          </div>
          <div className="serviceHeroContainer">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="font-inter font-semibold lg:text-6xl text-white inline-block text-2xl">
                À propos de nous
                <div className="titleUnderline" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[60vh] h-[90vh] relative  ">
        <div className="serviceBlueHalfElipse" />
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col items-center lg:px-12 w-full px-6  lg:mt-10">
            <Image
              src={aboutImage}
              alt="web dev"
              className="w-60 object-cover lg:w-2/5 "
            />

            <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8 lg:mt-0 text-center lg:text-left">
              Bienvenue chez Metageex, une entreprise de développement dédiée à
              la création d&apos;applications web et mobiles. Nous croyons en
              l&apos;innovation, la qualité et l&apos;excellence dans tout ce
              que nous faisons. Notre mission est de transformer les idées en
              solutions digitales puissantes et efficaces qui répondent aux
              besoins de nos clients et de la société.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[80vh] h-[280vh]  relative ">
        <div className="absolute z-20 w-full h-full flex flex-col items-center  ">
          <div className="w-full h-full flex flex-col items-center pb-20 lg:px-20 px-10">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
              Nos Valeurs Fondamentales
              <div className="titleUnderline" />
            </h2>
            <div className=" flex w-full gap-6 lg:flex-row flex-col  flex-1  lg:justify-between lg:mt-20 mt-10">
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
      <section className="w-full lg:h-[80vh] h-[120vh] relative  ">
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className="flex lg:flex-row flex-col-reverse items-center lg:px-20 w-full px-6  lg:mt-20">
            <div className="flex flex-col lg:items-start items-center">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center lg:text-left ">
                Ce qui Nous Distingue
                <div className="mobileTitleUnderLine" />
                <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)] hidden lg:block " />
              </h2>

              <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left">
                Contrairement à nos concurrents, nous nous distinguons par notre
                approche personnalisée et notre engagement envers la
                satisfaction client. Nous ne nous contentons pas de développer
                des applications; nous créons des solutions sur mesure qui
                répondent aux besoins spécifiques de chaque client. Notre équipe
                d&apos;experts travaille en étroite collaboration avec vous à
                chaque étape du projet, garantissant que le produit final est
                exactement ce que vous aviez imaginé – sinon mieux.
              </p>
            </div>

            <Image
              src={fingerprint}
              alt="web dev"
              className="w-60 object-cover lg:w-2/5 "
            />
          </div>
        </div>
      </section>
      <section className="w-full lg:h-[100vh] h-[140vh] relative  ">
        <div className="absolute z-20 w-full h-full flex flex-col items-center">
          <div className=" lg:px-20 w-full px-6  lg:mt-20">
            <div className="text-center">
              <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center inline-block  ">
                Proposition de Valeur
                <div className="titleUnderline" />
              </h2>
            </div>

            <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left">
              Chez Metageex, nous apportons une valeur unique à nos clients en
              leur fournissant des solutions technologiques intégrées et
              innovantes. Notre approche holistique nous permet de comprendre
              les défis uniques de chaque entreprise et de développer des
              solutions qui optimisent leurs opérations, améliorent leur
              efficacité et renforcent leur présence sur le marché. Nous nous
              spécialisons dans la création de solutions qui non seulement
              répondent aux besoins actuels mais anticipent également les
              besoins futurs.
            </p>
            <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left">
              Nous sommes passionnés par ce que nous faisons et nous nous
              engageons à vous fournir des solutions technologiques qui
              propulseront votre entreprise vers de nouveaux sommets.
              Contactez-nous aujourd&apos;hui pour découvrir comment nous
              pouvons collaborer et créer des innovations qui feront la
              différence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
