import Link from "next/link";
import postsData from "./metadata.json";
const { postsMetadata } = postsData;

type BlogPageProps = {
  posts: Posts[];
};

type Posts = {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string | null;
  slug: string;
};

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <section className="pt-2 md:pt-24">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="mb-6">
              <Link href={`/blog/${post.slug}`}>
                <div className="flex transition hover:opacity-70">
                  <span className="flex-1 pr-4 font-medium text-slate-900 dark:text-slate-100">
                    {post.title}
                  </span>
                  <time className="text-sm text-slate-500 dark:text-gray-300">
                    {new Date(post.datePublished).toLocaleDateString()}
                  </time>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export const getStaticProps = async () => {
  const posts: Posts[] = postsMetadata.sort((a, b) => {
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
  });

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
