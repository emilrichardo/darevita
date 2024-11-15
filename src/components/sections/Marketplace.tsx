import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Icons from "../Icons";
import lactigoBg from "./../../../public/lactigo_bg.webp";
import lactigo from "./../../../public/lactigo.webp";
import woman from "./../../../public/market-register.webp";
import { useRegisterLink } from "@/hooks/useRegisterLink";
import { useCssAnimateScroll } from "@/hooks/useCssAnimateScroll";

const Marketplace = () => {
  const registerLink = useRegisterLink();
  const t = useTranslations("Marketplace");
  const tm = useTranslations("Menu");
  const tb = useTranslations("Buttons");
  const [refH1, animH1] = useCssAnimateScroll();
  const [refH2, animH2] = useCssAnimateScroll();
  const [refP1, animP1] = useCssAnimateScroll();
  const [refImg1, animImg1] = useCssAnimateScroll();
  const [refP2, animP2] = useCssAnimateScroll();
  const [refL1, animL1] = useCssAnimateScroll();
  const [refL2, animL2] = useCssAnimateScroll();
  const [refImg2, animImg2] = useCssAnimateScroll();
  const [refH3, animH3] = useCssAnimateScroll();
  const [refP3, animP3] = useCssAnimateScroll();
  const [refL3, animL3] = useCssAnimateScroll();
  const [refL4, animL4] = useCssAnimateScroll();
  return (
    <>
      <div className="lg:flex items-center">
        <div className="relative p-7 sm:py-20 lg:py-28 es:lg:py-32 2xl:py-36 lg:w-1/2">
          <Image
            src={lactigoBg}
            alt="Lactigo render collage"
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <div className="bg-secondary-50/85 absolute top-0 left-0 w-full h-full pointer-events-none" />
          <h3
            ref={refH1}
            className={`relative font-title h2 leading-small lg:text-10xl 2xl:text-12xl lg:leading-mini text-white en:max-w-[11ch] es:max-w-[10.2ch] sm:en:max-w-[21ch] sm:es:max-w-[17.5ch] lg:en:max-w-[11ch] lg:es:max-w-[10.2ch] mx-auto opacity ${animH1}`}
          >
            {t("banner")}
          </h3>
        </div>
        <div className="half lg:w-1/2 px-7 py-10 lg:pl-14 2xl:pl-24">
          <h2
            ref={refH2}
            className={`h4 uppercase font-axiforma mb-7 lg:mb-10 tracking-[0.4rem] tran-op anim-bottom-right ${animH2}`}
          >
            {tm("item5")}
          </h2>
          <p
            ref={refP1}
            className={`lg:pl-8 2xl:pl-12 tran-op anim-bottom-right ${animP1}`}
          >
            {t("text1")}
          </p>
        </div>
      </div>
      <div className="block-content pt-0 pb-10 lg:py-12 flex flex-col lg:flex-row-reverse gap-7 lg:gap-14 items-center">
        <Image
          src={lactigo}
          ref={refImg1}
          alt="Render with 3 Lactigo bottles"
          className={`w-full max-w-xl lg:w-1/2 lg:max-w-none opacity ${animImg1}`}
        />
        <div className="flex flex-col items-start lg:w-1/2">
          <p ref={refP2} className={`tran-op anim-bottom-left ${animP2}`}>
            {t("text2")}
          </p>
          <Link
            href="#"
            target="_blank"
            ref={refL1}
            className={`text-white font-axiforma rounded bg-secondary hover:bg-secondary-100 transition-colors py-3 px-10 inline-block my-7 tran-op anim-bottom-left ${animL1}`}
          >
            {tb("lactigo")}
          </Link>
          <Link
            href="#"
            target="_blank"
            ref={refL2}
            className={`border-b border-grey inline-flex items-center gap-2 fill-grey hover:text-primary hover:fill-primary hover:border-primary transition-colors tran-op anim-bottom-left ${animL2}`}
          >
            {t("link")}
            <Icons
              icon="arrow"
              className="w-6 fill-[inherit] transition-colors"
            />
          </Link>
        </div>
      </div>
      <div className="block-content lg:py-0 flex flex-col lg:flex-row gap-7 lg:gap-14 items-center">
        <Image
          src={woman}
          ref={refImg2}
          alt="Relaxed woman in a bed looking at her laptop"
          className={`w-full lg:w-1/2 max-h-[540px] lg:max-h-none object-cover lg:object-fit opacity ${animImg2}`}
        />
        <div className="flex flex-col lg:items-start lg:w-1/2">
          <h3
            ref={refH3}
            className={`h3 md:h2 leading-none md:leading-none text-dark mb-7 font-title tran-op anim-bottom-right ${animH3}`}
          >
            {t.rich("bigText", {
              color: (chunk) => <span className="text-primary">{chunk}</span>,
              br: () => <br />,
            })}
          </h3>
          <p
            ref={refP3}
            className={`2xl:pl-14 tran-op anim-bottom-right ${animP3}`}
          >
            {t("text3")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-7 2xl:pl-14">
            <Link
              ref={refL3}
              href={registerLink}
              target="_blank"
              className={`text-white font-axiforma rounded bg-secondary hover:bg-secondary-100 transition-colors py-3 px-10 block text-center grow lg:grow-0 tran-op anim-bottom-right ${animL3}`}
            >
              {tb("register")}
            </Link>
            <Link
              ref={refL4}
              href="#"
              target="_blank"
              className={`text-white font-axiforma rounded bg-primary hover:bg-primary-100 transition-colors py-3 px-10 block text-center grow lg:grow-0 tran-op anim-bottom-right sm:[--d:0.2s] ${animL4}`}
            >
              {tb("buy")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketplace;
