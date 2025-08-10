import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/12.png";
import Benefits from "../Components/Benefits/Benefits";
import { Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer.jsx/Footer";
import SoftSkillsAbout from "../Components/SoftSkillAbout/SoftSkillAbout";
import CourseImage from "../assets/10.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import TeamCard from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import EnquiryForm from "../Components/EnquiryForm/EnquiryForm";

function SoftSkills() {
  const featureData = [
    { icon: <School size={24} />, text: "Effective Communication Skills" },
    {
      icon: <Radio size={24} />,
      text: "Confidence & Public Speaking",
    },
    { icon: <Radio size={24} />, text: "Professional Etiquette" },
    { icon: <Radio size={24} />, text: "Teamwork & Leadership" },
    { icon: <Radio size={24} />, text: "Career Readiness Training" },
    { icon: <Radio size={24} />, text: "Body Language Mastery" },
    { icon: <Radio size={24} />, text: "Corporate Culture Awareness" },
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
      title: "Expert-Led Interactive Sessions"
    },
    { title: "Real-World Practice Projects" },
    { title: "Career-Boosting Support"},
    { title: "Collaborative Peer Learning" },
    {
      title: "Practical & Industry-Relevant Skills"
    },
    { title: " Recognized Certification"},
  ];

  return (
    <>
      <Navbar />

      <CourseCard
        badge="#Bestseller"
        title="Soft Skill For Students"
        description="Get Certified in Soft Skills with College Skills Learn Communication, Leadership & Career-Ready Tools with AI-powered Techniques!"
        image={courseImg}
        startPrice="₹6,999"
        jobAssistance="For Pro Plan"
        startDate="Upcoming"
        duration="1 Months"
        mode="Live + Recorded"
        language="Hindi + English"
      />
      <SoftSkillsAbout
        title="About Our Soft Skills Training"
        description="Empower your communication. Sharpen your presence. Build a future-ready personality."
        features={features}
        image={CourseImage}
      />
      <Benefits
        title="Unlock Your Potential: Exclusive Course Offerings"
        features={featureData}
      />
      <CertificateViewer/>
      <TeamCard/>
      <Pricing />
      <Testimonial/>
      <FAQSection/>
      <EnquiryForm/>
      <Footer />
    </>
  );
}

export default SoftSkills;
