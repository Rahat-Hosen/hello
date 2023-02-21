import type { SpotifyPlaylist } from "../../lib/spotify";
import Link from "next/link";
import { useRouter } from "next/router";
import { fetcher } from "lib/fetcher";
import useSWR from "swr";
import NewWindowIcon from "components/NewWindowIcon";

const PlaylistPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: playlist } = useSWR<SpotifyPlaylist>(
    id ? `/api/playlists/${id}` : null,
    fetcher
  );

  if (!playlist) {
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
          ← Go back to all monthly playlists
        </Link>
      </div>
      <div className="w-full">
        <div>
          <div className="mb-8">
            <img
              className="h-64 w-64 rounded-lg object-cover shadow-md"
              src={playlist.images[0].url}
            />
            <div className="mt-1 flex items-center">
              <h2>{playlist.name}</h2>
              <span className="mx-2">◦</span>
              <a
                className="inline-flex text-sm font-light text-neutral-900 no-underline hover:underline dark:text-neutral-200"
                href={playlist.external_urls.spotify}
                target="_blank"
              >
                Open in Spotify
                <span className="ml-0.5">
                  <NewWindowIcon />
                </span>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start">
            {playlist?.tracks.items.map((item, index) => {
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
              )
                .toString()
                .replace("=", "");

              const youtubeSearch = `https://www.youtube.com/results?search_query=${queryParameters}`;

              return (
                <a
                  href={youtubeSearch}
                  target="_blank"
                  className="mb-4"
                  key={`${item.track.id}-${index}`}
                >
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
