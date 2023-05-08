import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React from "react";
import postsData from "../pages/blog/metadata.json";
import Custom404 from "pages/404";
import Link from "next/link";
const { postsMetadata } = postsData;

const LayoutBlog: React.FC = ({ children }) => {
  const router = useRouter();
  const slug = router.pathname.replace("/blog/", "");
  const metadata = postsMetadata.find((post) => post.slug === slug);

  if (!metadata) {
    console.error("No metadata found for this post");
  }

  const { title, description, datePublished, dateModified } = metadata!;

  if (!datePublished) {
    console.log("Not published yet");
    return <Custom404 />;
  }

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          url: "https://julienthibeaut.xyz",
          title: title,
          description: description,
          images: [
            {
              url: `https://julienthibeaut.xyz/api/og/?title=${title}`,
              width: 1200,
              height: 630,
              alt: title,
              type: "image/jpeg",
            },
          ],
        }}
        canonical={`https://julienthibeaut.xyz/blog/${slug}`}
      />
      <meta
        property="twitter:image"
        content={`https://julienthibeaut.xyz/api/og/?title=${title}`}
      />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <ArticleJsonLd
        url={`https://julienthibeaut.xyz/blog/${slug}`}
        title={title}
        datePublished={datePublished}
        dateModified={dateModified || undefined}
        authorName="Julien Thibeaut"
        publisherName="Julien Thibeaut"
        description={description}
        images={[`https://julienthibeaut.xyz/blog/api/og/?title=${title}`]}
      />
      <article className="prose dark:prose-dark prose-figcaption:text-center prose-img:mb-0 prose-video:mb-0">
        <Link
          href="/blog"
          className="mb-4 inline-flex font-normal text-slate-800 no-underline transition hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
        >
          ← back to all posts
        </Link>
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
