import React from "react";

const PropositionSection = () => {
  return (
    <section className="w-full relative mb-40 ">
      <div className=" z-20 w-full h-full flex flex-col items-center">
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
            innovantes. Notre approche holistique nous permet de comprendre les
            défis uniques de chaque entreprise et de développer des solutions
            qui optimisent leurs opérations, améliorent leur efficacité et
            renforcent leur présence sur le marché. Nous nous spécialisons dans
            la création de solutions qui non seulement répondent aux besoins
            actuels mais anticipent également les besoins futurs.
          </p>
          <p className="text-white  font-inter lg:text-lg text-base font-light leading-normal mt-8  text-center lg:text-left">
            Nous sommes passionnés par ce que nous faisons et nous nous
            engageons à vous fournir des solutions technologiques qui
            propulseront votre entreprise vers de nouveaux sommets.
            Contactez-nous aujourd&apos;hui pour découvrir comment nous pouvons
            collaborer et créer des innovations qui feront la différence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PropositionSection;
