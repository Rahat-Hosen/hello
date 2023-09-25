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
      <div className="relative rounded-xl bg-neutral-100 dark:bg-neutral-900">
        <div className="flex h-full flex-col items-center p-4 text-center sm:flex-col md:p-12">
          <Image
            src="/me.jpg"
            width={400}
            height={400}
            alt="me"
            className="mb-4 mr-0 h-16 w-16 rounded-full sm:mr-6"
          />
          <div className="flex flex-col items-start text-sm">
            <p className="mb-2">
              I'm Julien, a senior front-end developer. I'm passionate about
              crafting digital projects. Let's connect on Twitter{" "}
              <a href="https://twitter.com/ibelick" className="font-semibold">
                @ibelick
              </a>
            </p>
            <p className="mb-6">
              You can also join my newsletter! I will send you a mail sometime
              (not too often) with my latest articles and projects.
            </p>
            <div className="mx-auto flex w-full items-center justify-center md:w-[80%]">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="mx-auto max-w-md"></div>
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
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div
            className="inline-flex cursor-pointer rounded-full bg-neutral-50 p-2 transition hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-900"
            onClick={onCopy}
          >
            {hasCheckIcon ? (
              <CheckIcon className="h-4 w-4 text-black dark:text-white" />
            ) : (
              <CopyIcon className="h-4 w-4 text-black dark:text-white" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-100 p-2 transition hover:bg-neutral-200 dark:bg-neutral-900 dark:hover:bg-neutral-900">
          Copy link
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
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
      <article className="prose prose-neutral mx-auto mt-8 min-w-full pb-12 dark:prose-dark prose-h1:text-xl prose-h1:font-medium prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-a:font-normal prose-figcaption:text-center prose-strong:font-semibold prose-img:mb-0 prose-video:mb-0">
        <div className="mb-12 flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex font-normal text-neutral-800 no-underline transition hover:text-neutral-600 dark:text-neutral-100 dark:hover:text-neutral-300"
          >
            ← back to all posts
          </Link>
          <div className="flex gap-4">
            <CopyLink link={`https://julienthibeaut.xyz/blog/${slug}`} />
            <div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <span
                      className="inline-flex cursor-pointer rounded-full bg-neutral-50 p-2 transition hover:bg-neutral-100 dark:bg-neutral-950 dark:hover:bg-neutral-900"
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
