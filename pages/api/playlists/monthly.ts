import type { NextApiRequest, NextApiResponse } from "next";
import { getUserPlaylists } from "lib/spotify";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const playlists = await getUserPlaylists();
    const monthlyPlaylists = playlists.items.filter((playlist: any) => {
      return months.some((month) => playlist.name.startsWith(month));
    });
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(monthlyPlaylists));
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
