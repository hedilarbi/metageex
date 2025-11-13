import React from "react";
import { FaCheck } from "react-icons/fa6";
import Image from "next/image";
import productHero from "@public/images/productHero.svg";
import styles from "./FeatureCard.module.css";
import { defaultLocale } from "@/lib/i18n";

const stepsCopy = {
  en: {
    title: "Our development process",
    subtitle:
      "A proven agile methodology that keeps quality, timing and business outcomes on track.",
    steps: [
      {
        title: "Discovery & planning",
        description:
          "Workshops to clarify business objectives, users, scope and technical constraints.",
        bullets: [
          "Business discovery",
          "Technical architecture",
          "Roadmap & KPIs",
        ],
      },
      {
        title: "Design & prototyping",
        description:
          "UX/UI exploration, interactive prototypes and design system ready for build.",
        bullets: [
          "User journeys",
          "Wireframes & UI kit",
          "Interactive prototypes",
        ],
      },
      {
        title: "Agile development",
        description:
          "Iterative sprints with weekly demos, code reviews and automated tests.",
        bullets: ["2-week sprints", "Code reviews", "Automated testing"],
      },
      {
        title: "Quality & launch",
        description:
          "Comprehensive QA, performance checks and secure deployments with monitoring.",
        bullets: ["QA & UAT", "Performance/security", "Deployment & monitoring"],
      },
      {
        title: "Growth & optimisation",
        description:
          "Post-launch support, analytics and continuous optimisation based on feedback.",
        bullets: ["Maintenance & SLA", "Product analytics", "Roadmap updates"],
      },
    ],
  },
  fr: {
    title: "Notre processus de développement",
    subtitle:
      "Une méthodologie agile éprouvée pour garantir la qualité, les délais et les résultats.",
    steps: [
      {
        title: "Analyse & planification",
        description:
          "Ateliers pour clarifier vos objectifs, utilisateurs, périmètre et contraintes techniques.",
        bullets: [
          "Découverte métier",
          "Architecture technique",
          "Roadmap & KPI",
        ],
      },
      {
        title: "Design & prototypage",
        description:
          "Explorations UX/UI, prototypes interactifs et design system prêt pour le développement.",
        bullets: [
          "Parcours utilisateurs",
          "Wireframes & UI kit",
          "Prototypes interactifs",
        ],
      },
      {
        title: "Développement agile",
        description:
          "Sprints itératifs avec démos hebdomadaires, code reviews et tests automatisés.",
        bullets: ["Sprints de 2 semaines", "Code reviews", "Tests automatisés"],
      },
      {
        title: "Tests & lancement",
        description:
          "QA complète, performance, sécurité et déploiements monitorés.",
        bullets: [
          "QA & recettes",
          "Performance / sécurité",
          "Déploiement & monitoring",
        ],
      },
      {
        title: "Croissance & optimisation",
        description:
          "Support post-lancement, analytics et évolutions continues.",
        bullets: ["Maintenance & SLA", "Analytics produit", "Évolutions roadmap"],
      },
    ],
  },
};

const Techs = ({ locale = defaultLocale }) => {
  const copy = stepsCopy[locale] || stepsCopy[defaultLocale];

  return (
    <section id="process" className="w-full relative font-inter md:py-20 py-10">
      <div className="productHero">
        <Image src={productHero} alt="productHero" />
      </div>
      <div className="productBlueRightElipse" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full text-center flex flex-col items-center mb-16">
          <h2 className="font-inter text-white font-semibold lg:text-4xl text-center text-xl">
            {copy.title}
            <div className="titleUnderline" />
          </h2>
          <p className="font-inter font-normal text-white text-opacity-60 mt-8 leading-relaxed lg:text-2xl text-base">
            {copy.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {copy.steps.map((step, index) => (
            <article key={step.title} className={styles.container}>
              <div className={styles.shadowCircle} />
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center mr-4 text-white font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
              </div>
              <p className="text-white text-opacity-70 mb-4">
                {step.description}
              </p>
              <ul className="space-y-2 text-sm text-white">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-center">
                    <span className="text-pr mr-2">
                      <FaCheck />
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Techs;
