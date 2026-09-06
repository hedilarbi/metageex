"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "@public/images/logo.png";
import { getLocalizedRoute } from "@/lib/localePath";
import { defaultLocale } from "@/lib/i18n";

const year = new Date().getFullYear();

const footerCopy = {
  en: {
    tagline: "Technology that turns ambition into measurable growth.",
    navigation: "Navigation",
    services: "Services",
    columns: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      about: "About",
      contact: "Contact",
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
    rights: `© ${year} Auxis Digital. All rights reserved.`,
  },
  fr: {
    tagline: "La technologie qui transforme l'ambition en croissance mesurable.",
    navigation: "Navigation",
    services: "Services",
    columns: {
      home: "Accueil",
      services: "Services",
      portfolio: "Portfolio",
      about: "À propos",
      contact: "Contact",
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
    rights: `© ${year} Auxis Digital. Tous droits réservés.`,
  },
};

const Footer = () => {
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);
  const locale = segments[0] === "fr" ? "fr" : defaultLocale;
  const copy = footerCopy[locale] || footerCopy[defaultLocale];

  return (
    <footer className="relative overflow-hidden bg-[#050A0F] border-t border-white/5 text-white font-inter">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)"
      }} />

      {/* Deco glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pr/10 blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-[#0994F8]/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2 flex flex-col items-start pr-8">
            <Link
              href={getLocalizedRoute(locale, "home")}
              className="inline-flex items-center"
            >
              <Image
                src={logo}
                alt="Auxis Digital"
                width={160}
                height={50}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-8 max-w-sm text-base text-white/60 font-light leading-relaxed">
              {copy.tagline}
            </p>

            {/* Socials */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583942182273"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-pr/10 hover:border-pr/30 hover:text-pr focus:outline-none"
              >
                <FaFacebookF className="text-white/70 transition-colors hover:text-pr" />
              </a>
              <a
                href="https://www.linkedin.com/company/auxisdigital"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/10 transition-all duration-300 hover:bg-pr/10 hover:border-pr/30 hover:text-pr focus:outline-none"
              >
                <FaLinkedinIn className="text-white/70 transition-colors hover:text-pr" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-6 font-semibold text-white tracking-wide">{copy.navigation}</p>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <Link
                  href={getLocalizedRoute(locale, "home")}
                  className="text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {copy.columns.home}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedRoute(locale, "services")}
                  className="text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {copy.columns.services}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedRoute(locale, "portfolio")}
                  className="text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {copy.columns.portfolio}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedRoute(locale, "about")}
                  className="text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {copy.columns.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedRoute(locale, "contact")}
                  className="text-white/50 hover:text-white transition-colors focus:outline-none"
                >
                  {copy.columns.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2 lg:col-span-2">
            <p className="mb-6 font-semibold text-white tracking-wide">{copy.services}</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 text-sm font-light">
              {copy.subServices.map((service) => (
                <li key={service.key}>
                  <Link
                    href={getLocalizedRoute(locale, service.key)}
                    className="text-white/50 hover:text-white transition-colors focus:outline-none block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between font-light tracking-wide">
          <p>{copy.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
