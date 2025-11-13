import Image from "next/image";
import React from "react";
import { FiMail, FiMapPin, FiPhoneCall, FiClock } from "react-icons/fi";
import contactHero from "@public/images/contactHero.svg";
import ContactForm from "@/components/ContactForm";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";

const contactMetadata = {
  en: {
    title: "Contact Metageex — Web, mobile & SaaS experts",
    description:
      "Share your roadmap and we’ll craft a tailored action plan within 24h. Workshops, audits and delivery teams for web, mobile and SaaS products.",
  },
  fr: {
    title: "Contact Metageex — Experts web, mobile & SaaS",
    description:
      "Expliquez-nous vos objectifs et nous bâtissons un plan d'action en moins de 24h. Workshops, audits et équipes dédiées.",
  },
};

const contactCopy = {
  en: {
    heroTitle: "Contact us",
    heroSubtitle: "One point of contact to go from idea to live product.",
    eyebrow: "Let's talk about your project",
    intro:
      "From discovery to launch, we assemble the dedicated team that pilots your roadmap, coordinates workshops and aligns with your KPIs.",
    highlights: [
      "End-to-end support: discovery, UX/UI, development, launch and growth.",
      "Fast responses: get a qualified action plan within 24 business hours.",
      "Alignment workshops offered to clarify scope, roadmap and success metrics.",
    ],
    stats: [
      {
        value: "24 h",
        label: "Average response time to receive a qualified call-back.",
      },
      {
        value: "120+",
        label: "Projects shipped: SaaS, e-commerce, mobile apps and tooling.",
      },
    ],
    channels: [
      {
        title: "Project team",
        value: "contact@metageex.com",
        description:
          "An expert answers you and prepares a free first audit.",
        href: "mailto:contact@metageex.com",
        icon: FiMail,
      },
      {
        title: "WhatsApp & phone",
        value: "+216 58 485 001",
        description: "Monday to Friday — 9am to 7pm (CET).",
        href: "tel:+21658485001",
        icon: FiPhoneCall,
      },
      {
        title: "Offices & remote",
        value: "Bizerte · Remote",
        description: "On-site or remote workshops (Google Meet, Teams, Zoom).",
        href: "https://maps.google.com/?q=Metageex",
        icon: FiMapPin,
        external: true,
      },
      {
        title: "Product support",
        value: "48h max",
        description: "Maintenance, custom SLAs and proactive monitoring.",
        href: "#contact-form",
        icon: FiClock,
      },
    ],
    method: {
      eyebrow: "Our method",
      title: "A transparent collaboration built on short milestones.",
      description:
        "Every step is documented in Notion/Jira and shared with your teams to keep everyone aligned.",
      steps: [
        {
          title: "01. Express diagnosis",
          description:
            "You share business objectives, constraints and the current status of your product.",
        },
        {
          title: "02. Strategic workshop",
          description:
            "We co-build the roadmap, scope and KPIs, then validate the delivery plan.",
        },
        {
          title: "03. Launch & delivery",
          description:
            "We kick off with a dedicated squad, sprint zero and weekly rituals.",
        },
      ],
    },
  },
  fr: {
    heroTitle: "Contactez-nous",
    heroSubtitle: "Un point de contact unique pour passer de l'idée au produit.",
    eyebrow: "Discutons de votre projet",
    intro:
      "Du cadrage au déploiement, nous mobilisons l'équipe dédiée qui pilote votre roadmap, anime les ateliers et s'aligne sur vos KPI.",
    highlights: [
      "Accompagnement de bout en bout : discovery, UX/UI, développement, mise en production et croissance.",
      "Réponses rapides : un plan d'action clair en moins de 24 h ouvrées.",
      "Workshops d'alignement offerts pour cadrer vision, roadmap et indicateurs de réussite.",
    ],
    stats: [
      {
        value: "24 h",
        label: "Délai moyen pour obtenir un retour qualifié.",
      },
      {
        value: "120+",
        label: "Projets menés : SaaS, e-commerce, mobile et outils métiers.",
      },
    ],
    channels: [
      {
        title: "Équipe projets",
        value: "contact@metageex.com",
        description:
          "Un expert vous répond et prépare un premier audit gratuit.",
        href: "mailto:contact@metageex.com",
        icon: FiMail,
      },
      {
        title: "WhatsApp & téléphone",
        value: "+216 58 485 001",
        description: "Disponible du lundi au vendredi — 09h à 19h (CET).",
        href: "tel:+21658485001",
        icon: FiPhoneCall,
      },
      {
        title: "Bureaux & visio",
        value: "Bizerte · Remote",
        description:
          "Workshops sur site ou à distance (Google Meet, Teams, Zoom).",
        href: "https://maps.google.com/?q=Metageex",
        icon: FiMapPin,
        external: true,
      },
      {
        title: "Support produit",
        value: "48 h max de délai",
        description:
          "Maintenance applicative, SLA personnalisés et monitoring.",
        href: "#contact-form",
        icon: FiClock,
      },
    ],
    method: {
      eyebrow: "Notre méthode",
      title: "Une collaboration transparente, basée sur des jalons courts.",
      description:
        "Chaque étape est documentée dans Notion/Jira et partagée avec vos équipes pour garder tout le monde aligné.",
      steps: [
        {
          title: "01. Diagnostic express",
          description:
            "Vous partagez vos objectifs business, vos contraintes et l'état du produit.",
        },
        {
          title: "02. Atelier stratégique",
          description:
            "Nous co-construisons la roadmap, le cadrage technique et les KPI attendus.",
        },
        {
          title: "03. Lancement orchestré",
          description:
            "Mise en place de l'équipe, sprint zero, planning de livraison et points hebdo.",
        },
      ],
    },
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = contactMetadata[locale] || contactMetadata.en;
  const canonical = getLocalizedRoute(locale, "contact");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("contact"),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: absoluteUrl,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: ["/opengraph-image.png"],
    },
  };
}

const ContactPage = ({ params }) => {
  const locale = params?.locale || defaultLocale;
  const copy = contactCopy[locale] || contactCopy[defaultLocale];

  return (
    <main className=" w-full h-full relative overflow-hidden pb-24">
      <section className="w-full lg:h-[70vh] h-[50vh] relative mt-20 lg:mt-32 ">
        <div className="top-half-elipse" />

        <div className=" z-10 w-full h-full">
          <div className="contactHero">
            <Image src={contactHero} alt="contactHero" />
          </div>
          <div className="serviceHeroContainer">
            <div className="h-full w-full flex flex-col items-center justify-center">
              <h1 className="font-inter font-semibold md:text-4xl text-white inline-block text-xl">
                {copy.heroTitle}
                <div className="titleUnderline" />
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="relative w-full px-6 lg:px-24 mt-10">
        <div className="productBlueLeftElipse" />
        <div className="relative z-20 mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-lg p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pr">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-white lg:text-4xl">
              {copy.heroSubtitle}
            </h2>
            <p className="mt-4 text-white/70">
              {copy.intro}
            </p>
            <ul className="mt-8 space-y-5">
              {copy.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 text-white/80 text-sm lg:text-base"
                >
                  <span className="mt-1 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl border border-pr/30 bg-pr/10 text-sm font-semibold text-pr">
                    ✓
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {copy.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white"
                >
                  <p className="text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {copy.channels.map((channel) => {
              const Icon = channel.icon;
              const cardContent = (
                <>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pr to-pr-dark-opaque text-xl text-white">
                      <Icon />
                    </span>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-white/60">
                        {channel.title}
                      </p>
                      <p className="text-xl font-semibold text-white">
                        {channel.value}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/70">
                    {channel.description}
                  </p>
                </>
              );

              return channel.href ? (
                <a
                  key={channel.title}
                  href={channel.href}
                  target={
                    channel.external || channel.href.startsWith("http")
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    channel.external || channel.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                  className="group rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-pr/50 hover:bg-white/10"
                >
                  {cardContent}
                </a>
              ) : (
                <div
                  key={channel.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="w-full  relative  mb-40   ">
        <div className="productBlueLeftElipse" />
        <div className="z-20  left-0 top-0 w-full h-full">
          <div
            id="contact-form"
            className="w-full flex flex-col items-center h-full lg:mt-4"
          >
            <ContactForm locale={locale} />
          </div>
        </div>
      </section>
      <section className="relative w-full px-6 lg:px-24 -mt-20">
        <div className="top-half-elipse" />
        <div className="relative z-20 mx-auto max-w-6xl rounded-3xl border border-white/10 bg-gradient-to-r from-[#0F1B2C] via-[#0E1827] to-[#09111C] p-8 lg:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-2/5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pr">
                {copy.method.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white lg:text-3xl">
                {copy.method.title}
              </h3>
              <p className="mt-4 text-white/70">{copy.method.description}</p>
            </div>
            <div className="grid flex-1 gap-4 sm:grid-cols-3">
              {copy.method.steps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-pr">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm text-white/80">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
