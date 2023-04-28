import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import postsData from "../pages/blog/metadata.json";
const { postsMetadata } = postsData;

const LayoutBlog: React.FC = ({ children }) => {
  const router = useRouter();
  const slug = router.pathname.replace("/blog/", "");
  const metadata = postsMetadata.find((post) => post.slug === slug);

  if (!metadata) {
    console.error("No metadata found for this post");
  }

  const { title, description, datePublished, dateModified } = metadata!;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://www.url.ie/a",
          title: title,
          description: description,
        }}
        canonical={`https://julienthibeaut.xyz/blog/${slug}`}
      />
      <ArticleJsonLd
        url={`https://julienthibeaut.xyz/blog/${slug}`}
        title={title}
        datePublished={datePublished}
        dateModified={dateModified || undefined}
        authorName="Julien Thibeaut"
        publisherName="Julien Thibeaut"
        description={description}
        images={["https://www.julienthibeaut.xyz/meta.jpg"]}
      />
      <meta property="og:image" content="https:///api/og" />
      <article className="prose mx-auto max-w-screen-md px-6 pt-12 pb-32 prose-figcaption:text-center prose-img:mb-0 dark:prose-dark">
        {children}
        <p className="text-right text-sm text-gray-600 dark:text-gray-400">
          Published: {new Date(datePublished).toLocaleDateString()}{" "}
          {dateModified
            ? `❍ Last
  update: ${new Date(dateModified).toLocaleDateString()}`
            : null}
        </p>
      </article>
    </>
  );
};

export default LayoutBlog;
