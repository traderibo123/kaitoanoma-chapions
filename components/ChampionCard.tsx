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
      <div className="absolute top-[70px] w-full text-center text-[24px] font-bold text-white tracking-widest">
        {data.username.toUpperCase()}
      </div>

      {/* Ranks */}
      <div className="absolute left-[50px] top-[360px] text-white text-sm leading-6 font-semibold space-y-2">
        <div className="flex gap-2">
          <span className="w-[80px]">7 Days</span>
          <span className="w-[50px]">:</span>
          <span>{data["7d"].title}</span>
        </div>
        <div className="flex gap-2">
          <span className="w-[80px]">30 Days</span>
          <span className="w-[50px]">:</span>
          <span>{data["30d"].title}</span>
        </div>
        <div className="flex gap-2">
          <span className="w-[80px]">3 Months</span>
          <span className="w-[50px]">:</span>
          <span>{data["90d"].title}</span>
        </div>
        <div className="flex gap-2">
          <span className="w-[80px]">6 Months</span>
          <span className="w-[50px]">:</span>
          <span>{data["180d"].title}</span>
        </div>
      </div>
    </div>
  );
}
