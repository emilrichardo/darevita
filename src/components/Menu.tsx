import { SectionsContext } from "@/contexts/SectionsContext";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useContext } from "react";

interface Props {
  elemId: string[];
}

const Menu = ({ elemId }: Props) => {
  const t = useTranslations("Menu");
  const menu = [
    t("item1"),
    t("item2"),
    t("item3"),
    t("item4"),
    t("item5"),
    t("item6"),
  ];
  const context = useContext(SectionsContext);

  if (!context) {
    throw new Error("SectionContext is not defined");
  }

  const { activeSection } = context;
  return (
    <>
      {menu.map((item, k) => {
        const href = { pathname: "/" as const, hash: elemId[k] };
        return (
          <Link
            key={k}
            href={href}
            className={`hover:text-primary transition-colors py-2 lg:py-0 ${
              activeSection === k ? "text-primary" : "text-white"
            }`}
          >
            {item}
          </Link>
        );
      })}
    </>
  );
};

export default Menu;
