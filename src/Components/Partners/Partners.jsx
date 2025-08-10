// LogoCarousel.jsx
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import p1 from '/p1.jpg';
import p2 from '/p2.jpeg';
import p3 from '/p3.jpg';
import p4 from '/p4.png';
import p5 from '/p5.png';

// Replace these with your actual image URLs or imports
const logos = [p1, p2, p3, p4, p5];

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
            // whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
            key={index}
            className="min-w-[150px] pt-9 mx-6 flex items-center justify-center transition duration-300"
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
