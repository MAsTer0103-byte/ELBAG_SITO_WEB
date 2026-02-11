import { getRequestConfig } from "next-intl/server";

import { defaultLocale, locales } from "./locales";

export default getRequestConfig(async ({ locale }) => {
  const candidateLocale = locale ?? defaultLocale;
  const resolvedLocale = locales.includes(
    candidateLocale as typeof locales[number]
  )
    ? (candidateLocale as typeof locales[number])
    : defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default,
  };
});
