// src/pages/Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import services from "../data/services";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services({ language }) {
  const lang = language || "es";

  return (
    <>
      {/* Hero en la parte superior de la página de Services */}
      <Hero />

      {/* Sección zig-zag con fondo oscuro */}
      <section className="bg-gray-900 text-white">
        {/* Título de Services */}
        <div className="py-16 text-center">
          <h2 className="text-4xl font-bold">
            {lang === "es" ? "Nuestros Servicios" : "Our Services"}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 space-y-24 pb-16">
          {services.map((service, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={service.slug}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Imagen o video del servicio */}
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

                {/* Texto con título, descripción breve y botón "Leer más" */}
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

      {/* Carrusel/Swiper de todos los servicios, antes del Footer */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            {lang === "es" ? "Explora Más Servicios" : "Explore More Services"}
          </h2>
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
            {services.map((service) => (
              <SwiperSlide key={service.slug}>
                <Link to={`/services/${service.slug}`}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                    <img
                      src={service.image}
                      alt={service.title[lang]}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h4 className="text-lg font-semibold">
                        {service.title[lang]}
                      </h4>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
