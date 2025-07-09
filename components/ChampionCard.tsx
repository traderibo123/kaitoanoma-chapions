import Image from "next/image";

type LeaderboardData = {
  title: string;
  rank: number | null;
};

type Props = {
  username: string;
  data: {
    "7d": LeaderboardData;
    "30d": LeaderboardData;
    "90d": LeaderboardData;
    "180d": LeaderboardData;
  };
};

const ChampionCard = ({ username, data }: Props) => {
  const entries = [
    { label: "7 Days", key: "7d" },
    { label: "30 Days", key: "30d" },
    { label: "3 Months", key: "90d" },
    { label: "6 Months", key: "180d" },
  ];

  return (
    <div className="relative w-[460px] h-[700px]">
      <Image
        src="/card-template.png"
        alt="Champion Card"
        fill
        className="object-contain"
      />
      {/* Username */}
      <div className="absolute top-[78px] w-full text-center text-xl font-extrabold text-white tracking-widest">
        {username.toUpperCase()}
      </div>

      {/* Table Content */}
      <div className="absolute bottom-[115px] left-[55px] right-[55px] text-white text-[14px] font-semibold leading-[2.2rem]">
        {entries.map(({ label, key }) => {
          const row = data[key as keyof typeof data];
          return (
            <div className="flex justify-between px-4" key={key}>
              <span>{label}</span>
              <span>:</span>
              <span>
                {row.rank !== null && row.rank !== undefined
                  ? `#${row.rank}`
                  : "-"}
              </span>
              <span>
                {row.rank !== null && row.rank !== undefined
                  ? row.title
                  : "-"}
              </span>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="absolute bottom-[50px] w-full text-center text-white text-[14px] font-semibold tracking-wide">
             </div>
    </div>
  );
};

export default ChampionCard;
