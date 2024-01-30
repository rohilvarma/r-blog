import { IBlogCard } from "@/utils/interfaces";
import { FaArrowRightLong } from "react-icons/fa6";
import { montserrat } from "@/utils/Fonts";
import Link from "next/link";

const BlogCard = (blogData: IBlogCard) => {
  return (
    <div className="border-t border-gray-content py-10 md:grid md:grid-cols-3">
      <h3 className="text-gray-content">{blogData.date}</h3>
      <Link href={'/'} className="md:col-span-2">
        <h1 className={`${montserrat.className} font-bold text-xl md:text-4xl`}>
          {blogData.title}
        </h1>
        <div className="uppercase text-sm flex gap-2 mt-2">
          {blogData.tags.map((tag, index) => (
            <p key={index} className="link-pink">
              {tag}
            </p>
          ))}
        </div>
        <p className="text-gray-content my-4">{blogData.description}</p>
        <button className="flex items-center gap-1 link-pink">
          Read more <FaArrowRightLong />
        </button>
      </Link>
    </div>
  );
};

export default BlogCard;
