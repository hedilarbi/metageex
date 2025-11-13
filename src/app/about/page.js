import AboutPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/apropos/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function AboutRootPage() {
  return <AboutPage params={{ locale: "en" }} />;
}
