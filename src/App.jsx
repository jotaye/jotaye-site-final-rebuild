import React, { useEffect, useState } from "react";
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaEnvelope, FaFacebook } from "react-icons/fa";
import ServiceModal from "./components/ServiceModal";

const services = [
  { title: "Plomería", image: "./assets/plomería.jpg", description: "Instalaciones y reparaciones de tuberías." },
  { title: "Electricidad", image: "./assets/electricidad.jpg", description: "Instalaciones eléctricas residenciales y comerciales." },
  { title: "Framing", image: "./assets/framing.jpg", description: "Estructuras sólidas para muros y techos." },
  { title: "Drywall", image: "./assets/drywall.jpg", description: "Paredes y cielos rasos con acabados finos." },
  { title: "Pintura", image: "./assets/pintura.jpg", description: "Pintura profesional en interiores y exteriores." },
  { title: "Finish", image: "./assets/finish.jpg", description: "Detalles finales de alta calidad." },
  { title: "Baseboard", image: "./assets/baseboard.jpg", description: "Instalación de zócalos decorativos." },
  { title: "Demolición", image: "./assets/demolición.jpg", description: "Remoción segura de estructuras." },
  { title: "Pisos", image: "./assets/pisos.jpg", description: "Instalación de baldosas, madera y vinilo." },
  { title: "Baños", image: "./assets/baños.jpg", description: "Remodelación de baños modernos." },
  { title: "Cocinas", image: "./assets/cocinas.jpg", description: "Diseño y renovación de cocinas completas." },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // 🧠 Cargar el script de Tawk.to una vez
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/682fe87c49aeec190d3b075e/1irti89vo";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Construcción y Remodelación Profesional</h2>
          <p className="text-gray-600 mb-6">Transformamos espacios con calidad y compromiso.</p>
          <a href="#formulario" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">Solicita tu cotización</a>
        </section>

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

        {selectedService && (
          <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
        )}

        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer" className="max-w-3xl mx-auto shadow rounded-lg" />
        </section>

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

      <footer id="contacto" className="bg-[#1e293b] text-white py-6">
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
    </div>
  );
}
