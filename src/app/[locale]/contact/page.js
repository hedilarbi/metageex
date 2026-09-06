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
    title: "Contact Auxis Digital — Web, mobile & SaaS experts",
    description:
      "Share your roadmap and we’ll craft a tailored action plan within 24h. Workshops, audits and delivery teams for web, mobile and SaaS products.",
  },
  fr: {
    title: "Contact Auxis Digital — Experts web, mobile & SaaS",
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
        value: "contact@auxis-digital.com",
        description:
          "An expert answers you and prepares a free first audit.",
        href: "mailto:contact@auxis-digital.com",
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
        href: "https://maps.google.com/?q=Auxis Digital",
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
        value: "contact@auxis-digital.com",
        description:
          "Un expert vous répond et prépare un premier audit gratuit.",
        href: "mailto:contact@auxis-digital.com",
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
        href: "https://maps.google.com/?q=Auxis Digital",
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
    <main className="min-h-screen bg-[#050A0F] pt-20 pb-24 overflow-hidden relative">
      {/* Abstract Background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, #000 30%, transparent 100%)"
        }} />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pr/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0994F8]/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center text-center px-6 pt-24 pb-16">
        <h1 className="font-inter font-bold lg:text-[4.5rem] md:text-6xl text-4xl text-white tracking-tight drop-shadow-2xl">
          {copy.heroTitle}
        </h1>
        <p className="text-white/60 font-inter font-light lg:text-xl text-base max-w-2xl mt-6 leading-relaxed">
          {copy.heroSubtitle}
        </p>
      </section>

      {/* Main Content */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 grid gap-12 lg:grid-cols-[1.1fr,0.9fr] mt-8">
        {/* Left Column: Intro & Highlights */}
        <div className="rounded-3xl border border-white/5 bg-[#08101A] p-10 lg:p-12 shadow-2xl h-fit">
          <p className="text-sm font-semibold uppercase tracking-widest text-pr mb-4">
            {copy.eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-white mb-6">
            {copy.heroSubtitle}
          </h2>
          <p className="text-white/70 leading-relaxed font-light mb-10">
            {copy.intro}
          </p>
          <ul className="space-y-6">
            {copy.highlights.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-1 w-8 h-8 rounded-full bg-pr/10 flex items-center justify-center flex-shrink-0 border border-pr/20">
                  <span className="text-pr text-sm">✓</span>
                </div>
                <p className="text-white/80 font-light leading-relaxed">{item}</p>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 grid grid-cols-2 gap-6 pt-10 border-t border-white/5">
            {copy.stats.map((stat, idx) => (
              <div key={idx} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-xs text-white/60 leading-relaxed uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Channels */}
        <div className="grid gap-6 h-fit">
          {copy.channels.map((channel, idx) => {
            const Icon = channel.icon;
            const content = (
              <>
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-pr/50 group-hover:bg-pr/10 transition-colors">
                    <Icon className="text-2xl text-pr" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50 mb-1">
                      {channel.title}
                    </p>
                    <p className="text-xl font-bold text-white group-hover:text-pr transition-colors">
                      {channel.value}
                    </p>
                    <p className="mt-3 text-sm text-white/60 font-light leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>
              </>
            );

            return channel.href ? (
              <a
                key={idx}
                href={channel.href}
                target={channel.external || channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.external || channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group block rounded-3xl border border-white/5 bg-[#08101A] p-8 transition-all duration-300 hover:border-pr/30 hover:shadow-[0_0_30px_rgba(107,193,255,0.1)] hover:-translate-y-1"
              >
                {content}
              </a>
            ) : (
              <div key={idx} className="group rounded-3xl border border-white/5 bg-[#08101A] p-8">
                {content}
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-32" id="contact-form">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Send us a message</h2>
          <p className="text-white/60 font-light">We will get back to you within 24 hours.</p>
        </div>
        <div className="rounded-3xl border border-white/5 bg-[#08101A] p-8 lg:p-12 shadow-2xl">
          <ContactForm locale={locale} />
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative z-20 w-full max-w-7xl mx-auto px-6 mt-32">
        <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-[#08101A] to-[#050A0F] p-10 lg:p-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
            <div className="lg:w-1/3">
              <p className="text-sm font-semibold uppercase tracking-widest text-pr mb-4">
                {copy.method.eyebrow}
              </p>
              <h3 className="text-3xl font-bold text-white mb-6">
                {copy.method.title}
              </h3>
              <p className="text-white/60 font-light leading-relaxed">
                {copy.method.description}
              </p>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-3 gap-6">
              {copy.method.steps.map((step, idx) => (
                <div key={idx} className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm hover:border-pr/30 transition-colors">
                  <p className="text-xs font-bold uppercase tracking-widest text-pr mb-3">
                    {step.title}
                  </p>
                  <p className="text-sm text-white/70 font-light leading-relaxed">
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
