import React, { useState } from "react";
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import ServiceModal from "./components/ServiceModal";

const services = [
  {
    title: "Plomería",
    image: "./assets/plomería.jpg",
    description: "Instalación y reparación de sistemas de agua y desagüe.",
  },
  {
    title: "Electricidad",
    image: "./assets/electricidad.jpg",
    description: "Servicios eléctricos residenciales y comerciales.",
  },
  {
    title: "Framing",
    image: "./assets/framing.jpg",
    description: "Estructuras de madera y metal para edificaciones.",
  },
  {
    title: "Drywall",
    image: "./assets/drywall.jpg",
    description: "Instalación y reparación de paneles de yeso.",
  },
  {
    title: "Pintura",
    image: "./assets/pintura.jpg",
    description: "Pintura interior y exterior con acabados profesionales.",
  },
  {
    title: "Finish",
    image: "./assets/finish.jpg",
    description: "Detalles y terminaciones de alta calidad en interiores.",
  },
  {
    title: "Baseboard",
    image: "./assets/baseboard.jpg",
    description: "Instalación de zócalos y molduras decorativas.",
  },
  {
    title: "Demolición",
    image: "./assets/demolición.jpg",
    description: "Demoliciones seguras y limpias para remodelaciones.",
  },
  {
    title: "Pisos",
    image: "./assets/pisos.jpg",
    description: "Instalación de pisos cerámicos, de madera, y más.",
  },
  {
    title: "Baños",
    image: "./assets/baños.jpg",
    description: "Remodelación completa de baños.",
  },
  {
    title: "Cocinas",
    image: "./assets/cocinas.jpg",
    description: "Diseño y remodelación de cocinas modernas.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-[#1e293b] text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 bg-white p-1 rounded" />
            <h1 className="text-lg font-bold">Jotaye Group LLC</h1>
          </div>
          <nav className="space-x-4 hidden md:block">
            <a href="#servicios" className="hover:text-orange-400 transition">Servicios</a>
            <a href="#presupuesto" className="hover:text-orange-400 transition">Estimador</a>
            <a href="#testimonios" className="hover:text-orange-400 transition">Testimonios</a>
            <a href="#reservas" className="hover:text-orange-400 transition">Reservas</a>
            <a href="#faq" className="hover:text-orange-400 transition">FAQ</a>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#servicios" className="block text-orange-300">Servicios</a>
            <a href="#presupuesto" className="block text-orange-300">Estimador</a>
            <a href="#testimonios" className="block text-orange-300">Testimonios</a>
            <a href="#reservas" className="block text-orange-300">Reservas</a>
            <a href="#faq" className="block text-orange-300">FAQ</a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Construcción y Remodelación Profesional</h2>
          <p className="text-gray-600 mb-6">Soluciones completas para transformar tus espacios.</p>
          <a href="#reservas" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">Solicita tu estimado</a>
        </section>

        <section className="py-16 bg-gray-50" id="servicios">
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition-all">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="mt-2 text-sm text-orange-500 hover:underline"
                  >
                    Ver más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}

        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer Promocional" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        </section>
      </main>
    </div>
  );
}
