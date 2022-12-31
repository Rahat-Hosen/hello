import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  getAccessToken,
  getUserPlaylists,
  getPlaylist,
} from "../../lib/spotify";

const getMonths = () => {
  const months = [];
  for (let i = 0; i < 12; i++) {
    months.push(
      new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(new Date(0, i))
    );
  }
  return months;
};

const MonthyPlaylistPage = () => {
  const [playlists, setPlaylists] = useState<any>(null);

  useEffect(() => {
    const fetchUserPlaylists = async () => {
      const { access_token } = await getAccessToken();
      const playlists = await getUserPlaylists(access_token);
      const months = getMonths();

      const monthlyPlaylists = playlists.items.filter((playlist: any) => {
        return months.some((month) => playlist.name.startsWith(month));
      });

      setPlaylists(monthlyPlaylists);
    };

    fetchUserPlaylists();
  }, []);

  console.log("monthlyPlaylists", playlists);

  return (
    <section className="max-w-screen relative mx-auto mb-14 px-6 py-12">
      <div className="mb-4 max-w-md">
        <p className="mb-1">I like to curate music.</p>
        <p>
          Every month I create a playlist. It helps me discover new songs and
          artists, as well as recall certain feelings and memories from the
          past.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {playlists?.map((playlist: any) => {
          return (
            <div key={playlist.id}>
              <Link href={`/monthly-playlists/${playlist.id}`}>
                <a className="flex flex-col items-center gap-2">
                  <img
                    src={playlist.images[0].url}
                    className="h-48 w-full rounded-lg object-cover shadow-md"
                  />
                  <span>{playlist.name}</span>
                </a>
              </Link>
            </div>
          );
        }) || <p>loading...</p>}
      </div>
    </section>
  );
};

export default MonthyPlaylistPage;
