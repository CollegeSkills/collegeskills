import React, { useState, useEffect } from "react";
import { slider } from "../../blog.json";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative lg:w-[98%] w-full mx-auto overflow-hidden pt-6">
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slider.map((item) => (
          <div
            key={item.id}
            className="w-full flex-shrink-0 relative h-[400px] sm:h-[600px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover object-top w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-6 text-white bg-black bg-opacity-40 sm:px-20">
              <h2 className="mb-2 text-2xl font-bold sm:text-5xl">
                {item.title}
              </h2>
              <p className="max-w-2xl pt-2 mb-4 font-sans text-lg">
                {item.description}
              </p>
              <Link
                to={`/blog/${item.link}`} // React Router navigation
                className="px-4 py-2 font-semibold text-white transition rounded-lg bg-brand-primary w-36 hover:bg-slate-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute px-2 py-1 text-white -translate-y-1/2 bg-opacity-50 rounded-full bg-brand-primary left-4 top-1/2 hover:bg-opacity-80"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute px-2 py-1 text-white -translate-y-1/2 bg-opacity-50 rounded-full bg-brand-primary right-4 top-1/2 hover:bg-opacity-80"
      >
        <ChevronRight size={40} />
      </button>

      {/* Dots */}
      <div className="absolute flex gap-2 -translate-x-1/2 bottom-4 left-1/2">
        {slider.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default BlogSlider;
