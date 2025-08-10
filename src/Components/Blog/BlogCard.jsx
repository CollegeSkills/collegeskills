import React from "react";
import { Link } from "react-router-dom";
import data from "../../blog.json"; // Your JSON file
import BlogSlider from "./BlogSlider";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer.jsx/Footer";
import { ArrowUpDown, ArrowUpRight } from "lucide-react";

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        {/* ===== SLIDER ===== */}
        <BlogSlider />

        {/* ===== BLOG CARDS ===== */}
        <div className="grid grid-cols-1 gap-6 px-4 py-10 mx-auto max-w-[90%] md:grid-cols-2 lg:grid-cols-3">
          {data.blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex flex-col overflow-hidden bg-white rounded-lg shadow-md"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col flex-grow p-4">
                <h3 className="mb-2 text-xl font-semibold">{blog.title}</h3>
                <p className="flex-grow text-gray-600">
                  {blog.content[0].text.length > 100
                    ? blog.content[0].text.substring(0, 100) + "..."
                    : blog.content[0].text}
                </p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="px-4 py-2 flex w-[140px] gap-1 rounded-lg mt-4 font-medium text-white bg-brand-primary"
                >
                  Read More <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default BlogPage;