"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import logo from "@public/images/logo.png";
import { getLocalePath, getLocalizedRoute, routeSlugs } from "@/lib/localePath";
import { locales, defaultLocale } from "@/lib/i18n";

const navCopy = {
  en: {
    menu: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About us",
      contact: "Contact",
      call: "Discuss Your Project",
    },
    subServices: [
      { key: "serviceEcommerce", label: "E-commerce Development" },
      { key: "serviceCustomWeb", label: "Custom Web Platforms" },
      { key: "serviceMobile", label: "Mobile Applications" },
      { key: "serviceConsulting", label: "Business & Growth Consulting" },
      { key: "serviceOptimization", label: "Revenue & Conversion Optimization" },
      { key: "serviceInfrastructure", label: "Infrastructure Cost Optimization" },
      { key: "serviceSupport", label: "Ongoing Technical Support" }
    ],
    aria: {
      open: "Open main menu",
      close: "Close main menu",
    },
    language: "Language",
  },
  fr: {
    menu: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      about: "À propos de nous",
      contact: "Contact",
      call: "Discuter de votre projet",
    },
    subServices: [
      { key: "serviceEcommerce", label: "Développement E-commerce" },
      { key: "serviceCustomWeb", label: "Plateformes Web Sur-mesure" },
      { key: "serviceMobile", label: "Applications Mobiles" },
      { key: "serviceConsulting", label: "Conseil en Croissance & Stratégie" },
      { key: "serviceOptimization", label: "Optimisation de la Conversion" },
      { key: "serviceInfrastructure", label: "Optimisation des Coûts d'Infrastructure" },
      { key: "serviceSupport", label: "Support Technique Continu" }
    ],
    aria: {
      open: "Ouvrir le menu principal",
      close: "Fermer le menu principal",
    },
    language: "Langue",
  },
};

const findRouteKeyByPath = (path) => {
  for (const [key, slugs] of Object.entries(routeSlugs)) {
    if (Object.values(slugs).includes(path)) {
      return key;
    }
  }
  return null;
};

const NavHeader = () => {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const segments = pathname
    .split("/")
    .filter((segment) => segment && segment.length > 0);

  const hasLocaleSegment = segments.length && locales.includes(segments[0]);
  const locale = hasLocaleSegment ? segments[0] : defaultLocale;
  const baseSegments = hasLocaleSegment ? segments.slice(1) : segments;
  const normalizedPath =
    baseSegments.length > 0 ? `/${baseSegments.join("/")}` : "/";
  const copy = navCopy[locale] || navCopy[defaultLocale];

  const currentRouteKey = findRouteKeyByPath(normalizedPath);

  const [showNavBar, setShowNavBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navigateTo = (routeKey, fallbackPath = "/") => {
    setShowNavBar(false);
    setShowDropdown(false);
    if (routeKey) {
      router.push(getLocalizedRoute(locale, routeKey));
      return;
    }
    router.push(getLocalePath(locale, fallbackPath));
  };

  const isActive = (routeKey, fallbackPath = "/") => {
    if (routeKey) {
      return currentRouteKey === routeKey;
    }
    return normalizedPath === fallbackPath;
  };

  return (
    <header className={`fixed top-0 left-0 flex justify-between items-center w-full lg:px-12 h-20 md:h-24 px-6 z-50 transition-all duration-300 ${isScrolled ? "bg-[#050A0F]/80 backdrop-blur-lg border-b border-white/10 shadow-lg" : "bg-transparent"}`}>
      
      {/* Mobile burger */}
      <button
        className="lg:hidden text-white/80 hover:text-white transition-colors relative focus:outline-none"
        onClick={() => setShowNavBar(true)}
        aria-label={copy.aria.open}
      >
        <IoMenuOutline size={32} />
      </button>

      {/* Mobile Overlay */}
      {showNavBar && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setShowNavBar(false)}
        />
      )}

      {/* Mobile Nav */}
      <nav
        className={`
            lg:hidden z-50 fixed top-0 left-0 h-full w-[85%] max-w-sm bg-[#050A0F] border-r border-white/10 pt-6 px-6 pb-10 flex flex-col overflow-y-auto
            transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${showNavBar ? "translate-x-0" : "-translate-x-full"}
          `}
        style={{ boxShadow: "4px 0 24px rgba(0,0,0,0.5)" }}
      >
        <div className="flex justify-between items-center mb-10">
          <Image src={logo} alt="logo" className="h-6 w-auto" />
          <button
            className="text-white/50 hover:text-white transition-colors focus:outline-none bg-white/5 p-2 rounded-full"
            onClick={() => setShowNavBar(false)}
            aria-label={copy.aria.close}
          >
            <IoCloseSharp size={24} />
          </button>
        </div>

        <ul className="space-y-6 flex-grow font-inter font-medium text-lg">
          <li>
            <button
              className={`w-full text-left transition-colors ${isActive("home") ? "text-pr" : "text-white/70 hover:text-white"}`}
              onClick={() => navigateTo("home")}
            >
              {copy.menu.home}
            </button>
          </li>

          <li>
            <div className="flex flex-col">
              <button
                className={`w-full text-left transition-colors ${isActive("services") ? "text-pr" : "text-white/70 hover:text-white"}`}
                onClick={() => navigateTo("services")}
              >
                {copy.menu.services}
              </button>
              
              <ul className="ml-4 mt-4 space-y-4 border-l border-white/10 pl-4">
                {copy.subServices.map((service) => (
                  <li key={service.key}>
                    <button
                      onClick={() => navigateTo(service.key)}
                      className="block text-white/50 hover:text-white text-left w-full text-base font-light transition-colors"
                    >
                      {service.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>

          <li>
            <button
              className={`w-full text-left transition-colors ${isActive("portfolio") ? "text-pr" : "text-white/70 hover:text-white"}`}
              onClick={() => navigateTo("portfolio")}
            >
              {copy.menu.portfolio}
            </button>
          </li>

          <li>
            <button
              className={`w-full text-left transition-colors ${isActive("about") ? "text-pr" : "text-white/70 hover:text-white"}`}
              onClick={() => navigateTo("about")}
            >
              {copy.menu.about}
            </button>
          </li>

          <li>
            <button
              className={`w-full text-left transition-colors ${isActive("contact") ? "text-pr" : "text-white/70 hover:text-white"}`}
              onClick={() => navigateTo("contact")}
            >
              {copy.menu.contact}
            </button>
          </li>
        </ul>

        <div className="mt-8 border-t border-white/10 pt-6">
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4 font-inter">
            {copy.language}
          </p>
          <div className="flex gap-3">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  const target =
                    currentRouteKey && routeSlugs[currentRouteKey]
                      ? getLocalizedRoute(loc, currentRouteKey)
                      : getLocalePath(loc, normalizedPath || "/");
                  setShowNavBar(false);
                  setShowDropdown(false);
                  router.push(target);
                }}
                className={`flex-1 rounded-lg border px-4 py-2 text-sm font-medium uppercase transition-all ${loc === locale
                    ? "border-pr bg-pr/10 text-pr"
                    : "border-white/10 text-white/50 hover:bg-white/5 hover:text-white"
                  }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Logo */}
      <Link
        className="relative z-10 w-28 lg:w-36"
        href={getLocalizedRoute(locale, "home")}
        aria-label={copy.menu.home}
      >
        <Image src={logo} alt="Auxis Digital" className="w-full h-auto" priority />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
        <ul className="flex items-center space-x-10 font-inter font-medium text-sm tracking-wide">
          <li>
            <Link
              href={getLocalizedRoute(locale, "home")}
              className={`transition-colors ${isActive("home") ? "text-pr" : "text-white/70 hover:text-white"}`}
            >
              {copy.menu.home}
            </Link>
          </li>

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className={`flex items-center gap-1.5 transition-colors focus:outline-none ${isActive("services") ? "text-pr" : "text-white/70 group-hover:text-white"}`}
              aria-haspopup="true"
              aria-expanded={showDropdown ? "true" : "false"}
              onClick={() => navigateTo("services")}
            >
              {copy.menu.services}
            </button>

            {showDropdown && (
              <div
                className="absolute left-1/2 -translate-x-1/2 top-full pt-6"
                role="menu"
              >
                <div className="w-72 bg-[#08101A]/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-3 relative before:content-[''] before:absolute before:-top-[6px] before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:bg-[#08101A] before:border-l before:border-t before:border-white/10 before:rotate-45">
                  {copy.subServices.map((service) => (
                    <Link
                      key={service.key}
                      href={getLocalizedRoute(locale, service.key)}
                      className="block px-5 py-2.5 text-white/70 hover:text-white hover:bg-white/5 transition-colors text-sm font-light"
                      role="menuitem"
                      onClick={() => setShowDropdown(false)}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>

          <li>
            <Link
              href={getLocalizedRoute(locale, "portfolio")}
              className={`transition-colors ${isActive("portfolio") ? "text-pr" : "text-white/70 hover:text-white"}`}
            >
              {copy.menu.portfolio}
            </Link>
          </li>

          <li>
            <Link
              href={getLocalizedRoute(locale, "about")}
              className={`transition-colors ${isActive("about") ? "text-pr" : "text-white/70 hover:text-white"}`}
            >
              {copy.menu.about}
            </Link>
          </li>

          <li>
            <Link
              href={getLocalizedRoute(locale, "contact")}
              className={`transition-colors ${isActive("contact") ? "text-pr" : "text-white/70 hover:text-white"}`}
            >
              {copy.menu.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden lg:flex items-center gap-6">
        {/* Language selector */}
        <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-sm">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={
                currentRouteKey && routeSlugs[currentRouteKey]
                  ? getLocalizedRoute(loc, currentRouteKey)
                  : getLocalePath(loc, normalizedPath || "/")
              }
              className={`px-3 py-1 rounded-full text-xs font-inter font-semibold transition-all ${
                loc === locale ? "bg-white/10 text-white shadow-sm" : "text-white/40 hover:text-white/80"
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Call to action */}
        <Link
          href={getLocalizedRoute(locale, "contact")}
          className="bg-pr hover:bg-white text-black font-inter font-medium text-sm px-6 py-2.5 rounded-lg transition-all hover:scale-105 shadow-[0_0_15px_rgba(107,193,255,0.2)] hover:shadow-[0_0_25px_rgba(107,193,255,0.4)]"
        >
          {copy.menu.call}
        </Link>
      </div>
    </header>
  );
};

export default NavHeader;
