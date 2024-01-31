import { BlogCard } from "@/components";
import { montserrat } from "@/utils/Fonts";
import { IBlogCard } from "@/utils/interfaces";
import { prisma } from "@/utils/prismaConnector";

async function getBlogCards() {
  const data = await prisma.blogCard.findMany()
  return data
}
export default async function Home() {
  const blogData: IBlogCard[] = await getBlogCards()
  
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
          blogData.map((data, index) => <BlogCard {...data} key={index} />)
        }
      </section>
    </main>
  );
}
