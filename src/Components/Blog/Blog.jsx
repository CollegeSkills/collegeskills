import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogs = [
    {
      title: 'Mental Wellness and Resilience The Power of Coaching',
      desc: 'In the fast-paced world of entrepreneurship, time is one of...',
      image:
        'https://i.pinimg.com/736x/af/8a/e6/af8ae63c6d0139d807dd1ca16214e3b6.jpg',
    },
    {
      title: 'How to Maintain Work–Life Balance in a Busy World',
      desc: 'In the fast-paced world of entrepreneurship, time is one of...',
      image:
        'https://i.pinimg.com/1200x/4f/59/d1/4f59d13839237baa887a70f630a8ea32.jpg',
    },
  ];

  return (
    <section className="px-4 py-20 md:px-16">
      <div className="grid items-start max-w-full gap-10 md:grid-cols-2 lg:gap-2">
        {/* Left Section */}
        <div className="w-full space-y-6">
          <p className="text-sm font-medium text-brand-primary">// POST</p>
          <h2 className="text-4xl font-medium leading-tight md:text-5xl font-oswald">
            Latest updates 
            and coaching <br />
            <span className="text-transparent bg-clip-text bg-brand-primary">
              industry insights
            </span>
          </h2>
          <button className="px-6 py-3 font-medium text-white transition-all duration-300 rounded-full bg-brand-primary hover:scale-105">
           <Link to="/contact">Contact Us →</Link> 
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="w-full space-y-10">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-6 md:flex-row"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="object-cover w-full md:w-52 h-52 rounded-xl"
              />
              <div>
                <h3 className="mb-2 text-xl font-semibold text-brand-text">
                  {blog.title}
                </h3>
                <p className="mb-4 text-sm text-gray-500">{blog.desc}</p>
                <button className="px-5 py-2 text-sm font-medium text-white transition-all duration-300 rounded-full bg-gradient-to-r to-brand-primary from-orange-300 hover:scale-105">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
