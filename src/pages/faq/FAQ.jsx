import React from "react";

const faqs = [
  {
    question: "Lorem ipsum dolor sit amet?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis.",
  },
  {
    question: "Quis nostrud exercitation ullamco?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "Ut enim ad minim veniam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus urna sed urna.",
  },
  {
    question: "Duis aute irure dolor in reprehenderit?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Faq = () => {
  return (
    <section className="py-12 px-6 md:px-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-full transition-colors duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {faq.question}
            </h3>
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
