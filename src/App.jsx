// src/App.jsx
import React, { useState } from "react";
import "./MainApp.css";
import flyer from "/assets/flayer-jotaye.webp";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
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
    visionText: "Be leaders in remodeling and construction in South Florida.",
    goals: "Goals",
    goalsText: "Meet expectations, deadlines, and quality in every project.",
    aboutTitle: "Jotaye Group LLC: more than construction",
    about1: "We are a South Florida-based company combining construction experience with digital innovation to create unique spaces.",
    about2: "We lead with passion and business vision, from foundations to the last detail, reflecting a commitment to excellence.",
    about3: "We always aim to achieve full client satisfaction, with constant supervision to reach goals and meet objectives.",
    about4: "At Jotaye Group, we build spaces and generate trust.",
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
    about1: "Somos una empresa con base en el Sur de la Florida que combina experiencia en obra con innovación digital para crear espacios únicos.",
    about2: "Lideramos con pasión y visión empresarial, desde los cimientos hasta el último detalle, reflejando un compromiso con la excelencia.",
    about3: "Estamos siempre a la disposición de lograr la plena satisfacción de nuestros clientes, con una supervisión constante para lograr las metas y alcanzar los objetivos.",
    about4: "En Jotaye Group, construimos espacios y generamos confianza.",
    promoTitle: "Promoción Especial",
    promoText: "Consulta nuestros descuentos.",
    contactTitle: "Contacto",
    whatsapp: "WhatsApp",
    email: "Correo",
    testimonialsTitle: "Lo que dicen nuestros clientes",
    testimonial1: "Excelente servicio y atención al detalle. Muy recomendados.",
    testimonial2: "El equipo fue puntual, profesional y dejaron todo impecable.",
    testimonial3: "Transformaron mi cocina y baño — ¡me encantó el resultado final!",
    copyright: "Jotaye Group LLC",
  },
};

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];

  return (
    <div id="top" className="bg-primaryBg text-gray-800 font-sans relative">
      {/* ================= HEADER ================= */}
      <header className="bg-white shadow sticky top-0 z-50">
        {/* Escritorio */}
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto px-4 py-4 header-desktop fade-in">
          {/* Logo */}
          <div className="logo">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/logo-header.webp"
                alt="Jotaye Group LLC"
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Frase centrada */}
          <div className="motto">
            <p>{t.motto}</p>
          </div>

          {/* Menú horizontal */}
          <nav>
            {[
              { href: "#top", label: t.home },
              { href: "#servicios", label: t.services },
              {
                href: "https://instagram.com/jotayegroup",
                label: t.gallery,
                icon: <FaInstagram className="inline-block mr-1" />,
                external: true,
              },
              { href: "#testimonios", label: t.testimonials },
              { href: "#contacto", label: t.contact },
              { href: "#cotizacion", label: t.visit },
            ].map((link, i) =>
              link.external ? (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm ml-1"
                >
                  {link.icon}
                  {link.label}
                </a>
              ) : (
                <a
                  key={i}
                  href={link.href}
                  className="px-3 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm ml-1"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>

          {/* Botones de idioma */}
          <div className="lang-buttons">
            <button
              onClick={() => setLang("en")}
              className={`mx-1 px-2 py-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`mx-1 px-2 py-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              ES
            </button>
          </div>
        </div>

        {/* Móvil */}
        <div className="flex flex-col md:hidden items-center max-w-7xl mx-auto px-4 py-4 header-mobile fade-in">
          {/* Logo centrado */}
          <div className="logo mb-2">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/logo-header.webp"
                alt="Jotaye Group LLC"
                className="h-16 w-auto object-contain mx-auto"
              />
            </a>
          </div>

          {/* Frase centrada */}
          <div className="motto mb-2">
            <p>{t.motto}</p>
          </div>

          {/* Botones de idioma */}
          <div className="lang-buttons mb-2">
            <button
              onClick={() => setLang("en")}
              className={`mx-1 px-2 py-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`mx-1 px-2 py-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              ES
            </button>
          </div>

          {/* Ícono hamburguesa */}
          <div className="menu-toggle mb-2">
            {menuOpen ? (
              <FaTimes
                size={22}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer"
              />
            ) : (
              <FaBars
                size={22}
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer"
              />
            )}
          </div>

          {/* Menú vertical que aparece al hacer clic */}
          {menuOpen && (
            <nav className="flex flex-col w-full bg-white rounded-lg shadow-md p-4 space-y-2">
              {[
                { href: "#top", label: t.home },
                { href: "#servicios", label: t.services },
                {
                  href: "https://instagram.com/jotayegroup",
                  label: t.gallery,
                  icon: <FaInstagram className="inline-block mr-1" />,
                  external: true,
                },
                { href: "#testimonios", label: t.testimonials },
                { href: "#contacto", label: t.contact },
                { href: "#cotizacion", label: t.visit },
              ].map((link, i) =>
                link.external ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          )}
        </div>
      </header>

      {/* ================= MISIÓN – VISIÓN – OBJETIVOS ================= */}
      <section className="py-12 text-center">
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

      {/* ================= SOBRE NOSOTROS ================= */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto p-6 bg-primaryBg rounded-lg shadow text-left">
          <h3 className="text-2xl font-bold mb-4">{t.aboutTitle}</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <p className="mb-4">{t.about1}</p>
              <p className="mb-4">{t.about2}</p>
            </div>
            <div className="flex-1">
              <img
                src="/assets/construccion1.jpg"
                alt="Construcción detalle"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            <div className="flex-1">
              <p className="mb-4">{t.about3}</p>
              <p className="italic">{t.about4}</p>
            </div>
            <div className="flex-1">
              <img
                src="/assets/construccion2.jpg"
                alt="Construcción detalle"
                className="w-full h-auto rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= NUESTROS SERVICIOS (Swiper) ================= */}
      <main className="max-w-6xl mx-auto px-4 py-12" id="servicios">
        <h3 className="text-3xl font-bold text-center mb-8">{t.services}</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div
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
            </SwiperSlide>
          ))}

          {/* También incluimos la promoción especial como una slide adicional */}
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </main>

      {/* ================= FORMULARIO DE CONTACTO ================= */}
      <section id="cotizacion" className="py-12 bg-gray-50">
        <ContactForm language={lang} />
      </section>

      {/* ================= CONTACTO RÁPIDO ================= */}
      <section id="contacto" className="py-12 text-center">
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

      {/* ================= TESTIMONIOS ================= */}
      <section id="testimonios" className="py-12 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-8">{t.testimonialsTitle}</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[t.testimonial1, t.testimonial2, t.testimonial3].map((text, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow">
              <p className="italic mb-4">“{text}”</p>
              <p className="font-semibold">{["Carlos M.", "Ana R.", "Luis F."][idx]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#1e293b] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} {t.copyright}</p>
          <div className="flex gap-4">
            <a href="https://wa.me/13054172681" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={20} />
            </a>
            <a href="mailto:jotayegroupllc@gmail.com">
              <FaEnvelope size={20} />
            </a>
            <a href="https://instagram.com/jotayegroup" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://facebook.com/JotayeGroupLLC" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* ================= MODAL DE SERVICIO ================= */}
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
