import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "es"],

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/privacy": {
      en: "/privacy",
      es: "/privacidad",
    },
    "/terms-conditions": {
      en: "/terms-conditions",
      es: "/terminos-condiciones",
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const port = process.env.PORT || 3000;
export const host = process.env.PRODUCTION_URL
  ? `${process.env.PRODUCTION_URL}`
  : `http://localhost:${port}`;

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
