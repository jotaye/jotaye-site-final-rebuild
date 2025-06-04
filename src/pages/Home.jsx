// src/pages/Home.jsx
import React from "react";
import Hero from "../components/Hero";
import BookForm from "../components/BookForm";       // Ejemplo: formulario “Request a Visit”
import ContactForm from "../components/ContactForm"; // Formulario de contacto real
import MissionVision from "../components/MissionVision"; // Zig-zag Misión/Visión/Objetivos (si lo tienes)

export default function Home({ language }) {
  const lang = language === "en" ? "en" : "es";

  // Frase para el primer formulario (en Home), en dos líneas:
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

  // Frase para el segundo formulario (Contacto), en dos líneas:
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
      {/* ──────────────────────────────────────── */}
      {/* Hero (vídeo o banner) que se mostrará solo en “/” */}
      {/* ──────────────────────────────────────── */}
      <Hero language={lang} />

      {/* ──────────────────────────────────────── */}
      {/* Sección de Misión / Visión / Objetivos (zig-zag) */}
      {/* Si usas un componente que ya tienes para esto, solo impórtalo y muéstralo aquí */}
      {/* ──────────────────────────────────────── */}
      <MissionVision language={lang} />

      {/*
        ────────────────────────────────────────────────
        Primera sección de formulario (ej. “Request a Visit”)
        con texto en dos líneas justo arriba.
        Aquí usamos BookForm como ejemplo. Si tu formulario se llama diferente,
        reemplaza “BookForm” por el componente que corresponda.
      ──────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold leading-snug">
            {textBookForm[lang]}
          </h2>
        </div>
        <div className="mt-8">
          {/* Aquí asumo que BookForm es el primer formulario que ya tenías en Home */}
          <BookForm language={lang} />
        </div>
      </section>

      {/*
        ────────────────────────────────────────────────
        Segunda sección de formulario: “Contacto”
        con su texto en doble línea justo arriba.
      ──────────────────────────────────────────────── */}
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
