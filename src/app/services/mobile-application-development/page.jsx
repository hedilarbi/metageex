import MobileServicePage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/services/developpement-application-mobile/page.jsx";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function MobileServiceRootPage() {
  return <MobileServicePage params={{ locale: "en" }} />;
}
