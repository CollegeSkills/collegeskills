import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import blogsData from "../blog.json";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import RelatedPosts from "../Components/RelatedPosts/RelatedPosts";
import FeaturedPosts from "../Components/FeaturedPosts/FeaturedPosts";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = blogsData.blogs.find((b) => String(b.id) === String(id));

  if (!blog) {
    return <div className="p-8 text-center text-red-500">Blog not found</div>;
  }

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{blog.metaTitle || blog.title}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.description || ""}
        />
        {blog.metaKeywords && (
          <meta name="keywords" content={blog.metaKeywords.join(", ")} />
        )}
      </Helmet>

      <Navbar />
      <div className="w-full max-w-[95%] mx-auto text-black bg-white rounded-b-[20px]">
        {/* Banner */}
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full mt-4 lg:h-[600px] px-4"
        />

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 py-8 mx-auto max-w-[95%] md:grid-cols-3">
          {/* Main */}
          <div className="md:col-span-2">
            <h2 className="mb-3 text-3xl text-brand-primary font-oswald">
              {blog.title}
            </h2>
            <h3 className="mb-4 text-2xl text-gray-500 font-oswald">{blog.subtitle}</h3>

            {/* Loop through content array */}
            {/* {blog.content.map((section, idx) => (
              <div key={idx} className="mb-4">
                {section.heading && (
                  <h3 className="mb-1 text-lg font-bold">{section.heading}</h3>
                )}
                {section.text && <p>{section.text}</p>}
              </div>
            ))} */}
            {/* Loop through content array */}
            {blog.content.map((section, idx) => (
              <div key={idx} className="mb-6">
                {/* Heading */}
                {section.heading && (
                  <h3 className="mb-2 text-lg font-bold">{section.heading}</h3>
                )}

                {/* Text */}
                {section.text && <p className="mb-4">{section.text}</p>}

                {/* Image */}
                {section.image && (
                  <img
                    src={section.subImage}
                    alt={section.heading || `Section ${idx + 1}`}
                    className="w-full pt-0 rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-10">
            <FeaturedPosts />
            <div className="p-4 mt-40 border rounded-lg">
              <h4 className="mb-2 font-semibold">Stay In Touch</h4>
              <div className="flex gap-4 text-xl text-gray-600">
                <a href="#" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="#" aria-label="Twitter">
                  <Twitter />
                </a>
                <a href="#" aria-label="Linkedin">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        <RelatedPosts />
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
