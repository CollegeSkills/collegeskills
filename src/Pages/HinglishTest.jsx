import { useEffect, useMemo, useState } from "react";
import data from "../Test2.json"; // Your 30 questions JSON
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const letters = ["A", "B", "C", "D"];

export default function HinglishTest() {
  const questions = useMemo(() => data, []);
  const [index, setIndex] = useState(0); // current question index
  const [answers, setAnswers] = useState({}); // { [id]: optionIndex }
  const [submitting, setSubmitting] = useState(false);

  const q = questions[index];

  const hasPrev = index > 0;
  const hasNext = index < questions.length - 1;
  const isLast = index === questions.length - 1;

  // Scroll to top on question change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [index]);

  const selectOption = (optIdx) => {
    setAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
  };

  const onPrev = () => hasPrev && setIndex(index - 1);
  const onNext = () => {
    if (answers[q.id] !== undefined) {
      setIndex(index + 1);
    }
  };

  const onSubmit = async () => {
    if (answers[q.id] === undefined) return;
    setSubmitting(true);
    try {
      console.log("SUBMIT PAYLOAD:", {
        total: questions.length,
        answers,
      });
      alert("Thanks! Your responses have been recorded.");
    } catch (e) {
      console.error(e);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      {/* <div className="min-h-[70vh] w-full flex items-center justify-center px-4 py-10 sm:py-14">
        <div className="w-full max-w-[760px]">

          <div className="overflow-hidden border border-gray-200 shadow-lg rounded-2xl">

            <div className="px-5 py-6 text-center bg-gray-600 sm:px-8">
              <p className="text-white/80 text-xs sm:text-sm tracking-[.2em]">
                COLLEGE SKILLS – PERSONALITY & SOFT SKILLS TEST
              </p>
            </div>


            <div className="px-4 py-8 bg-brand-primary sm:px-6 md:px-8">
   
              <h2 className="mb-6 text-lg font-semibold tracking-wide text-center text-white sm:text-xl md:text-2xl">
                {q.question}
              </h2>

         
              <div className="space-y-4">
                {q.options.map((opt, i) => {
                  const selected = answers[q.id] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={[
                        "w-full group flex items-center gap-4",
                        "rounded-full border-2",
                        "bg-white/5 hover:bg-white/10",
                        selected ? "border-white shadow" : "border-white/40",
                        "transition-all duration-200 px-4 py-3 sm:px-5 sm:py-4",
                      ].join(" ")}
                    >
         
                      <span
                        className={[
                          "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full",
                          "border-2",
                          selected
                            ? "bg-white text-brand-primary border-transparent"
                            : "bg-neutral-800 text-white border-white/40",
                          "shrink-0",
                        ].join(" ")}
                      >
                        {letters[i]}
                      </span>

        
                      <span className="text-sm leading-snug text-left text-white sm:text-base">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>


          <div className="flex flex-col items-stretch justify-between gap-3 mt-6 sm:flex-row sm:items-center">
 
            <div className="text-sm text-center text-gray-600 sm:text-left">
              Question <span className="font-semibold">{index + 1}</span> 

            </div>


            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-5 py-2 text-gray-700 border border-gray-300 rounded-full disabled:opacity-40"
              >
                Previous
              </button>

              {!isLast ? (
                <button
                  onClick={onNext}
                  disabled={answers[q.id] === undefined}
                  className="px-6 py-2 text-white transition rounded-full bg-brand-primary hover:bg-brand-primary disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={onSubmit}
                  disabled={
                    submitting ||
                    Object.keys(answers).length < questions.length ||
                    answers[q.id] === undefined
                  }
                  className="px-6 py-2 text-white transition rounded-full bg-brand-primary hover:bg-orange-600 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative min-h-[70vh] w-full flex items-center justify-center px-4 py-10 sm:py-14 overflow-hidden ">
        {/* Background Curves */}
        {/* Background Circles */}
        <div className="absolute -top-28 right-28 w-[400px] h-[300px] rounded-full bg-gradient-to-br from-pink-300 via-orange-400 to-orange-100 opacity-40 "
        style={{ borderRadius: "30% 70% 39% 61% / 46% 20% 80% 54%"}}
        ></div>

        <div className="absolute -bottom-28 left-28 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-pink-300 via-orange-400 to-orange-100 opacity-40 "
        style={{borderRadius:"30% 70% 74% 26% / 46% 20% 80% 54% "}}
        ></div>

        <div className="w-full max-w-[760px] relative z-10">
          {/* Quiz Card */}
          <div className="overflow-hidden border border-gray-200 shadow-lg rounded-2xl">
            {/* Header */}
            <div className="px-5 py-6 text-center bg-gray-600 sm:px-8">
              <p className="text-white/80 text-xs sm:text-sm tracking-[.2em]">
                COLLEGE SKILLS – PERSONALITY & SOFT SKILLS TEST
              </p>
            </div>

            {/* Body */}
            <div className="px-4 py-8 bg-brand-primary sm:px-6 md:px-8">
              <h2 className="mb-6 text-lg font-semibold tracking-wide text-center text-white sm:text-xl md:text-2xl">
                {q.question}
              </h2>

              {/* Options */}
              <div className="space-y-4">
                {q.options.map((opt, i) => {
                  const selected = answers[q.id] === i;
                  return (
                    <button
                      key={i}
                      onClick={() => selectOption(i)}
                      className={[
                        "w-full group flex items-center gap-4",
                        "rounded-full border-2",
                        "bg-white/5 hover:bg-white/10",
                        selected ? "border-white shadow" : "border-white/40",
                        "transition-all duration-200 px-4 py-3 sm:px-5 sm:py-4",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full",
                          "border-2",
                          selected
                            ? "bg-white text-brand-primary border-transparent"
                            : "bg-neutral-800 text-white border-white/40",
                          "shrink-0",
                        ].join(" ")}
                      >
                        {letters[i]}
                      </span>
                      <span className="text-sm leading-snug text-left text-white sm:text-base">
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col items-stretch justify-between gap-3 mt-6 sm:flex-row sm:items-center">
            <div className="text-sm text-center text-gray-600 sm:text-left">
              Question <span className="font-semibold">{index + 1}</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={onPrev}
                disabled={!hasPrev}
                className="px-5 py-2 text-gray-700 border border-white rounded-full disabled:opacity-40"
              >
                Previous
              </button>

              {!isLast ? (
                <button
                  onClick={onNext}
                  disabled={answers[q.id] === undefined}
                  className="px-6 py-2 text-white transition rounded-full bg-brand-primary hover:bg-brand-primary disabled:opacity-50"
                >
                  Next
                </button>
              ) : (
                <button
                  onClick={onSubmit}
                  disabled={
                    submitting ||
                    Object.keys(answers).length < questions.length ||
                    answers[q.id] === undefined
                  }
                  className="px-6 py-2 text-white transition rounded-full bg-brand-primary hover:bg-orange-600 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
