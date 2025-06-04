// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import BookForm from "../components/BookForm";
import ContactForm from "../components/ContactForm";

export default function Home({ language }) {
  const lang = language === "en" ? "en" : "es";

  // Texto en dos líneas para BookForm
  const textBookForm = {
    es: (
      <>
        Solicita tu visita
        <br />
        con un solo clic
      </>
    ),
    en: (
      <>
        Request your visit
        <br />
        with a single click
      </>
    ),
  };

  // Texto en dos líneas para ContactForm
  const textContactForm = {
    es: (
      <>
        ¿Listo para discutir
        <br /> tu próximo proyecto?{" "}
        <span className="text-orange-600">Contáctanos ahora</span>
      </>
    ),
    en: (
      <>
        Ready to discuss
        <br /> your next project?{" "}
        <span className="text-orange-600">Contact us now</span>
      </>
    ),
  };

  return (
    <>
      {/* Hero (solo aparece en Home) */}
      <Hero language={lang} />

      {/* Primera sección: “BookForm” */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold leading-snug">
            {textBookForm[lang]}
          </h2>
        </div>
        <div className="mt-8">
          <BookForm language={lang} />
        </div>
      </section>

      {/* Segunda sección: “ContactForm” */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 mb-8">
          <h2 className="text-3xl font-bold leading-snug">
            {textContactForm[lang]}
          </h2>
        </div>
        <div className="mt-8">
          <ContactForm language={lang} />
        </div>
      </section>
    </>
  );
}
