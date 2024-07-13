"use client";
import React, { useState } from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";

const NavHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentPath = pathname.split("/")[1];
  const [showNavBar, setShowNavBar] = useState(false);

  const handleNavigation = (path) => {
    setShowNavBar(false);
    router.push(path);
  };

  return (
    <header className="absolute top-0 left-0  flex justify-between items-center w-screen  lg:px-12 py-4  px-6  lg:pt-9 z-20 ">
      <button
        className="lg:hidden text-white relative "
        onClick={() => setShowNavBar(true)}
      >
        <IoMenuOutline size={24} />
      </button>
      {showNavBar && (
        <nav className="lg:hidden z-50 absolute top-4 rounded-b-2xl left-0 bg-[#2B2E33] pt-3 px-3 pb-10  border-pr border-t-2 ">
          <div className="flex justify-end">
            <button className="text-pr" onClick={() => setShowNavBar(false)}>
              <IoCloseSharp size={20} />
            </button>
          </div>
          <ul className=" space-y-5  z-50 text-white opacity-70 font-sarabun font-normal text-sm">
            <li className="mx-2 hover:text-pr">
              <button
                href="/"
                className={"/" + currentPath === "/" ? "text-pr" : "text-white"}
                onClick={() => handleNavigation("/")}
              >
                Home
              </button>
            </li>
            <li className="mx-2 hover:text-pr">
              <button
                href="/services"
                className={
                  "/" + currentPath === "/services" ? "text-pr" : "text-white"
                }
                onClick={() => handleNavigation("/services")}
              >
                Services
              </button>
            </li>
            <li className="mx-2 hover:text-pr">
              <button
                href="/produits/solution-restauration"
                className={
                  "/" + currentPath === "/produits" ? "text-pr" : "text-white"
                }
                onClick={() =>
                  handleNavigation("/produits/solution-restauration")
                }
              >
                Produits
              </button>
            </li>
            <li className="mx-2 hover:text-pr">
              <button href="/" onClick={() => handleNavigation("/apropos")}>
                À propos de nous
              </button>
            </li>
            <li className="mx-2 hover:text-pr">
              <button
                href="/contact"
                onClick={() => handleNavigation("/contact")}
                className={
                  "/" + currentPath === "/contact" ? "text-pr" : "text-white"
                }
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      )}
      <Link className="w-24 h-6 lg:w-36 lg:h-9" href="/">
        <Image src={logo} alt="logo" className="object-cover" />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-10 text-white opacity-70 font-sarabun font-normal text-base">
          <li className="mx-2 hover:text-pr">
            <Link
              href="/"
              className={"/" + currentPath === "/" ? "text-pr" : "text-white"}
            >
              Home
            </Link>
          </li>
          <li className="mx-2 hover:text-pr">
            <Link
              href="/services"
              className={
                "/" + currentPath === "/services" ? "text-pr" : "text-white"
              }
            >
              Services
            </Link>
          </li>
          <li className="mx-2 hover:text-pr">
            <Link
              href="/produits/solution-restauration"
              className={
                "/" + currentPath === "/produits" ? "text-pr" : "text-white"
              }
            >
              Produits
            </Link>
          </li>
          <li className="mx-2 hover:text-pr">
            <Link
              href="/apropos"
              className={
                "/" + currentPath === "/apropos" ? "text-pr" : "text-white"
              }
            >
              À propos de nous
            </Link>
          </li>
          <li className="mx-2 hover:text-pr">
            <Link
              href="/contact"
              className={
                "/" + currentPath === "/contact" ? "text-pr" : "text-white"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Link href="/contact" className="gradient-stroke-box hidden lg:block">
        Planifier une demo
      </Link>
    </header>
  );
};

export default NavHeader;
