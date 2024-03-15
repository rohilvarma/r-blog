const TagSkeleton = () => {
  return (
    <div className="animate-pulse rounded-lg border-2 border-hot-pink hover:border-pink-700 dark:hover:border-pink-400 duration-200 link-pink px-2 py-1 flex items-center gap-1">
      #<div className="h-2 w-12 bg-hot-pink"></div>
    </div>
  );
};

export default TagSkeleton;
