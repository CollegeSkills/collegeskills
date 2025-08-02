import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/skill.jpg";
import Benefits from "../Components/Benefits/Benefits";
import { Radio, School } from "lucide-react";

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
  return (
    <>
      <Navbar />
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

      <div className="bg-gray-50 min-h-screen">
        <Benefits
          title="Unlock Your Potential: Exclusive Course Offerings"
          features={featureData}
        />
      </div>
    </>
  );
}

export default SoftSkills;
