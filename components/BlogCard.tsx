import { IBlogCard } from "@/utils/interfaces";
import { FaArrowRightLong } from "react-icons/fa6";
import { montserrat } from "@/utils/Fonts";
import Link from "next/link";

const BlogCard = (blogData: IBlogCard) => {
  return (
    <div className="border-t border-gray-content py-10 md:grid md:grid-cols-3">
      <h3 className="text-gray-content">{blogData.createdAt.toUTCString()}</h3>
      <div className="md:col-span-2">
        <Link href={'/'} className={`${montserrat.className} font-bold text-xl md:text-4xl`}>
          {blogData.title}
        </Link>
        <div className="uppercase text-sm flex gap-2 mt-2">
          {blogData.tags && blogData.tags.map((tag, index) => (
            <Link href={'/'} key={index} className="link-pink">
              {tag}
            </Link>
          ))}
        </div>
        <p className="text-gray-content my-4">{blogData.description}</p>
        <Link href={'/'} className="flex items-center gap-1 link-pink">
          Read more <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
