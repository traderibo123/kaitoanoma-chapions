
import html2canvas from "html2canvas";
import { useRef } from "react";

type Props = {
  username: string;
  children: React.ReactNode;
};

export default function ShareCard({ username, children }: Props) {
  const cardRef = useRef(null);

  const handleDownload = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const dataUrl = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = `${username}_card.png`;
    a.click();
  };

  const handleShare = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const file = new File([blob], `${username}_card.png`, { type: "image/png" });
      const shareData = {
        files: [file],
        text: `Check out my Anoma × Kaito leaderboard card!`,
      };
      if (navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(console.error);
      } else {
        alert("Sharing is not supported in this browser.");
      }
    });
  };

  return (
    <div className="text-center mt-6">
      <div ref={cardRef}>{children}</div>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={handleDownload} className="bg-blue-600 px-4 py-2 rounded text-white">
          Download Card
        </button>
        <button onClick={handleShare} className="bg-green-600 px-4 py-2 rounded text-white">
          Share on X
        </button>
      </div>
    </div>
  );
}
