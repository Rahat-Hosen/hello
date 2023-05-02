import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has("title");

    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "My default title";

    const inter700 = fetch(
      new URL(
        `../../node_modules/@fontsource/inter/files/inter-latin-700-normal.woff`,
        import.meta.url
      ).toString()
    ).then((res) => res.arrayBuffer());

    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            textAlign: "center",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            position: "relative",
          }}
        >
          <div
            style={{
              background: `linear-gradient(to right, rgb(219, 234, 254), rgb(147, 197, 253), rgb(59, 130, 246))`,
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          />
          <div
            style={{ display: "flex", backdropFilter: "blur(24px)" }}
            tw="absolute bottom-0 right-0 h-[80%] w-[90%] rounded-tl-2xl bg-gray-900/80 shadow-2xl"
          >
            <div
              style={{ display: "flex" }}
              tw="absolute top-0 left-0 flex w-full rounded-tl-2xl border-b border-gray-700/50 bg-slate-800/70 py-[10px] px-4"
            >
              <div tw="h-3 w-3 mr-2 rounded-full bg-[#FE5F57]"></div>
              <div tw="h-3 w-3 mr-2 rounded-full bg-[#FFBC2E]"></div>
              <div tw="h-3 w-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div
              tw="flex h-full w-full flex-col justify-end p-10 text-white"
              style={{ display: "flex" }}
            >
              <div
                tw="text-left flex-col word"
                style={{
                  display: "flex",
                  fontFamily: "Inter",
                  wordBreak: "break-word",
                }}
              >
                <h2
                  tw="text-7xl font-black"
                  style={{
                    letterSpacing: "-0.5px",
                  }}
                >
                  {title}
                </h2>
                <div
                  tw="mt-6 flex whitespace-nowrap"
                  style={{ display: "flex" }}
                >
                  <div
                    tw="flex justify-center items-center"
                    style={{ display: "flex" }}
                  >
                    <img
                      alt="Author"
                      src={`https://github.com/ibelick.png`}
                      tw="object-cover mr-4 h-8 w-8 rounded-full"
                    />
                    <span tw="text-base text-slate-200/80">@ibelick</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter 700",
            data: await inter700,
          },
        ],
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);

    new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
