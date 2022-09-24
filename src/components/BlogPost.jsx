import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogPost = ({ imageLink, tag, date, title, readMoreLink }) => {
  return (
    <div className="w-full">
      <img src={imageLink} alt={title} className="w-full" />

      <div className="w-full py-3 sm:py-5">
        <p className="text-gray text-xs">
          {tag} / {date}
        </p>
      </div>

      <h5 className="text-md font-semibold w-full pb-8 sm:pb-12">{title}</h5>

      <p
        onClick={readMoreLink}
        className="cursor-pointer font-semibold text-sm text-gold flex items-center w-full"
      >
        Read More{" "}
        <span className="pl-3 ">
          <FaArrowRight />
        </span>
      </p>
    </div>
  );
};

export default BlogPost;
