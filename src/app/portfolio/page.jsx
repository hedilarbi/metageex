import PortfolioPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/portfolio/page.jsx";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function PortfolioRootPage() {
  return <PortfolioPage params={{ locale: "en" }} />;
}
