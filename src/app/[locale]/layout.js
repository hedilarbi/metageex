import { notFound } from "next/navigation";

const supportedLocales = ["fr"];

export const dynamicParams = false;

export function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export default function LocaleLayout({ children, params }) {
  const locale = params?.locale;

  if (!locale || !supportedLocales.includes(locale)) {
    notFound();
  }

  return <>{children}</>;
}
