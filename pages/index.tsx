import Link from "next/link";
import Image from "next/image";
import SectionContact from "../components/SectionContact";
import postsData from "./blog/metadata.json";
const { postsMetadata } = postsData;

export default function Home() {
  return (
    <div>
      <div className="flex items-center">
        <Image
          src="/me.jpg"
          width={400}
          height={400}
          alt="me"
          className="h-16 w-16 rounded-full"
        />
        <div className="ml-4">
          <h1 className="mb-0.5 text-xl text-slate-900 dark:text-slate-100">
            Julien Thibeaut
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            Senior Front-End Developer
          </p>
        </div>
      </div>
      <div className="prose mb-4 mt-12 dark:prose-dark">
        <h2 className="text-base font-medium">About me</h2>
        <p>
          Since 2016, I've been <strong>crafting UIs with React</strong>,
          specializing in creating component libraries, design systems, and
          front-end architecture. My experience spans working with startups on
          SaaS products, mobile apps, or e-commerce, as well as building
          products independently or alongside friends. I take great pleasure in
          collaborating with designers during the design process to develop
          visually stunning screens and enhance user experiences. If you're
          interested in collaborating or have any project ideas, you can check
          out my <Link href="/services">services</Link>.
        </p>
        <p>
          I enjoy curating a{" "}
          <Link href={"/monthly-playlists"}>playlist per month</Link>, and I'm
          committed to <Link href={"/blog"}>writing more frequently</Link>. You
          can also see what I'm doing <Link href="/now">now</Link>.
        </p>
        <p>
          My website acts as my digital garden, where I'll continuously update
          it with my latest projects, experiments, and insights. Welcome to my
          personal website!
        </p>
      </div>
      <div className="prose mt-24 dark:prose-dark">
        <h2 className="mt-12 text-base font-medium">Current projects</h2>
        <p>I'm currently engaged in several exciting projects:</p>
        <ul>
          <li>
            <strong>Blogging</strong>: I regularly share insights and tutorials,
            especially on UI elements, on my <Link href="/blog">blog</Link>.
          </li>
          <li>
            <strong>Freelancing</strong>: I'm available for front-end
            development freelancing and consulting. Feel free to check out my{" "}
            <Link href="/services">services</Link> and get in touch if you're
            interested in working with me.
          </li>
          <li>
            <strong>New Ventures</strong>: I'm also working on a few new
            projects that I'm excited to share with you{" "}
            <span className="cursor-wait font-bold">soon</span>.
          </li>
        </ul>
      </div>
      <div className="prose mt-24 dark:prose-dark">
        <h2 className="mt-12 text-base font-medium">My latest articles</h2>
        <ul>
          {postsMetadata.slice(0, 3).map((post) => {
            return (
              <li key={post.slug} className="mb-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="mt-24">
        <SectionContact />
      </div>
    </div>
  );
}
