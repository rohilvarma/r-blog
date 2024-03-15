import Title from "@/components/Title";
import { titleContent } from "@/utils/constants";
import prisma from "@/utils/prisma-client";
import { Suspense } from "react";
import Loading from "./loading";
import { renderPosts } from "@/utils/lib";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

const getLatestPosts = async () => {
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
    take: 3,
  });
  return posts;
};

export default async function Home() {
  const posts = await getLatestPosts();

  return (
    <main className="">
      <Title {...titleContent[0]} />
      <section className="mt-10">
        <ErrorBoundary>
          <Suspense fallback={<Loading />}>{renderPosts(posts)}</Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
}
