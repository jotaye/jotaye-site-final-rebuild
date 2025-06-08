// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

const translations = {
  es: {
    heading: "Si desea hablar sobre su próximo proyecto, complete nuestro formulario",
   },
  en: {
    heading: "If you’d like to discuss your next project, please complete our form",
   };

export default function Contact({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <div className="bg-gray-800 text-gray-200">
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100 leading-snug">
          {t.heading}
        </h2>
        <p className="mb-8 text-gray-300">
          {t.emailLine}
          <br />
          {t.whatsappLine}
        </p>
        <ContactForm language={lang} />
      </section>
    </div>
  );
}
