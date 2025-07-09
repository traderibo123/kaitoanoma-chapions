// components/ChampionCard.tsx
import Image from "next/image";

type Props = {
  data: any;
  username: string;
};

export default function ChampionCard({ data, username }: Props) {
  const ranks: Record<string, string> = {
    "Wizard": "#0 - #10",
    "Grand Master": "#11 - #50",
    "Master": "#51 - #100",
  };

  const getRank = (index: number | null) => {
    if (index === null || index === undefined) return "-";
    if (index <= 10) return "Wizard";
    if (index <= 50) return "Grand Master";
    if (index <= 100) return "Master";
    return "-";
  };

  const formatIndex = (index: number | null) => {
    if (index === null || index === undefined) return "-";
    return `#${index}`;
  };

  const durationLabels = [
    { key: "7d", label: "7 Days" },
    { key: "30d", label: "30 Days" },
    { key: "90d", label: "3 Months" },
    { key: "180d", label: "6 Months" },
  ];

  return (
    <div className="relative w-[512px] h-[768px]">
      <Image
        src="/1.png"
        alt="Champion Card"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute top-[48px] w-full text-center text-white font-bold text-[28px] tracking-wide">
        {username.toUpperCase()}
      </div>

      <div className="absolute bottom-[140px] left-[55px] text-white font-medium text-[16px] leading-[40px] w-[400px]">
        <table className="w-full text-left">
          <tbody>
            {durationLabels.map((duration, i) => {
              const index = data?.[duration.key]?.index ?? null;
              const rank = getRank(index);
              return (
                <tr key={duration.key}>
                  <td className="w-[130px]">{duration.label}</td>
                  <td className="w-[40px] text-center">:</td>
                  <td className="w-[80px]">{formatIndex(index)}</td>
                  <td className="w-[120px]">{rank}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
