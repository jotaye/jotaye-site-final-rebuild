// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import services from "../data/services";

export default function Services({ language }) {
  const lang = language || "es";

  return (
    <div>
      {/* Hero idéntico al de Home */}
      <Hero />

      {/* Lista de servicios en zig-zag */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center mb-12">
          <h2 className="text-4xl font-bold">
            {lang === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>
        </div>

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
                {/* Video o imagen del servicio */}
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

                {/* Texto con título, descripción breve y botón “Leer más” */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title[lang]}
                  </h3>
                  <p className="text-gray-700 mb-6">
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

      {/* Ya no hay carrusel aquí, pues se mostrará en la página de detalle */}
    </div>
  );
}
