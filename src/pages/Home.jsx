// src/pages/Home.jsx
import React from "react";
import ContactForm from "../components/ContactForm";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";

const mvgoItems = [
  {
    key: "foundation",
    title: {
      es: "Nuestra historia",
      en: "Our story",
    },
    description: {
      es: "Jotaye Group LLC se fundó en 2022 con la misión de ofrecer soluciones de construcción innovadoras en el sur de Florida. Desde entonces, hemos crecido gracias a la confianza y satisfacción de nuestros clientes.",
      en: "Jotaye Group LLC was founded in 2022 with the mission to deliver innovative construction solutions in South Florida. Since then, we have grown on the trust and satisfaction of our clients.",
    },
    video: null,
  },
  {
    key: "mission",
    title: {
      es: "Misión",
      en: "Mission",
    },
    description: {
      es: "Brindar servicios de construcción con los más altos estándares de calidad, garantizando la plena satisfacción de cada cliente. Trabajamos codo a codo para entender sus necesidades y convertirlas en resultados duraderos y estéticamente atractivos.",
      en: "To provide construction services with the highest quality standards, ensuring full client satisfaction in every project. We work side by side to understand their needs and deliver lasting, aesthetically pleasing results.",
    },
    video: "/assets/mission.mov",
  },
  {
    key: "vision",
    title: {
      es: "Visión",
      en: "Vision",
    },
    description: {
      es: "Consolidarnos como la empresa líder en remodelación y construcción residencial en el sur de Florida, ofreciendo soluciones innovadoras, sostenibles y eficientes. Visualizamos un futuro donde cada hogar y negocio disponga de espacios seguros, funcionales y de diseño excepcional.",
      en: "To become the leading residential remodeling and construction company in South Florida, offering innovative, sustainable, and efficient solutions. We envision a future where every home and business boasts safe, functional, and exceptionally designed spaces.",
    },
    video: "/assets/vision.mov",
  },
  {
    key: "goals",
    title: {
      es: "Objetivos",
      en: "Objectives",
    },
    description: {
      es: "Alcanzar la excelencia en cada proyecto, respetando plazos y presupuestos, y asegurando mano de obra calificada y materiales de primera calidad. Nuestro objetivo es superar expectativas y forjar relaciones duraderas con nuestros clientes.",
      en: "To achieve excellence in every project, meeting timelines and budgets, and ensuring skilled labor and top-quality materials. Our aim is to exceed expectations and build long-term client relationships.",
    },
    video: "/assets/goals.mov",
  },
];

const translations = {
  es: {
    contactHeadingLine1: "¿Listo para discutir",
    contactHeadingLine2: "tu próximo proyecto?",
  },
  en: {
    contactHeadingLine1: "Ready to discuss",
    contactHeadingLine2: "your next project?",
  },
};

export default function Home({ language }) {
  const lang = language || "es";
  const t = translations[lang];

  return (
    <div>
      {/* Historia / Misión / Visión / Objetivos */}
      <section className="py-16 bg-gray-800 text-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-100">
            {mvgoItems[0].title[lang]}
          </h2>
          <p className="text-gray-300">{mvgoItems[0].description[lang]}</p>
        </div>
        <div className="max-w-6xl mx-auto px-4 space-y-24">
          {mvgoItems.slice(1).map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.key}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  {item.video && (
                    <video
                      src={item.video}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  )}
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                    {item.title[lang]}
                  </h3>
                  <p className="text-gray-300">{item.description[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonios */}
      <Testimonials language={lang} />

      {/* FAQ */}
      <FAQ language={lang} />

      {/* Llamado a la acción + Formulario */}
      <section className="py-16 bg-gray-700 text-center text-gray-200">
        <h2 className="text-3xl font-bold mb-8 leading-snug text-gray-100">
          {t.contactHeadingLine1}
          <br />
          <span className="text-orange-400">{t.contactHeadingLine2}</span>
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm language={lang} />
        </div>
      </section>
    </div>
  );
}
