import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is a Life & Business Coach?',
    answer:
      'A Life & Business Coach helps individuals and professionals achieve their personal and professional goals through guidance and support.',
  },
  {
    question: 'How does coaching differ from therapy?',
    answer:
      'Coaching focuses on present and future goals, while therapy often deals with healing past emotional issues.',
  },
  {
    question: 'Who can benefit from life and business coaching?',
    answer:
      'Entrepreneurs, professionals, and anyone seeking clarity, growth, or balance in their life or career can benefit from coaching.',
  },
  {
    question: 'How long does the coaching process take?',
    answer:
      'It depends on individual goals, but coaching usually spans a few weeks to several months for impactful results.',
  },
  {
    question: 'Can coaching help my business grow?',
    answer:
      'Yes, coaching can improve strategy, leadership, team performance, and clarity which directly supports business growth.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-20 md:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-brand-primary">// FAQ</p>
          <h2 className="text-4xl md:text-6xl font-medium font-oswald leading-tight">
            Your coaching questions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-300">
              answered simply here
            </span>
          </h2>

          {/* Contact Box */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col gap-4 max-w-md">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? 'women' : 'men'
                  }/${i + 10}.jpg`}
                  alt="team"
                />
              ))}
            </div>
            <div>
              <p className="text-lg font-semibold mt-2">
                Still have you any question?
              </p>
              <p className="text-gray-500 text-sm">
                We're ready to help you to answer any questions.
              </p>
            </div>
            <p className="text-brand-primary font-semibold flex items-center gap-2">
              📞 +01 789 859 664
            </p>
          </div>
        </div>

        {/* Right Column - FAQs */}
        <div className="space-y-4 w-full">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm transition hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left"
              >
                <p className="font-medium text-lg">{item.question}</p>
                <span className="text-2xl font-bold text-gray-400">
                  {openIndex === index ? '-' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm">
                  {item.answer}
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
