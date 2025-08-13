import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
// import courseImg from "../assets/service/s4.png";
import courseImg from "../assets/service/s2.png";

import { RiGraduationCapFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { CheckCircle, Download, Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import CourseImage from "../assets/service/s5.png";

import CertificateViewer from "../Components/CertificateView/CertificateView";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import Partners from "../Components/Partners/Partners";
import OurTraining from "../Components/OurTraining/OurTraining";
import training from "../assets/training.png";
import certificate from "../assets/certificate.png";

function SkillForSchool() {
  //for FAQ section
  const page1Faqs = [
    {
      question: "At what grade should soft skills training start?",
      answer:
        "Ideally, from middle school (grades 6–8) to instill confidence, teamwork, and communication skills early in a child’s development.",
    },
    {
      question: "How do you make sessions engaging for school children?",
      answer:
        "We use storytelling, games, group activities, and multimedia to ensure learning feels fun and interactive.",
    },
    {
      question: "Will the program affect academic schedules?",
      answer:
        " No. We coordinate with schools to plan sessions without disturbing core academic hours.",
    },
    {
      question: "What benefits will parents see in their children?",
      answer:
        "Parents often notice improved confidence, better speaking skills, and stronger social behavior within weeks of the training.",
    },
  ];

  // const featureData = [
  //   { icon: <School size={24} />, text: "Industry-Oriented Curriculum" },
  //   {
  //     icon: <Radio size={24} />,
  //     text: "Weekend Live Sessions",
  //   },
  //   { icon: <Radio size={24} />, text: "Practice Exercises" },
  //   { icon: <Radio size={24} />, text: "Certification of Completion" },
  //   { icon: <Radio size={24} />, text: "Email Support" },
  //   { icon: <Radio size={24} />, text: "SME Support Session" },
  //   { icon: <Radio size={24} />, text: "Comprehensive Learning Content" },
  //   { icon: <Radio size={24} />, text: "Capstone Project" },
  //   {
  //     icon: <Radio size={24} />,
  //     text: "Assignments and Projects",
  //   },
  //   {
  //     icon: <Radio size={24} />,
  //     text: "Career Guidance & Interview Preparation",
  //   },
  //   { icon: <Radio size={24} />, text: "Peer to Peer Networking" },
  // ];

  //benefit cards

  const orgBenefits = [
    "Enhances the school's image as a forward-thinking institution.",
    "Improves student outcomes in competitions and leadership events.",
    "Supports branding through documentation and media-ready content.",
    "Increases parent engagement and trust in the school’s vision.",
    "Aligns with NEP’s focus on skill-based education.",
    "Creates a legacy of confident, capable students.",
  ];

  const fresherBenefits = [
    "Boosts communication and public speaking from an early age.",
    "Builds emotional intelligence and team spirit.",
    "Reduces stage fear, peer pressure, and anxiety.",
    "Encourages leadership, decision-making, and creativity.",
    "Helps in exam interviews, scholarships, and future career prep.",
    "Makes them stand out in both school and beyond.",
  ];

  //for certificate
  const criteriaList = [
    "Participate in at least 60% of interactive lessons and activities.",
    "Successfully complete 60% of tests, group work, or projects.",
  "Note: The certificate highlights your achievement in life skills. ",
  "For participation in inter-school competitions or advanced programs, please see the School Training FAQs."
  ];
  return (
    <>
    <title> College Skill | Skill For Schools</title>
      <Navbar />

      <CourseCard
        badge="#Popular"
        title="Soft Skills Training for Schools"
        description="Our School Soft Skills Program introduces essential life and career skills to students from Classes 6 to 12 through activity-based, interactive learning. The training builds confidence, communication, emotional intelligence, and leadership — helping students not just in academics but in real-life situations. It also supports schools in becoming future-ready by integrating NEP-aligned, holistic development modules that reflect positively on institutional branding and parent satisfaction."
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
            Did You Know
          </h2>
          <p className="mb-3 text-slate-800">
            A Harvard study shows that 85% of job success depends on soft skills
            — starting early makes a lasting difference.
          </p>
          <p className="mb-3 text-slate-800">
            Early exposure to life skills shapes confident and adaptable
            individuals.
          </p>
          <p className="mb-3 text-slate-800">
            Schools that invest in communication, leadership, and teamwork see
            better academic and co-curricular results.
          </p>
          <p className="mb-3 text-slate-800">
            Students trained in emotional intelligence perform better socially
            and academically.
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
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Column */}
          <BenefitsCard
            title="Benefits for your School"
            icon={GoOrganization}
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits for the Students"
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
            "Identify key developmental areas with teachers and school leadership.",
            " Design age-appropriate, engaging activities that build life skills.",
            " Allow school heads to assess trainer compatibility with students.",
            " Deliver interactive, fun, and confidence-boosting sessions.",
            "Evaluate skill growth with teachers’ inputs.",
            "Conduct quarterly reviews for long-term tracking.",
            "Offer refresher programs before exams or competitions.",
          ]}
          imageSrc={training}
        />
      </div>
      <CertificateViewer 
       title="Validating Your Success: About Your Certificate"
        subtitle="Soft Skills for Schools"
        description="We believe school students deserve recognition for their dedication and growth.
You will be eligible for the School Soft Skills Completion Certificate when you:"
        criteria={criteriaList}
        imageSrc={certificate}
      />
      <Pricing />
      <Testimonial />
      <FAQSection faqs={page1Faqs} />
      <Footer />
    </>
  );
}

export default SkillForSchool;
