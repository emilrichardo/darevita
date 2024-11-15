import { useCssAnimateScroll } from "@/hooks/useCssAnimateScroll";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import cover from "./../../../public/about-section-video.jpeg";

const About = () => {
  const t = useTranslations("About");
  const tm = useTranslations("Menu");
  const [refImg, animImg] = useCssAnimateScroll();
  const [refH1, animH1] = useCssAnimateScroll();
  const [refH2, animH2] = useCssAnimateScroll();
  const [refP1, animP1] = useCssAnimateScroll();

  return (
    <div className="text-white bg-dark-100">
      <div className="block-content">
        <div className="grid grid-cols-1 gap-8 lg:gap-14 2xl:gap-20 lg:grid-cols-2 items-center">
          <div ref={refImg} className={`image opacity ${animImg}`}>
            <Image
              src={cover}
              alt="Young people dancing in a sunset"
              className="border-8 border-white"
            />
          </div>
          <div className="caption flex flex-col gap-2 lg:gap-8">
            <h2
              ref={refH1}
              className={`h4 uppercase font-axiforma tracking-[0.4rem] tran-op anim-bottom-right ${animH1}`}
            >
              {tm("item2")}
            </h2>
            <h3
              ref={refH2}
              className={`h2 leading-none lg:h1 font-title tran-op anim-bottom-right ${animH2}`}
            >
              {t.rich("title", {
                color: (chunk) => (
                  <span className="text-primary block">{chunk}</span>
                ),
              })}
            </h3>
            <p
              ref={refP1}
              className={`text-xl tran-op anim-bottom-right ${animP1}`}
            >
              {t("text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
