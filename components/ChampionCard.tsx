import Image from "next/image";

interface RankData {
  username: string;
  "7d": { title: string };
  "30d": { title: string };
  "90d": { title: string };
  "180d": { title: string };
}

export default function ChampionCard({ data }: { data: RankData }) {
  return (
    <div className="relative w-[400px] h-[600px]">
      <Image
        src="/card-template.png"
        alt="Card Template"
        layout="fill"
        objectFit="cover"
        priority
      />

      {/* Username */}
      <div className="absolute top-[78px] w-full text-center text-[24px] font-extrabold text-white tracking-widest">
        {data.username.toUpperCase()}
      </div>

      {/* Ranks Table */}
      <div className="absolute left-[45px] top-[355px] w-[310px] h-[140px] grid grid-rows-4 grid-cols-3 text-white text-[14px] font-medium items-center text-center leading-none">
        <div className="col-span-1">7 Days</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">{data["7d"].title}</div>

        <div className="col-span-1">30 Days</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">{data["30d"].title}</div>

        <div className="col-span-1">3 Months</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">{data["90d"].title}</div>

        <div className="col-span-1">6 Months</div>
        <div className="col-span-1">:</div>
        <div className="col-span-1">{data["180d"].title}</div>
      </div>
    </div>
  );
}
