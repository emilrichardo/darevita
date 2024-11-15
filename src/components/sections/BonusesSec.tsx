import { useTranslations } from "next-intl";
import icon1 from "./../../../public/bonus-ico-1.webp";
import icon2 from "./../../../public/bonus-ico-2.webp";
import icon3 from "./../../../public/bonus-ico-3.webp";
import icon4 from "./../../../public/bonus-ico-4.webp";
import icon5 from "./../../../public/bonus-ico-5.webp";
import Image from "next/image";
import BonusWidget from "../BonusWidget";
import { useCssAnimateMultipleScroll } from "@/hooks/useCssAnimateMultipleScroll";

const BonusesSec = () => {
  const t = useTranslations("Bonuses");
  const bonuses = [
    {
      id: 1,
      type: "text",
      color: "bg-bonus-1",
      icon: icon1,
      name: t("bonus1.name"),
      description: t.rich("bonus1.text", {
        color: (chuck) => <span className="text-primary">{chuck}</span>,
      }),
    },
    {
      id: 2,
      type: "widgets",
      color: "bg-bonus-2",
      icon: icon2,
      name: t("bonus2.name"),
      subtitle: t("bonus2.subtitle"),
      description: t("bonus2.text"),
      widget: {
        type: "levels",
        data: [
          {
            levels: [1, 2, 3],
            percentage: 5,
          },
          {
            levels: [4, 5],
            percentage: 3,
          },
          {
            levels: [6, 7, 8],
            percentage: 2,
          },
          {
            levels: [9, 10, 11, 12],
            percentage: 1,
          },
        ],
      },
    },
    {
      id: 3,
      type: "footnote",
      color: "bg-bonus-3",
      icon: icon3,
      name: t("bonus3.name"),
      subtitle: t("bonus3.subtitle"),
      description: t("bonus3.text"),
      widget: {
        type: "ranks",
        data: [
          {
            rank: 6,
            bonus: "30,000",
          },
          {
            rank: 8,
            bonus: "100,000",
          },
          {
            rank: 10,
            bonus: "500,000",
          },
          {
            rank: 12,
            bonus: "1,000,000",
          },
        ],
      },
      foot: t("bonus3.foot"),
    },
    {
      id: 4,
      type: "widgets",
      color: "bg-bonus-4",
      icon: icon4,
      name: t("bonus4.name"),
      subtitle: t("bonus4.subtitle"),
      description: t.rich("bonus4.text", {
        br: () => <br />,
      }),
      widget: {
        type: "gens",
        data: [
          {
            gen: 1,
            percentage: 20,
          },
          {
            gen: 2,
            percentage: 10,
          },
          {
            gen: 3,
            percentage: 5,
          },
          {
            gen: 4,
            percentage: 5,
          },
        ],
      },
    },
    {
      id: 5,
      type: "widgets",
      color: "bg-bonus-5",
      icon: icon5,
      name: t("bonus5.name"),
      subtitle: t("bonus5.subtitle"),
      description: t("bonus5.text"),
      widget: {
        type: "pools",
        data: [
          {
            rank: 8,
            percentage: 1,
          },
          {
            rank: 9,
            percentage: 1,
          },
          {
            rank: 10,
            percentage: 1,
          },
          {
            rank: 11,
            percentage: 1,
          },
          {
            rank: 12,
            percentage: 1,
          },
        ],
      },
    },
  ];
  const [refsArt, animArt] = useCssAnimateMultipleScroll<HTMLDivElement>(
    bonuses.length
  );
  return (
    <div className="bg-light-blue px-7 py-10 lg:py-16 2xl:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {bonuses.map((bonus, index) => (
        <article
          key={bonus.id}
          className={`bg-white tran-op anim-bottom anim-cols-3 ${animArt[index]}`}
          ref={(el) => {
            refsArt.current[index] = el as HTMLDivElement;
          }}
        >
          <h2
            className={`h3 lg:h2 leading-none lg:leading-none px-px py-3 text-center text-white font-title ${bonus.color}`}
          >
            {bonus.name}
          </h2>
          <div className="p-10 flex flex-col gap-10">
            <Image src={bonus.icon} alt="Bonus icon" className="mx-auto" />
            {bonus.type === "text" && (
              <p className="text-center font-title h3 sm:text-9xl mdlg:text-10xl sm:leading-none lg:text-9xl xl:text-[5rem] 2xl:text-10xl text-dark">
                {bonus.description}
              </p>
            )}
            {(bonus.type === "widgets" || bonus.type === "footnote") && (
              <>
                <p className="h4 font-axiforma text-center pb-5 border-b border-grey uppercase tracking-[0.4rem]">
                  {bonus.subtitle}
                </p>
                <p className="text-center">{bonus.description}</p>
                {bonus.widget && (
                  <BonusWidget
                    type={bonus.widget.type}
                    data={bonus.widget.data}
                  />
                )}
              </>
            )}
            {bonus.type === "footnote" && (
              <p className="text-center text-dark">*{bonus.foot}</p>
            )}
          </div>
        </article>
      ))}
    </div>
  );
};

export default BonusesSec;
