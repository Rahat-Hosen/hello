import Link from "next/link";
import { SimplifiedPlaylist } from "spotify-types";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";
import { NextSeo } from "next-seo";

const MonthyPlaylistPage = () => {
  const { data: monthlyPlaylists } = useSWR<SimplifiedPlaylist[]>(
    "/api/playlists/monthly",
    fetcher
  );

  return (
    <>
      <NextSeo title="Monthly Playlists" />
      <section>
        <div className="mb-8 max-w-md">
          <p>
            Every month, I create a playlist with my favorite songs of the
            moment.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {monthlyPlaylists?.map((playlist: any) => {
            return (
              <div key={playlist.id}>
                <Link
                  href={`/monthly-playlists/${playlist.id}`}
                  className="flex flex-col items-center gap-2"
                >
                  <img
                    src={playlist.images[0].url}
                    className="h-48 w-full rounded-lg object-cover"
                  />
                  <span className="font-small">{playlist.name}</span>
                </Link>
              </div>
            );
          }) || (
            <div>
              <span className="inline-flex animate-bounce">●</span>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MonthyPlaylistPage;
