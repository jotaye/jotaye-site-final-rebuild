// src/pages/Home.jsx
import React from "react";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";

const mvgoItems = [
  {
    key: "foundation",
    title: {
      es: "Nuestra Historia",
      en: "Our History"
    },
    description: {
      es: "Jotaye Group LLC se fundó en 2015 con la misión de ofrecer soluciones de construcción innovadoras en el Sur de la Florida. Desde aquel año, hemos crecido basados en la confianza y satisfacción de nuestros clientes.",
      en: "Jotaye Group LLC was founded in 2015 with the mission to deliver innovative construction solutions in South Florida. Since then, we have grown on the trust and satisfaction of our clients."
    },
    // Para el ítem “foundation” no hay vídeo, se mostrará solo texto centrado.
    video: null,
  },
  {
    key: "mission",
    title: {
      es: "Misión",
      en: "Mission"
    },
    description: {
      es: "Brindar servicios de construcción con altos estándares de calidad, asegurando la satisfacción completa de cada cliente en cada proyecto.",
      en: "To provide construction services with the highest quality standards, ensuring full client satisfaction in every project."
    },
    // Vídeo de Misión (coloca el archivo exacto en public/assets/)
    video: "/assets/mission.mov",
  },
  {
    key: "vision",
    title: {
      es: "Visión",
      en: "Vision"
    },
    description: {
      es: "Convertirnos en la empresa líder en remodelación y construcción residencial en South Florida, gracias a nuestra innovación y ética de trabajo.",
      en: "To become the leading residential remodeling and construction company in South Florida, thanks to our innovation and work ethic."
    },
    // Vídeo de Visión
    video: "/assets/vision.mov",
  },
  {
    key: "goals",
    title: {
      es: "Objetivos",
      en: "Goals"
    },
    description: {
      es: "Alcanzar la excelencia en cada proyecto, cumpliendo plazos, presupuestos y brindando resultados duraderos que superen las expectativas.",
      en: "To achieve excellence in every project, meeting deadlines, budgets, and delivering lasting results that exceed expectations."
    },
    // Vídeo de Objetivos
    video: "/assets/goals.mov",
  },
];

const translations = {
  es: {
    contactHeading: "¿Listo para discutir tu próximo proyecto?",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Correo",
  },
  en: {
    contactHeading: "Ready to discuss your next project?",
    contactWhatsapp: "WhatsApp",
    contactEmail: "Email",
  },
};

export default function Home({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <div>
      {/* --- Hero con vídeo de fondo --- */}
      <Hero />

      {/* --- Misión – Visión – Objetivos en zig-zag --- */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          {/* Solo el primer item “foundation” va centrado, sin zig-zag */}
          <h2 className="text-3xl font-bold mb-4">
            {lang === "es" ? mvgoItems[0].title.es : mvgoItems[0].title.en}
          </h2>
          <p className="text-gray-700">
            {lang === "es"
              ? mvgoItems[0].description.es
              : mvgoItems[0].description.en}
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-24">
          {mvgoItems.slice(1).map((item, idx) => {
            const isEven = idx % 2 === 0; // 0,1,2 sobre slice
            return (
              <div
                key={item.key}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Columna de vídeo */}
                <div className="md:w-1/2">
                  {item.video ? (
                    <video
                      src={item.video}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : null}
                </div>

                {/* Columna de texto */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4">
                    {lang === "es" ? item.title.es : item.title.en}
                  </h3>
                  <p className="text-gray-700">
                    {lang === "es"
                      ? item.description.es
                      : item.description.en}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* --- Llamado a la acción con formulario debajo --- */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">{t.contactHeading}</h2>
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm language={lang} />
        </div>
      </section>

      {/* --- Pie de página con contacto mínimo (opcional si Footer ya existe) --- */}
      <section className="py-8 bg-gray-100 text-center">
        <div className="flex justify-center items-center gap-6 text-2xl">
          <a
            href="https://wa.me/13054172681"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:jotayegroupllc@gmail.com"
            className="text-blue-500"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://instagram.com/jotayegroup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/JotayeGroupLLC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </section>
    </div>
  );
}
