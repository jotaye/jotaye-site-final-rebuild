// src/components/FAQ.jsx
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqItems = [
  {
    question: {
      es: "¿En qué áreas de South Florida trabajan?",
      en: "Which areas of South Florida do you serve?",
    },
    answer: {
      es: "Cubrimos todo el condado de Miami-Dade y Broward, incluyendo Miami Beach, Fort Lauderdale y sus alrededores.",
      en: "We cover all of Miami-Dade and Broward County, including Miami Beach, Fort Lauderdale, and surrounding areas.",
    },
  },
  {
    question: {
      es: "¿Cuánto tiempo demora un proyecto promedio?",
      en: "How long does an average project take?",
    },
    answer: {
      es: "Depende del alcance, pero la mayoría de remodelaciones residenciales se completan entre 4 y 8 semanas.",
      en: "It depends on scope, but most residential remodels are completed within 4–8 weeks.",
    },
  },
  {
    question: {
      es: "¿Ofrecen garantía en su trabajo?",
      en: "Do you offer warranties on your work?",
    },
    answer: {
      es: "Sí, brindamos garantía de 1 año en mano de obra y respaldo en los materiales utilizados.",
      en: "Yes, we provide a 1-year warranty on workmanship and support for materials used.",
    },
  },
];

export default function FAQ({ language }) {
  const lang = language || "es";
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 bg-gray-700 text-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-100">
          {lang === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
        </h2>
      </div>
      <div className="max-w-3xl mx-auto px-4 space-y-4">
        {faqItems.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 focus:outline-none"
              >
                <span className="text-left">{item.question[lang]}</span>
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-gray-300">
                  {item.answer[lang]}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
