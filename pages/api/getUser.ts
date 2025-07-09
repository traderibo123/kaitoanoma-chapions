// pages/api/getUser.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const fetchRankForDuration = async (username: string, duration: string) => {
  const url = `https://hub.kaito.ai/api/v1/gateway/ai/kol/mindshare/top-leaderboard?duration=${duration}&topic_id=ANOMA&top_n=100&customized_community=customized&community_yaps=true`;
  const res = await fetch(url);
  const result = await res.json();

  // API'den gelen veri doğrudan dizi mi yoksa objenin içinde mi kontrol ediyoruz
  const list = Array.isArray(result) ? result : result.data;

  if (!Array.isArray(list)) {
    throw new Error("Leaderboard data is not a valid array");
  }

  const rankInfo = list.find(
    (entry: any) => entry.username?.toLowerCase() === username.toLowerCase()
  );

  if (!rankInfo) return { rank: null, title: "Participant" };

  const rank = parseInt(rankInfo.rank);
  let title = "Participant";
  if (rank <= 20) title = "Wizard";
  else if (rank <= 40) title = "Grand Master";
  else if (rank <= 100) title = "Master";

  return { rank, title };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { username } = req.query;
  const durations = ["7d", "30d", "90d", "180d"];

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "Invalid username" });
  }

  try {
    const results = await Promise.all(
      durations.map((duration) => fetchRankForDuration(username, duration))
    );

    const response = durations.reduce((acc, duration, index) => {
      acc[duration] = results[index];
      return acc;
    }, { username });

    res.status(200).json(response);
  } catch (error: any) {
    res.status(500).json({ error: "Failed to fetch leaderboard data", details: error.message });
  }
}
