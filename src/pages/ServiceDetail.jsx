// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceDetail({ language }) {
  const { slug } = useParams();
  const lang = language || "es";
  const item = services.find((s) => s.slug === slug);
  if (!item) return null;

  return (
    <div className="bg-gray-800 text-gray-200">
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-100">
          {lang === "es" ? item.title.es : item.title.en}
        </h2>
        <p className="mb-8 text-gray-300">
          {lang === "es"
            ? item.longDescription.es
            : item.longDescription.en}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {item.gallery.map((src) => (
            <img
              key={src}
              src={src}
              className="w-full h-48 object-cover rounded-lg shadow-lg"
              alt={item.slug}
            />
          ))}
        </div>

        {/* Swiper o carrusel de navegación a otros servicios */}
        <div className="flex justify-center space-x-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className={`px-4 py-2 rounded-full transition ${
                s.slug === slug
                  ? "bg-orange-600 text-white"
                  : "bg-gray-700 hover:bg-gray-600 text-gray-200"
              }`}
            >
              {lang === "es" ? s.title.es : s.title.en}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
