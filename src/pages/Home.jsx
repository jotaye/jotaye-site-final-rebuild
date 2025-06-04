// src/pages/Home.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

const mvgoItems = [
  {
    key: "foundation",
    title: {
      es: "Nuestra Historia",
      en: "Our History",
    },
    description: {
      es: "Jotaye Group LLC se fundó en 2015 con la misión de ofrecer soluciones de construcción innovadoras en el Sur de la Florida. Desde aquel año, hemos crecido basados en la confianza y satisfacción de nuestros clientes.",
      en: "Jotaye Group LLC was founded in 2015 with the mission to deliver innovative construction solutions in South Florida. Since then, we have grown on the trust and satisfaction of our clients.",
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
      es: "Brindar servicios de construcción con altos estándares de calidad, asegurando la satisfacción completa de cada cliente en cada proyecto. Trabajamos codo a codo con cada cliente para entender sus necesidades exactas y traducirlas en resultados duraderos y estéticamente atractivos.",
      en: "To provide construction services with the highest quality standards, ensuring full client satisfaction in every project. We work side by side with each client to understand their exact needs and translate them into lasting and aesthetically pleasing results.",
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
      es: "Convertirnos en la empresa líder en remodelación y construcción residencial en South Florida, ofreciendo soluciones innovadoras, sostenibles y eficientes. Visualizamos un futuro en el que cada hogar y negocio cuente con espacios seguros, funcionales y de diseño excepcional.",
      en: "To become the leading residential remodeling and construction company in South Florida, offering innovative, sustainable, and efficient solutions. We envision a future where every home and business boasts safe, functional, and exceptionally designed spaces.",
    },
    video: "/assets/vision.mov",
  },
  {
    key: "goals",
    title: {
      es: "Objetivos",
      en: "Goals",
    },
    description: {
      es: "Alcanzar la excelencia en cada proyecto, cumpliendo con plazos y presupuestos acordados, garantizando mano de obra calificada y materiales de primera calidad. Buscamos superar expectativas y construir relaciones de largo plazo con nuestros clientes.",
      en: "To achieve excellence in every project, meeting agreed timelines and budgets, ensuring qualified labor and top-quality materials. We aim to exceed expectations and build long-term relationships with our clients.",
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
      {/* Sección: Historia, Misión, Visión, Objetivos (zig-zag) */}
      <section className="py-16 bg-gray-100">
        {/* Historia centralizada */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            {lang === "es" ? mvgoItems[0].title.es : mvgoItems[0].title.en}
          </h2>
          <p className="text-gray-700">
            {lang === "es"
              ? mvgoItems[0].description.es
              : mvgoItems[0].description.en}
          </p>
        </div>

        {/* Bloques de Misión, Visión y Objetivos */}
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

      {/* Llamado a la acción + Formulario (texto en dos líneas) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8 leading-snug">
          {t.contactHeadingLine1}
          <br />
          <span className="text-orange-600">{t.contactHeadingLine2}</span>
        </h2>
        <div className="max-w-3xl mx-auto px-4">
          <ContactForm language={lang} />
        </div>
      </section>
    </div>
  );
}
