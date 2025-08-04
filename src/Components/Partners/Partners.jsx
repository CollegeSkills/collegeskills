// LogoCarousel.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Replace these with your actual image URLs or imports
const logos = [
  "logo.jpg",
  "logo.jpg",
  "logo.jpg",
  "logo.jpg",
  "logo.jpg",
  "logo.jpg",
  "logo.jpg",

  
];

const Partners = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="py-8 overflow-hidden">
      <h2 className="mb-4 text-5xl font-semibold text-center text-brand-primary font-oswald">
       Trusted By Leading Companies & College
      </h2>

      <motion.div
        className="flex"
        animate={{ x: ["0%", `-${width / 2}px`] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        ref={containerRef}
      >
        {[...logos, ...logos].map((logo, index) => (
          <motion.div
            whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
            key={index}
            className="min-w-[150px] pt-9 mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition duration-300"
          >
            <img
              src={logo}
              alt={`logo-${index}`}
              className="object-contain w-auto h-16 cursor-pointer"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Partners;
