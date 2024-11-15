import Image from "next/image";
import { useTranslations } from "next-intl";
import jogging from "./../../public/testimonial-banner.webp";
import joggingMb from "./../../public/testimonial-banner-mb.webp";
import { useCssAnimateScroll } from "@/hooks/useCssAnimateScroll";

const BannerTestimonials = () => {
  const t = useTranslations("Testimonials");
  const [refP1, animP1] = useCssAnimateScroll();
  return (
    <div className="relative">
      <Image
        src={jogging}
        alt="An old couple jogging and smiling"
        className="absolute top-0 left-0 w-full h-full object-cover hidden lg:block"
      />
      <Image
        src={joggingMb}
        alt="An old couple jogging and smiling"
        className="lg:hidden w-full max-h-[480px] object-cover object-[50%_10%]"
      />
      <div className="relative max-w-screen-2xl mx-auto 2xl:px-10">
        <div className="lg:half lg:w-1/2 bg-primary lg:bg-primary/80 text-white px-7 py-10 lg:px-10 2xl:px-20 lg:py-36 2xl:py-52">
          <p
            ref={refP1}
            className={`font-title h3 leading-none lg:h2 lg:leading-none mx-auto max-w-[22ch] sm:max-w-[32ch] lg:max-w-[22ch] tran-op anim-bottom ${animP1}`}
          >
            {t.rich("banner", {
              br: () => <br />,
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerTestimonials;
