import TagSkeleton from "@/components/TagSkeleton"
import Title from "@/components/Title"
import { titleContent } from "@/utils/constants"

const Loading = () => {
  return <div className="">
    <Title {...titleContent[2]} />
    <section className="mt-10">
        <main className="flex justify-center items-center flex-wrap gap-2 w-full md:w-3/4 mx-auto">
          <TagSkeleton />
          <TagSkeleton />
          <TagSkeleton />
          <TagSkeleton />
          <TagSkeleton />
          <TagSkeleton />
        </main>
      </section>
  </div>
}

export default Loading