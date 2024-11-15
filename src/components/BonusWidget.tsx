import { useTranslations } from "next-intl";

interface Props {
  type: string;
  data: Levels[] | Ranks[] | Gens[] | Pools[];
}
interface Levels {
  levels: number[];
  percentage: number;
}
interface Ranks {
  rank: number;
  bonus: string;
}
interface Gens {
  gen: number;
  percentage: number;
}
interface Pools {
  rank: number;
  percentage: number;
}

const BonusWidget = ({ type, data }: Props) => {
  return (
    <ul className="grid grid-cols-1 gap-2">
      {data.map((item, index) => (
        <li key={index} className="bg-light rounded-2xl px-4 py-2">
          <BonusItem key={index} type={type} data={item} />
        </li>
      ))}
    </ul>
  );
};

interface BonusItemProps {
  type: string;
  data: Levels | Ranks | Gens | Pools;
}

const BonusItem = ({ type, data }: BonusItemProps) => {
  const t = useTranslations("Bonuses");
  if (type === "levels") {
    return (
      <div className="flex flex-col xs:flex-row sm:flex-col mdlg:flex-row lg:flex-col 1xl:flex-row justify-center items-center gap-3">
        <p className="text-dark">{t("level")}</p>
        <ul className="flex gap-1.5 grow">
          {"levels" in data &&
            data.levels.map((level) => (
              <li
                key={level}
                className="bg-primary text-white flex justify-center items-center leading-none rounded-full w-10 aspect-square"
              >
                {level}
              </li>
            ))}
        </ul>
        <p className="h3 leading-none text-dark font-title">
          {"percentage" in data && data.percentage}%
        </p>
      </div>
    );
  }

  if (type === "ranks") {
    return (
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="h3 text-dark font-title en:w-[6.7ch] es:w-[7.7ch]">
          {t("rank")} {"rank" in data && data.rank}
        </h3>
        <p className="bg-primary text-white p-2 rounded-xl grow text-center min-w-0 xs:min-w-64 sm:min-w-0 mdl:min-w-64 lg:min-w-0 xl:min-w-64">
          {t("bonus")} = {"bonus" in data && data.bonus} USD*
        </p>
      </div>
    );
  }

  if (type === "gens") {
    return (
      <div className="flex items-center justify-between gap-2">
        <h3 className="flex items-center gap-3">
          <span className="text-dark">{t("gen")}</span>
          <span className="bg-primary text-white flex justify-center items-center leading-none rounded-full w-10 aspect-square">
            {"gen" in data && data.gen}
          </span>
        </h3>
        <p className="h3 font-title text-dark leading-none">
          {"percentage" in data && data.percentage}%
        </p>
      </div>
    );
  }

  if (type === "pools") {
    return (
      <p className="text-dark flex flex-col items-center gap-1 xs:block text-center xs:text-left">
        {t("pool")}{" "}
        <span className="bg-primary text-white px-3.5 xs:px-2 py-1 rounded-full">
          {"percentage" in data && data.percentage}%
        </span>{" "}
        {t("qualifiers", { rank: "rank" in data && data.rank })}
      </p>
    );
  }
};

export default BonusWidget;
