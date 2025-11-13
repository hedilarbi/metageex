import WebAppPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/services/developpement-application-web/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function WebAppRootPage() {
  return <WebAppPage params={{ locale: "en" }} />;
}
