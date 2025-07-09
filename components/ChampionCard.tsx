// components/ChampionCard.tsx
import Image from 'next/image';

interface Props {
  data: {
    username: string;
    ['7d']: { title: string; rank: number | null };
    ['30d']: { title: string; rank: number | null };
    ['90d']: { title: string; rank: number | null };
    ['180d']: { title: string; rank: number | null };
  };
}

export default function ChampionCard({ data }: Props) {
  return (
    <div className="relative w-[400px] h-[600px] mt-10 mx-auto">
      <Image
        src="/card-template.png"
        alt="Champion Card"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute top-20 w-full text-center text-xl font-bold uppercase text-white">
        {data.username}
      </div>
      <div className="absolute bottom-16 left-6 text-sm text-white leading-relaxed">
        <p>7 Days: {data["7d"].title}</p>
        <p>30 Days: {data["30d"].title}</p>
        <p>3 Months: {data["90d"].title}</p>
        <p>6 Months: {data["180d"].title}</p>
      </div>
    </div>
  );
}
