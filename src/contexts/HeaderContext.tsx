"use client";

import { createContext, useEffect, useRef, useState } from "react";

interface HeaderContextProps {
  headerBg: string | null;
  setHeaderBg: React.Dispatch<React.SetStateAction<string | null>>;
  topRef: React.MutableRefObject<HTMLDivElement | null>;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

const HeaderContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerBg, setHeaderBg] = useState<string | null>(
    "bg-white/20 border-white/30"
  );
  const topRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentRef = topRef.current;
    const navH = window.innerWidth > 1080 ? 73 : 65;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderBg("bg-white/20 border-white/30");
        } else {
          setHeaderBg("bg-dark border-dark");
        }
      },
      {
        rootMargin: `0px 0px -${window.innerHeight - navH}px 0px`,
        threshold: 0,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [headerBg]);

  return (
    <HeaderContext.Provider value={{ headerBg, setHeaderBg, topRef }}>
      {children}
    </HeaderContext.Provider>
  );
};

export { HeaderContext, HeaderContextProvider };
