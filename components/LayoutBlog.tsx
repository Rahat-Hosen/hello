import { NextSeo, ArticleJsonLd } from "next-seo";
import { useRouter } from "next/router";
import postsData from "../pages/blog/metadata.json";
import Custom404 from "pages/404";
import Image from "next/image";
import NewsletterForm from "./NewsletterForm";
import HeaderShareGoBack from "./HeaderShareGoBack";

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
        images={[`https://julienthibeaut.xyz/api/og/?title=${title}`]}
      />
      <article className="prose prose-neutral mx-auto min-w-full pb-12 dark:prose-dark prose-h1:text-xl prose-h1:font-medium prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-a:font-normal prose-figcaption:text-center prose-strong:font-semibold prose-img:mb-0 prose-video:mb-0">
        <HeaderShareGoBack
          goBackHref="/blog"
          slug={`/blog/${slug}`}
          label="back to all posts"
          tweetHref={`https://twitter.com/intent/tweet?text=${title}&url=https://julienthibeaut.xyz/lab/${slug}`}
        />
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
