import { FaArrowRightLong } from "react-icons/fa6";

const BlogCardSkeleton = () => {
  return (
    <div className="animate-pulse border-t border-gray-content py-10 md:grid md:grid-cols-3">
      <h3 className="bg-gray-content/30 h-3 w-32 rounded-sm"></h3>
      <div className="md:col-span-2">
        <div className={`bg-text-heading-dark h-6 w-64 rounded-md`}></div>
        <div className="uppercase text-sm flex gap-2 mt-4">
          <p className="bg-hot-pink h-4 w-16"></p>
          <p className="bg-hot-pink h-4 w-16"></p>
        </div>
        <div className=" my-4 line-clamp-2">
          <div className="bg-gray-content/30 h-4 w-full mb-4"></div>
          <div className="bg-gray-content/30 h-4 w-full mb-4"></div>
        </div>
        <div className="flex items-center gap-1 link-pink">
          Read more <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
