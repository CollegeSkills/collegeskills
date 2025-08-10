import React from "react";
import Navbar from "../Components/Navbar/Navbar";
// // import 10 from '../assets/10.png'
import team from "../assets/hero.png";
import { CheckCircle, ArrowUpRight, PartyPopper } from "lucide-react";
import ApproachSection from "../Components/ApproachSection/ApproachSection";

const AboutUsSection = () => {
  return (
    <>
      <Navbar />
      {/* About us */}
      <section className="px-10 py-10 md:py-10">
        <div className="grid items-center max-w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
          {/* Left Content */}
          <div className="relative w-full">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={team}
                alt="Coaching team"
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Experience Box */}
            <div className="absolute px-5 py-3 text-white shadow-lg top-4 left-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl">
              <PartyPopper />
              <p className="text-2xl font-semibold">
                30 + years of <br />
                experience
              </p>
            </div>

            {/* Vertical Review Text */}
            <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-[#2c2c2c] font-semibold tracking-widest text-xs hidden md:block">
              5200+ FIVE STAR REVIEWS
            </div>

            {/* Small Bottom Image */}
            {/* <div className="absolute hidden overflow-hidden border-4 border-white shadow-md -bottom-12 left-10 w-36 h-36 rounded-xl md:block">
            <img
              src="https://via.placeholder.com/150?text=Profile"
              alt="Team"
              className="object-cover w-full h-full"
            />
          </div> */}
          </div>

          {/* Right Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-semibold text-brand-primary">// ABOUT US</p>
              <h2 className="mt-2 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Expert guidance and <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-primary font-oswald">
                  personalized coaching.
                </span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-500">
                Receive tailored coaching that empowers you to navigate
                challenges and achieve your personal and professional goals.
                With expert guidance.
              </p>
            </div>

            {/* Checklist */}
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                Goal Setting And Accountability
              </li>
              <li className="flex items-center gap-2 text-lg font-semibold text-gray-800">
                <CheckCircle className="w-5 h-5 text-orange-500" />
                Mindset And Confidence Building
              </li>
            </ul>

            {/* Testimonials + Award */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  "https://randomuser.me/api/portraits/women/44.jpg",
                  "https://randomuser.me/api/portraits/men/32.jpg",
                  "https://randomuser.me/api/portraits/women/65.jpg",
                  "https://randomuser.me/api/portraits/men/15.jpg",
                  "https://randomuser.me/api/portraits/women/21.jpg",
                ].map((avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`client-${i}`}
                    className="w-10 h-10 border-2 border-white rounded-full"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-700">
                Join our <span className="font-bold">5000+</span> satisfied
                client
              </p>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-orange-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Creative Result</p>
                  <p className="text-sm text-gray-400">Award winning</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <button className="flex items-center gap-2 px-6 py-3 text-white transition-transform rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-105">
                Get In Touch
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <ApproachSection />
    </>
  );
};

export default AboutUsSection;
