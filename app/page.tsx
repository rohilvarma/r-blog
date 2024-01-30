import { BlogCard } from "@/components";
import { montserrat } from "@/utils/Fonts";
import { IBlogCard } from "@/utils/interfaces";
export default function Home() {
  const blogData: IBlogCard[] = [
    {
      key: 1,
      date: "August 5, 2023",
      title: "Release of Tailwind Nextjs R-Blog",
      description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
      tags: ["next-js", "tailwind", "guide", "feature"]
    },
    {
      key: 2,
      date: "August 7, 2021",
      title: "New features in v1",
      description: "An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more",
      tags: ["next-js", "tailwind", "guide"]
    },
    {
      key: 3,
      date: "May 2, 2021",
      title: "Introducing Multi-part Posts with Nested Routing",
      description: "The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!",
      tags: ["next-js", "multi-author", "feature"]
    },
    {
      key: 4,
      date: "January 12, 2021",
      title: "Introducing Tailwind Nextjs Starter Blog",
      description: "Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template.",
      tags: ["next-js", "tailwind", "guide"]
    }
  ]
  return (
    <main className="">
      <section className="">
        <h1 className={`${montserrat.className} font-bold text-2xl md:text-3xl`}>Latest</h1>
        <p className="text-gray-content tracking-wide mt-2">
          A blog created with Next.JS, Tailwind CSS and Prisma.
        </p>
      </section>
      <section className="mt-10">
        {
          blogData.map(data => <BlogCard {...data} key={data.key} />)
        }
      </section>
    </main>
  );
}
