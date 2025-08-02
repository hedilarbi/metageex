import React from "react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section className="w-full  relative  mb-40 lg:mt-64 mt-32 ">
      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-2xl text-center  leading-tight">
            Contactez-nous
            <div className="mobileTitleUnderLine" />
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
