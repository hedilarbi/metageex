import ArchiveProductPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/produits/solution-archive-numerique/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function ArchiveProductRootPage() {
  return <ArchiveProductPage params={{ locale: "en" }} />;
}
