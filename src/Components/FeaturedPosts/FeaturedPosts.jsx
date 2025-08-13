import React, { useMemo } from "react";
import featuredPosts from "../../blog.json";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
    const randomPosts = useMemo(() => {
    if (!Array.isArray(featuredPosts.blogs)) return [];

    const shuffled = [...featuredPosts.blogs].sort(() => 0.5 - Math.random());

    return shuffled.slice(2, 7);
  }, []);
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 text-2xl font-bold">Featured Post</h4>
        <div className="space-y-3">
            {randomPosts.map((blogs) => (
            <Link
                to={`/blog/${blogs.id}`}
              key={blogs.id}
              className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100"
            >
              <img
                src={blogs.image}
                alt={blogs.title}
                className="object-cover w-12 h-12 rounded-md"
              />
              <p className="text-sm font-medium text-gray-800">{blogs.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
