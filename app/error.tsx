"use client";

import Title from "@/components/Title";
import { titleContent } from "@/utils/constants";

type ErrorProps = {
  error: Error;
  reset: () => void;
};
const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className="">
      <Title {...titleContent[titleContent.length - 1]} />
      <div className="mt-10 border-l-8 pl-4 border-gray-400">
        {error.message}
      </div>
    </div>
  );
};

export default Error;
