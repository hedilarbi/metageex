"use client";
import React, { useRef, useState } from "react";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";

const NavHeader = () => {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const currentPath = pathname.split("/")[1]
    ? `/${pathname.split("/")[1]}`
    : "/";

  const [showNavBar, setShowNavBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // tiny delays to avoid flicker when moving between trigger and menu
  const openTimer = useRef(null);
  const closeTimer = useRef(null);
  const clearTimers = () => {
    if (openTimer.current) {
      clearTimeout(openTimer.current);
      openTimer.current = null;
    }
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const handleEnter = () => {
    clearTimers();
    openTimer.current = setTimeout(() => setShowDropdown(true), 120);
  };
  const handleLeave = () => {
    clearTimers();
    closeTimer.current = setTimeout(() => setShowDropdown(false), 140);
  };

  const handleNavigation = (path) => {
    setShowNavBar(false);
    setShowDropdown(false);
    router.push(path);
  };

  const isActive = (path) => currentPath === path;

  return (
    <header className="absolute top-0 left-0 flex justify-between items-center w-screen lg:px-12 py-4 px-6 lg:pt-9 z-20">
      {/* Mobile burger */}
      <button
        className="lg:hidden text-white relative"
        onClick={() => setShowNavBar(true)}
        aria-label="Ouvrir le menu"
      >
        <IoMenuOutline size={24} />
      </button>

      {/* Mobile drawer */}
      {showNavBar && (
        <nav className="lg:hidden z-50 absolute top-4 left-0 bg-[#2B2E33] pt-3 px-3 pb-10 rounded-b-2xl border-pr border-t-2">
          <div className="flex justify-end">
            <button
              className="text-pr"
              onClick={() => setShowNavBar(false)}
              aria-label="Fermer le menu"
            >
              <IoCloseSharp size={20} />
            </button>
          </div>

          <ul className="space-y-5 z-50 font-sarabun font-normal text-sm">
            <li className="mx-2">
              <Link
                href="/"
                className={
                  isActive("/") ? "text-pr" : "text-white/70 hover:text-pr"
                }
                onClick={() => handleNavigation("/")}
              >
                Accueil
              </Link>
            </li>

            {/* Parent li has NO opacity; links control their own tone */}
            <li className="mx-2">
              <Link
                href="/services"
                className={
                  isActive("/services")
                    ? "text-pr"
                    : "text-white/70 hover:text-pr"
                }
                onClick={() => handleNavigation("/services")}
              >
                Services
              </Link>

              {/* Mobile submenu */}
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    href="/services/developpement-application-web"
                    onClick={() =>
                      handleNavigation(
                        "/services/developpement-application-web"
                      )
                    }
                    className="block px-1 py-1 text-white/70 hover:text-pr"
                  >
                    Développement application web
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/developpement-application-mobile"
                    onClick={() =>
                      handleNavigation(
                        "/services/developpement-application-mobile"
                      )
                    }
                    className="block px-1 py-1 text-white/70 hover:text-pr"
                  >
                    Développement application mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/developpement-site-vitrine"
                    onClick={() =>
                      handleNavigation("/services/developpement-site-vitrine")
                    }
                    className="block px-1 py-1 text-white/70 hover:text-pr"
                  >
                    Développement site vitrine
                  </Link>
                </li>
              </ul>
            </li>

            <li className="mx-2">
              <Link
                href="/produits/solution-restauration"
                className={
                  isActive("/produits")
                    ? "text-pr"
                    : "text-white/70 hover:text-pr"
                }
                onClick={() =>
                  handleNavigation("/produits/solution-restauration")
                }
              >
                Produits
              </Link>
            </li>

            <li className="mx-2">
              <Link
                href="/apropos"
                className={
                  isActive("/apropos")
                    ? "text-pr"
                    : "text-white/70 hover:text-pr"
                }
                onClick={() => handleNavigation("/apropos")}
              >
                À propos de nous
              </Link>
            </li>

            <li className="mx-2">
              <Link
                href="/contact"
                className={
                  isActive("/contact")
                    ? "text-pr"
                    : "text-white/70 hover:text-pr"
                }
                onClick={() => handleNavigation("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Logo */}
      <Link className="w-24 h-6 lg:w-36 lg:h-9" href="/" aria-label="Accueil">
        <Image src={logo} alt="logo" className="object-cover" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-10 font-sarabun font-normal text-base">
          <li className="mx-2">
            <Link
              href="/"
              className={
                isActive("/") ? "text-pr" : "text-white/70 hover:text-pr"
              }
            >
              Accueil
            </Link>
          </li>

          {/* Services: scoped hover with group; no cascade to submenu */}
          <li
            className="mx-2 relative group"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <Link
              href="/services"
              className={`${
                isActive("/services") ? "text-pr" : "text-white/70"
              } group-hover:text-pr`}
              aria-haspopup="true"
              aria-expanded={showDropdown ? "true" : "false"}
            >
              Services
            </Link>

            {showDropdown && (
              <ul
                className="absolute left-0 top-full mt-2 w-64 bg-[#2B2E33] rounded-lg shadow-lg py-2 z-50"
                role="menu"
              >
                <li role="none">
                  <Link
                    href="/services/developpement-application-web"
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Développement application web
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/services/developpement-application-mobile"
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Développement application mobile
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href="/services/developpement-site-vitrine"
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    Développement site vitrine
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mx-2">
            <Link
              href="/produits/solution-restauration"
              className={
                isActive("/produits")
                  ? "text-pr"
                  : "text-white/70 hover:text-pr"
              }
            >
              Produits
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href="/apropos"
              className={
                isActive("/apropos") ? "text-pr" : "text-white/70 hover:text-pr"
              }
            >
              À propos de nous
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href="/contact"
              className={
                isActive("/contact") ? "text-pr" : "text-white/70 hover:text-pr"
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
