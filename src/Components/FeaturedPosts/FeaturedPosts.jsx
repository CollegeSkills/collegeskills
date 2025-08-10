import React from "react";
import featuredPosts from "../../BlogData";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="space-y-6">
      <div>
        <h4 className="mb-2 font-bold">Featured post</h4>
        <div className="space-y-3">
          {featuredPosts.map((post) => (
            <Link
              to={post.link}
              key={post.id}
              className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100"
            >
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-12 h-12 rounded-md"
              />
              <p className="text-sm font-medium text-gray-800">{post.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
