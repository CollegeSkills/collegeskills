import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/service/s1.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import { GoOrganization } from "react-icons/go";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Download,
  Radio,
  School,
} from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import CourseImage from "../assets/service/s3.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import Partners from "../Components/Partners/Partners";
import OurTraining from "../Components/OurTraining/OurTraining";
// import training from "../assets/service/s2.png";
import training from "../assets/service/s4.png";
import certificate from "../assets/certificate.png";
import faculty1 from "../assets/faculty1.png";
import faculty2 from "../assets/faculty2.png";
import faculty3 from "../assets/faculty3.png";
import faculty4 from "../assets/faculty4.png";
const testimonials = [
  {
    name: "Nilesh Rao",
    // role: 'Content Writer',
    image: faculty1,
    company: "T.P.O. Govt.ITI, Orai",
    review:
      '"The soft skills training conducted was not only informative but truly transformative.Students showed noticeable improvement in their communication, body language, and confidence. A valuable addition to our academic ecosystem."',
  },
  {
    name: "Rahul Kumar",
    // role: 'Matoshree Institute of Technology',
    image: faculty2,
    company: "Professor CRRIT, Delhi",
    review:
      '"We truly appreciate the energy, clarity, and commitment shown by the College Skills team. Their approach connected well with our students, and the impact was visible in their communication and overall mindset. We look forward to more collaborations."',
  },
  {
    name: "Gujar Nitin",
    // role: 'UX Designer',
    image: faculty3,
    company: "T.P.O. MIT,Yeola",
    review:
      '"The training conducted by College Skills was highly engaging and result-oriented. Our students became more confident, expressive, and interview-ready. The sessions were practical, interactive, and perfectly aligned with today\'s industry needs."',
  },
  {
    name: "Dilip Magar",
    // role: 'Product Owner',
    image: faculty4,
    company: "Professor Govt ITI, Yeola",
    review:
      '"College Skills brought a refreshing approach to student development. The sessions were interactive, meaningful, and tailored to our student\'s needs. Their team connects with learners in a way that creates real change."',
  },
];

function SkillCollege() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const orgBenefits = [
    " Benefits to Colleges/Institutions",
    "Improved student placement ratios and reputation among recruiters.",
    "Boost in NAAC/NBA scores due to holistic development initiatives.",
    "Enhanced visibility through co-branded training promotions.",
    "We also provide digital content (images, testimonials, videos) that institutions can use in marketing and admissions promotions.",
  ];

  const fresherBenefits = [
    "Increased confidence in interviews and group discussions.",
    "Better teamwork, leadership, and communication skills.",
    "Clarity on workplace expectations and behavioral protocols.",
    "Development of decision-making, problem-solving, and time management skills.",
    "Improved adaptability to new technologies and changing work environments.",
  ];

  const collegeFaqs = [
    {
      question: "Why are soft skills important for college students?",
      answer:
        "Soft skills such as communication, leadership, and problem-solving prepare students to excel in interviews, group discussions, and workplace environments. Employers today value these skills as much as academic knowledge.",
    },
    {
      question: " How are the sessions delivered in colleges?",
      answer:
        "Training can be delivered through interactive workshops, role-plays, mock interviews, and real-life case studies, ensuring students actively practice the skills.",
    },
    {
      question:
        "Can the training be customized for specific departments or courses?",
      answer:
        " Yes. We design content relevant to each discipline—be it engineering, management, or humanities—to ensure maximum industry alignment.",
    },
    {
      question: "Do students receive a certificate?",
      answer:
        "We offer three flexible options: A free foundation plan for beginners, Paid advanced modules for in-depth learning ,Custom solutions for colleges and organizations,Each plan is designed to suit different needs and budgets, making it easy for everyone to invest in their growth and employability.",
    },
  ];

  const criteriaList = [
    "Attend and complete at least 60% of the live/recorded sessions.",
    "Score 60% or higher in quizzes, assignments, and practical tasks.",
    "Note: Meeting these criteria ensures you receive the certificate.",
    "For job placement or internship opportunities, please check the College Students Job Assistance FAQs.",
  ];

  return (
    <>
      <title> College Skill | Skill For Colleges</title>
      <Navbar />
      <CourseCard
        badge="#Popular"
        title="Student Development Programs"
        description="Today’s students need more than academic excellence to succeed — they need confidence, communication, and clarity. Our Student Development Programs focus on equipping learners with real-world soft skills through engaging, activity-based training. Whether it's interview preparation, presentation skills, teamwork, or time management — we prepare them to stand out in placements, internships, and life beyond college."
        image={courseImg}
        showInfoGrid={false}
      />

      <div className="flex flex-col items-center w-full gap-6 px-6 py-16 text-black md:flex-row md:items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2 lg:px-9">
          <img
            src={CourseImage}
            alt="Course Visual"
            className="w-full h-[200px] md:h-[350px] md:w-[600px] object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="w-full px-3 md:w-1/2">
          <h2 className="mb-6 text-5xl font-bold text-gray-900 font-oswald">
            Why It Matters
          </h2>
          <p className="mb-3 text-slate-800">
            Graduates with strong communication and problem-solving skills are
            60% more employable.
          </p>
          <p className="mb-3 text-slate-800">
            Colleges that integrate soft skills see improved placement
            statistics and employer feedback.
          </p>
          <p className="mb-3 text-slate-800">
            Students trained in workplace behavior adapt faster and perform
            better in their first year of work.
          </p>
          <p className="mb-3 text-slate-800">
            Freshers trained in communication and team behavior show 40% faster
            adaptation to company processes.
          </p>

          <button className="flex justify-between gap-2 px-6 py-3 mt-8 text-lg font-semibold text-white uppercase rounded-lg bg-brand-primary font-barlow">
            Download Pdf <Download />
          </button>
        </div>
      </div>
      <Partners />
      {/* Benefits */}
      <div className="px-4 py-7 md:px-1">
        <h2 className="text-6xl font-bold text-center pb-9 font-oswald text-brand-text">
          Your Benefits
        </h2>
        <div className="grid grid-cols-1 gap-2 mx-auto max-w-[95%] md:grid-cols-2">
          {/* Left Column */}
          <BenefitsCard
            title="Benefits to Colleges/Institutions"
            icon={GoOrganization}
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits to Students"
            icon={RiGraduationCapFill}
            color="text-orange-400"
            items={fresherBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />
        </div>
      </div>
      <div className="p-8">
        <OurTraining
          heading="Our Training Approach"
          paragraphs={[
            "Understand college placement goals and student skill gaps through one-on-one discussions with faculty.",
            "Customize curriculum to align with industry needs and emerging job trends.",
            "Allow faculty/placement teams to evaluate trainer credentials.",
            "Deliver interactive, activity-based training sessions.",
            "Assess student progress and provide feedback to faculty.",
            "Conduct periodic post-training evaluations to track improvement.",
            " Provide reinforcement workshops before placement drives.",
          ]}
          imageSrc={training}
        />
      </div>
      <CertificateViewer
        title="Validating Your Success: About Your Certificate"
        subtitle="Soft Skills for Colleges"
        description="At College Skills, we ensure our certificates are earned through genuine learning.
                     You will be eligible to receive your College Soft Skills Completion Certificate when you:"
        criteria={criteriaList}
        imageSrc={certificate}
      />
      <Pricing />
      {/* testimonial */}
      <div className="flex flex-col items-center gap-8 px-4 text-brand-text lg:py-32 md:px-16 lg:flex-row">
        <div className="lg:w-1/2">
          <p className="font-semibold text-brand-primary">TESTIMONIAL</p>
          <h2 className="mt-2 text-3xl font-medium capitalize md:text-5xl font-oswald">
            Real success stories from our <br />
            <span className="text-brand-primary">College Professor</span>
          </h2>
        </div>

        <div className="relative lg:w-1/2">
          {/* <AnimatePresence mode="wait">
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
                <h3 className="text-2xl font-semibold font-oswald">
                  {testimonials[current].company}
                </h3>
                <p className="mt-2 text-sm md:text-base">
                  {testimonials[current].review}
                </p>
                <p className="mt-4 text-3xl font-semibold font-oswald">
                  {testimonials[current].name}
                </p>
                <p className="text-sm">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence> */}
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 text-white bg-gradient-to-r to-brand-primary from-orange-300 p-9 md:p-10 rounded-2xl md:flex-row"
          >
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="object-cover object-top w-full md:w-80 h-80 rounded-xl"
            />
            <div>
              <h3 className="text-2xl font-semibold font-oswald">
                {testimonials[current].company}
              </h3>
              <p className="mt-2 text-sm md:text-base">
                {testimonials[current].review}
              </p>
              <p className="mt-4 text-3xl font-semibold font-oswald">
                {testimonials[current].name}
              </p>
              <p className="text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>

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
      <FAQSection faqs={collegeFaqs} />
      <Footer />
    </>
  );
}

export default SkillCollege;
