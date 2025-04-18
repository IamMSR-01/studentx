import React, { useState } from "react";
import Line from "./Line";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white/10 mx-auto border-2 border-white/20 p-2 rounded-lg shadow-lg hover:shadow-cyan-600 transition-shadow duration-300 overflow-hidden mb-6">
      <button
        className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-lg font-medium text-cyan-500">{question}</span>
        <span className="text-gray-300 text-xl">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="px-6 py-4">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How does the AI career guidance work?",
      answer:
        "Our AI career guidance system analyzes your skills, interests, and educational background to provide personalized career recommendations. It uses data from millions of career paths to suggest optimal routes for your professional development.",
    },
    {
      question: "Is my data secure and private?",
      answer:
        "Yes, your data is fully encrypted and stored securely. We follow strict privacy protocols and never share your personal information with third parties without your explicit consent. You can review our privacy policy for more details.",
    },
    {
      question: "Can I cancel my Pro subscription anytime?",
      answer:
        "Absolutely! You can cancel your Pro subscription at any time from your account settings. There are no cancellation fees, and you'll continue to have access to Pro features until the end of your current billing period.",
    },
    {
      question: "How accurate are the job matches?",
      answer:
        "Our job matching algorithm has a 93% accuracy rate based on user feedback. We continuously improve our matching system using machine learning and real-world outcomes to ensure you receive the most relevant opportunities.",
    },
    {
      question: "Are the certificates recognized by employers?",
      answer:
        "Yes, our certificates are recognized by over 5,000 employers worldwide. We've established partnerships with industry leaders to ensure our certifications meet their standards and requirements for job applicants.",
    },
  ];

  return (
    <div>
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-4xl text-white font-bold text-center mb-2">
          Frequently Asked <span className="text-cyan-500">Questions</span>
        </h1>
        <p className="text-center text-gray-300 mt-4 mb-12">
          Get answers to common questions about StudentX
        </p>

        <div>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <div className="mt-20">
        <Line />
      </div>
    </div>
  );
};

export default FAQ;
