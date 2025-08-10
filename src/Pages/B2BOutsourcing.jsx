import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/12.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { CheckCircle, Download, Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer.jsx/Footer";
import CourseImage from "../assets/10.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import TeamCard from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import Partners from "../Components/Partners/Partners";
import OurTraining from "../Components/OurTraining/OurTraining";
import training from '../assets/training.png'

function B2BOutSourcing() {
  const featureData = [
    { icon: <School size={24} />, text: "Industry-Oriented Curriculum" },
    {
      icon: <Radio size={24} />,
      text: "Weekend Live Sessions",
    },
    { icon: <Radio size={24} />, text: "Practice Exercises" },
    { icon: <Radio size={24} />, text: "Certification of Completion" },
    { icon: <Radio size={24} />, text: "Email Support" },
    { icon: <Radio size={24} />, text: "SME Support Session" },
    { icon: <Radio size={24} />, text: "Comprehensive Learning Content" },
    { icon: <Radio size={24} />, text: "Capstone Project" },
    {
      icon: <Radio size={24} />,
      text: "Assignments and Projects",
    },
    {
      icon: <Radio size={24} />,
      text: "Career Guidance & Interview Preparation",
    },
    { icon: <Radio size={24} />, text: "Peer to Peer Networking" },
  ];

  const orgBenefits = [
    "Plug-and-play training support without hiring costs.",
    "Access to a pool of trained, professional soft skills facilitators.",
    "Flexibility in duration, language, and region-specific delivery.",
    "We provide professionally packaged content (videos, banners, testimonials) that you can showcase for your internal branding or external promotion.",
  ];

  const fresherBenefits = [
    "Learner engagement through activities, case studies, and real-world examples.",
    "Immediate application of skills like communication, problem-solving, leadership, and teamwork.",
    "Increased self-awareness and adaptability in the workplace.",
    "Better inter-departmental collaboration and interpersonal behavior.",
    "Better performance in appraisals and long-term career growth.",
  ];

  return (
    <>
      <Navbar />

      <CourseCard
        badge="#Popular"
        title="B2B Soft Skills Outsourcing"
        description="Soft skills are the backbone of performance in today’s corporate world. Our B2B Soft Skills Outsourcing service helps organizations, training companies, and institutions deliver professional, high-quality soft skills sessions without building an internal training team. Whether you need a one-day workshop or a long-term program across locations — we bring trained facilitators, proven content, and measurable impact to your audience."
        image={courseImg}
        showInfoGrid={false} // ← Yeh line hata dega Info Grid ko
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
          <h2 className="mb-4 text-5xl font-bold text-gray-900 font-oswald">
          Why It Matters
          </h2>
          <p className="mb-6 text-slate-800">
            {" "}
         Outsourcing soft skills training can reduce in-house training costs by 30-40%.
          </p>
          <p className="mb-6 text-slate-800">
            {" "}
            71% of our B2B clients report a visible boost in employee engagement within two weeks of our sessions.
          </p>

          <button className="flex justify-between gap-2 px-6 py-3 mt-12 text-lg font-semibold text-white uppercase rounded-lg bg-brand-primary font-barlow">
            Download Pdf <Download />
          </button>
        </div>
      </div>
      <Partners/>
      {/* Benefits */}
      <div className="px-4 mt-20 md:px-1">
        <h2 className="text-6xl font-bold text-center pb-9 font-oswald text-brand-text">Your Benefits</h2>
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Column */}
          <BenefitsCard
            title="Benefits to Partnering Organizations"
            icon={GoOrganization }
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits to Your Clients/Employees"
            icon={RiGraduationCapFill }
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
          " Understand the requirements and business outcomes on one-on-one call.",
          " Customize the curriculum, methodology, and tools accordingly.",
          " Trainer evaluation by the client.",
          " Deliver the training.",
          " Evaluate learners’ performance and follow a closed-loop feedback mechanism.",
          " Conduct post-training periodic assessments to assess the progress.",
          " Provide reinforcement sessions if required."
        ]}
        imageSrc={training}
      />
    </div>
      <CertificateViewer />
      <TeamCard />
      <Pricing />
      <Testimonial />
      <FAQSection />
      <Footer />
    </>
  );
}

export default B2BOutSourcing;
