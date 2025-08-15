import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
// // import 10 from '../assets/10.png'
import founder from "../assets/founder.png";
import coFounder from "../assets/co-founder.png";
import client1 from "../assets/ditya.png";
import client2 from "../assets/indr.jpeg";
import client3 from "../assets/kartik.png";
import client4 from "../assets/atul.png";
import client5 from "../assets/t2.png";
import client6 from "../assets/t3.png";
import client7 from "../assets/t1.png";
// import client5 from "../assets/student.webp";
import { CheckCircle, ArrowUpRight, PartyPopper } from "lucide-react";
import ApproachSection from "../Components/ApproachSection/ApproachSection";
import AboutImage from "../assets/collegeAbout.png";
import FAQSection from "../Components/Faq/Faq";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const homeFaqs = [
    {
      question:
        "What are soft skills, and why are they important for students?",
      answer:
        "Soft skills include communication, teamwork, problem-solving, emotional intelligence, and professionalism. These skills are critical because employers now look for graduates who can work well with others, adapt quickly, and lead effectively—not just those with good academic results.",
    },
    {
      question:
        "Can soft skills really be learned through online or blended courses?",
      answer:
        "Absolutely! Our programs use interactive activities, real-life scenarios, and group discussions so students experience and practice soft skills, whether they learn online, offline, or in hybrid formats. Practical learning helps students apply these skills in the real world, making them natural and lasting.",
    },
    {
      question: "Which soft skills are most in demand by employers today?",
      answer:
        "Employers highly value communication, teamwork, adaptability, critical thinking, and leadership. Industry surveys consistently show these are the top traits that set job candidates apart and help them grow in their careers.",
    },
    {
      question:
        "How are your training packages structured, and what do they cost?",
      answer:
        "We offer three flexible options: A free foundation plan for beginners, Paid advanced modules for in-depth learning ,Custom solutions for colleges and organizations,Each plan is designed to suit different needs and budgets, making it easy for everyone to invest in their growth and employability.",
    },
    {
      question:
        "How do students measure progress and see real improvement from your soft skills training?",
      answer:
        "Learners benefit from pre- and post-training assessments, ongoing feedback, and practical assignments like mock interviews or group presentations. Our structured progress tracking ensures students can clearly see their development and gain confidence for real-world challenges.",
    },
  ];
  return (
    <>
      <Navbar />
      {/* About us */}
      <div className="px-5 lg:px-0">
        <section className="py-2 mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            {/* Left side text */}

            <div className="lg:pt-24 md:w-1/2">
              <h2 className="pb-3 mt-2 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                About US <br />
                <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-primary font-oswald">
                  Empowering Students. Shaping Futures.
                </span>
              </h2>

              <div className="space-y-3 text-lg leading-relaxed text-gray-700">
                <p>
                  At College Skills, we believe that education is more than
                  textbooks and classrooms — it’s about preparing students for
                  the challenges of the real world.
                </p>
                <p>
                  Founded with a vision to bridge the gap between academic
                  learning and practical skills, College Skills provides
                  industry-relevant training, AI tool mastery, and personality
                  development programs that help learners unlock their true
                  potential.
                </p>
                <p>
                  Our programs are designed to transform knowledge into action,
                  making students confident, job-ready, and future-proof. From
                  mastering emerging technologies to building communication and
                  leadership skills, we ensure every learner has the tools to
                  thrive in the modern world.
                </p>
                <p className="py-2 font-semibold text-brand-primary font-oswald">
                  At College Skills, we don’t just prepare students for jobs —
                  we prepare them for life.
                </p>
              </div>
            </div>

            {/* Right side image */}
            <div className="md:w-1/2">
              <img
                src={AboutImage}
                alt="Students learning together"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        {/* Our Approach */}
        <ApproachSection />
        {/* founder */}
        <section className="mx-auto mt-5 max-w-7xl lg:mt-14 ">
          <div className="grid items-center max-w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
            {/* Left Content */}
            <div className="relative w-full">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={founder}
                  alt="Coaching team"
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Experience Box */}
              <div className="absolute flex gap-2 px-3 py-3 mt-20 text-white shadow-lg -top-5 lg:top-4 lg:left-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl">
                {/* <PartyPopper /> */}
                <p className="font-semibold lg:text-2xl textlg">
                  30 + years of <br />
                  experience
                </p>
              </div>

              {/* Vertical Review Text */}
              <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 rotate-[-90deg] text-[#2c2c2c] font-semibold tracking-widest text-xs hidden md:block">
                5200+ FIVE STAR REVIEWS
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">
              <div>
                {/* <p className="font-semibold text-brand-primary">// FOUNDER</p> */}
                <h2 className="mt-2 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  Khalid Imam
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-primary font-oswald">
                    Founder, College Skills
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  "At College Skills, we believe every student has untapped
                  potential — they just need the right guidance to unlock it."
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  I started College Skills with a simple mission: to prepare
                  students and young professionals for the real world by
                  combining modern AI tools, industry-ready skills, and
                  personality development training. From classrooms to careers,
                  my goal is to make learning practical, engaging, and
                  life-changing.
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
                  {[client1, client2, client3,client6,client7].map(
                    (avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt={`client-${i}`}
                        className="w-10 h-10 border-2 border-white rounded-full"
                      />
                    )
                  )}
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
                    <p className="font-semibold text-gray-900">
                      Creative Result
                    </p>
                    <p className="text-sm text-gray-400">Award winning</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="flex items-center gap-2 px-6 py-3 text-white transition-transform rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-105">
                 <Link to={`https://www.linkedin.com/in/khalid-imam-7bab60261/`}>Get In Touch</Link> 
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* co founder */}
        <section className="mx-auto mt-5 lg:mt-14 max-w-7xl">
          <div className="grid items-center max-w-full grid-cols-1 gap-10 mx-auto md:grid-cols-2">
            {/* Left Content */}

            {/* Right Content */}
            <div className="flex flex-col gap-6">
              <div>
                {/* <p className="font-semibold text-brand-primary">// Co FOUNDER</p> */}
                <h2 className="mt-2 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  Akshat Jain
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-brand-primary font-oswald">
                    Co-Founder, College Skills
                  </span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  "Innovation is not just about ideas; it’s about making them
                  work for people."
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  As Co-Founder, I focus on building smart learning solutions
                  that bridge the gap between traditional education and
                  future-ready skills. My vision is to ensure every learner
                  gains not just knowledge, but the confidence to apply it in
                  real-world challenges.
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
               <div className="flex flex-wrap items-center gap-6">
                <div className="flex -space-x-3">
                  {[client3, client4,client5,client6,client7].map(
                    (avatar, i) => (
                      <img
                        key={i}
                        src={avatar}
                        alt={`client-${i}`}
                        className="w-10 h-10 border-2 border-white rounded-full"
                      />
                    )
                  )}
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
                    <p className="font-semibold text-gray-900">
                      Creative Result
                    </p>
                    <p className="text-sm text-gray-400">Award winning</p>
                  </div>
                </div>
              </div>
              </div>

              {/* CTA Button */}
              <div>
                <button className="flex items-center gap-2 px-6 py-3 text-white transition-transform rounded-full bg-gradient-to-r from-orange-400 to-orange-500 hover:scale-105">
              <Link to={`https://www.linkedin.com/in/akshatjainofficial04/`}>Get In Touch</Link> 
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="relative w-full">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={coFounder}
                  alt="Coaching team"
                  className="object-cover w-full h-auto"
                />
              </div>

              {/* Experience Box */}

                  <div className="absolute right-0 flex gap-2 px-3 py-3 mt-20 text-white shadow-lg -top-5 lg:top-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl">
                {/* <PartyPopper /> */}
                <p className="font-semibold lg:text-2xl textlg">
                  30 + years of <br />
                  experience
                </p>
              </div>

              {/* Vertical Review Text */}
              <div className="absolute -right-10 top-80 transform -translate-y-1/2 rotate-[-90deg] text-[#2c2c2c] font-semibold tracking-widest text-xs hidden md:block">
                5200+ FIVE STAR REVIEWS
              </div>
            </div>
          </div>
        </section>
      </div>
      <FAQSection faqs={homeFaqs} />

      <Footer />
    </>
  );
};

export default AboutUsSection;
