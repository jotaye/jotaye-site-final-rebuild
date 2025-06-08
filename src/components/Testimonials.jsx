// src/components/Testimonials.jsx
import React from "react";

const testimonials = [
  {
    name: "María González",
    role: "Cliente residencial",
    text: {
      es: "El equipo fue puntual, profesional y el resultado fue espectacular. ¡Muy recomendados!",
      en: "The team was punctual, professional, and the result was spectacular. Highly recommended!",
    },
    avatar: "/assets/testimonial-maria.jpg",
  },
  {
    name: "John Smith",
    role: "Propietario comercial",
    text: {
      es: "Transformaron por completo nuestra oficina. Calidad y cumplimiento de plazos impecables.",
      en: "They completely transformed our office. Quality and deadlines were impeccably met.",
    },
    avatar: "/assets/testimonial-john.jpg",
  },
  {
    name: "Lucía Pérez",
    role: "Cliente residencial",
    text: {
      es: "Excelente servicio, atención al detalle y gran comunicación durante todo el proyecto.",
      en: "Excellent service, attention to detail, and great communication throughout the project.",
    },
    avatar: "/assets/testimonial-lucia.jpg",
  },
];

export default function Testimonials({ language }) {
  const lang = language || "es";

  return (
    <section className="py-16 bg-gray-800 text-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-100">
          {lang === "es" ? "Testimonios de Clientes" : "Client Testimonials"}
        </h2>
      </div>
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-gray-700 rounded-lg p-6 flex flex-col items-center shadow-lg"
          >
            <img
              src={t.avatar}
              alt={t.name}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className="italic text-gray-300 mb-4">“{t.text[lang]}”</p>
            <p className="font-semibold text-gray-100">{t.name}</p>
            <p className="text-sm text-gray-400">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
