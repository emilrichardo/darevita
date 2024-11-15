"use client";

import { HeaderContext } from "@/contexts/HeaderContext";
import { Link } from "@/i18n/routing";
import { useContext, useState } from "react";
import Icons from "./Icons";
import Menu from "./Menu";
import LangSwitcher from "./LangSwitcher";

interface Props {
  elemId: string[];
}

const Header = ({ elemId }: Props) => {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("HeaderContext is not defined");
  }

  const { headerBg } = context;
  const [mobilePanel, setMobilePanel] = useState(false);

  const handleBtn = () => {
    setMobilePanel(!mobilePanel);
  };

  return (
    <header className="z-10 isolate fixed top-0 right-0 w-full lg:w-[calc(100%_-_theme(spacing.14))]">
      <div
        className={`flex justify-between items-center py-3 px-7 lg:px-12 lg:py-3 text-white border-b transition-colors ${headerBg}`}
      >
        <Link href="/">
          <Icons icon="logo" className="h-9 lg:h-12" />
        </Link>
        <nav className="hidden lg:flex gap-5 2xl:gap-8 font-semibold">
          <Menu elemId={elemId} />
        </nav>
        <div className="flex gap-4 items-center">
          <LangSwitcher />
          <button
            className={`nav-button flex lg:hidden rounded ${
              mobilePanel && "active"
            }`}
            onClick={handleBtn}
          >
            <span className="nav-line -translate-y-1 transition-bar-x"></span>
            <span className="nav-line opacity-1 transition-bar-middle"></span>
            <span className="nav-line translate-y-1 transition-bar-x"></span>
          </button>
        </div>
      </div>

      <nav
        className={`nav-panel -z-[1] lg:invisible lg:pointer-events-none ${
          mobilePanel && "active"
        }`}
      >
        <Menu elemId={elemId} />
      </nav>
    </header>
  );
};

export default Header;
