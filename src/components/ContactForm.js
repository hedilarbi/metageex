"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successModal, setSuccessModal] = useState(false);

  const sendMail = async () => {
    try {
      const res = await axios.post("/api/sendMail", {
        name,
        tel,
        email,
        message,
      });

      if (res.status === 200 && res.data.status === 200) {
        setSuccessModal(true);
      }
    } catch (e) {
      console.log(e);
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
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-pr rounded-lg p-10 text-white">
            <p>Votre message a été envoyé avec succès</p>
          </div>
        </div>
      )}
      <div className="font-inter lg:mt-24 mt-10  w-full lg:px-24 px-6">
        <div className="lg:flex lg:flex-row flex-col items-center lg:justify-between gap-8">
          <div className="lg:w-1/3 w-full ">
            <label className="text-white font-medium ml-4">Nom</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Saisir votre nom"
              className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
              value={name}
            />
          </div>

          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <label className="text-white font-medium ml-4">
              Numéro de Téléphone
            </label>
            <input
              type="text"
              onChange={(e) => setTel(e.target.value)}
              placeholder="Saisir votre uméro de téléphone"
              className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent text-white outline-none"
            />
          </div>

          <div className="lg:w-1/3 w-full mt-6 lg:mt-0">
            <label className="text-white font-medium ml-4">Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setMessage(e.target.value)}
            className="w-full lg:py-5 py-3 px-4 rounded-lg mt-2 border-pr border bg-transparent h-40  text-white outline-none"
          />
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={sendMail}
            className="flex justify-center gap-5 items-center py-3 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white"
          >
            <p>Envoyer</p>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
