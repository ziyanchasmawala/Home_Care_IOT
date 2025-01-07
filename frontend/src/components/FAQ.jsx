import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What is Material Tailwind?",
      answer:
        "Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.",
    },
    {
      question: "How to use Material Tailwind?",
      answer:
        "You can use Material Tailwind by importing its components into your Tailwind CSS project.",
    },
    {
      question: "What can I do with Material Tailwind?",
      answer:
        "Material Tailwind allows you to quickly build modern, responsive websites with a focus on design.",
    },
    {
      question: "Is Material Tailwind free?",
      answer: "Yes, Material Tailwind is completely free to use.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col p-4 w-full">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="max-w-3xl mx-auto">
          {/* Title */}
          <div className="mb-4">
            <h2 className="text-xl font-bold">FAQs</h2>
          </div>

          {/* Accordion Cards */}
          <div className="space-y-2">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white border rounded-md shadow-sm">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center p-3 focus:outline-none text-left"
                >
                  <span className="mr-4">
                    {activeIndex === index ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
                      </svg>
                    )}
                  </span>
                  <span className="text-sm sm:text-base">{item.question}</span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <div className="p-3 text-sm sm:text-base">{item.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
