import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import image from '../../assets/atul.png';
import image2 from '../../assets/indr.jpeg';
import image3 from '../../assets/ditya.png';
import image4 from '../../assets/kartik.png';
// import image5 from '../../assets/t1.png';
// import image6 from '../../assets/t2.png';
// import image7 from '../../assets/t3.png';
// import image5 from '../../assets/test.jpeg';


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
    name: 'Indr',
    // role: 'Matoshree Institute of Technology',
    image: image2,
    company: 'Gov. Poly Ayodhya',
    review:
      '"College Skills helped me discover my strengths and guided me to present myself professionally. The sessions were engaging and practical."',
  },
  {
     name: 'Ditya',
    // role: 'UX Designer',
    image: image3,
    company: 'Little Flower Polytechnic Gorakhpur',
    review:
      '"I never imagined soft skills could make such a difference. After the workshops, my presentation and teamwork skills have grown tremendously."',
  },
  {
     name: 'Kartik Singh',
    // role: 'Product Owner',
    image: image4,
    company: 'Shramodaya ITI Bhopal',
    review:
      '"The coaching sessions were eye-opening. I learned to manage time better and gained clarity on my career path. Highly recommended!"',
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
        <p className="font-semibold text-brand-primary">TESTIMONIAL</p>
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
