import { useCssAnimateScroll } from "@/hooks/useCssAnimateScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import runner from "./../../../public/science-section.png";
import runnerMb from "./../../../public/science-mb.webp";

const Science = () => {
  const t = useTranslations("Science");
  const tm = useTranslations("Menu");
  const [refH1, animH1] = useCssAnimateScroll();
  const [refH2, animH2] = useCssAnimateScroll();
  const [refP1, animP1] = useCssAnimateScroll();
  return (
    <div className="bg-white overflow-hidden relative">
      <Image
        src={runnerMb}
        alt="Young man jogging"
        className="w-full lg:hidden min-h-60 object-cover object-center"
      />
      <Image
        src={runner}
        alt="Young man jogging"
        className="hidden lg:block w-full h-full object-cover object-[35%_50%] absolute z-0"
      />
      <div className="block-content lg:py-0 relative lg:flex justify-end">
        <div className="half lg:w-1/2 lg:px-14 lg:py-16 bg-white lg:border border-white bg-opacity-20 backdrop-blur-lg flex flex-col justify-center gap-7 lg:gap-8 lg:text-white">
          <h2
            ref={refH1}
            className={`h4 uppercase font-axiforma tracking-[0.4rem] text-dark lg:text-[inherit] tran-op anim-bottom ${animH1}`}
          >
            {tm("item3")}
          </h2>
          <h3
            ref={refH2}
            className={`font-title h3 lg:h1 text-dark lg:text-[inherit] tran-op anim-bottom ${animH2}`}
          >
            {t("title")}
          </h3>
          <p
            ref={refP1}
            className={`lg:text-2xl tran-op anim-bottom ${animP1}`}
          >
            {t("text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Science;
