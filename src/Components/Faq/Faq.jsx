import React, { useState } from "react";

const faqs = [
  {
    question: "What are soft skills, and why are they important for students?",
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
  // {
  //   question:
  //     "How are your training packages structured, and what do they cost?",
  //   answer: [
  //     "We offer three flexible options:",
  //     "A free foundation plan for beginners",
  //     "Paid advanced modules for in-depth learning",
  //     "Custom solutions for colleges and organizations",
  //     "Each plan is designed to suit different needs and budgets, making it easy for everyone to invest in their growth and employability.",
  //   ],
  // },
  {
    question:
      "How do students measure progress and see real improvement from your soft skills training?",
    answer:
      "Learners benefit from pre- and post-training assessments, ongoing feedback, and practical assignments like mock interviews or group presentations. Our structured progress tracking ensures students can clearly see their development and gain confidence for real-world challenges.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20 md:px-16 bg-gray-50">
      <div className="grid items-start gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-brand-primary">// FAQ</p>
          <h2 className="text-4xl font-medium leading-tight md:text-6xl font-oswald">
            Your coaching questions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-300">
              answered simply here
            </span>
          </h2>

          {/* Contact Box */}
          <div className="flex flex-col max-w-md gap-4 p-6 bg-white shadow-sm rounded-2xl">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="object-cover w-10 h-10 border-2 border-white rounded-full"
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? "women" : "men"
                  }/${i + 10}.jpg`}
                  alt="team"
                />
              ))}
            </div>
            <div>
              <p className="mt-2 text-lg font-semibold">
                Still have you any question?
              </p>
              <p className="text-sm text-gray-500">
                We're ready to help you to answer any questions.
              </p>
            </div>
            <p className="flex items-center gap-2 font-semibold text-brand-primary">
              📞 +01 789 859 664
            </p>
          </div>
        </div>

        {/* Right Column - FAQs */}
        <div className="w-full space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="transition bg-white shadow-sm rounded-xl hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full px-6 py-4 text-left"
              >
                <p className="text-lg font-medium">{item.question}</p>
                <span className="text-2xl font-bold text-gray-400">
                  {openIndex === index ? "-" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-sm text-gray-600">
                  {Array.isArray(item.answer) ? (
                    <ul className="space-y-1 list-disc list-inside">
                      {item.answer.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
