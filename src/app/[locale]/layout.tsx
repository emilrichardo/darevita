import localFont from "next/font/local";
import { Inter, Bebas_Neue } from "next/font/google";
import "./../globals.css";
import {
  getMessages,
  getTranslations,
  setRequestLocale,
} from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { host, routing } from "@/i18n/routing";
import { notFound } from "next/navigation";

const axiforma = localFont({
  src: "./../fonts/AxiformaBold.woff2",
  variable: "--font-axiforma",
  weight: "700",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const bebasNeue = Bebas_Neue({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
});

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<Props, "children">) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    metadataBase: new URL(host),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    keywords: [
      "Deravita",
      "Well-being",
      "Exercise",
      "Nutrition",
      "Health",
      "MLM",
    ],
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();
  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${axiforma.variable} ${inter.variable} ${bebasNeue.variable} antialiased bg-white text-grey lg:pl-14 leading-normal text-xl [--header-h:65px] lg:[--header-h:73px]`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
