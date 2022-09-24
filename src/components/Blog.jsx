import React from "react";
import BlogPost from "./BlogPost";
import JSON from "../blogData.json";

const Blog = () => {
  return (
    <section className="px-8 pt-8 sm:mt-4 sm:w-4/5 mx-auto md:hd">
      <h3 className="text-3xl font-bold text-navy pt-8">Jessica’s Blogs</h3>
      <div className="flex flex-wrap">
        {JSON.map((data, index) => {
          return (
            <div key={index} className="w-full sm:w-2/6 py-8 pr-6">
              <BlogPost
                imageLink={data.image}
                tag={data.tag}
                date={data.date}
                title={data.title}
                readMoreLink={data.readMoree}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
