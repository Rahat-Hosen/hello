import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import "@code-hike/mdx/dist/index.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Julien Thibeaut - front-end developer 🌐"
        description="I'm Julien Thibeaut, a freelance front-end developer based in Paris. I love to work with JavaScript, React, React Native, Next.js, and TypeScript!"
        canonical="https://www.julienthibeaut.xyz"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.julienthibeaut.xyz",
          site_name: "julienthibeaut",
          images: [
            {
              url: "https://www.julienthibeaut.xyz/meta.jpg",
              width: 1200,
              height: 630,
              alt: "Meta image",
            },
          ],
        }}
        twitter={{
          handle: "@ibelick",
          site: "@ibelick",
          cardType: "summary_large_image",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
};

export default App;
