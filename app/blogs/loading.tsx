import BlogCardSkeleton from "@/components/BlogCardSkeleton";
import Title from "@/components/Title";
import { titleContent } from "@/utils/constants";

const loading = () => {
  return (
    <div className="">
      <Title {...titleContent[1]} />
      <section className="mt-10">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </section>
    </div>
  );
};

export default loading;
