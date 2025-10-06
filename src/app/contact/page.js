import Image from "next/image";
import React from "react";
import contactHero from "../../../public/images/contactHero.svg";

import ContactForm from "../../components/ContactForm";
export const metadata = {
  title: "contact ",
  description: "contactez-nous metageex",
};
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <section className="w-full lg:h-[70vh] h-[50vh] relative mt-20 lg:mt-32 ">
        <div className="top-half-elipse" />

        <div className=" z-10 w-full h-full">
          <div className="contactHero">
            <Image src={contactHero} alt="contactHero" />
          </div>
          <div className="serviceHeroContainer">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="font-inter font-semibold md:text-4xl text-white inline-block text-xl">
                Contactez-nous
                <div className="titleUnderline" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full  relative  mb-40   ">
        <div className="productBlueLeftElipse" />
        <div className="z-20  left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full lg:mt-4">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
