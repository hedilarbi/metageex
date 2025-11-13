import React from "react";
import ContactForm from "../ContactForm";
import { defaultLocale } from "@/lib/i18n";

const contactCopy = {
  en: { title: "Contact us" },
  fr: { title: "Contactez-nous" },
};

const ContactSection = ({ locale = defaultLocale }) => {
  const copy = contactCopy[locale] || contactCopy[defaultLocale];

  return (
    <section className="w-full  relative  mb-40  mt-40 ">
      <div className="z-20  w-full h-full">
        <div className="w-full flex flex-col items-center h-full mt-4">
          <h2 className="text-white font-inter font-semibold lg:text-5xl text-2xl text-center  leading-tight">
            {copy.title}
            <div className="mobileTitleUnderLine" />
          </h2>
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
