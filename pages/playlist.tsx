import { useState, useEffect } from "react";
import NewWindowIcon from "../components/NewWindowIcon";
import AccordionMenu from "../components/AccordionMenu";
import { getAccessToken, getUserPlaylists, getPlaylist } from "../lib/spotify";

const PlaylistPage = () => {
  const [token, setToken] = useState(null);
  const [monthlyPlaylist, setMonthlyPlaylist] = useState(null);
  const [covers, setCovers] = useState<string[] | []>([]);

  useEffect(() => {
    const test = async () => {
      const { access_token } = await getAccessToken();
      const playlists = await getUserPlaylists(access_token);

      console.log("access_token=>>", access_token);

      const currentMonth = new Intl.DateTimeFormat("en-US", {
        month: "long",
      }).format(new Date(Date.now()));

      const lastPlaylist = await getPlaylist(
        access_token,
        playlists.items[0].id
      );

      setMonthlyPlaylist(lastPlaylist);
    };

    test();
  }, []);

  if (!monthlyPlaylist) {
    return <p>loading...</p>;
  }

  console.log("monthlyPlaylist", monthlyPlaylist);

  return (
    <section className="max-w-screen relative mx-auto mb-14 px-6 py-12">
      {/* <div>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`}
        >
          Login to Spotify
        </a>
      </div> */}
      <div className="absolute right-0">
        {covers?.map((cover) => (
          <img src={cover} />
        ))}
      </div>
      <div className="w-full">
        <div className="mb-4 max-w-sm">
          I like to curated music around times. You can click on track to open
          search with YouTube.
        </div>
        <div>
          <div className="mb-8">
            <div className="w-64">
              <img
                className="rounded-lg shadow-md"
                src={monthlyPlaylist.images[0].url}
              />
              <h2 className="mt-1 text-2xl">{monthlyPlaylist.name}</h2>
            </div>
          </div>
          <div className="flex flex-col items-start">
            {monthlyPlaylist?.tracks?.items.map((item) => {
              console.log("item.track.name", item.track);
              const artists = item.track.artists
                .map((artist, index) => {
                  return `${artist.name}${
                    item.track.artists.length > 1 &&
                    index == !item.track.artists
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
