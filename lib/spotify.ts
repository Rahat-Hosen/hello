import querystring from "querystring";

const CLIENT_ID = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3001/playlist";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

const refresh_token = process.env.NEXT_PUBLIC_SPOTIFY_REFRESH_TOKEN;

export const getUserPlaylists = async (token: string) => {
  const url = `https://api.spotify.com/v1/users/1159615450/playlists`;
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });

  return response.json();
};

export const getPlaylist = async (token: string, playlistId: string) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${token}`,
    }),
  });

  return response.json();
};

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: querystring.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  return response.json();
};
