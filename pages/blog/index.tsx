import Link from "next/link";
import postsData from "./metadata.json";
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
            <span className="font-medium text-slate-900 dark:text-slate-100">
              {post.title}
            </span>
            {/* <div className="mt-1 flex gap-2">
              {post.tags?.map((tag, index) => {
                return <Badge key={tag}>{tag}</Badge>;
              })}
            </div> */}
          </div>
          <time className="text-sm text-slate-500 dark:text-gray-300">
            {new Date(post.datePublished!).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </li>
  );
};

const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <section className="pt-2 md:pt-24">
      <ul>
        {posts.map((post) => {
          return <CardBlogPost key={post.slug} post={post} />;
        })}
      </ul>
    </section>
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
