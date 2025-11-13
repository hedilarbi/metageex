import HomePage, { generateMetadata as generateLocalizedMetadata } from "./[locale]/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function RootPage() {
  return <HomePage params={{ locale: "en" }} />;
}
