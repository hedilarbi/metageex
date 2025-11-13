import ServicesPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/services/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function ServicesRootPage() {
  return <ServicesPage params={{ locale: "en" }} />;
}
