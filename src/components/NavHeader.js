"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoMenuOutline, IoCloseSharp } from "react-icons/io5";
import logo from "@public/images/logo.svg";
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
      call: "Book a call",
    },
    subServices: {
      web: "Web app development",
      mobile: "Mobile app development",
      showcase: "Showcase websites",
    },
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
      call: "Planifier un appel",
    },
    subServices: {
      web: "Développement application web",
      mobile: "Développement application mobile",
      showcase: "Développement site vitrine",
    },
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
    <header className="absolute top-0 left-0 flex justify-between items-center w-screen lg:px-12 h-20 md:h-32 px-6  z-20 ">
      {/* Mobile burger */}
      <button
        className="lg:hidden text-white relative"
        onClick={() => setShowNavBar(true)}
        aria-label={copy.aria.open}
      >
        <IoMenuOutline size={28} />
      </button>

      <nav
        className={`
            lg:hidden z-40 fixed top-0 left-0 h-full w-4/5 max-w-xs bg-[#2B2E33] pt-3 px-3 pb-10  border-pr border-r-2
            transition-transform duration-300 ease-in-out
            ${showNavBar ? "translate-x-0" : "-translate-x-full"}
          `}
        style={{ boxShadow: "2px 0 16px rgba(0,0,0,0.15)" }}
      >
        <div className="flex justify-end">
          <button
            className="text-pr"
            onClick={() => setShowNavBar(false)}
            aria-label={copy.aria.close}
          >
            <IoCloseSharp size={28} />
          </button>
        </div>

        <ul className="space-y-5 z-50 font-sarabun font-normal text-sm">
          <li className="mx-2">
            <button
              className={`${
                isActive("home") ? "text-pr" : "text-white/70 hover:text-pr"
              }`}
              onClick={() => navigateTo("home")}
            >
              {copy.menu.home}
            </button>
          </li>

          {/* Parent li has NO opacity; links control their own tone */}
          <li className="mx-2">
            <button
              className={
                isActive("services") ? "text-pr" : "text-white/70 hover:text-pr"
              }
              onClick={() => navigateTo("services")}
            >
              {copy.menu.services}
            </button>

            {/* Mobile submenu */}
            <ul className="ml-4 mt-2 space-y-2">
              <li>
                <button
                  onClick={() => navigateTo("servicesWeb")}
                  className="block px-1 py-1 text-white/70 hover:text-pr text-left w-full"
                >
                  {copy.subServices.web}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("servicesMobile")}
                  className="block px-1 py-1 text-white/70 hover:text-pr text-left w-full"
                >
                  {copy.subServices.mobile}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo("servicesShowcase")}
                  className="block px-1 py-1 text-white/70 hover:text-pr text-left w-full"
                >
                  {copy.subServices.showcase}
                </button>
              </li>
            </ul>
          </li>

          <li className="mx-2">
            <button
              className={
                isActive("portfolio")
                  ? "text-pr"
                  : "text-white/70 hover:text-pr"
              }
              onClick={() => navigateTo("portfolio")}
            >
              {copy.menu.portfolio}
            </button>
          </li>

          <li className="mx-2">
            <button
              className={
                isActive("about") ? "text-pr" : "text-white/70 hover:text-pr"
              }
              onClick={() => navigateTo("about")}
            >
              {copy.menu.about}
            </button>
          </li>

          <li className="mx-2">
            <button
              className={
                isActive("contact") ? "text-pr" : "text-white/70 hover:text-pr"
              }
              onClick={() => navigateTo("contact")}
            >
              {copy.menu.contact}
            </button>
          </li>
        </ul>

        <div className="mt-10 border-t border-white/10 pt-6 px-2">
          <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
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
                className={`flex-1 rounded-xl border px-3 py-2 text-sm uppercase transition ${
                  loc === locale
                    ? "border-pr bg-pr/20 text-white"
                    : "border-white/10 text-white/70 hover:text-white"
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
        className="w-24 h-6 lg:w-36 lg:h-9"
        href={getLocalizedRoute(locale, "home")}
        aria-label={copy.menu.home}
      >
        <Image src={logo} alt="logo" className="object-cover" priority />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-10 font-sarabun font-normal text-base">
          <li className="mx-2">
            <Link
              href={getLocalizedRoute(locale, "home")}
              className={
                isActive("home") ? "text-pr" : "text-white/70 hover:text-pr"
              }
            >
              {copy.menu.home}
            </Link>
          </li>

          {/* Services: scoped hover with group; no cascade to submenu */}
          <li
            className="mx-2 relative group"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              className={`${
                isActive("services") ? "text-pr" : "text-white/70"
              } group-hover:text-pr`}
              aria-haspopup="true"
              aria-expanded={showDropdown ? "true" : "false"}
              onMouseEnter={handleEnter}
              onMouseLeave={handleLeave}
              onClick={() => navigateTo("services")}
            >
              {copy.menu.services}
            </button>

            {showDropdown && (
              <ul
                className="absolute left-0 top-full mt-2 w-64 bg-[#2B2E33] rounded-lg shadow-lg py-2 z-50"
                role="menu"
              >
                <li role="none">
                  <Link
                    href={getLocalizedRoute(locale, "servicesWeb")}
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    {copy.subServices.web}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href={getLocalizedRoute(locale, "servicesMobile")}
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    {copy.subServices.mobile}
                  </Link>
                </li>
                <li role="none">
                  <Link
                    href={getLocalizedRoute(locale, "servicesShowcase")}
                    className="block px-4 py-2 text-white/70 hover:text-pr"
                    role="menuitem"
                    onClick={() => setShowDropdown(false)}
                  >
                    {copy.subServices.showcase}
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mx-2">
            <Link
              href={getLocalizedRoute(locale, "portfolio")}
              className={
                isActive("portfolio")
                  ? "text-pr"
                  : "text-white/70 hover:text-pr"
              }
            >
              {copy.menu.portfolio}
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href={getLocalizedRoute(locale, "about")}
              className={
                isActive("about") ? "text-pr" : "text-white/70 hover:text-pr"
              }
            >
              {copy.menu.about}
            </Link>
          </li>

          <li className="mx-2">
            <Link
              href={getLocalizedRoute(locale, "contact")}
              className={
                isActive("contact") ? "text-pr" : "text-white/70 hover:text-pr"
              }
            >
              {copy.menu.contact}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60">
          {locales.map((loc) => (
            <Link
              key={loc}
              href={
                currentRouteKey && routeSlugs[currentRouteKey]
                  ? getLocalizedRoute(loc, currentRouteKey)
                  : getLocalePath(loc, normalizedPath || "/")
              }
              className={`px-2 py-1 rounded-lg transition ${
                loc === locale ? "bg-pr/20 text-white" : "hover:text-white"
              }`}
            >
              {loc.toUpperCase()}
            </Link>
          ))}
        </div>
        <Link
          href={getLocalizedRoute(locale, "contact")}
          className="gradient-stroke-box hidden lg:inline-flex"
        >
          {copy.menu.call}
        </Link>
      </div>
    </header>
  );
};

export default NavHeader;
