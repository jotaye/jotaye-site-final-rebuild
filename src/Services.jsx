import React, { useState } from "react";

import plomeriaImg from "./assets/plomería.jpg";
import electricidadImg from "./assets/electricidad.jpg";
import framingImg from "./assets/framing.jpg";
import drywallImg from "./assets/drywall.jpg";
import pinturaImg from "./assets/pintura.jpg";
import finishImg from "./assets/finish.jpg";
import baseboardImg from "./assets/baseboard.jpg";
import demolicionImg from "./assets/demolición.jpg";
import pisosImg from "./assets/pisos.jpg";
import banosImg from "./assets/baños.jpg";
import cocinasImg from "./assets/cocinas.jpg";

const serviceList = [
  { title: "Plomería", image: plomeriaImg, description: "Instalaciones y mantenimiento de sistemas hidráulicos." },
  { title: "Electricidad", image: electricidadImg, description: "Redes eléctricas confiables y seguras." },
  { title: "Framing", image: framingImg, description: "Estructuras firmes y funcionales." },
  { title: "Drywall", image: drywallImg, description: "Instalación profesional de muros y cielos rasos." },
  { title: "Pintura", image: pinturaImg, description: "Acabados duraderos y estéticos." },
  { title: "Finish", image: finishImg, description: "Detalles finales que marcan la diferencia." },
  { title: "Baseboard", image: baseboardImg, description: "Zócalos decorativos y de protección." },
  { title: "Demolición", image: demolicionImg, description: "Demolición eficiente y segura." },
  { title: "Pisos", image: pisosImg, description: "Instalación de pisos de todo tipo." },
  { title: "Baños", image: banosImg, description: "Remodelación completa de baños." },
  { title: "Cocinas", image: cocinasImg, description: "Cocinas personalizadas y funcionales." }
];

export default function Services() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-16 bg-gray-50" id="servicios">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {serviceList.map((service, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden cursor-pointer transition-all"
            onClick={() => setSelected(service)}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-semibold">{service.title}</h4>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white max-w-md mx-auto rounded-xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold mb-2">{selected.title}</h3>
              <p className="text-gray-600 text-sm">{selected.description}</p>
              <button
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
                onClick={() => setSelected(null)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
