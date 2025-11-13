import ContactPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/contact/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function ContactRootPage() {
  return <ContactPage params={{ locale: "en" }} />;
}
