import React, { useState } from "react";
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import ServiceModal from "./components/ServiceModal";

const services = [
  { title: "Plomería", image: "./assets/plomería.jpg", description: "Instalaciones y reparaciones de tuberías, grifería y más." },
  { title: "Electricidad", image: "./assets/electricidad.jpg", description: "Instalaciones eléctricas residenciales y comerciales seguras." },
  { title: "Framing", image: "./assets/framing.jpg", description: "Estructuras sólidas para muros, techos y ampliaciones." },
  { title: "Drywall", image: "./assets/drywall.jpg", description: "Montaje de paredes y cielos rasos en drywall con acabados finos." },
  { title: "Pintura", image: "./assets/pintura.jpg", description: "Acabados profesionales en interiores y exteriores." },
  { title: "Finish", image: "./assets/finish.jpg", description: "Detalles finales de alta calidad en construcción y remodelación." },
  { title: "Baseboard", image: "./assets/baseboard.jpg", description: "Instalación de zócalos modernos y decorativos." },
  { title: "Demolición", image: "./assets/demolición.jpg", description: "Remoción eficiente y segura de estructuras." },
  { title: "Pisos", image: "./assets/pisos.jpg", description: "Instalación de baldosas, madera y vinilo." },
  { title: "Baños", image: "./assets/baños.jpg", description: "Remodelación completa de baños modernos y funcionales." },
  { title: "Cocinas", image: "./assets/cocinas.jpg", description: "Cocinas personalizadas y funcionales con diseño de vanguardia." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#1e293b] text-white sticky top-0 z-50 shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 bg-white p-1 rounded" />
            <h1 className="text-lg font-bold">Jotaye Group LLC</h1>
          </div>
          <nav className="space-x-4 hidden md:block">
            <a href="#servicios" className="hover:text-orange-400">Servicios</a>
            <a href="#formulario" className="hover:text-orange-400">Cotización</a>
            <a href="#galeria" className="hover:text-orange-400">Galería</a>
            <a href="#faq" className="hover:text-orange-400">FAQ</a>
            <a href="#contacto" className="hover:text-orange-400">Contacto</a>
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
            <a href="#formulario" className="block text-orange-300">Cotización</a>
            <a href="#galeria" className="block text-orange-300">Galería</a>
            <a href="#faq" className="block text-orange-300">FAQ</a>
            <a href="#contacto" className="block text-orange-300">Contacto</a>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Bienvenida */}
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Construcción y Remodelación Profesional</h2>
          <p className="text-gray-600 mb-6">Transformamos espacios con calidad, puntualidad y compromiso.</p>
          <a href="#formulario" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">Solicita tu cotización</a>
        </section>

        {/* Servicios */}
        <section id="servicios" className="py-16 bg-gray-50">
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition-all cursor-pointer" onClick={() => setSelectedService(service)}>
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-center mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 text-center">Haz clic para más información</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal Servicio */}
        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}

        {/* Flyer */}
        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer" className="max-w-3xl mx-auto shadow rounded-lg" />
        </section>

        {/* Formulario */}
        <section id="formulario" className="py-16 bg-gray-100">
          <h3 className="text-3xl font-bold text-center mb-8">Solicita tu Cotización</h3>
          <form action="https://formsubmit.co/jotayegroupllc@gmail.com" method="POST" className="max-w-xl mx-auto space-y-4">
            <input type="text" name="nombre" required className="w-full border px-3 py-2 rounded" placeholder="Nombre" />
            <input type="email" name="email" required className="w-full border px-3 py-2 rounded" placeholder="Correo" />
            <input type="tel" name="telefono" className="w-full border px-3 py-2 rounded" placeholder="Teléfono" />
            <textarea name="mensaje" required rows="4" className="w-full border px-3 py-2 rounded" placeholder="Describe tu proyecto o necesidad..."></textarea>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Enviar solicitud</button>
          </form>
        </section>
      </main>
    </div>
  );
}
