// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services";

export default function Services({ language }) {
  const lang = language || "es"; // idioma por defecto

  return (
    <section className="bg-gray-900 text-white">
      {/* Título con fondo oscuro */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold">{
          lang === "es" ? "Nuestros Servicios" : "Our Services"
        }</h2>
      </div>

      {/* Listado de servicios en zigzag */}
      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={service.slug}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Imagen (o vídeo) */}
              <div className="md:w-1/2">
                {service.video ? (
                  <video
                    src={service.video}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={service.image}
                    alt={service.title[lang]}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                )}
              </div>

              {/* Texto: título, descripción breve y botón */}
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">
                  {service.title[lang]}
                </h3>
                <p className="mb-6 text-gray-300">
                  {service.description[lang]}
                </p>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 rounded-full font-medium"
                >
                  {lang === "es" ? "Leer más" : "Read more"}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
