import AboutSection from "@/components/homePage/AboutSection";
import ContactSection from "@/components/homePage/ContactSection";
import HeroSection from "@/components/homePage/HeroSection";
import ProductsSection from "@/components/homePage/ProductsSection";
import PortfolioSection from "@/components/homePage/PortfolioSection";
import ServicesSection from "@/components/homePage/ServicesSection";
import StatsSection from "@/components/homePage/StatsSection";
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
    <main className="overflow-hidden w-screen h-full ">
      <HeroSection locale={locale} />
      <ServicesSection locale={locale} />
      <StatsSection locale={locale} />
      <ProductsSection locale={locale} />
      {/* <PortfolioSection locale={locale} /> */}
      <AboutSection locale={locale} />
      <ContactSection locale={locale} />
    </main>
  );
}
