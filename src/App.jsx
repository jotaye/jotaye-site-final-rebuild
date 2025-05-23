import React, { useState, useEffect } from "react";
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import ServiceModal from "./components/ServiceModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/682fe87c49aeec190d3b075e/1irti89vo";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    document.body.appendChild(s1);
  }, []);

  const services = [
    { title: "Plomería", image: "./assets/plomería.jpg", description: "Instalaciones y reparaciones de tuberías." },
    { title: "Electricidad", image: "./assets/electricidad.jpg", description: "Instalaciones eléctricas residenciales y comerciales." },
    { title: "Framing", image: "./assets/framing.jpg", description: "Estructuras sólidas para muros y techos." },
    { title: "Drywall", image: "./assets/drywall.jpg", description: "Instalación y acabado de paneles de yeso." },
    { title: "Pintura", image: "./assets/pintura.jpg", description: "Aplicación de pintura interior y exterior." },
    { title: "Finish", image: "./assets/finish.jpg", description: "Acabados profesionales para detalles finos." },
    { title: "Baseboard", image: "./assets/baseboard.jpg", description: "Instalación de zócalos decorativos." },
    { title: "Demolición", image: "./assets/demolición.jpg", description: "Demoliciones controladas y limpias." },
    { title: "Pisos", image: "./assets/pisos.jpg", description: "Instalación de cerámica, porcelanato y vinil." },
    { title: "Baños", image: "./assets/baños.jpg", description: "Remodelación completa de baños." },
    { title: "Cocinas", image: "./assets/cocinas.jpg", description: "Diseño e instalación de cocinas modernas." },
  ];

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
              <div key={i} className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition-all cursor-pointer" onClick={() => setSelectedService(service)}>
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold mb-1">{service.title}</h4>
                  <p className="text-sm text-gray-500">Ver detalles</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer Promocional" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        </section>

        <section className="py-16" id="faq">
          <h3 className="text-3xl font-bold text-center mb-8">Misión, Visión y Objetivos</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Misión</h4>
              <p className="text-sm text-gray-600">Brindar servicios de construcción con altos estándares de calidad.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Visión</h4>
              <p className="text-sm text-gray-600">Ser líderes en remodelación y construcción en South Florida.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Objetivos</h4>
              <p className="text-sm text-gray-600">Cumplir expectativas, plazos y calidad en cada proyecto.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e293b] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jotaye Group LLC</p>
          <div className="flex gap-4 mt-2 md:mt-0 text-lg">
            <a href="https://wa.me/13054172681" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="mailto:jotayegroupllc@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
            <a href="https://instagram.com" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook /></a>
          </div>
        </div>
      </footer>

      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
}

export default App;
