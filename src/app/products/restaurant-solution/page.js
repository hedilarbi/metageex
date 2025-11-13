import RestaurantProductPage, {
  generateMetadata as generateLocalizedMetadata,
} from "@/app/[locale]/produits/solution-restauration/page";

export function generateMetadata() {
  return generateLocalizedMetadata({ params: { locale: "en" } });
}

export default function RestaurantProductRootPage() {
  return <RestaurantProductPage params={{ locale: "en" }} />;
}
