"use client";

import { useContext } from "react";
import About from "./sections/About";
import BonusesSec from "./sections/BonusesSec";
import Hero from "./sections/Hero";
import Marketplace from "./sections/Marketplace";
import Science from "./sections/Science";
import TestimonailSec from "./sections/TestimonailSec";
import { SectionsContext } from "@/contexts/SectionsContext";

interface Props {
  elemId: string[];
}

const Sections = ({ elemId }: Props) => {
  const secs = [
    <Hero key="hero" />,
    <About key="about" />,
    <Science key="science" />,
    <TestimonailSec key="testimonials" />,
    <Marketplace key="marketplace" />,
    <BonusesSec key="bonuses" />,
  ];
  const context = useContext(SectionsContext);

  if (!context) {
    throw new Error("SectionContext is not defined");
  }

  const { sectionRefs } = context;
  return (
    <>
      {secs.map((sec, k) => {
        return (
          <section
            key={elemId[k]}
            ref={(el) => {
              sectionRefs.current[k] = el as HTMLDivElement;
            }}
          >
            <div className="anchor" id={elemId[k]} data-anchor={elemId[k]} />
            {sec}
          </section>
        );
      })}
    </>
  );
};

export default Sections;
