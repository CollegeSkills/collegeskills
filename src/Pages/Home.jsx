import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarRange,
  Mail,
  Play,
  Code,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Paperclip,
  Settings,
} from "lucide-react";
import student from "../assets/student.webp";
import StatsSection from "../Components/State/State";
import { Link } from "react-router-dom";
import we from "../assets/we.png";
import Testimonial from "../Components/Testimonial/Testimonial";
import Blog from "../Components/Blog/Blog";
import FAQs from "../Components/Faq/Faq";
import Footer from "../Components/Footer.jsx/Footer";
import Pricing from "../Components/Pricing/Pricing";
import VideoPopup from "../Components/VideoPopup/VideoPopup";
import Partners from "../Components/Partners/Partners";

function Home() {
  const boxes = [
    {
      icon: (
        <Paperclip className="w-12 h-12 p-1 text-white rounded-full bg-gradient-to-tr to-brand-primary from-amber-400" />
      ),
      title: "Assesment",
      description:
        "Understanding your unique strengths and areas to unlock true potential.",
    },
    {
      icon: (
        <Settings className="w-12 h-12 p-1 text-white rounded-full bg-gradient-to-tr to-brand-primary from-amber-400" />
      ),
      title: "Goal Setting",
      description:
        "Defining clear, meaningful objectives that guide your career and personal growth.",
    },
    {
      icon: (
        <ShieldCheck className="w-12 h-12 p-1 text-white rounded-full bg-gradient-to-tr to-brand-primary from-amber-400" />
      ),
      title: "Coaching Session",
      description:
        "Personalized guidance to develop skills, boost confidence, and overcome challenges.",
    },
    {
      icon: (
        <TrendingUp className="w-12 h-12 p-1 text-white rounded-full bg-gradient-to-tr to-brand-primary from-amber-400" />
      ),
      title: "Ongoing Support",
      description:
        "Continuous mentorship to keep you motivated and on track toward success.",
    },
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };
  return (
    <>
      <title>Welcom College Skill</title>
      <Navbar />
      {/* Hero section  */}
      <section className="grid items-center px-10 py-10 bg-brand-background lg:px-16 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold md:text-6xl text-brand-text font-oswald">
            <span className="pb-10 text-brand-primary">
              Transform Your College Journey
            </span>{" "}
            Build Real World Skills Today{" "}
          </h1>
          <p className="text-brand-text font-barlow ">
            Interactive soft skills training to boost confidence and career
            readiness for real-world success.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-[#FF9E0D] text-white px-6 py-3 rounded-full font-semibold">
              Join For Free
            </button>
            {/* <Play size={50} className='flex p-2 bg-white rounded-full text-brand-primary' /> */}
            <VideoPopup />
          </div>
        </div>

        <div className="relative mt-12 mb-20 md:mt-0">
          <img src={hero} alt="student" className="w-full" />

          <div className="absolute top-0 gap-2 px-4 py-3 shadow-lg lg:top-24 lg:left-24 bg-gradient-to-tr to-white/10 from-white rounded-xl lg:flex">
            <CalendarRange
              size={30}
              className="p-1 text-white bg-blue-400 rounded-lg"
            />
            <div>
              <h4 className="text-[16px] font-semibold">5000+</h4>
              <p className="text-[16px] text-gray-500"> Youth Transformed</p>
            </div>
          </div>

          <div className="absolute items-center gap-2 p-3 py-4 mt-10 mb- shadow-lg w-[200px] lg:w-[350px] -bottom-32 lg:px-4 lg:-left-10 lg:bottom-32 bg-gradient-to-tr to-white/10 from-white rounded-xl lg:flex">
            <img src={student} alt="" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-medium">Don’t Just Watch, Grow </p>
              <p className="text-xs text-gray-500">
                Free Live Class Every Tuesday
              </p>
            </div>
            <button className="lg:ml-4 bg-[#FF9E0D] text-white px-3 py-1 mt-2 rounded-full text-sm">
              Join Now
            </button>
          </div>

          <div className="absolute right-0 items-center hidden gap-2 px-4 py-4 shadow-lg bottom-6 bg-gradient-to-tr to-white/10 from-white rounded-xl lg:flex">
            <Mail
              size={30}
              className="p-1 text-white bg-orange-400 rounded-lg"
            />
            <div>
              <p className="text-sm font-medium">Congratulations</p>
              <p className="text-xs text-gray-500">Future Starts Now</p>
            </div>
          </div>
        </div>
      </section>
      {/* Counts State  */}
      <StatsSection />
      {/* Partners */}
      <Partners />
      {/* Who we Are */}
      <section className="px-6 py-16 pb-5 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p className="text-sm font-semibold text-brand-primary">
              // WHO WE ARE
            </p>
            <h2 className="mt-4 text-4xl font-medium leading-tight text-gray-800 md:text-5xl font-oswald">
              Empowering India’s youth through expert{" "}
              <span className="text-brand-primary">soft skills training</span>
            </h2>
            <p className="mt-6 text-gray-600">
              At College Skills, we partner with passionate educators dedicated
              to unlocking the true potential of college students. Our
              customized programs blend practical strategies, proven
              experiential methods, and continuous mentoring to overcome
              challenges and build career-ready professionals.
            </p>

            {/* Stats */}
            <div className="flex gap-8 mt-10">
              <div className="text-center">
                <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold border-2 rounded-full border-brand-primary">
                  98%
                </div>
                <p className="mt-2 font-medium text-gray-700">
                  Student Satisfaction
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-24 h-24 text-2xl font-bold border-2 rounded-full border-brand-primary">
                  100+
                </div>
                <p className="mt-2 font-medium text-gray-700">
                  Projects Completed
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-300" />

            {/* Bottom Info */}
               <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src={we}
              alt="Team working"
              className="object-cover w-full mt-0 mb-4 lg:hidden rounded-2xl"
            />
          </motion.div>
            <div>
              <h4 className="text-lg font-bold text-gray-800 lg:mb-4">
                Certified Trainers & Domain Experts
              </h4>
              <p className="mb-2 text-gray-600">
                We bring in certified professionals with real industry exposure
                to ensure every learner gains practical, applicable knowledge.
              </p>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-brand-primary" />
                  Personalized Support & Guided Learning
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 mt-1 text-brand-primary" />
                  Outcome-Focused Programs
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <img
              src={we}
              alt="Team working"
              className="hidden object-cover w-full lg:block rounded-2xl"
            />
          </motion.div>
        </div>
      </section>
      {/* How We Work */}
      <section className="max-w-full px-10 lg:mt-20 lg:px-16">
        <h4 className="text-brand-primary">// How We Work</h4>
        <div className="flex flex-col items-center justify-between w-full gap-4 py-6 md:flex-row md:py-10">
          <h2 className="text-4xl font-medium md:text-6xl text-brand-text font-oswald">
            Step by step process for <br />
            <span className="block mt-2 text-brand-primary">
              achieving success
            </span>
          </h2>
          <Link
            to="/contact"
            className="flex items-center justify-start px-4 py-2 mt-4 font-medium border rounded-md lg:justify-center text-brand-background bg-brand-primary border-brand-primary md:mt-0"
          >
            Contact Us <ArrowUpRight className="ml-2" />
          </Link>
        </div>
      </section>
      {/* How We Work cards */}
      <section className="px-4 py-7 md:px-14">
        <div className="max-w-full text-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {boxes.map((box, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                className="p-3 text-left bg-white rounded-2xl"
              >
                <div className="flex mb-4">{box.icon}</div>
                <p className="pb-3 border-t border-gray-400"></p>
                <h3 className="mb-2 text-xl font-semibold">{box.title}</h3>
                <p className="text-sm text-gray-600">{box.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Pricing />
      {/* Testimonial */}
      <Testimonial />
      {/* Blog */}
      <Blog />
      <FAQs />
      <Footer />
    </>
  );
}

export default Home;
