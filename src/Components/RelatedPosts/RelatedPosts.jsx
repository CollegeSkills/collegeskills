// src/components/RelatedPosts.jsx

import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../../BlogData";

const RelatedPosts = () => {
  return (
    <div className="py-6">
      <div className="px-4 mx-auto max-w-7xl">
        <h4 className="mb-4 text-lg font-bold">Related Posts</h4>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="p-4 border rounded-lg shadow-sm">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full mb-3 rounded-md h-36"
              />
              <h5 className="mb-2 font-semibold text-md">{post.title}</h5>
              <p className="mb-4 text-sm text-gray-600">{post.excerpt}</p>
              <Link
                to={post.link}
                className="inline-block px-4 py-1 text-sm font-medium text-white rounded bg-brand-primary hover:bg-orange-500"
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

