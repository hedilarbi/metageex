"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { defaultLocale } from "@/lib/i18n";

const formCopy = {
  en: {
    fields: {
      name: "Name",
      phone: "Phone number",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Enter your name",
      phonePlaceholder: "Enter your phone number",
      emailPlaceholder: "Enter your email",
      subjectPlaceholder: "Select a subject",
      messagePlaceholder: "Tell us about your needs",
    },
    subjects: [
      { value: "ecommerce", label: "E-commerce & Retail" },
      { value: "saas", label: "SaaS & Custom Web App" },
      { value: "mobile", label: "Mobile Application" },
      { value: "consulting", label: "Strategy & Consulting" },
      { value: "other", label: "Other / General Inquiry" },
    ],
    submit: "Send",
    loading: "Sending...",
    success: "Your message has been sent successfully.",
  },
  fr: {
    fields: {
      name: "Nom",
      phone: "Numéro de téléphone",
      email: "Email",
      subject: "Sujet",
      message: "Message",
      namePlaceholder: "Saisir votre nom",
      phonePlaceholder: "Saisir votre numéro de téléphone",
      emailPlaceholder: "Saisir votre mail",
      subjectPlaceholder: "Sélectionner un sujet",
      messagePlaceholder: "Faites-nous part de vos besoins",
    },
    subjects: [
      { value: "ecommerce", label: "E-commerce & Vente en ligne" },
      { value: "saas", label: "SaaS & Application sur-mesure" },
      { value: "mobile", label: "Application Mobile" },
      { value: "consulting", label: "Stratégie & Conseil" },
      { value: "other", label: "Autre / Demande générale" },
    ],
    submit: "Envoyer",
    loading: "Envoi en cours...",
    success: "Votre message a été envoyé avec succès.",
  },
};

const ContactForm = ({ locale = defaultLocale }) => {
  const copy = formCopy[locale] || formCopy[defaultLocale];

  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendMail = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await axios.post("/api/sendMail", {
        name,
        tel,
        email,
        subject,
        message,
      });

      if (res.status === 200 && res.data.status === 200) {
        setSuccessModal(true);
        // Clear form
        setName("");
        setTel("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (successModal) {
      setTimeout(() => {
        setSuccessModal(false);
      }, 3000);
    }

    return () => {
      clearTimeout();
    };
  }, [successModal]);
  return (
    <>
      {successModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#050A0F]/80 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity">
          <div className="bg-[#08101A] border border-pr/50 shadow-[0_0_30px_rgba(107,193,255,0.2)] rounded-2xl p-10 text-white flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-pr/20 flex items-center justify-center">
              <span className="text-pr text-2xl">✓</span>
            </div>
            <p className="font-medium text-lg">{copy.success}</p>
          </div>
        </div>
      )}
      <div className="font-inter lg:mt-24 mt-10 w-full">
        <div className="lg:flex lg:flex-row flex-col items-center lg:justify-between gap-8">
          <div className="lg:w-1/3 w-full">
            <label className="text-white/80 font-medium ml-1 text-sm tracking-wide">
              {copy.fields.name}
            </label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder={copy.fields.namePlaceholder}
              className="w-full lg:py-4 py-3 px-5 rounded-xl mt-2 border border-white/10 bg-[#08101A] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-pr/80 focus:shadow-[0_0_15px_rgba(107,193,255,0.2)]"
              value={name}
            />
          </div>

          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <label className="text-white/80 font-medium ml-1 text-sm tracking-wide">
              {copy.fields.phone}
            </label>
            <input
              type="text"
              onChange={(e) => setTel(e.target.value)}
              placeholder={copy.fields.phonePlaceholder}
              className="w-full lg:py-4 py-3 px-5 rounded-xl mt-2 border border-white/10 bg-[#08101A] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-pr/80 focus:shadow-[0_0_15px_rgba(107,193,255,0.2)]"
              value={tel}
            />
          </div>

          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <label className="text-white/80 font-medium ml-1 text-sm tracking-wide">
              {copy.fields.email}
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder={copy.fields.emailPlaceholder}
              className="w-full lg:py-4 py-3 px-5 rounded-xl mt-2 border border-white/10 bg-[#08101A] text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-pr/80 focus:shadow-[0_0_15px_rgba(107,193,255,0.2)]"
              value={email}
            />
          </div>
        </div>
        
        <div className="mt-8">
          <label className="text-white/80 font-medium ml-1 text-sm tracking-wide">
            {copy.fields.subject}
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`w-full lg:py-4 py-3 px-5 rounded-xl mt-2 border border-white/10 bg-[#08101A] text-white outline-none transition-all duration-300 focus:border-pr/80 focus:shadow-[0_0_15px_rgba(107,193,255,0.2)] appearance-none ${!subject ? 'text-white/30' : 'text-white'}`}
            style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23FFFFFF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            <option value="" disabled className="text-gray-500">{copy.fields.subjectPlaceholder}</option>
            {copy.subjects.map((subj) => (
              <option key={subj.value} value={subj.label} className="text-black bg-white">{subj.label}</option>
            ))}
          </select>
        </div>
        <div className="mt-8">
          <label className="text-white/80 font-medium ml-1 text-sm tracking-wide">
            {copy.fields.message}
          </label>
          <textarea
            placeholder={copy.fields.messagePlaceholder}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full lg:py-4 py-3 px-5 rounded-xl mt-2 border border-white/10 bg-[#08101A] h-48 text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-pr/80 focus:shadow-[0_0_15px_rgba(107,193,255,0.2)] resize-none"
            value={message}
          />
        </div>
        <div className="mt-12 flex justify-center lg:justify-end">
          <button
            onClick={sendMail}
            disabled={loading}
            className={`flex justify-center gap-3 items-center py-4 px-10 rounded-xl text-center font-semibold transition-all shadow-[0_0_15px_rgba(107,193,255,0.2)] ${
              loading 
                ? "bg-pr/50 text-black/50 cursor-not-allowed" 
                : "bg-pr text-black hover:bg-white hover:scale-105 hover:shadow-[0_0_25px_rgba(107,193,255,0.4)]"
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black/50" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{copy.loading}</span>
              </>
            ) : (
              <>
                <span>{copy.submit}</span>
                <FaArrowRightLong />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
