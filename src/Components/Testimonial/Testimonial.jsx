import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import image from '../../assets/testimonial.jpg';
import image2 from '../../assets/p2.jpg';
import image3 from '../../assets/p3.jpg';
import image4 from '../../assets/p4.jpg';

const testimonials = [
  {
    name: 'Claire Peterson',
    role: 'Content Writer',
    image: image,
    company: 'Google',
    review:
      'Our backyard has been completely transformed! The team was professional, attentive, and delivered beyond our expectations. The quality of work is outstanding.',
  },
  {
    name: 'John Malik',
    role: 'Marketing Manager',
    image: image2,
    company: 'Amazon',
    review:
      'This service was amazing! Their strategy helped increase our conversions by 30% in just two months.',
  },
  {
    name: 'Ayesha Khan',
    role: 'UX Designer',
    image: image3,
    company: 'Meta',
    review:
      'Beautiful work and great support. The design exceeded my expectations and the communication was fantastic throughout.',
  },
  {
    name: 'Alina',
    role: 'Product Owner',
    image: image4,
    company: 'Microsoft',
    review:
      'Highly recommend! A creative and efficient team that brings vision to life with impressive speed.',
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-brand-text lg:py-32 px-4 md:px-16 flex flex-col lg:flex-row items-center gap-8">
      <div className="lg:w-1/2">
        <p className="text-brand-primary font-semibold">// TESTIMONIAL</p>
        <h2 className="text-3xl md:text-5xl font-medium font-oswald mt-2">
          Real success stories from our <br />
          <span className="text-brand-primary">coaching clients</span>
        </h2>
      </div>

      <div className="lg:w-1/2 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r to-brand-primary from-orange-300 text-white p-9 md:p-10 rounded-2xl flex flex-col md:flex-row gap-6"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-full md:w-80 h-80 object-cover rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-bold">{testimonials[current].company}</h3>
              <p className="mt-2 text-sm md:text-base">{testimonials[current].review}</p>
              <p className="mt-4 font-semibold">{testimonials[current].name}</p>
              <p className="text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute -bottom-6 right-4 flex gap-4">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-orange-300 to-brand-primary p-3 rounded-full hover:scale-110 transition"
          >
            <ArrowLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-orange-300 to-brand-primary p-3 rounded-full hover:scale-110 transition"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
