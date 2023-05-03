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
            tw="relative flex h-full w-full items-center justify-center p-10"
            style={{
              display: "flex",
              background:
                "linear-gradient(to right, rgb(24, 28, 35), rgba(11, 13, 19, 0.975), rgb(0, 0, 0))",
            }}
          >
            <div
              tw="absolute bottom-12 left-16 flex items-center"
              style={{ display: "flex" }}
            >
              <img
                alt="Author"
                src={`https://github.com/ibelick.png`}
                tw="mr-4 h-10 w-10 rounded-full object-cover"
              />
              <span tw="text-2xl text-slate-100/80">@ibelick</span>
            </div>
            <div style={{ display: "flex" }}>
              <h1 tw="text-7xl font-medium text-white">{title}</h1>
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
