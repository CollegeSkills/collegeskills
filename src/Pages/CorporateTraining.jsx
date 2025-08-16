import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
import courseImg from "../assets/12.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { Check, CheckCircle, Download, Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import CourseImage from "../assets/10.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import TeamCard from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import Partners from "../Components/Partners/Partners";
import OurTraining from "../Components/OurTraining/OurTraining";
import training from "../assets/ourtraining.png";
import certificate from "../assets/certificate.png";

function CorporateTraining() {
  const page1Faqs = [
    {
      question: "What soft skills are most important for employees?",
      answer:
        "Communication, leadership, adaptability, time management, and problem-solving are critical for productivity and teamwork.",
    },
    {
      question: "Can the training address specific company challenges?",
      answer:
        "Yes. We assess your organization’s needs and customize the content to solve real workplace issues.",
    },
    {
      question: " Is the training available online and offline?",
      answer:
        "Both options are available, with live interactive sessions and post-training support.",
    },
    {
      question: "How do you measure training effectiveness?",
      answer:
        "We use pre- and post-assessments, manager feedback, and periodic follow-ups to ensure lasting impact.",
    },
  ];

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
    "Enhanced problem-solving and adaptability skills for real-world scenarios.",
    "Better preparedness for performance reviews and career growth opportunities.",
  ];

  const criteriaList = [
    "Complete at least 60% of the project-specific training sessions.",
    "Score 60% or more in evaluations, skill demonstrations, or project deliverables.",
    "Note: This certificate is for training completion. ",
    "For performance-based rewards or extended workforce programs, check the B2B Outsourcing FAQs.",
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
          <h2 className="mb-6 text-5xl font-bold text-gray-900 font-oswald">
            Why It Matters
          </h2>
          <p className="mb-3 text-brand-text">
            86% of companies report that structured onboarding and soft skill
            training for freshers improves retention by over 50% within the
            first year.
          </p>
          <p className="mb-3 text-brand-text">
            Freshers trained in communication and team behavior show 40% faster
            adaptation to company processes.
          </p>
          <p className="mb-3 text-brand-text">
            Companies with strong soft skill programs see 25% higher team
            productivity.
          </p>
          <p className="mb-3 text-brand-text">
            Corporate training enhances retention rates and boosts employee
            morale.
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
            title="Benefits to Your Organization"
            icon={GoOrganization}
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits to Freshers"
            icon={RiGraduationCapFill}
            color="text-orange-400"
            items={fresherBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-10 px-4 md:px-8 lg:px-12 md:flex-row">
        {/* Text */}
        <div className="relative w-full md:w-1/2 md:pr-6 lg:-top-0 -top-20">
          <h2 className="px-2 text-3xl font-bold text-gray-800 lg:px-0 sm:text-3xl md:text-left md:text-5xl font-oswald">
            Our Training Approach
          </h2>

          <div className="mt-6 space-y-4 sm:mt-8 md:mt-10">
            <ul className="space-y-4 sm:space-y-6">
              {[
                "Understand company goals, workforce challenges, and role-specific skill needs.",
                "Customize training to match company culture and objectives.",
                "Provide client HR/management with trainer profiles for review.",
                "Deliver results-driven, interactive sessions.",
                "Measure progress through performance metrics and employee feedback.",
                "Conduct follow-up assessments for sustained growth.",
                "Offer reinforcement sessions for continuous improvement.",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm sm:text-base"
                >
                  <Check className="flex-shrink-0 mt-1 text-orange-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center w-full md:w-1/2 -top-20">
          <img
            src={training}
            alt="training-approach"
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-full"
          />
        </div>
      </div>

      <CertificateViewer
        title="Validating Your Success: About Your Certificate"
        subtitle="B2B Outsourcing"
        description="Our certification is a mark of skill mastery for your workforce.
      The B2B Project Training Completion Certificate will be awarded when participants:"
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

export default CorporateTraining;
