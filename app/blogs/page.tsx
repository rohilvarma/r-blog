import Title from "@/components/Title";
import { titleContent } from "@/utils/constants";
import { renderPosts } from "@/utils/lib";
import prisma from "@/utils/prisma-client";

async function getAllPosts() {
  const posts = await prisma.post.findMany({
    select: {
      updatedAt: true,
      title: true,
      description: true,
      tags: {
        select: {
          name: true,
        },
      },
      uuid: true,
    },
    orderBy: {
      updatedAt: "desc",
    },
  });
  return posts;
}

const BlogPage = async () => {
  const allPosts = await getAllPosts();
  return (
    <div className="">
      <Title {...titleContent[1]} />
      <section className="mt-10">{renderPosts(allPosts)}</section>
    </div>
  );
};

export default BlogPage;
