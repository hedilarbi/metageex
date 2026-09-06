import HeroSection from "@/components/homePage/HeroSection";
import IntroductionSection from "@/components/homePage/IntroductionSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import ProcessSection from "@/components/homePage/ProcessSection";
import PortfolioSection from "@/components/homePage/PortfolioSection";
import ExpertiseSection from "@/components/homePage/ExpertiseSection";
import TestimonialSection from "@/components/homePage/TestimonialSection";
import FinalCtaSection from "@/components/homePage/FinalCtaSection";
import { defaultLocale } from "@/lib/i18n";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedRoute,
} from "@/lib/localePath";

const homeMetadata = {
  en: {
    title: "Global web, SaaS & mobile development agency",
    description:
      "Custom websites, web apps, SaaS platforms and mobile apps for ambitious teams worldwide.",
  },
  fr: {
    title: "Agence digitale — développement web, mobile & SaaS",
    description:
      "Applications web et mobiles, SaaS et sites vitrines pour startups et PME internationales.",
  },
};

export function generateMetadata({ params }) {
  const locale = params?.locale || defaultLocale;
  const meta = homeMetadata[locale] || homeMetadata.en;
  const canonical = getLocalizedRoute(locale, "home");
  const absoluteUrl = getAbsoluteUrl(canonical);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical,
      languages: getLanguageAlternates("home"),
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

export default function Home({ params }) {
  const locale = params?.locale || defaultLocale;

  return (
    <main className="overflow-hidden w-screen h-full bg-[#050A0F]">
      <HeroSection locale={locale} />
      <IntroductionSection locale={locale} />
      <ServicesSection locale={locale} />
      <ProcessSection locale={locale} />
      <PortfolioSection locale={locale} />
      <ExpertiseSection locale={locale} />
      <TestimonialSection locale={locale} />
      <FinalCtaSection locale={locale} />
    </main>
  );
}
