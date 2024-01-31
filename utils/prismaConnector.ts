import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({log: ["query"]})

async function main() {
  const posts = await prisma.blogCard.createMany({
    data: [
      {
        title: "Release of Tailwind Nextjs R-Blog",
        description: "Release of Tailwind Nextjs Starter Blog template v2.0, refactored with Nextjs App directory and React Server Components setup.Discover the new features and how to migrate from V1.",
      },
      {
        title: "New features in v1",
        description: "An overview of the new features released in v1 - code block copy, multiple authors, frontmatter layout and more"
      },
      {
        title: "Introducing Multi-part Posts with Nested Routing",
        description: "The blog template supports posts in nested sub-folders. This can be used to group posts of similar content e.g. a multi-part course. This post is itself an example of a nested route!"
      },
      {
        title: "Introducing Tailwind Nextjs Starter Blog",
        description: "Looking for a performant, out of the box template, with all the best in web technology to support your blogging needs? Checkout the Tailwind Nextjs Starter Blog template."
      }
    ]
  })
  // const posts = await prisma.blogCard.findMany()
  console.log(posts);
  
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })