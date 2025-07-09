const fetchRankForDuration = async (username: string, duration: string) => {
  const url = `https://hub.kaito.ai/api/v1/gateway/ai/kol/mindshare/top-leaderboard?duration=${duration}&topic_id=ANOMA&top_n=100&customized_community=customized&community_yaps=true`;
  const res = await fetch(url);
  const result = await res.json();

  const list = Array.isArray(result) ? result : result.data;

  const rankInfo = list.find(
    (entry: any) => entry.username.toLowerCase() === username.toLowerCase()
  );

  if (!rankInfo) return { rank: null, title: "Participant" };

  let title = "Participant";
  const rank = parseInt(rankInfo.rank);
  if (rank <= 20) title = "Wizard";
  else if (rank <= 40) title = "Grand Master";
  else if (rank <= 100) title = "Master";

  return { rank, title };
};
