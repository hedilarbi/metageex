// components/vitrineServicePage/VitrineServicesSection.jsx

import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import styles from "../../components/servicePage/FeatureCard.module.css";

// Si tu as une illu vitrine (sinon réutilise une existante)
import productHero from "../../../public/images/productHero.svg";

const VitrineServicesSection = () => {
  const cards = [
    {
      title: "Design & UX sur mesure",
      desc: "Maquettes modernes, identité visuelle respectée, parcours clair pour la conversion (contact, devis, prise de RDV).",
      bullets: ["Design responsive", "UI cohérente", "Accessibilité de base"],
    },
    {
      title: "Intégration & CMS",
      desc: "WordPress ou Next.js selon votre besoin. Pages modulaires, blog, formulaires et contenus facilement éditables.",
      bullets: [
        "Édition simple",
        "Formulaires sécurisés",
        "Multilingue possible",
      ],
    },
    {
      title: "SEO & Performance",
      desc: "Structure sémantique, titres/meta, sitemap/robots. Images optimisées et bonnes pratiques Core Web Vitals.",
      bullets: [
        "Balises/meta",
        "Maillage interne",
        "Vitesse & stabilité (CLS)",
      ],
    },
    {
      title: "Hébergement & Sécurité",
      desc: "Mise en ligne, SSL, sauvegardes, mises à jour et anti-spam. Monitoring basique et bonnes pratiques.",
      bullets: ["HTTPS/SSL", "Backups", "Hardening & anti-spam"],
    },
  ];

  return (
    <section className="w-full relative font-inter py-10 md:py-20">
      <div className="productHero">
        <Image src={productHero} alt="site vitrine hero" />
      </div>
      <div className="productBlueRightElipse" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full h-full flex flex-col items-center">
          <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
            Ce que nous livrons
            <div className="titleUnderline" />
          </h2>

          <div className="flex flex-col lg:flex-row w-full lg:gap-10 gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10 lg:px-12 px-6">
            {cards.map(({ title, desc, bullets }) => (
              <div key={title} className={styles.container}>
                <div className={styles.shadowCircle} />
                <h3 className="text-white font-inter font-semibold lg:text-lg text-base inline-block">
                  {title}
                  <div className="h-1 w-full mt-2 bg-gradient-to-r from-[#57B3FE] to-[rgba(9,148,248,0)]" />
                </h3>

                <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-base text-sm">
                  {desc}
                </p>

                <ul className="mt-6 space-y-2">
                  {bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center text-white font-inter font-normal gap-2"
                    >
                      <div className="text-pr">
                        <FaCheck />
                      </div>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/contact"
            className="gradient-bg text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition"
          >
            Parler de votre site vitrine
          </a>
        </div>
      </div>
    </section>
  );
};

export default VitrineServicesSection;
