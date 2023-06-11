import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "@code-hike/mdx/dist/index.css";
import { useRouter } from "next/router";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const canonicalUrl = `https://www.julienthibeaut.xyz${router.asPath}`;

  return (
    <ThemeProvider attribute="class">
      <DefaultSeo
        title="Julien Thibeaut"
        description="I'm Julien Thibeaut, a Paris-based freelance front-end developer. Specializing in JavaScript, React, React Native, Next.js, and TypeScript, I'm passionate about creating engaging and interactive digital experiences."
        canonical={canonicalUrl}
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
    </ThemeProvider>
  );
};

export default App;
