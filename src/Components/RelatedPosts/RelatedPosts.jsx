// src/components/RelatedPosts.jsx

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../blog.json";

const RelatedPosts = () => {

  const randomPosts = useMemo(() => {
    if (!Array.isArray(blogPosts.blogs)) return [];

    const shuffled = [...blogPosts.blogs].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, 4);
  }, []);

  return (
    <div className="py-6">
      <div className="px-4 mx-auto max-w-[95%]">
        <h4 className="mb-4 text-lg font-bold">Related Posts</h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {randomPosts.map((blogPost) => (
            <div
              key={blogPost.id}
              className="p-4 border rounded-lg shadow-sm"
            >
              <img
                src={blogPost.image}
                alt={blogPost.title}
                className="object-cover w-full mb-3 rounded-md h-36"
              />
              <h5 className="mb-2 font-semibold text-md">{blogPost.title}</h5>
              <Link
                to={`/blog/${blogPost.id}`}
                className="px-4 py-2 flex w-[115px] gap-1 rounded-lg mt-4 font-medium text-white bg-brand-primary"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedPosts;
