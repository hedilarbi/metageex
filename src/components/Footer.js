"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo from "../../public/images/logo.svg";

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0F1520] text-white">
      {/* Deco blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-pr/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-24 h-72 w-72 rounded-full bg-[#0994F8]/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src={logo}
                alt="Metageex — logo"
                width={128}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <p className="mt-5 max-w-md text-sm/6 text-white/70">
              Transformez vos idées en solutions digitales innovantes.
            </p>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pr"
              >
                <FaFacebookF className="text-white/80" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pr"
              >
                <FaTwitter className="text-white/80" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pr"
              >
                <FaLinkedinIn className="text-white/80" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 font-semibold">Navigation</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/produits/solution-restauration"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Nos Produits
                </Link>
              </li>
              <li>
                <Link
                  href="/apropos"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services (nouvelle colonne) */}
          <div>
            <p className="mb-4 font-semibold">Services</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/developpement-application-web"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Développement application web
                </Link>
              </li>
              <li>
                <Link
                  href="/services/developpement-mobile"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Développement mobile
                </Link>
              </li>
              <li>
                <Link
                  href="/services/site-vitrine"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Développement site vitrine
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          {/* <div>
            <p className="mb-4 font-semibold">Nos Solutions</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/produits/solution-restauration"
                  className="text-white/70 hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
                >
                  Solution de restauration
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Metageex. Tous droits réservés.</p>
          {/* <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/mentions-legales"
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
            >
              Politique de confidentialité
            </Link>
            <Link
              href="/cookies"
              className="hover:text-white focus:outline-none focus:ring-2 focus:ring-pr rounded"
            >
              Cookies
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
