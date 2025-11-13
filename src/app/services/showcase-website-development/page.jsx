import VitrineServicePage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/services/site-vitrine/page.jsx";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function VitrineServiceRootPage() {
  return <VitrineServicePage params={{ locale: "en" }} />;
}
