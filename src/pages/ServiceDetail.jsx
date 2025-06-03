// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import services from "../data/services";

export default function ServiceDetail({ language }) {
  const { slug } = useParams();
  const lang = language || "es";

  // Buscar el servicio por slug
  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold">
          {lang === "es"
            ? "Servicio no encontrado"
            : "Service not found"}
        </h2>
        <Link
          to="/services"
          className="mt-6 inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full"
        >
          {lang === "es" ? "Volver a Servicios" : "Back to Services"}
        </Link>
      </div>
    );
  }

  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        {/* Título */}
        <h2 className="text-3xl font-bold mb-6">
          {service.title[lang]}
        </h2>

        {/* Descripción larga */}
        <div className="prose prose-lg mb-12">
          {service.longDescription[lang].split("\n").map((line, i) =>
            line.trim() ? <p key={i}>{line.trim()}</p> : <br key={i} />
          )}
        </div>

        {/* Galería de imágenes de trabajos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {service.gallery.map((imgUrl, i) => (
            <img
              key={i}
              src={imgUrl}
              alt={`${service.title[lang]} ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow"
            />
          ))}
        </div>

        {/* Botón “Volver” */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-full transition"
          >
            {lang === "es" ? "Volver a Servicios" : "Back to Services"}
          </Link>
        </div>
      </div>
    </section>
  );
}
