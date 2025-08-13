import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/softskill.png";
import Benefits from "../Components/Benefits/Benefits";
import { Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import SoftSkillsAbout from "../Components/SoftSkillAbout/SoftSkillAbout";
import CourseImage from "../assets/softskill1.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import EnquiryForm from "../Components/EnquiryForm/EnquiryForm";
import certificate from "../assets/certificate.png";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import { RiGraduationCapFill} from "react-icons/ri";

function SoftSkills() {
  const orgBenefits = [
    "Effective Communication Skills",
    "Confidence & Public Speaking",
    "Professional Etiquette",
    "Teamwork & Leadership",
    "Career Readiness Training",
    "Body Language Mastery",
    "Corporate Culture Awareness",
    "Assignments and Projects",
    "Career Guidance & Interview Preparation",
    "Peer to Peer Networking",
  ];

  const features = [
    {
      title: "Expert-Led Interactive Sessions",
    },
    { title: "Real-World Practice Projects" },
    { title: "Career-Boosting Support" },
    { title: "Collaborative Peer Learning" },
    {
      title: "Practical & Industry-Relevant Skills",
    },
    { title: " Recognized Certification" },
  ];

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

  const criteriaList = [
    "Complete at least 60% of the video lessons.",
    "Successfully finish 60% of quizzes and assignments.",
    "Note: These criteria apply only to the Course Completion Certificate.",
    " For Job Assistance eligibility, please refer to the dedicated FAQs section.",
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
      {/* <Benefits
        title="Unlock Your Potential: Exclusive Course Offerings"
        features={featureData}
      /> */}
      <div className="max-w-5xl mx-auto">
          <h2 className="text-6xl font-bold text-center pb-9 font-oswald text-brand-text">
          Your Benefits
        </h2>
        <BenefitsCard
          title="Unlock Your Potential: Exclusive Course Offerings"
          icon={RiGraduationCapFill}
          color="text-orange-400"
          items={orgBenefits}
          gradientFrom="from-orange-100"
          gradientTo="to-white"
        />
      </div>

      <CertificateViewer
        title="Validating Your Success: About Your Certificate"
        subtitle="Soft skills for student"
        description="At College Skills, we believe a certificate should reflect real learning and skill development."
        criteria={criteriaList}
        imageSrc={certificate}
      />
      <Pricing />
      <Testimonial />
      <FAQSection faqs={homeFaqs} />
      <EnquiryForm />
      <Footer />
    </>
  );
}

export default SoftSkills;
