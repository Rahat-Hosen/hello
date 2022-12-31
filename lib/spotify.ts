import querystring from "querystring";
import {
  Playlist,
  SimplifiedPlaylist,
  Paging,
  AccessToken,
  PlaylistTrack,
  Track,
} from "spotify-types";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:3001/playlist";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async (): Promise<AccessToken> => {
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

export const getUserPlaylists = async (): Promise<
  Paging<SimplifiedPlaylist>
> => {
  const { access_token } = await getAccessToken();

  const url = `https://api.spotify.com/v1/users/1159615450/playlists`;
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${access_token}`,
    }),
  });

  return response.json();
};

export type SpotifyPlaylist = {
  tracks: Paging<{ track: Track & PlaylistTrack }>;
} & Playlist;

export const getPlaylist = async (
  playlistId: string
): Promise<SpotifyPlaylist> => {
  const { access_token } = await getAccessToken();

  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      Authorization: `Bearer ${access_token}`,
    }),
  });

  return response.json();
};
