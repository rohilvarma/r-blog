import BlogCard from "@/components/BlogCard";
import { montserrat } from "@/utils/Fonts";
import prisma from "@/utils/prisma-client";

const getLatestPosts = async() => {
  const posts = await prisma.post.findMany({
    select: {
      updatedAt: true,
      title: true,
      description: true,
      tags: {
        select: {
          name: true,
        }
      },
      uuid: true,
    },
    orderBy: {
      updatedAt: "desc"
    },
    take: 3
  })
  console.log(posts);
  return posts
}

export default async function Home() {
  const posts = await getLatestPosts()
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
          posts.map(post => <BlogCard key={post.uuid} {...post} />)
        }
        {/* {
          blogData.map((data, index) => <BlogCard {...data} key={index} />)
        } */}
      </section>
    </main>
  );
}
