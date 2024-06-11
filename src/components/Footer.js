import React from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[50vh] relative overflow-hidden">
      <div className="footer-left-elipse" />
      <div className="bg-[#151D28] absolute left-0 top-0 h-full w-full z-20  overflow-hidden px-24 ">
        <div className="w-full h-full flex justify-between gap-20 px-8 py-6 ">
          <div className="w-1/3">
            <Image src={logo} alt="logo" />
            <p className="text-white font-inter font-normal ">
              Transformez vos idées en solutions digitales innovantes
            </p>
            <div className="flex gap-4 mt-4">
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full p-3">
                <FaFacebookF size={20} />
              </div>
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full p-3">
                <FaTwitter size={20} />
              </div>
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full p-3">
                <FaLinkedinIn size={20} />
              </div>
            </div>
          </div>
          <div className="pt-8">
            <ul className="font-inter text-white font-light text-lg space-y-2 text-opacity-50">
              <li className="text-white text-opacity-100">Accueil</li>
              <li className="text-opacity-50">Nos Services</li>
              <li className="text-opacity-50">Nos Produits</li>
              <li className="text-opacity-50">Portfolio</li>
              <li className="text-opacity-50">À propos</li>
              <li className="text-opacity-50">Contact</li>
            </ul>
          </div>
          <div className="pt-8">
            <ul className="font-inter text-white font-light text-lg space-y-2 text-opacity-50">
              <li className="text-white text-opacity-100">Accueil</li>
              <li className="text-opacity-50">Nos Services</li>
              <li className="text-opacity-50">Nos Produits</li>
              <li className="text-opacity-50">Portfolio</li>
              <li className="text-opacity-50">À propos</li>
              <li className="text-opacity-50">Contact</li>
            </ul>
          </div>
          <div className="pt-8">
            <ul className="font-inter text-white font-light text-lg space-y-2 text-opacity-50">
              <li className="text-white text-opacity-100">Accueil</li>
              <li className="text-opacity-50">Nos Services</li>
              <li className="text-opacity-50">Nos Produits</li>
              <li className="text-opacity-50">Portfolio</li>
              <li className="text-opacity-50">À propos</li>
              <li className="text-opacity-50">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
