// src/pages/Contact.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import ContactForm from "../components/ContactForm";

const translations = {
  es: {
    heading: "Contacto",
    description:
      "Si desea hablar sobre su próximo proyecto de construcción o realizar consultas sobre empleos futuros, no dude en completar el formulario de consulta (a continuación) o enviarnos un correo electrónico a ",
    emailLabel: "jotayegroupllc@gmail.com",
    orText: " o de manera directa dando clic al icono de ",
    whatsappLabel: "WhatsApp",
    formTitle: "Formulario de Consulta",
  },
  en: {
    heading: "Contact",
    description:
      "If you’d like to discuss your next construction project or have questions about future employment, please fill out the form below or email us at ",
    emailLabel: "jotayegroupllc@gmail.com",
    orText: " or reach out directly by clicking the ",
    whatsappLabel: "WhatsApp icon",
    formTitle: "Inquiry Form",
  },
};

export default function Contact({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <div className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título de la página */}
        <h2 className="text-4xl font-bold text-center mb-8">{t.heading}</h2>

        {/* Texto introductorio con correo y WhatsApp */}
        <p className="text-gray-700 text-lg mb-6">
          {t.description}
          <a
            href="mailto:jotayegroupllc@gmail.com"
            className="text-orange-600 hover:text-orange-700"
          >
            {t.emailLabel}
          </a>
          {t.orText}
          <a
            href="https://wa.me/13054172681"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-700"
          >
            <FaWhatsapp className="mr-1" /> {t.whatsappLabel}
          </a>
          .
        </p>

        {/* Título del formulario */}
        <h3 className="text-2xl font-semibold text-center mb-4">
          {t.formTitle}
        </h3>

        {/* Componente ContactForm */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ContactForm language={lang} />
        </div>
      </div>
    </div>
  );
}
