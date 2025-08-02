import Image from "next/image";
import React from "react";
import contactHero from "../../../public/images/contactHero.svg";

import ContactForm from "@/components/ContactForm";
export const metadata = {
  title: "contact ",
  description: "contactez-nous metageex",
};
const page = () => {
  return (
    <main className=" w-full h-full relative overflow-hidden">
      <section className="w-full h-[80vh] relative ">
        <div className="top-half-elipse" />

        <div className="absolute z-10 w-full h-full lg:top-32 top-20">
          <div className="contactHero">
            <Image src={contactHero} alt="contactHero" />
          </div>
          <div className="serviceHeroContainer">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="font-inter font-semibold lg:text-6xl text-white inline-block text-2xl">
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
