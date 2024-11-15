"use client";
import { useContext } from "react";
import Icons, { IconsList } from "./Icons";
import Link from "next/link";
import { SectionsContext } from "@/contexts/SectionsContext";

interface Social {
  icon: IconsList;
  href: string;
}
interface Props {
  elemId: string[];
}

const Aside = ({ elemId }: Props) => {
  const social: Social[] = [
    {
      icon: "x",
      href: "#",
    },
    {
      icon: "instagram",
      href: "#",
    },
    {
      icon: "facebook",
      href: "#",
    },
  ];
  const context = useContext(SectionsContext);

  if (!context) {
    throw new Error("SectionContext is not defined");
  }

  const { activeSection } = context;
  return (
    <aside className="hidden lg:flex flex-col justify-between items-center h-svh w-14 py-10 bg-primary text-white fixed top-0 left-0">
      <Icons icon="darevita" className="w-11 fill-white pointer-events-none" />
      <nav className="h-1/3">
        <ul className="flex flex-col gap-2 h-full">
          {elemId.map((item, k) => (
            <li key={item} className="grow min-h-2">
              <Link
                href={`#${item}`}
                className={`block w-2 h-full bg-white hover:opacity-100 transition-opacity ${
                  activeSection === k ? "opacity-100" : "opacity-70"
                }`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <ul className="flex flex-col gap-2">
        {social.map((item) => (
          <li key={item.icon}>
            <Link
              href={item.href}
              target="_blank"
              className="fill-white hover:fill-dark block p-2"
            >
              <Icons icon={item.icon} className="w-6 transition-colors" />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
