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
          <h1 className="h1 mb-0.5">Julien Thibeaut</h1>
          <p className="paragraph">Senior Front-End Developer</p>
        </div>
      </div>
      <div className="mb-4 mt-12">
        <h2 className="h2 mb-4">About me</h2>
        <p className="paragraph mb-2">
          Since 2016, I've been{" "}
          <strong className="bold">crafting UIs with React</strong>,
          specializing in creating component libraries, design systems, and
          front-end architecture. My experience spans working with startups on
          SaaS products, mobile apps, or e-commerce, as well as building
          products independently or alongside friends.
        </p>
        <p className="paragraph mb-2">
          I take great pleasure in collaborating with designers during the
          design process to develop visually stunning screens and enhance user
          experiences. If you're interested in collaborating or have any project
          ideas, you can check out my{" "}
          <Link href="/services" className="link">
            services
          </Link>
          .
        </p>
        <p className="paragraph mb-2">
          I enjoy curating a{" "}
          <Link href={"/monthly-playlists"} className="link">
            playlist per month
          </Link>
          , and I'm committed to{" "}
          <Link href={"/blog"} className="link">
            writing more frequently
          </Link>
          .
        </p>
        <p className="paragraph">
          My website acts as my digital garden, where I'll continuously update
          it with my latest projects, experiments, and insights. Welcome to my
          personal website!
        </p>
      </div>
      <div className="mt-24">
        <h2 className="h2 mb-4">Current projects</h2>
        <p className="paragraph mb-2">
          I'm currently engaged in several exciting projects:
        </p>
        <ul className="list-inside list-disc">
          <li className="paragraph mb-2">
            <strong className="bold">Blogging</strong>: I regularly share
            insights and tutorials, especially on UI elements, React, Tailwind
            CSS, and more. You can find them on my{" "}
            <Link href="/blog" className="link">
              blog
            </Link>
            .
          </li>
          <li className="paragraph mb-2">
            <strong className="bold">Freelancing</strong>: I'm available for
            front-end development freelancing and consulting. Feel free to check
            out my{" "}
            <Link href="/services" className="link">
              services
            </Link>{" "}
            and get in touch if you're interested in working with me.
          </li>
          <li className="paragraph mb-2">
            <strong className="bold">New Ventures</strong>: I'm currently
            working on{" "}
            <a
              href="https://logoshaper.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              logoshaper
            </a>{" "}
            with a friend. It's a new kind of logo maker, focus on great design
            for startups, SaaS, small businesses, and more. You can follow my
            journey building it on Twitter.
          </li>
        </ul>
      </div>
      <div className="mt-24">
        <h2 className="h2 mb-4">My latest articles</h2>
        <ul>
          {postsMetadata.slice(0, 3).map((post) => {
            return (
              <li key={post.slug} className="mb-2">
                <Link href={`/blog/${post.slug}`} className="link">
                  {post.title}
                </Link>
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
