import { useState } from "react";
import ChampionCard from "../components/ChampionCard";

export default function Home() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setData(null);
    try {
      const res = await fetch(`/api/getUser?username=${username}`);
      const json = await res.json();
      setData(json);
    } catch (e) {
      alert("Failed to fetch data");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-6">Anoma × Kaito Champion Cards</h1>

      <input
        type="text"
        placeholder="Enter your username (e.g. traderibo123)"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-3 text-black rounded mb-4 w-full max-w-md"
      />

      <button
        onClick={fetchData}
        disabled={!username || loading}
        className="bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded font-semibold"
      >
        {loading ? "Loading..." : "Generate Card"}
      </button>

      {data && (
        <>
          <ChampionCard username={username} data={data} />

          {/* Share on X Button */}
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
              `Just generated my Anoma × Kaito Champion Card! 🧙‍♂️\n\nWhere do you rank?\n\n`
            )}&url=${encodeURIComponent(
              `https://anoma-champions.vercel.app/?username=${username}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-[#1DA1F2] hover:bg-[#0d8ddb] text-white font-bold py-2 px-5 rounded"
          >
            Share on X
          </a>
        </>
      )}
    </div>
  );
}
