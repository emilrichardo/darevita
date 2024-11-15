"use client";
import { createContext, useState, useEffect, useRef } from "react";

interface SectionContextProps {
  activeSection: number | null;
  setActiveSection: React.Dispatch<React.SetStateAction<number | null>>;
  sectionRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
}

const SectionsContext = createContext<SectionContextProps | undefined>(
  undefined
);

const SectionsContextProvider: React.FC<{
  secIds: string[];
  children: React.ReactNode;
}> = ({ secIds, children }) => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>(
    [...Array(secIds.length)].map(() => null)
  );

  useEffect(() => {
    const navH = window.innerWidth > 1080 ? 73 : 65;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        rootMargin: `-${navH}px 0px -${window.innerHeight - navH - 2}px 0px`,
        threshold: 0,
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [secIds.length]);

  return (
    <SectionsContext.Provider
      value={{ activeSection, setActiveSection, sectionRefs }}
    >
      {children}
    </SectionsContext.Provider>
  );
};

export { SectionsContext, SectionsContextProvider };
