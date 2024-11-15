import { Link, Pathnames } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type FooterMenuItem = {
  text: string;
  href: Pathnames;
};

const Footer = () => {
  const t = useTranslations("Footer");
  const tm = useTranslations("Policies");

  const footerMenu: FooterMenuItem[] = [
    {
      text: tm("privacy"),
      href: "/privacy",
    },
    {
      text: tm("terms"),
      href: "/terms-conditions",
    },
  ];

  return (
    <footer className="bg-dark text-white">
      <div className="block-content py-16 lg:py-24">
        <p className="h3 lg:h1 font-title en:lg:max-w-[24ch] mb-5 lg:mb-20 text-center lg:text-left">
          {t.rich("text", {
            color: (chunk) => <span className="text-primary">{chunk}</span>,
          })}
        </p>
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 text-center">
          <p className="lg:text-left">
            © {new Date().getFullYear().toString()} DareVita. {t("copyright")}
          </p>
          <ul className="flex flex-col lg:flex-row gap-4 items-center">
            {footerMenu.map((item, index) => (
              <li
                key={index}
                className="underline hover:text-primary transition-colors"
              >
                <Link href={item.href}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
