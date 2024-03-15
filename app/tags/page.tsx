import TagSkeleton from "@/components/TagSkeleton";
import Title from "@/components/Title";
import { titleContent } from "@/utils/constants";
import prisma from "@/utils/prisma-client";

async function getTags() {
  const tags = await prisma.tag.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return tags;
}

const TagPage = async () => {
  const tags = await getTags();
  return (
    <div className="">
      <Title {...titleContent[2]} />
      <section className="mt-10">
        <main className="flex justify-center items-center flex-wrap gap-2 w-full md:w-3/4 mx-auto">
          {tags.map((tag) => (
            <div
              className="rounded-lg border-2 border-hot-pink hover:border-pink-700 dark:hover:border-pink-400 duration-200 link-pink px-2 py-1 cursor-pointer"
              key={tag.id}
            >
              #{tag.name}
            </div>
          ))}
        </main>
      </section>
    </div>
  );
};

export default TagPage;
