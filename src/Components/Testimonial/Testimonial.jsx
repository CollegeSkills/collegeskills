import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import image from '../../assets/atul.jpeg';
import image2 from '../../assets/p2.jpg';
import image3 from '../../assets/p3.jpg';
import image4 from '../../assets/p4.jpg';

const testimonials = [
  {
    name: 'Atul',
    // role: 'Content Writer',
    image: image,
    company: 'Gov politechnic ayodhya',
    review:
      '"The training boosted my confidence and communication skills immensely. I now feel ready to take on any interview. Thank you, College Skills!"',
  },
  {
    name: 'Atul',
    // role: 'Matoshree Institute of Technology',
    image: image,
    company: 'Matoshree Institute of Technology',
    review:
      '"College Skills helped me discover my strengths and guided me to present myself professionally. The sessions were engaging and practical."',
  },
  {
     name: 'Atul',
    // role: 'UX Designer',
    image: image,
    company: 'Fabtech Technical Campus',
    review:
      '"I never imagined soft skills could make such a difference. After the workshops, my presentation and teamwork skills have grown tremendously."',
  },
  {
     name: 'Atul',
    // role: 'Product Owner',
    image: image,
    company: 'S.V.P.M. Baramati',
    review:
      '"The coaching sessions were eye-opening. I learned to manage time better and gained clarity on my career path. Highly recommended!"',
  },
  {
     name: 'Atul',
    // role: 'Product Owner',
    image: image,
    company: 'Govt. Polytechnic Ayodhya',
    review:
      '"Thanks to College Skills, I’m more confident in group discussions and interviews. The trainers were supportive and motivating throughout."',
  },
  {
    name: 'Atul',
    // role: 'Product Owner',
    image: image,
    company: 'Matoshree Institute of Technology',
    review:
      '"The activities made learning fun and effective. I gained leadership skills and a better understanding of professional behavior."',
  },
   {
   name: 'Atul',
    // role: 'Product Owner',
    image: image,
    company: 'Saramodhya ITI',
    review:
      '"With personalized coaching, I improved my communication and critical thinking skills. This has made a real difference in my academics and placements."',
  },
   {
    name: 'Atul',
    // role: 'Product Owner',
    image: image,
    company: 'KDK College of Engineering',
    review:
      '"College Skills transformed my approach to learning and growth. The mock interviews prepared me thoroughly for real-world challenges."',
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
    <div className="flex flex-col items-center gap-8 px-4 text-brand-text lg:py-32 md:px-16 lg:flex-row">
      <div className="lg:w-1/2">
        <p className="font-semibold text-brand-primary">// TESTIMONIAL</p>
        <h2 className="mt-2 text-3xl font-medium md:text-5xl font-oswald">
          Real success stories from our <br />
          <span className="text-brand-primary">coaching clients</span>
        </h2>
      </div>

      <div className="relative lg:w-1/2">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-white bg-gradient-to-r to-brand-primary from-orange-300 p-9 md:p-10 rounded-2xl md:flex-row"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="object-cover w-full md:w-80 h-80 rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold font-oswald">{testimonials[current].company}</h3>
              <p className="mt-2 text-sm md:text-base">{testimonials[current].review}</p>
              <p className="mt-4 text-3xl font-semibold font-oswald">{testimonials[current].name}</p>
              <p className="text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Arrows */}
        <div className="absolute flex gap-4 -bottom-6 right-4">
          <button
            onClick={prevSlide}
            className="p-3 transition rounded-full bg-gradient-to-r from-orange-300 to-brand-primary hover:scale-110"
          >
            <ArrowLeft className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 transition rounded-full bg-gradient-to-r from-orange-300 to-brand-primary hover:scale-110"
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
