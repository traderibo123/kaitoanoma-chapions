// components/ChampionCard.tsx
import Image from "next/image";

type Props = {
  data: {
    username: string;
    ["7d"]: { rank: number | null; title: string };
    ["30d"]: { rank: number | null; title: string };
    ["90d"]: { rank: number | null; title: string };
    ["180d"]: { rank: number | null; title: string };
  };
};

export default function ChampionCard({ data }: Props) {
  const getRankDisplay = (rank: number | null) => {
    return rank !== null ? `#${rank}` : "-";
  };

  const getTitleDisplay = (title: string) => {
    return title && title !== "Participant" ? title : "-";
  };

  return (
    <div className="relative w-[380px] h-[540px] mt-10">
      <Image
        src="/card-template.png"
        alt="Card Template"
        layout="fill"
        objectFit="cover"
        priority
      />
      {/* Username */}
      <div className="absolute top-[60px] w-full text-center text-white text-[22px] font-extrabold tracking-wide">
        {data.username.toUpperCase()}
      </div>

      {/* Table Content */}
      <div className="absolute left-[50px] top-[290px] text-white text-sm font-medium leading-relaxed">
        <div className="flex justify-between w-[280px]">
          <span>7 Days</span>
          <span>:</span>
          <span>{getRankDisplay(data["7d"].rank)}</span>
          <span>{getTitleDisplay(data["7d"].title)}</span>
        </div>
        <div className="flex justify-between w-[280px]">
          <span>30 Days</span>
          <span>:</span>
          <span>{getRankDisplay(data["30d"].rank)}</span>
          <span>{getTitleDisplay(data["30d"].title)}</span>
        </div>
        <div className="flex justify-between w-[280px]">
          <span>3 Months</span>
          <span>:</span>
          <span>{getRankDisplay(data["90d"].rank)}</span>
          <span>{getTitleDisplay(data["90d"].title)}</span>
        </div>
        <div className="flex justify-between w-[280px]">
          <span>6 Months</span>
          <span>:</span>
          <span>{getRankDisplay(data["180d"].rank)}</span>
          <span>{getTitleDisplay(data["180d"].title)}</span>
        </div>
      </div>
    </div>
  );
}
