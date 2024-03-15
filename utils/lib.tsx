import BlogCard from "@/components/BlogCard";
import { IBlogCard } from "./interfaces";

export const renderPosts = (posts: IBlogCard[]) => {
  if (posts.length === 0) {
    return (
      <h2 className="text-2xl italic h-64 flex items-center justify-center">
        Something is coming soon.....
      </h2>
    );
  }
  return posts.map((post) => <BlogCard key={post.uuid} {...post} />);
};
