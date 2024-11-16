"use client";
import React, { useRef, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Controller, Autoplay } from "swiper/modules";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper as SwiperClass } from "swiper";

const TestimonailSec = () => {
  const locale = useLocale();
  const t = useTranslations("Testimonials");
  const sliderRef = useRef<SwiperClass | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.slideNext();
  }, []);

  return (
    <>
      <div className="bg-dark text-white py-24">
        <div className="block-content">
          <h3 className=" uppercase font-semibold tracking-[6px]">
            {locale === "en" ? "Testimonials" : "Testimonios"}{" "}
          </h3>
          <h2 className="font-title h3 lg:h1 mt-8">{t("title")}</h2>
          <Swiper
            onSwiper={(swiper) => {
              sliderRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={5}
            loop={true}
            autoplay={{ delay: 4000 }}
            modules={[Pagination, Controller, Autoplay]}
            pagination={{
              el: ".swiper-custom-pagination",
              clickable: true,
            }}
            navigation={true}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <Slide
                image="/testimonios04.png"
                title={t("slider.item1.name")}
                text={t("slider.item1.text")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                image="/testimonios03.png"
                title={t("slider.item2.name")}
                text={t("slider.item2.text")}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Slide
                image="/testimonios05.png"
                title={t("slider.item3.name")}
                text={t("slider.item3.text")}
              />
            </SwiperSlide>
          </Swiper>
          <div
            className="prev-arrow flex items-center justify-center w-10 h-10 text-xl bg-primary hover:bg-primary-100 pointer text-white"
            onClick={handlePrev}
          >
            <FaCaretLeft />
          </div>
          <div
            className="next-arrow flex items-center justify-center w-10 h-10 text-xl bg-primary hover:bg-primary-100 pointer text-white"
            onClick={handleNext}
          >
            <FaCaretRight />
          </div>
          <div className="swiper-custom-pagination flex justify-center gap-2"></div>
        </div>
      </div>
    </>
  );
};

export default TestimonailSec;

interface SlideProps {
  image: string;
  title: string;
  text: string;
}

const Slide = ({ image, title, text }: SlideProps) => {
  return (
    <div className="bg-white bg-opacity-10 py-12 px-6 lg:px-12 rounded-lg shadow-lg">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-center">
          <Image
            className="rounded-full border-[5px] border-white"
            src={image}
            alt={title}
            height={170}
            width={170}
          />
        </div>

        <p className="text-md lg:text-2xl">{text}</p>
        <h3 className="font-semibold text-center text-2xl">— {title}</h3>
      </div>
    </div>
  );
};
