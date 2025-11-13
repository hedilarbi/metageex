import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import productHero from "@public/images/productHero.svg";
import BenefitCard from "@/components/benefitCard/BenefitCard";
import advantage1 from "@public/images/advantage1.svg";
import advantage2 from "@public/images/advantage2.svg";
import advantage3 from "@public/images/advantage3.svg";
import advantage4 from "@public/images/advantage4.svg";
import FeatureCard from "@/components/featureCard/FeatureCard";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";

const copy = {
  en: {
    title: "Modern archive management platform",
    heroDescription:
      "Simplify how you store, organise and share digital archives with a secure SaaS platform.",
    status: "In development — beta coming soon",
    cta: "Contact us",
    featuresTitle: "Key capabilities",
    features: [
      {
        title: "Central dashboard",
        content:
          "Monitor storage, activity and retention policies from a single interface (web & mobile).",
        ul: true,
      },
      {
        title: "Smart ingestion",
        content:
          "Bulk upload, OCR enrichment and metadata templates to structure your archives faster.",
      },
      {
        title: "Advanced search",
        content:
          "Multi-criteria search with filters, tags and access rights to retrieve documents instantly.",
      },
      {
        title: "Secure sharing",
        content:
          "Granular permissions, expiring links and audit logs to share archives safely.",
      },
    ],
    benefitsTitle: "Why choose this solution?",
    benefits: [
      {
        icon: advantage1,
        title: "Operational efficiency",
        content: "Automated workflows and real-time dashboards accelerate your teams.",
      },
      {
        icon: advantage2,
        title: "Data security",
        content:
          "Encryption, backups and detailed access controls to protect sensitive documents.",
        reverse: true,
      },
      {
        icon: advantage3,
        title: "Collaboration",
        content:
          "Role-based access and contextual annotations improve collaboration across departments.",
      },
      {
        icon: advantage4,
        title: "Scalability",
        content: "Cloud-native infrastructure ready for thousands of archives and users.",
        reverse: true,
      },
    ],
  },
  fr: {
    title: "Révolutionnez la gestion de vos archives",
    heroDescription:
      "Simplifiez le stockage, l’organisation et le partage de vos archives numériques avec une plateforme SaaS sécurisée.",
    status: "En cours de développement — beta prochainement",
    cta: "Contactez-nous",
    featuresTitle: "Fonctionnalités clés",
    features: [
      {
        title: "Dashboard centralisé",
        content:
          "Suivez le stockage, les activités et les politiques de conservation depuis une interface unique (web & mobile).",
        ul: true,
      },
      {
        title: "Ingestion intelligente",
        content:
          "Import en masse, OCR et modèles de métadonnées pour structurer rapidement vos archives.",
      },
      {
        title: "Recherche avancée",
        content:
          "Recherche multi-critères avec filtres, tags et droits d’accès pour retrouver un document instantanément.",
      },
      {
        title: "Partage sécurisé",
        content:
          "Permissions granulaires, liens temporaires et journaux d’audit pour partager en toute sécurité.",
      },
    ],
    benefitsTitle: "Pourquoi choisir cette solution ?",
    benefits: [
      {
        icon: advantage1,
        title: "Efficacité opérationnelle",
        content:
          "Workflows automatisés et tableaux de bord temps réel accélèrent vos équipes.",
      },
      {
        icon: advantage2,
        title: "Sécurité des données",
        content:
          "Chiffrement, sauvegardes et contrôles d’accès détaillés protègent vos documents sensibles.",
        reverse: true,
      },
      {
        icon: advantage3,
        title: "Collaboration",
        content:
          "Accès par rôle et annotations contextuelles améliorent la collaboration inter-services.",
      },
      {
        icon: advantage4,
        title: "Scalabilité",
        content:
          "Infrastructure cloud prête à accueillir des milliers d’archives et d’utilisateurs.",
        reverse: true,
      },
    ],
  },
};

const metaCopy = {
  en: {
    title: "Digital archive solution — SaaS platform by Metageex",
    description:
      "Secure, intuitive archive management platform: ingestion, OCR, search, sharing and monitoring.",
  },
  fr: {
    title: "Solution d’archive numérique — plateforme SaaS Metageex",
    description:
      "Plateforme sécurisée et intuitive pour stocker, organiser et partager vos archives numériques.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = metaCopy[locale] || metaCopy.en;
  const canonical = getLocalizedRoute(locale, "productArchive");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("productArchive"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
      images: [{ url: "/opengraph-image.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image.png"],
    },
  };
}

const ArchiveProductPage = ({ params }) => {
  const locale = params?.locale || defaultLocale;
  const text = copy[locale] || copy[defaultLocale];

  return (
    <main className="w-full h-full relative overflow-hidden">
      <section className="w-full lg:h-[95vh] h-[70vh] relative ">
        <div className="top-half-elipse" />

        <div className="absolute z-10 w-full h-full lg:top-32 top-20">
          <div className="serviceHeroContainer">
            <div className="relative  lg:w-2/3  w-full">
              <h1 className="font-inter font-semibold lg:text-4xl text-xl text-white text-center">
                {text.title}
              </h1>
              <div className="shadowCircle" />
            </div>
            <p className="lg:w-2/3 text-white font-inter lg:text-2xl text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-4 lg:mt-12">
              {text.heroDescription}
            </p>
            <p className="lg:w-2/3 text-white font-inter lg:text-lg text-sm text-opacity-60 font-light text-center  leading-loose tracking-wide px-6 mt-4 lg:mt-6 italic">
              {text.status}
            </p>
            <Link
              href={getLocalizedRoute(locale, "contact")}
              className="flex justify-center lg:text-base text-sm gap-5 items-center lg:py-4 py-2 px-6 rounded-lg  text-center  bg-gradient-to-r from-pr to-pr-dark-opaque text-white lg:mt-12 mt-4"
            >
              <p>{text.cta}</p>
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full relative lg:mt-24 mt-12">
        <div className="productHero">
          <Image src={productHero} alt="Product hero" />
        </div>
        <div className="productBlueRightElipse" />
        <div className="z-20 w-full h-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col items-center">
            <h2 className="font-inter text-white font-semibold lg:text-4xl lg:text-left text-center text-xl">
              {text.featuresTitle}
              <div className="titleUnderline" />
            </h2>
            <div className="flex flex-col lg:flex-row w-full lg:gap-10  gap-8 flex-1 lg:flex-wrap lg:justify-between lg:mt-20 mt-10  lg:px-12 px-6">
              {text.features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full relative mt-20 mb-24">
        <div className="z-20 w-full h-full flex flex-col items-center">
          <div className="w-full h-full flex flex-col items-center pb-20">
            <h2 className="font-inter text-white font-semibold lg:text-4xl text-xl text-center">
              {text.benefitsTitle}
              <div className="titleUnderline" />
            </h2>
            <div className="flex w-full gap-10 lg:px-12 lg:gap-5 lg:flex-row flex-col lg:justify-between lg:mt-20 mt-10 px-6">
              {text.benefits.map((benefit) => (
                <BenefitCard key={benefit.title} {...benefit} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArchiveProductPage;
