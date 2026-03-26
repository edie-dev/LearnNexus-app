"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the multi-tenant architecture benefit my school?",
      answer:
        "Our multi-tenant OS allows each school have its own secure, isolated environment while benefitting from global platform updates, shared intelligence models, and reduced infrastructure costs.",
    },
    {
      question: "Is student data security guaranteed?",
      answer:
        "Yes. We employ bank-grade encryption at rest and in transit, with role-based access controls and strict compliance  with global data  privacy regulations.",
    },
    {
      question: "Can LearnNexus integrate with our existing systems?",
      answer:
        "Absolutely. We offer an extensive library of APIs and pre-built connectors to seamlessly sync  with your current accounting, communication, and learning tools.",
    },
    {
      question: "Which regions do you currently support?",
      answer:
        "We currently support schools across Africa and are rapidly expanding to the Middle East and SouthEast Asia, with full multi-currency and multi-language capabilities.",
    },
  ];

  // Add type annotation here
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="mt-34 px-20 text-center">
        <h1 className="text-7xl font-bold text-white">Frequently Asked Questions</h1>
        <p className="text-gray-400 text-2xl mt-4">
          Everything you need to know about the LearnNexus ecosystem.
        </p>
      </section>

      <section className="w-full mt-20 mb-20">
        <div className="max-w-7xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-2xl bg-gray-900/20 backdrop-blur-lg overflow-hidden hover:bg-teal-950 transition hover:border-teal-400/30"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left text-2xl"
              >
                <span className="text-white font-medium">{faq.question}</span>

                <ChevronDown
                  className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-gray-400 text-xl transition-all duration-300 overflow-hidden ${
                  openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}