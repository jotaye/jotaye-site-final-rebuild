// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import Hero from "../components/Hero";

const translations = {
  en: {
    mission: "Mission",
    missionText: "Provide high-standard construction services.",
    vision: "Vision",
    visionText: "Be leaders in remodeling and construction in South Florida.",
    goals: "Goals",
    goalsText: "Meet expectations, deadlines, and quality in every project.",
    contactTitle: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    followUs: "Follow Us",
    contactSectionDesc: "Quick Contact",
  },
  es: {
    mission: "Misión",
    missionText: "Brindar servicios de construcción con altos estándares de calidad.",
    vision: "Visión",
    visionText: "Ser líderes en remodelación y construcción en South Florida.",
    goals: "Objetivos",
    goalsText: "Cumplir expectativas, plazos y calidad en cada proyecto.",
    contactTitle: "Contacto",
    whatsapp: "WhatsApp",
    email: "Correo",
    followUs: "Síguenos",
    contactSectionDesc: "Contacto Rápido",
  },
};

export default function Home({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <>
      {/* Hero con vídeo de fondo */}
      <Hero />

      {/* Misión – Visión – Objetivos */}
      <section className="py-16 bg-gray-100 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 px-4">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">{t.mission}</h4>
            <p className="text-gray-600">{t.missionText}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">{t.vision}</h4>
            <p className="text-gray-600">{t.visionText}</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h4 className="text-xl font-semibold mb-2">{t.goals}</h4>
            <p className="text-gray-600">{t.goalsText}</p>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Rápida (botón a /services) */}
      <section className="py-12 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">
          {lang === "es" ? "Nuestros Servicios" : "Our Services"}
        </h3>
        <Link
          to="/services"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
        >
          {lang === "es" ? "Ver Servicios" : "View Services"}
        </Link>
      </section>

      {/* Sección de Contacto Rápido */}
      <section id="contacto" className="py-16 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-4">{t.contactSectionDesc}</h3>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/13054172681"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded shadow inline-flex items-center"
          >
            <FaWhatsapp className="mr-2" /> {t.whatsapp}
          </a>
          <a
            href="mailto:jotayegroupllc@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded shadow inline-flex items-center"
          >
            <FaEnvelope className="mr-2" /> {t.email}
          </a>
          <div className="flex items-center gap-6 text-2xl mt-6">
            <a
              href="https://instagram.com/jotayegroup"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/JotayeGroupLLC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
