import React from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
const NavHeader = () => {
  return (
    <header className="absolute top-0 left-0  bg-transparent flex justify-between items-center w-full pr-10 z-20">
      <div className="w-56 mt-2 ">
        <Image src={logo} alt="logo" className="object-contain" />
      </div>
      <nav className="">
        <ul className="flex items-center space-x-10 text-white opacity-70 font-sarabun font-normal text-base">
          <li className="mx-2 hover:text-pr">
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="mx-2 hover:text-pr">
            <a href="#" className="">
              Services
            </a>
          </li>
          <li className="mx-2 hover:text-pr">
            <a href="#" className="">
              Portfolio
            </a>
          </li>
          <li className="mx-2 hover:text-pr">
            <a href="#" className="">
              À propos de nous
            </a>
          </li>
          <li className="mx-2 hover:text-pr">
            <a href="#" className="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <button className="gradient-stroke-box">Planifier une demo</button>
    </header>
  );
};

export default NavHeader;
