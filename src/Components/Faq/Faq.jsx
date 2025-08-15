import React, { useState } from "react";
import client1 from "../../assets/ditya.png";
import client2 from "../../assets/indr.jpeg";
import client3 from "../../assets/kartik.png";
import client4 from "../../assets/atul.png";

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-4 py-10 md:px-16 bg-gray-50">
      <div className="grid items-start gap-12 mx-auto max-w-7xl md:grid-cols-2">
        {/* Left Column (Fixed) */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-brand-primary">FAQ</p>
          <h2 className="text-4xl font-medium leading-tight md:text-6xl font-oswald">
            Your coaching questions <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-300">
              answered simply here
            </span>
          </h2>

          {/* Contact Box */}
          <div className="flex flex-col max-w-md gap-4 p-6 bg-white shadow-sm rounded-2xl">
            <div className="flex -space-x-3">
              {[client3, client4, client1, client2].map(
                (avatar, i) => (
                  <img
                    key={i}
                    src={avatar}
                    alt={`client-${i}`}
                    className="w-10 h-10 border-2 border-white rounded-full"
                  />
                )
              )}
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

        {/* Right Column (Dynamic) */}
        <div className="w-full mt-2 space-y-4 lg:mt-16">
          {faqs?.map((item, index) => (
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
