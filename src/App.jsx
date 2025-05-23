import React, { useState } from "react";
import ServiceModal from "./components/ServiceModal";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

// Importación de imágenes
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import plumbingImg from "./assets/plomería.jpg";
import electricImg from "./assets/electricidad.jpg";
import framingImg from "./assets/framing.jpg";
import drywallImg from "./assets/drywall.jpg";
import paintingImg from "./assets/pintura.jpg";
import finishImg from "./assets/finish.jpg";
import baseboardImg from "./assets/baseboard.jpg";
import demolitionImg from "./assets/demolición.jpg";
import flooringImg from "./assets/pisos.jpg";
import bathroomImg from "./assets/baños.jpg";
import kitchenImg from "./assets/cocinas.jpg";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { title: "Plomería", image: plumbingImg, description: "Instalaciones y reparaciones de tuberías." },
    { title: "Electricidad", image: electricImg, description: "Instalaciones eléctricas residenciales y comerciales." },
    { title: "Framing", image: framingImg, description: "Estructuras sólidas para muros y techos." },
    { title: "Drywall", image: drywallImg, description: "Instalación y reparación de paneles de yeso." },
    { title: "Pintura", image: paintingImg, description: "Pintura interior y exterior con acabados profesionales." },
    { title: "Finish", image: finishImg, description: "Detalles finales para un acabado perfecto." },
    { title: "Baseboard", image: baseboardImg, description: "Instalación de zócalos decorativos." },
    { title: "Demolición", image: demolitionImg, description: "Remoción segura y eficiente de estructuras." },
    { title: "Pisos", image: flooringImg, description: "Instalación de pisos de madera, cerámica y más." },
    { title: "Baños", image: bathroomImg, description: "Remodelación y construcción de baños modernos." },
    { title: "Cocinas", image: kitchenImg, description: "Diseño e instalación de cocinas funcionales." }
  ];

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-[#1e293b] text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-10 bg-white p-1 rounded" />
            <h1 className="text-lg font-bold">Jotaye Group LLC</h1>
          </div>
          <nav className="space-x-4 hidden md:block">
            <a href="#servicios" className="hover:text-orange-400 transition">Servicios</a>
            <a href="#presupuesto" className="hover:text-orange-400 transition">Estimador</a>
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
            <a href="#reservas" className="block text-orange-300">Reservas</a>
            <a href="#faq" className="block text-orange-300">FAQ</a>
          </div>
        )}
      </header>

      {/* Servicios */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section id="servicios" className="py-16">
          <h3 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow hover:shadow-md overflow-hidden transition-all cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-center mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 text-center">Haz clic para más información.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedService && (
          <ServiceModal
            service={selectedService}
            onClose={() => setSelectedService(null)}
          />
        )}

        {/* Flyer */}
        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer Promocional" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1e293b] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Jotaye Group LLC</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="https://wa.me/13054172681" className="hover:text-green-400"><FaWhatsapp /></a>
            <a href="mailto:jotayegroupllc@gmail.com" className="hover:text-blue-400"><FaEnvelope /></a>
            <a href="https://instagram.com" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://facebook.com" className="hover:text-blue-500"><FaFacebook /></a>
          </div>
        </div>
      </footer>

      {/* Tawk.to Chat */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/682fe87c49aeec190d3b075e/1irti89vo';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
          })();
        `,
        }}
      />
    </div>
  );
}
