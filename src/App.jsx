// src/App.jsx

import React, { useState } from "react";
import "./MainApp.css";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import { FiMenu } from "react-icons/fi"; // Ícono hamburguesa
import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import services from "./data/services";

// Asegúrate de tener imágenes de construcción en src/assets/,
// por ejemplo: construcción1.jpg, construcción2.jpg, etc.
// En este ejemplo usaré: construcción1.jpg y construcción2.jpg (añádelas a src/assets/)
import construccion1 from "./assets/construccion1.jpg";
import construccion2 from "./assets/construccion2.jpg";

const translations = {
  en: {
    motto: "We build spaces and strengthen your trust...",
    home: "Home",
    services: "Services",
    gallery: "Gallery",
    testimonials: "Testimonials",
    contact: "Contact",
    visit: "Request a Visit",
    mission: "Mission",
    missionText: "Provide high-standard construction services.",
    vision: "Vision",
    visionText: "Be leaders in remodeling and construction in South Florida.",
    goals: "Goals",
    goalsText: "Meet expectations, deadlines, and quality in every project.",
    aboutTitle: "Jotaye Group LLC: more than construction",
    about1:
      "We are a South Florida-based company combining construction experience with digital innovation to create unique spaces.",
    about2:
      "We lead with passion and business vision, from foundations to the last detail, reflecting a commitment to excellence.",
    about3:
      "We always aim to achieve full client satisfaction, with constant supervision to reach goals and meet objectives.",
    about4: "At Jotaye Group, we build spaces and generate trust.",
    ourServices: "Our Services",
    promoTitle: "Special Promotion",
    promoText: "Check out our discounts.",
    contactTitle: "Contact",
    whatsapp: "WhatsApp",
    email: "Email",
    testimonialsTitle: "What our clients say",
    testimonial1: "Excellent service and attention to detail. Highly recommended.",
    testimonial2: "The team was punctual, professional, and left everything spotless.",
    testimonial3: "They transformed my kitchen and bathroom — I loved the final result!",
    copyright: "Jotaye Group LLC",
  },
  es: {
    motto: "Construimos espacios y fortalecemos su confianza...",
    home: "Inicio",
    services: "Servicios",
    gallery: "Galería",
    testimonials: "Testimonios",
    contact: "Contacto",
    visit: "Solicita una visita",
    mission: "Misión",
    missionText: "Brindar servicios de construcción con altos estándares de calidad.",
    vision: "Visión",
    visionText: "Ser líderes en remodelación y construcción en South Florida.",
    goals: "Objetivos",
    goalsText: "Cumplir expectativas, plazos y calidad en cada proyecto.",
    aboutTitle: "Jotaye Group LLC: más que construcción",
    about1:
      "Somos una empresa con base en el Sur de la Florida que combina experiencia en obra con innovación digital para crear espacios únicos.",
    about2:
      "Lideramos con pasión y visión empresarial, desde los cimientos hasta el último detalle, reflejando un compromiso con la excelencia.",
    about3:
      "Estamos siempre a la disposición de lograr la plena satisfacción de nuestros clientes, con una supervisión constante para lograr las metas y alcanzar los objetivos.",
    about4: "En Jotaye Group, construimos espacios y generamos confianza.",
    ourServices: "Nuestros Servicios",
    promoTitle: "Promoción Especial",
    promoText: "Consulta nuestros descuentos.",
    contactTitle: "Contacto",
    whatsapp: "WhatsApp",
    email: "Correo",
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonial1: "Excelente servicio y atención al detalle. Muy recomendados.",
    testimonial2: "El equipo fue puntual, profesional y dejaron todo impecable.",
    testimonial3: "Transformaron mi cocina y baño, ¡me encantó el resultado final!",
    copyright: "Jotaye Group LLC",
  },
};

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div id="top" className="bg-white text-gray-800 font-sans relative">
      {/* ===========================
          HEADER (sin cambios respecto a la última versión aprobada)
          =========================== */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center lg:flex-row lg:justify-between lg:items-center">
          {/* LOGO */}
          <div className="flex-shrink-0">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/logo-header.png"
                alt="Jotaye Group LLC"
                className="h-16 mx-auto"
              />
            </a>
          </div>

          {/* FRASE (motto) */}
          <div className="mt-2 text-center lg:mt-0 lg:mx-4">
            <p className="italic text-gray-600">{t.motto}</p>
          </div>

          {/* BOTONES DE IDIOMA (EN/ES) */}
          <div className="mt-2 flex space-x-2 lg:mt-0">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              ES
            </button>
          </div>

          {/* ÍCONO HAMBURGUESA (solo en móvil) */}
          <div className="mt-2 lg:hidden">
            <button onClick={() => setMobileMenuOpen((prev) => !prev)}>
              <FiMenu size={28} className="text-gray-700" />
            </button>
          </div>

          {/* MENÚ DE NAVEGACIÓN (solo en escritorio) */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-3 lg:ml-4">
            <a
              href="#top"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
            >
              {t.home}
            </a>
            <a
              href="#servicios"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
            >
              {t.services}
            </a>
            <a
              href="https://instagram.com/jotayegroup"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm inline-flex items-center"
            >
              <FaInstagram className="mr-1" />
              {t.gallery}
            </a>
            <a
              href="#testimonios"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
            >
              {t.testimonials}
            </a>
            <a
              href="#contacto"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
            >
              {t.contact}
            </a>
            <a
              href="#cotizacion"
              className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
            >
              {t.visit}
            </a>
          </nav>
        </div>

        {/* MENÚ RESPONSIVE (solo en móvil) */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col space-y-2">
              <a
                href="#top"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.home}
              </a>
              <a
                href="#servicios"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.services}
              </a>
              <a
                href="https://instagram.com/jotayegroup"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm inline-flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <FaInstagram className="mr-1" />
                {t.gallery}
              </a>
              <a
                href="#testimonios"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.testimonials}
              </a>
              <a
                href="#contacto"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.contact}
              </a>
              <a
                href="#cotizacion"
                className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.visit}
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* ===========================
          SECCIÓN: MISIÓN – VISIÓN – OBJETIVOS (sin cambios)
          =========================== */}
      <section className="py-16 text-center">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">{t.mission}</h4>
            <p className="text-gray-600">{t.missionText}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">{t.vision}</h4>
            <p className="text-gray-600">{t.visionText}</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <h4 className="text-xl font-semibold mb-2">{t.goals}</h4>
            <p className="text-gray-600">{t.goalsText}</p>
          </div>
        </div>
      </section>

      {/* ===========================
          SECCIÓN: SOBRE NOSOTROS (ACTUALIZADA para ser más dinámica)
          =========================== */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto fade-in px-4">
          <h3 className="text-3xl font-bold text-center mb-8">{t.aboutTitle}</h3>
          {/* Usamos Grid para dos columnas: 1) Imagen  2) Texto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* COLUMNA DE IMAGEN 1 */}
            <div className="order-2 md:order-1 flex justify-center">
              <img
                src={construccion1}
                alt="Construcción 1"
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
            {/* COLUMNA DE TEXTO (PÁRRAFOS) */}
            <div className="order-1 md:order-2 space-y-4 text-gray-700">
              <p>{t.about1}</p>
              <p>{t.about2}</p>
            </div>
          </div>

          {/* Espacio inferior antes de la segunda fila */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Segunda columna de texto */}
            <div className="space-y-4 text-gray-700">
              <p>{t.about3}</p>
              <p className="italic font-medium">{t.about4}</p>
            </div>
            {/* Segunda imagen */}
            <div className="flex justify-center">
              <img
                src={construccion2}
                alt="Construcción 2"
                className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===========================
          SECCIÓN: NUESTROS SERVICIOS (sin cambios)
          =========================== */}
      <main className="max-w-6xl mx-auto px-4 py-16" id="servicios">
        <h3 className="text-3xl font-bold text-center mb-12">{t.services}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <img
                src={service.image}
                alt={service.title[lang]}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="font-semibold">{service.title[lang]}</h4>
              </div>
            </div>
          ))}

          {/* Promoción especial (flyer) */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src="/assets/flayer-jotaye.webp"
              alt="Promoción"
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="font-semibold">{t.promoTitle}</h4>
              <p className="text-gray-600">{t.promoText}</p>
            </div>
          </div>
        </div>
      </main>

      {/* ===========================
          SECCIÓN: FORMULARIO DE CONTACTO (sin cambios)
          =========================== */}
      <section id="cotizacion" className="py-16 bg-gray-50">
        <ContactForm language={lang} />
      </section>

      {/* ===========================
          SECCIÓN: CONTACTO RÁPIDO (sin cambios)
          =========================== */}
      <section id="contacto" className="py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">{t.contactTitle}</h3>
        <div className="flex justify-center gap-4">
          <a
            href="https://wa.me/13054172681"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-white rounded shadow inline-flex items-center"
          >
            <FaWhatsapp className="mr-2" /> {t.whatsapp}
          </a>
          <a
            href="mailto:jotayegroupllc@gmail.com"
            className="px-6 py-3 bg-blue-500 text-white rounded shadow inline-flex items-center"
          >
            <FaEnvelope className="mr-2" /> {t.email}
          </a>
        </div>
      </section>

      {/* ===========================
          SECCIÓN: TESTIMONIOS (sin cambios)
          =========================== */}
      <section id="testimonios" className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-8">{t.testimonialsTitle}</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[t.testimonial1, t.testimonial2, t.testimonial3].map(
            (text, idx) => (
              <div key={idx} className="p-6 bg-white rounded-lg shadow">
                <p className="italic mb-4">“{text}”</p>
                <p className="font-semibold">
                  {["Carlos M.", "Ana R.", "Luis F."][idx]}
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* ===========================
          FOOTER (sin cambios)
          =========================== */}
      <footer className="bg-[#1e293b] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
          <div className="flex gap-4">
            <a
              href="https://wa.me/13054172681"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:jotayegroupllc@gmail.com">
              <FaEnvelope size={20} />
            </a>
            <a
              href="https://instagram.com/jotayegroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://facebook.com/JotayeGroupLLC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* MODAL DE SERVICIO */}
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          language={lang}
        />
      )}
    </div>
  );
}

