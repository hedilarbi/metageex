import React from "react";
import ContactForm from "../ContactForm";
import { defaultLocale } from "@/lib/i18n";
import { FadeIn } from "../animations/FadeIn";

const contactCopy = {
  en: { title: "Let's work together", subtitle: "Tell us about your project and we'll get back to you shortly." },
  fr: { title: "Travaillons ensemble", subtitle: "Parlez-nous de votre projet, nous vous répondrons rapidement." },
};

const ContactSection = ({ locale = defaultLocale }) => {
  const copy = contactCopy[locale] || contactCopy[defaultLocale];

  return (
    <section className="w-full relative py-32 bg-[#050914] overflow-hidden">
      {/* Background glow for the contact section */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-t from-pr/20 to-transparent pointer-events-none filter blur-[100px]" />

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
        <div className="w-full flex flex-col items-center">
          <FadeIn direction="up" className="text-center mb-16">
            <h2 className="text-white font-inter font-bold lg:text-5xl text-3xl leading-tight">
              {copy.title}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pr to-transparent mx-auto rounded-full mt-6 mb-6" />
            <p className="text-white/60 text-lg font-light">
              {copy.subtitle}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} direction="up" className="w-full">
            <ContactForm locale={locale} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
