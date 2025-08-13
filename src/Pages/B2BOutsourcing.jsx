import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import CourseCard from "../Components/CourseCard/CourseCard";
// import courseImg from "../assets/service/s6.png";
import courseImg from "../assets/service/s9.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { CheckCircle, Download, Radio, School } from "lucide-react";
import Pricing from "../Components/Pricing/Pricing";
import Footer from "../Components/Footer/Footer";
import CourseImage from "../assets/service/s7.png";
import CertificateViewer from "../Components/CertificateView/CertificateView";
import TeamCard from "../Components/Team/Team";
import Testimonial from "../Components/Testimonial/Testimonial";
import FAQSection from "../Components/Faq/Faq";
import BenefitsCard from "../Components/BenefitCard/BenefitCard";
import Partners from "../Components/Partners/Partners";
import OurTraining from "../Components/OurTraining/OurTraining";
import training from "../assets/B2BApproach.png";
import certificate from "../assets/certificate.png";

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

  const B2BFaqs = [
    {
      question: " What does soft skills B2B outsourcing mean?",
      answer:
        "It means we take over your organization’s soft skills training needs, delivering end-to-end solutions without burdening your internal team.",
    },
    {
      question: " Which industries benefit most from outsourcing?",
      answer:
        " IT, BFSI, retail, manufacturing, and education are among the sectors that see significant results.",
    },
    {
      question:
        "Can you handle large-scale training across multiple locations?",
      answer:
        "Absolutely. We have a network of experienced trainers and scalable delivery models for pan-India coverage.",
    },
    {
      question: "How do you ensure quality across outsourced training?",
      answer:
        "We use standardized training frameworks, continuous trainer evaluations, and client-approved content to maintain quality.",
    },
  ];

  const criteriaList = [
    "Complete at least 60% of the project-specific training sessions.",
    "Score 60% or more in evaluations, skill demonstrations, or project deliverables.",
    "Note: This certificate is for training completion. For performance-based rewards or extended workforce programs, check the B2B Outsourcing FAQs.",
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
          <h2 className="mb-6 text-5xl font-bold text-gray-900 font-oswald">
            Why It Matters
          </h2>
          <p className="mb-3 text-brand-text">
            Outsourcing soft skills training can reduce in-house training costs
            by 30-40%.
          </p>
          <p className="mb-3 text-brand-text">
            71% of our B2B clients report a visible boost in employee engagement
            within two weeks of our sessions.
          </p>
          <p className="mb-3 text-brand-text">
            Outsourced teams with strong interpersonal and process skills
            deliver higher quality output.
          </p>
          <p className="mb-3 text-brand-text">
            Clients experience smoother communication, faster turnaround times,
            and fewer escalations.
          </p>
          <p className="mb-3 text-brand-text">
            Training boosts client satisfaction and long-term business
            relationships.
          </p>

          <button className="flex justify-between gap-2 px-6 py-3 mt-8 text-lg font-semibold text-white uppercase rounded-lg bg-brand-primary font-barlow">
            Download Pdf <Download />
          </button>
        </div>
      </div>
      <Partners />
      {/* Benefits */}
      <div className="px-4 mt-20 md:px-1">
        <h2 className="text-6xl font-bold text-center pb-9 font-oswald text-brand-text">
          Your Benefits
        </h2>
        <div className="grid grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-2">
          {/* Left Column */}
          <BenefitsCard
            title="Benefits to Partnering Organizations"
            icon={GoOrganization}
            color="text-orange-400"
            items={orgBenefits}
            gradientFrom="from-orange-100"
            gradientTo="to-white"
          />

          {/* Right Column */}
          <BenefitsCard
            title="Benefits to Your Clients/Employees"
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
            "Understand client business objectives and skill gaps in outsourced teams.",
            " Tailor training modules to client workflows and industry standards.",
            " Provide client managers with trainer credentials for approval.",
            " Deliver training aligned with project deadlines and deliverables.",
            " Track skill application in day-to-day operations.",
            " Conduct post-training quality audits.",
            " Provide refresher modules for performance optimization.",
          ]}
          imageSrc={training}
        />
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
      <FAQSection faqs={B2BFaqs} />
      <Footer />
    </>
  );
}

export default B2BOutSourcing;
