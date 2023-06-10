import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import React, { useState } from "react";
import postsData from "../pages/blog/metadata.json";
import Custom404 from "pages/404";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import { CheckIcon, CopyIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/Tooltip";

const { postsMetadata } = postsData;

const FooterBlog = () => {
  return (
    <div className="not-prose">
      <div className="rounded-xl bg-slate-100 dark:bg-slate-900">
        <div className="flex h-full flex-col items-center p-6 sm:flex-row ">
          <Image
            src="/me.jpg"
            width={400}
            height={400}
            alt="me"
            className="mb-2 mr-0 h-14 w-14 rounded-full sm:mr-6"
          />
          <p className="text-center sm:text-left">
            I'm Julien, a senior front-end developer. I'm passionate about
            crafting digital projects. Let's connect on Twitter{" "}
            <a href="https://twitter.com/ibelick" className="font-bold">
              @ibelick
            </a>
          </p>
        </div>
      </div>
      <div className="mt-12">
        <div className="mx-auto max-w-md">
          <p className="mb-2 text-sm">
            Join my newsletter! I will send you a mail sometime (not too often)
            with my latest articles, projects and some personal thoughts.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

type CopyLinkProps = {
  link: string;
};

const CopyLink: React.FC<CopyLinkProps> = ({ link }) => {
  const [hasCheckIcon, setHasCheckIcon] = useState(false);

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    setHasCheckIcon(true);

    setTimeout(() => {
      setHasCheckIcon(false);
    }, 1000);
  };

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div
              className="inline-flex cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200 dark:bg-gray-900"
              onClick={onCopy}
            >
              {hasCheckIcon ? (
                <CheckIcon className="h-4 w-4 text-black dark:text-white" />
              ) : (
                <CopyIcon className="h-4 w-4 text-black dark:text-white" />
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>Copy link</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

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
      <article className="prose pb-12 dark:prose-dark prose-figcaption:text-center prose-img:mb-0 prose-video:mb-0">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="mb-4 inline-flex font-normal text-slate-800 no-underline transition hover:text-slate-600 dark:text-slate-100 dark:hover:text-slate-300"
          >
            ← back to all posts
          </Link>
          <div className="flex gap-4">
            <CopyLink link={`https://julienthibeaut.xyz/blog/${slug}`} />
            <div className="">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className="inline-flex cursor-pointer rounded-full bg-gray-100 p-2 transition hover:bg-gray-200 dark:bg-gray-900"
                      onClick={() => {
                        window.open(
                          `https://twitter.com/intent/tweet?text=${title}&url=https://julienthibeaut.xyz/blog/${slug}`,
                          "_blank"
                        );
                      }}
                    >
                      <TwitterLogoIcon className="h-4 w-4 text-black dark:text-white" />
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>Share on Twitter</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        {children}
        <div className="mt-8 flex flex-col text-right text-sm text-gray-600 dark:text-gray-400">
          <span className="mb-1">
            Published: {new Date(datePublished).toLocaleDateString()}{" "}
          </span>
          {dateModified ? (
            <span>
              Last update: {new Date(dateModified).toLocaleDateString()}
            </span>
          ) : null}
        </div>
        <div>
          <hr className="mx-auto my-8 w-28" />
        </div>
        <FooterBlog />
      </article>
    </>
  );
};

export default LayoutBlog;
