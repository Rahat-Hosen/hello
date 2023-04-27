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
    <section className="max-w-screen mx-auto px-6 py-12">
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug} className="mb-6">
              <Link href={`/blog/${post.slug}`}>
                <div>
                  <span className="text-gray-600 dark:text-gray-300">
                    {new Date(post.datePublished).toLocaleDateString()}
                  </span>
                  <span className="mx-1">✦</span>
                  <span className="text-gradient bg-gradient-to-r from-blue-500 to-purple-600 font-semibold hover:bg-gradient-to-r">
                    {post.title}
                  </span>
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
