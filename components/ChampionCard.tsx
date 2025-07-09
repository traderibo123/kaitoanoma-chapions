// components/ChampionCard.tsx
import Image from "next/image";

interface RankData {
  title: string;
  rank: number | null;
}

interface ChampionCardProps {
  data: {
    username: string;
    "7d": RankData;
    "30d": RankData;
    "90d": RankData;
    "180d": RankData;
  };
}

const formatRankTitle = (rank: number | null, title: string) => {
  if (rank === null || rank === undefined) return title;
  return `#${rank} ${title}`;
};

export default function ChampionCard({ data }: ChampionCardProps) {
  return (
    <div className="relative w-[400px] h-[600px]">
      <Image
        src="/card-template.png"
        alt="Card Background"
        layout="fill"
        objectFit="cover"
        priority
      />

      <div className="absolute top-[95px] w-full text-center text-[24px] font-extrabold text-white tracking-wide">
        {data.username.toUpperCase()}
      </div>

      <div className="absolute left-[45px] top-[345px] w-[310px] h-[140px] grid grid-rows-4 grid-cols-3 text-white text-[14px] font-medium items-center text-center leading-none">
        <div className="col-span-1">7 Days</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">
          {formatRankTitle(data["7d"].rank, data["7d"].title)}
        </div>

        <div className="col-span-1">30 Days</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">
          {formatRankTitle(data["30d"].rank, data["30d"].title)}
        </div>

        <div className="col-span-1">3 Months</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">
          {formatRankTitle(data["90d"].rank, data["90d"].title)}
        </div>

        <div className="col-span-1">6 Months</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">
          {formatRankTitle(data["180d"].rank, data["180d"].title)}
        </div>
      </div>

      <div className="absolute bottom-[45px] left-0 w-full text-center text-white text-[14px] font-semibold tracking-wide">
        CREATED BY TRADERIBO123
      </div>
    </div>
  );
}
