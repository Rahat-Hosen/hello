import Link from "next/link";
import { SimplifiedPlaylist } from "spotify-types";
import useSWR from "swr";
import { fetcher } from "lib/fetcher";

const MonthyPlaylistPage = () => {
  const { data: monthlyPlaylists } = useSWR<SimplifiedPlaylist[]>(
    "/api/playlists/monthly",
    fetcher
  );

  return (
    <section className="max-w-screen relative mx-auto mb-14 px-6 py-12">
      <div className="mb-4 max-w-md">
        <p>
          Every month, I create a playlist to discover new songs and artists.
          This way of curating helps me to access memories and emotions from the
          past.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {monthlyPlaylists?.map((playlist: any) => {
          return (
            <div key={playlist.id}>
              <Link
                href={`/monthly-playlists/${playlist.id}`}
                className="flex flex-col items-center gap-2"
              >
                <img
                  src={playlist.images[0].url}
                  className="h-48 w-full rounded-lg object-cover shadow-md"
                />
                <span>{playlist.name}</span>
              </Link>
            </div>
          );
        }) || <p>loading...</p>}
      </div>
    </section>
  );
};

export default MonthyPlaylistPage;
