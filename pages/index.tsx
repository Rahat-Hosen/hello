import Link from "next/link";
import Image from "next/image";
import SectionContact from "../components/SectionContact";
import postsData from "./blog/metadata.json";
const { postsMetadata } = postsData;

export default function Home() {
  return (
    <div className="animate-slideFromDownAndFade">
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
      <div className="mb-4 mt-16">
        <h2 className="h2 mb-4">About me</h2>
        <p className="paragraph mb-2">
          Crafting UIs with React since 2016. Passionate about interface design
          and attention to detail, striving to create great experiences.
        </p>
      </div>
      <div className="mt-16">
        <h2 className="h2 mb-4">Current projects</h2>
        <p className="paragraph mb-2">
          I'm currently engaged in several exciting projects:
        </p>
        <ul className="list-inside list-disc">
          <li className="paragraph mb-2">
            <span className="font-medium">Blogging</span>: I regularly share
            insights and tutorials, especially on UI elements, React, Tailwind
            CSS, and more. You can find them on my{" "}
            <Link href="/blog" className="link">
              blog
            </Link>
            .
          </li>
          <li className="paragraph mb-2">
            <span className="font-medium">Freelancing</span>: I'm available for
            front-end development freelancing and consulting. Feel free to check
            out my{" "}
            <Link href="/services" className="link">
              services
            </Link>{" "}
            and get in touch if you're interested in working with me.
          </li>
          <li className="paragraph mb-2">
            <span className="font-medium">Ventures</span>: I'm working on
            something new.
          </li>
        </ul>
      </div>
      <div className="mt-16">
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
      <div className="mt-16">
        <SectionContact />
      </div>
    </div>
  );
}
