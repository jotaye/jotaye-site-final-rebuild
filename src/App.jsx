// src/App.jsx
import React, { useState } from "react";
import "./MainApp.css";
import logo from "./assets/logo-header.png";
import flyer from "./assets/flayer-jotaye.jpg";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import services from "./data/services";

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
    visionText:
      "Be leaders in remodeling and construction in South Florida.",
    goals: "Goals",
    goalsText:
      "Meet expectations, deadlines, and quality in every project.",
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
    testimonial1:
      "Excellent service and attention to detail. Highly recommended.",
    testimonial2:
      "The team was punctual, professional, and left everything spotless.",
    testimonial3:
      "They transformed my kitchen and bathroom — I loved the final result!",
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
    missionText:
      "Brindar servicios de construcción con altos estándares de calidad.",
    vision: "Visión",
    visionText:
      "Ser líderes en remodelación y construcción en South Florida.",
    goals: "Objetivos",
    goalsText:
      "Cumplir expectativas, plazos y calidad en cada proyecto.",
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
    testimonial1:
      "Excelente servicio y atención al detalle. Muy recomendados.",
    testimonial2:
      "El equipo fue puntual, profesional y dejaron todo impecable.",
    testimonial3:
      "Transformaron mi cocina y baño, ¡me encantó el resultado final!",
    copyright: "Jotaye Group LLC",
  },
};

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div id="top" className="bg-white text-gray-800 font-sans relative">
      {/* ============================================
           HEADER
         ============================================ */}
      <header className={`bg-white shadow sticky top-0 z-50 ${menuOpen ? "open" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
          {/* 1) LOGO */}
          <div className="flex-shrink-0">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt="Jotaye Group LLC"
                className="h-20 w-auto"  /* Hicimos un poco más grande el logo en desktop */
              />
            </a>
          </div>

          {/* 2) FRASE (centrada horizontalmente cuando sea desktop; en móvil se mueve abajo) */}
          <div className="header-phrase mt-2 md:mt-0 md:mx-8 flex-grow text-center md:text-left">
            <p className="italic text-gray-600">{t.motto}</p>
          </div>

          {/* 3) BOTONES DE IDIOMA (en desktop van a la derecha, en móvil quedan debajo de la frase) */}
          <div className="flex-shrink-0 mt-2 md:mt-0">
            <button
              onClick={() => setLang("en")}
              className={`lang-button mx-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`lang-button mx-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              ES
            </button>
          </div>

          {/* 4) HAMBURGUESA (sólo se muestra en móvil para abrir/cerrar el menú) */}
          <div className="md:hidden flex-shrink-0 ml-2">
            <button onClick={() => setMenuOpen((prev) => !prev)}>
              {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>

          {/* 5) NAVEGACIÓN (en desktop va siempre visible; en móvil, sólo si menuOpen === true) */}
          <nav className={`mt-4 md:mt-0 md:flex flex-shrink-0 ${menuOpen ? "block" : "hidden"} md:block`}>
            <ul className="md:flex md:items-center">
              {[
                { href: "#top", label: t.home },
                { href: "#servicios", label: t.services },
                {
                  href: "https://instagram.com",
                  label: t.gallery,
                  icon: <FaInstagram className="inline-block mr-1" />,
                  external: true,
                },
                { href: "#testimonios", label: t.testimonials },
                { href: "#contacto", label: t.contact },
                { href: "#cotizacion", label: t.visit },
              ].map((link, i) =>
                link.external ? (
                  <li key={i}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={i}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* ============================================
          MISIÓN – VISIÓN – OBJETIVOS
        ============================================ */}
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

      {/* ============================================
         SOBRE NOSOTROS
        ============================================ */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow text-left">
          <h3 className="text-2xl font-bold mb-4">{t.aboutTitle}</h3>
          <p className="mb-4">{t.about1}</p>
          <p className="mb-4">{t.about2}</p>
          <p className="mb-4">{t.about3}</p>
          <p className="italic">{t.about4}</p>
        </div>
      </section>

      {/* ============================================
        NUESTROS SERVICIOS
        ============================================ */}
      <main className="max-w-6xl mx-auto px-4 py-16" id="servicios">
        <h3 className="text-3xl font-bold text-center mb-12">{t.services}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow card-hover overflow-hidden cursor-pointer"
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

          {/* Promoción especial */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <img
              src={flyer}
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

      {/* ============================================
        FORMULARIO DE CONTACTO
        ============================================ */}
      <section id="cotizacion" className="py-16 bg-gray-50">
        <ContactForm language={lang} />
      </section>

      {/* ============================================
        CONTACTO RÁPIDO
        ============================================ */}
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

      {/* ============================================
        TESTIMONIOS
        ============================================ */}
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

      {/* ============================================
        FOOTER
        ============================================ */}
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

      {/* ============================================
       MODAL DE SERVICIO (no cambió)
       ============================================ */}
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
