import { getPlaylist } from "lib/spotify";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  try {
    const playlist = await getPlaylist(id as string);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "max-age=180000");
    res.end(JSON.stringify(playlist));
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}
