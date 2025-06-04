// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import services from "../data/services";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServiceDetail({ language }) {
  const { slug } = useParams();
  const lang = language || "es";

  const service = services.find((s) => s.slug === slug);
  if (!service) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-semibold">
          {lang === "es" ? "Servicio no encontrado" : "Service not found"}
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
    <div className="bg-white">
      {/* Detalle del servicio */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">{service.title[lang]}</h2>

          {/* Video o imagen destacada */}
          <div className="mb-8">
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

          {/* Descripción larga */}
          <div className="prose prose-lg mb-12">
            {service.longDescription[lang]
              .split("\n")
              .map((line, i) =>
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

      {/* Carrusel “Otros Servicios” debajo del detalle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-8">
            {lang === "es" ? "Otros Servicios" : "Other Services"}
          </h3>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services
              .filter((s) => s.slug !== slug)
              .map((other) => (
                <SwiperSlide key={other.slug}>
                  <Link to={`/services/${other.slug}`}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                      <img
                        src={other.image}
                        alt={other.title[lang]}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4 text-center">
                        <h4 className="text-lg font-semibold">
                          {other.title[lang]}
                        </h4>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
