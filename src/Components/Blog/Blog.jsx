import React from 'react';

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
      <div className="max-w-full grid md:grid-cols-2 lg:gap-2 gap-10 items-start">
        {/* Left Section */}
        <div className="space-y-6 w-full">
          <p className="text-sm font-medium text-brand-primary">/ POST</p>
          <h2 className="text-4xl md:text-5xl font-medium font-oswald leading-tight">
            Latest updates 
            and coaching <br />
            <span className="text-transparent bg-clip-text bg-brand-primary">
              industry insights
            </span>
          </h2>
          <button className="bg-brand-primary text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-all duration-300">
            Contact Us →
          </button>
        </div>

        {/* Right Section - Cards */}
        <div className="space-y-10 w-full">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-6 items-start"
            >
              <img
                src={blog.image}
                alt="Blog"
                className="w-full md:w-52 h-52 object-cover rounded-xl"
              />
              <div>
                <h3 className="text-xl font-semibold text-brand-text mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{blog.desc}</p>
                <button className="bg-gradient-to-r to-brand-primary from-orange-300 text-white px-5 py-2 rounded-full font-medium text-sm hover:scale-105 transition-all duration-300">
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
