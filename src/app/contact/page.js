import Image from "next/image";
import React from "react";
import contactHero from "../../../public/images/contactHero.svg";
import { FaArrowRightLong } from "react-icons/fa6";
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
      <section className="w-full lg:h-screen h-[120vh] relative    ">
        <div className="productBlueLeftElipse" />
        <div className="z-20 absolute left-0 top-0 w-full h-full">
          <div className="w-full flex flex-col items-center h-full lg:mt-4">
            <div className="font-inter lg:mt-24   w-full lg:px-24 px-6">
              <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:gap-8 ">
                <div className="lg:w-1/3 w-full  lg:mt-0">
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
                    className="w-full lg:py-5 py-3  px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
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
};

export default page;
