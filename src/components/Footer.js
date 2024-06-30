import React from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="h-[50vh] relative overflow-hidden">
      <div className="footer-left-elipse" />
      <div className="bg-[#151D28] absolute left-0 top-0 h-full w-full z-20  overflow-hidden lg:px-24 px-6 ">
        <div className="w-full h-full flex lg:justify-between lg:gap-20 gap-5 lg:px-8 py-6 ">
          <div className="lg:w-1/3 w-3/5 pt-8  ">
            <div>
              <Image
                src={logo}
                alt="logo"
                className="w-20 h-5 lg:w-32 lg:h-10"
              />
              <p className="text-white font-inter lg:text-base text-xs font-light lg:pr-32 lg:mt-10 mt-5 tracking-wide">
                Transformez vos idées en solutions digitales innovantes
              </p>
            </div>
            <div className="flex gap-4 mt-10 ">
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full lg:p-3 p-1">
                <div className="hidden lg:block">
                  <FaFacebookF size={20} />
                </div>
                <div className="lg:hidden">
                  <FaFacebookF size={12} />
                </div>
              </div>
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full lg:p-3 p-1">
                <div className="hidden lg:block">
                  <FaTwitter size={20} />
                </div>
                <div className=" lg:hidden">
                  <FaTwitter size={12} />
                </div>
              </div>
              <div className="border border-white border-opacity-70 text-white text-opacity-70 rounded-full lg:p-3 p-1">
                <div className="hidden lg:block">
                  <FaLinkedinIn size={20} />
                </div>
                <div className=" lg:hidden">
                  <FaLinkedinIn size={12} />
                </div>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <ul className="font-inter text-white font-light lg:text-lg text-sm space-y-2 text-opacity-50">
              <li className="text-white text-opacity-100">
                <Link href="/">Accueil</Link>
              </li>
              <li className="text-opacity-50">
                <Link href="/services">Nos Services</Link>
              </li>
              <li className="text-opacity-50">
                <Link href="/produits/solution-restauration">Nos Produits</Link>
              </li>

              <li className="text-opacity-50">
                <Link href="/apropos">À propos</Link>
              </li>
              <li className="text-opacity-50">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="pt-8 hidden lg:block">
            <ul className="font-inter text-white font-light text-lg space-y-2 text-opacity-50">
              <li className="text-white text-opacity-100">Nos Solutions</li>
              <li className="text-opacity-50">
                <Link href="/produits/solution-restauration">
                  Solution de restauration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
