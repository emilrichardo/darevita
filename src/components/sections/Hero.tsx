"use client";

import { useContext } from "react";
import { HeaderContext } from "@/contexts/HeaderContext";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useRegisterLink } from "@/hooks/useRegisterLink";
import heroBg from "./../../../public/hero-home.webp";
import heroBgMb from "./../../../public/hero_bg_mobile.webp";
import logo from "./../../../public/hero_logo.webp";

const Hero = () => {
  const t = useTranslations("Hero");
  const tb = useTranslations("Buttons");
  const context = useContext(HeaderContext);
  const registerLink = useRegisterLink();

  if (!context) {
    throw new Error("HeaderContext is not defined");
  }

  const { topRef } = context;
  return (
    <div className="relative bg-black text-white">
      <Image
        src={heroBg}
        alt="hero-home"
        className="hidden lg:block object-cover object-[80%_50%] w-full h-full absolute z-0"
      />
      <Image
        src={heroBgMb}
        alt="hero home"
        className="lg:hidden object-cover w-full h-3/4 absolute z-0"
      />
      <div className="bg-gradient-to-t from-dark-100 from-30% lg:hidden absolute w-full h-full" />
      <div
        ref={topRef}
        className="absolute h-32 w-full top-0 left-0 pointer-events-none -z-10"
      />

      <div className="block-content relative flex justify-center flex-col min-h-svh pt-16 lg:pt-20">
        <Image
          src={logo}
          alt="DareVita"
          className="lg:hidden max-w-60 xs:max-w-80 sm:max-w-md mx-auto"
        />
        <div className="lg:w-1/2 max-w-xl mx-auto lg:max-w-none lg:mx-0">
          <h2 className="font-title text-primary h3 animated tran-op anim-bottom-left">
            {t("uptitle")}
          </h2>
          <h1 className="font-title text-[72px] leading-[60px] lg:h1 lg:en:max-w-[18ch] animated tran-op anim-bottom-left [--d:0.2s]">
            {t("title")}
          </h1>
          <p className="hidden lg:block text-4xl pt-10 en:max-w-[32ch] animated tran-op anim-bottom-left [--d:0.4s]">
            {t("text")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-7 lg:pt-10">
            <Link
              href={registerLink}
              target="_blank"
              className="text-white font-axiforma rounded bg-secondary hover:bg-secondary-100 transition-colors py-3 px-10 block text-center grow lg:grow-0 animated tran-op anim-bottom [--d:0.6s]"
            >
              {tb("register")}
            </Link>
            <Link
              href="#"
              target="_blank"
              className="text-white font-axiforma rounded bg-primary hover:bg-primary-100 transition-colors py-3 px-10 block text-center grow lg:grow-0 animated tran-op anim-bottom [--d:0.8s]"
            >
              {tb("buy")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
