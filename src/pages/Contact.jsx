// src/pages/Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

const translations = {
  es: {
    headingLine1: "Si desea hablar sobre su próximo",
    headingLine2: "proyecto o consultas de empleo",
    email: "o envíe un correo a jotayegroupllc@gmail.com",
    whatsapp: "o contáctenos por WhatsApp",
  },
  en: {
    headingLine1: "If you’d like to discuss your next",
    headingLine2: "project or employment inquiries,",
    email: "you can email jotayegroupllc@gmail.com",
    whatsapp: "or reach us via WhatsApp",
  },
};

export default function Contact({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <div className="bg-gray-800 text-gray-200">
      <section className="py-16 max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100 leading-snug">
          {t.headingLine1}
          <br />
          {t.headingLine2}
        </h2>
        <p className="mb-8 text-gray-300">
          {t.email} <br /> {t.whatsapp}
        </p>
        <ContactForm language={lang} />
      </section>
    </div>
  );
}
