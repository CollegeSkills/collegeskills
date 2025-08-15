import React from "react";
import { Link } from "react-router-dom";
import data from "../../blog.json";
import { ArrowUpRight } from "lucide-react";

const Blog = () => {

  return (
    <section className="px-6 py-20 md:px-16">
      {/* Top Section */}
      <div className="grid items-start max-w-full gap-10 md:grid-cols-2 lg:gap-2">
        {/* Left Section */}
        <div className="w-full space-y-6">
          <p className="text-sm font-medium text-brand-primary">POST</p>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl font-oswald">
            Latest updates and coaching <br />
            <span className="text-transparent bg-clip-text bg-brand-primary">
              industry insights
            </span>
          </h2>
          <button className="px-6 py-3 font-medium text-white transition-all duration-300 rounded-full bg-brand-primary hover:scale-105">
            <Link to="/contact">Contact Us →</Link>
          </button>
        </div>

        {/* Right Section - First Blog */}
        <div className="w-full space-y-10">
          {data.blogs.slice(0, 1).map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col items-start gap-6 p-4 bg-white rounded-lg shadow-md md:flex-row"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full rounded-xl md:w-52 h-52"
              />
              <div className="flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-semibold text-brand-text">
                  {blog.title}
                </h3>
                <p className="mb-4 text-sm text-gray-500">
                  {blog.content[0].text.length > 100
                    ? blog.content[0].text.substring(0, 100) + "..."
                    : blog.content[0].text}
                </p>
                 <Link
                to={`/blog/${blog.id}`}
                className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r to-brand-primary from-orange-300 hover:scale-105 w-fit"
              >
                Read More <ArrowUpRight />
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section - Same Design but 2 Columns */}
      <div className="grid gap-8 mt-12 md:grid-cols-2">
        {data.blogs.slice(1, 3).map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col items-start gap-6 p-4 bg-white rounded-lg shadow-md md:flex-row"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover w-full rounded-xl md:w-52 h-52"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="mb-2 text-xl font-semibold text-brand-text">
                {blog.title}
              </h3>
              <p className="mb-4 text-sm text-gray-500">
                {blog.content[0].text.length > 100
                  ? blog.content[0].text.substring(0, 100) + "..."
                  : blog.content[0].text}
              </p>
              <Link
                to={`/blog/${blog.id}`}
                className="flex items-center gap-1 px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r to-brand-primary from-orange-300 hover:scale-105 w-fit"
              >
                Read More <ArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
