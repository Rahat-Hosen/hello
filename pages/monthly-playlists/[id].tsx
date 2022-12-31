import { useState, useEffect } from "react";
import { getAccessToken, getPlaylist } from "../../lib/spotify";
import { SpotifyPlaylist } from "../../lib/spotify";
import Link from "next/link";
import { useRouter } from "next/router";

const PlaylistPage = () => {
  const [monthlyPlaylist, setMonthlyPlaylist] =
    useState<SpotifyPlaylist | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) return;

    const fetchPlaylist = async () => {
      const { access_token } = await getAccessToken();
      const playlist = await getPlaylist(access_token, id as string);
      setMonthlyPlaylist(playlist);
    };

    fetchPlaylist();
  }, [id]);

  if (!monthlyPlaylist) {
    return (
      <section className="max-w-screen relative mx-auto mb-14 p-6 ">
        loading...
      </section>
    );
  }

  return (
    <section className="max-w-screen relative mx-auto mb-14 p-6 ">
      <div className="mb-4">
        <Link href="/monthly-playlists">
          <a>← Go back to all monthly playlists</a>
        </Link>
      </div>
      <div className="w-full">
        <div>
          <div className="mb-8">
            <img
              className="h-64 w-64 rounded-lg object-cover shadow-md"
              src={monthlyPlaylist.images[0].url}
            />
            <h2 className="mt-1 text-xl">{monthlyPlaylist.name}</h2>
          </div>
          <div className="flex flex-col items-start">
            {monthlyPlaylist?.tracks.items.map((item) => {
              const artists = item.track.artists
                .map((artist, index) => {
                  return `${artist.name}${
                    item.track.artists.length > 1 &&
                    index < item.track.artists.length - 1
                      ? `, `
                      : ``
                  }`;
                })
                .join("");

              const queryParameters = new URLSearchParams(
                `${item.track.name} ${artists}`
              ).toString();
              const youtubeSearch = `https://www.youtube.com/results?search_query=${queryParameters}`;

              return (
                <a href={youtubeSearch} target="_blank" className="mb-4">
                  <div className="flex cursor-pointer items-center">
                    <img
                      className="mr-2 h-full max-w-[60px] rounded-sm object-cover"
                      src={item.track.album.images[2].url}
                      width={60}
                      height={60}
                    />
                    <div className="flex flex-col">
                      <span>{item.track.name}</span>
                      <span className="font-light text-neutral-500">
                        {artists}
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaylistPage;
