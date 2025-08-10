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

function CorporateTraining() {
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

  const orgBenefits = [
    "Increase in workplace productivity and reduced onboarding time.",
    "Improved internal communication and team collaboration.",
    "Consistent work culture aligned across fresh recruits.",
    "Reduction in early attrition of freshers due to clear expectations.",
    "We also provide access to custom content (video snippets, images, social posts) for promotional and employer branding efforts.",
  ];

  const fresherBenefits = [
    "Improved professional communication and workplace etiquette.",
    "Clear understanding of job expectations and behavioral protocols.",
    "Greater confidence in handling tasks and team interactions.",
  ];

  return (
    <>
      <Navbar />

      <CourseCard
        badge="#Popular"
        title="Corporate Training for Freshers"
        description="Freshers are the raw clay of your organization — how you shape them defines your future workforce. Our Corporate Training for Freshers is designed to transform recent graduates into confident, workplace-ready professionals who align with your company’s culture, communication standards, and productivity expectations. With tailor-made modules on workplace etiquette, communication, collaboration, and ownership, we ensure your investment in freshers delivers tangible results right from day one."
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
            86% of companies report that structured onboarding and soft skill
            training for freshers improves retention by over 50% within the
            first year.
          </p>
          <p className="mb-6 text-slate-800">
            {" "}
            Freshers trained in communication and team behavior show 40% faster
            adaptation to company processes.
          </p>

          <button className="flex justify-between gap-2 px-6 py-3 mt-12 text-lg font-semibold text-white uppercase rounded-lg bg-brand-primary font-barlow">
            Download Pdf <Download />
          </button>
        </div>
      </div>
      <Partners/>
      {/* Benefits */}
      <div className="px-4 py-7 md:px-1">
        <h2 className="text-6xl font-bold text-center pb-9 font-oswald text-brand-text">Your Benefits</h2>
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Column */}
          <BenefitsCard
            title="Benefits to Your Organization"
            icon={GoOrganization }
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits to Freshers"
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

export default CorporateTraining;
