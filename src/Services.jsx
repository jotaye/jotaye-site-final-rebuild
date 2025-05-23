
import React from "react";

const services = [
  { title: "Plomería", image: "https://source.unsplash.com/400x300/?plumbing" },
  { title: "Electricidad", image: "https://source.unsplash.com/400x300/?electrician" },
  { title: "Framing", image: "https://source.unsplash.com/400x300/?framing" },
  { title: "Drywall", image: "https://source.unsplash.com/400x300/?drywall" },
  { title: "Pintura", image: "https://source.unsplash.com/400x300/?painting" },
  { title: "Finish", image: "https://source.unsplash.com/400x300/?interior,design" },
  { title: "Baseboard", image: "https://source.unsplash.com/400x300/?floor,trim" },
  { title: "Demolición", image: "https://source.unsplash.com/400x300/?demolition" },
  { title: "Baños", image: "https://source.unsplash.com/400x300/?bathroom,remodel" },
  { title: "Cocinas", image: "https://source.unsplash.com/400x300/?kitchen,remodel" },
  { title: "Pisos", image: "https://source.unsplash.com/400x300/?flooring" },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50" id="servicios">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow hover:shadow-md overflow-hidden transition">
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center text-orange-600 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 text-center">Servicio profesional con materiales de calidad y tiempos garantizados.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
