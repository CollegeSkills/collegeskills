import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/skill.jpg";
import Benefits from "../Components/Benefits/Benefits";
import { Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer.jsx/Footer";
import SoftSkillsAbout from "../Components/SoftSkillAbout/SoftSkillAbout";
import CourseImage from "../assets/soft.jpg";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import TeamCard from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";

function SoftSkills() {
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

  const features = [
    {
      title: "Professional Led Sessions",
      description: "Get guidance from experts.",
    },
    { title: "Project Portfolio", description: "Build job-ready projects." },
    { title: "Career Assistance", description: "Get interview help." },
    { title: "Dedicated Peer Network", description: "Collaborate with peers." },
    {
      title: "Learn Industry Skills",
      description: "Upskill with hands-on learning.",
    },
    { title: "Certification", description: "Earn a recognized certificate." },
  ];

  return (
    <>
      <Navbar />
      {/* <div className="w-full"> */}

      <CourseCard
        badge="#Bestseller"
        title="Soft Skill For Students"
        description="Become a Certified Soft Skill with College Skills and harness the power of Machine learning, NLP and Generative AI. Learn industry-relevant skills."
        image={courseImg}
        startPrice="₹6,999"
        jobAssistance="For Pro Plan"
        startDate="25th august 2025"
        duration="6 Months"
        mode="Live + Recorded"
        language="English"
      />
      <SoftSkillsAbout
        title="About Soft Skill Course"
        description="Discover your potential by learning the latest skills using powerful tools."
        features={features}
        image={CourseImage}
      />
      {/* <div className="min-h-screen bg-white"> */}
      <Benefits
        title="Unlock Your Potential: Exclusive Course Offerings"
        features={featureData}
      />
      <CertificateViewer/>
      <TeamCard/>
      {/* </div> */}
      <Pricing />
      <Testimonial/>
      {/* </div> */}
      <Footer />
    </>
  );
}

export default SoftSkills;
