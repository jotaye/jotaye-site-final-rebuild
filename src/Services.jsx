
import React, { useState } from "react";

const serviceList = [
  {
    title: "Plomería",
    image: "./assets/plomería.jpg",
    description: "Instalaciones, reparaciones y mantenimiento de sistemas hidráulicos y sanitarios.",
  },
  {
    title: "Electricidad",
    image: "./assets/electricidad.jpg",
    description: "Instalación y mantenimiento de redes eléctricas para proyectos residenciales y comerciales.",
  },
  {
    title: "Framing",
    image: "./assets/framing.jpg",
    description: "Estructuración profesional con materiales resistentes para soporte de edificaciones.",
  },
  {
    title: "Drywall",
    image: "./assets/drywall.jpg",
    description: "Montaje de tabiques y techos con acabados lisos y duraderos.",
  },
  {
    title: "Pintura",
    image: "./assets/pintura.jpg",
    description: "Acabados decorativos y protectores para interiores y exteriores.",
  },
  {
    title: "Finish",
    image: "./assets/finish.jpg",
    description: "Detalles finales y remates estéticos de calidad superior.",
  },
  {
    title: "Baseboard",
    image: "./assets/baseboard.jpg",
    description: "Instalación de molduras de zócalo para un acabado elegante.",
  },
  {
    title: "Demolición",
    image: "./assets/demolición.jpg",
    description: "Remoción segura y eficiente de estructuras o elementos interiores.",
  },
  {
    title: "Pisos",
    image: "./assets/pisos.jpg",
    description: "Colocación de pisos cerámicos, vinílicos o de madera.",
  },
  {
    title: "Baños",
    image: "./assets/baños.jpg",
    description: "Diseño y remodelación integral de baños modernos y funcionales.",
  },
  {
    title: "Cocinas",
    image: "./assets/cocinas.jpg",
    description: "Renovación de cocinas con diseño personalizado y acabados premium.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="servicios">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {serviceList.map((service, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden cursor-pointer transition-all"
            onClick={() => setSelected(service)}>
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <div className="bg-white max-w-md mx-auto rounded-xl shadow-lg overflow-hidden" onClick={e => e.stopPropagation()}>
            <img src={selected.image} alt={selected.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
              <p className="text-gray-600 text-sm">{selected.description}</p>
              <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600" onClick={() => setSelected(null)}>Cerrar</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
