import Link from "next/link";
import postsData from "./metadata.json";
import { NextSeo } from "next-seo";
import Badge from "components/ui/Badge";
import { useState } from "react";
const { postsMetadata } = postsData;

type BlogPageProps = {
  posts: Post[];
};

type Post = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string | null;
  slug: string;
  tags: string[];
};

const CardBlogPost = ({ post }: { post: Post }) => {
  return (
    <li key={post.slug} className="mb-6">
      <Link href={`/blog/${post.slug}`}>
        <div className="flex transition hover:opacity-70">
          <div className="flex-1 pr-4">
            <span className="paragraph">{post.title}</span>
            {/* <div className="mt-1 flex gap-2">
              {post.tags?.map((tag, index) => {
                return <Badge key={tag}>{tag}</Badge>;
              })}
            </div> */}
          </div>
          <time className="text-sm text-neutral-500 dark:text-neutral-300">
            {new Date(post.datePublished!).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </li>
  );
};

const BlogPage = ({ posts }: BlogPageProps) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allBlogTags = posts.reduce((acc, post) => {
    return [...acc, ...post.tags];
  }, [] as string[]);
  const uniqueBlogTags = [...new Set(allBlogTags)];

  const filteredPosts = posts.filter((post) => {
    if (selectedTags.length === 0) {
      return true;
    }
    return post.tags.some((tag) => selectedTags.includes(tag));
  });

  return (
    <>
      <NextSeo title="Blog" />
      <section className="pt-2 md:pt-24">
        <div className="flex flex-wrap gap-2">
          {uniqueBlogTags.map((tag) => {
            return (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "secondary" : "primary"}
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </Badge>
            );
          })}
        </div>
        <ul className="mt-10">
          {filteredPosts.map((post) => {
            return <CardBlogPost key={post.slug} post={post} />;
          })}
        </ul>
      </section>
    </>
  );
};

export const getStaticProps = async () => {
  const publishedPosts = postsMetadata.filter((post) => {
    return post.datePublished !== null;
  }) as Post[];

  const posts: Post[] = publishedPosts.sort((a, b) => {
    return (
      new Date(b.datePublished!).getTime() -
      new Date(a.datePublished!).getTime()
    );
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
