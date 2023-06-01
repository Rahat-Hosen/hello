import Link from "next/link";
import Image from "next/image";
import SectionContact from "../components/SectionContact";

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
      <div className="prose mt-24 dark:prose-dark prose-ul:pl-0">
        <h2 className="mt-12 text-base font-medium">Current projects</h2>
        <p>
          Here's a glimpse of the projects I'm currently working on. Most of
          them are still in development and will be launched soon. Stay tuned
          for updates!
        </p>
      </div>
      <div className="mt-24">
        <SectionContact />
      </div>
    </div>
  );
}
