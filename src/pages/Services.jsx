// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import services from "../data/services";

export default function Services({ language }) {
  const lang = language || "es";

  return (
    <div className="bg-gray-800 text-gray-200">
      <section className="py-16 max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {lang === "es" ? "Nuestros Servicios" : "Our Services"}
        </h2>

        <div className="space-y-24">
          {services.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={item.slug}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2">
                  <video
                    src={item.video}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-100">
                    {lang === "es" ? item.title.es : item.title.en}
                  </h3>
                  <p className="mb-6 text-gray-300">
                    {lang === "es"
                      ? item.description.es
                      : item.description.en}
                  </p>
                  <Link
                    to={`/services/${item.slug}`}
                    className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition"
                  >
                    {lang === "es" ? "Leer más" : "Read more"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
