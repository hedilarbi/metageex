export const locales = ["en", "fr"];
export const defaultLocale = "en";

export function normalizeLocale(rawLocale) {
  if (!rawLocale) return defaultLocale;
  const locale = rawLocale.split("-")[0].toLowerCase();
  return locales.includes(locale) ? locale : defaultLocale;
}
