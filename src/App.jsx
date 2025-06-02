import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import services from "./data/services";
import "./index.css";

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
  const [lang, setLang] = useState("en");
  const [selectedService, setSelectedService] = useState(null);
  const t = translations[lang];

  return (
    <div id="top" className="bg-white text-gray-800 font-sans relative">
      {/* ======== HEADER ======== */}
      <header>
        <div className="header-wrapper fade-in">
          <div className="header-top">
            {/* LOGO */}
            <div className="header-logo">
              <a href="/" onClick={() => window.scrollTo(0, 0)}>
                <img
                  src="/assets/logo-header.webp"
                  alt="Jotaye Group LLC"
                  className="h-16"
                />
              </a>
            </div>

            {/* FRASE (motto) */}
            <div className="header-motto">{t.motto}</div>

            {/* MENÚ principal (desktop) */}
            <nav className="header-nav">
              <a href="#top">{t.home}</a>
              <a href="#servicios">{t.services}</a>
              <a
                href="https://instagram.com/jotayegroup"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="inline-block mr-1" />
                {t.gallery}
              </a>
              <a href="#testimonios">{t.testimonials}</a>
              <a href="#contacto">{t.contact}</a>
              <a href="#cotizacion">{t.visit}</a>
            </nav>

            {/* BOTONES DE IDIOMA */}
            <div className="header-lang">
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"}
              >
                EN
              </button>
              <button
                onClick={() => setLang("es")}
                className={lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ======== MISIÓN – VISIÓN – OBJETIVOS ======== */}
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

      {/* ======== SOBRE NOSOTROS ======== */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow text-left">
          <h3 className="text-2xl font-bold mb-4">{t.aboutTitle}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="mb-4">{t.about1}</p>
              <p className="mb-4">{t.about2}</p>
            </div>
            <div>
              <p className="mb-4">{t.about3}</p>
              <p className="italic">{t.about4}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======== NUESTROS SERVICIOS (Swiper Carousel) ======== */}
      <main className="max-w-6xl mx-auto px-4 py-16" id="servicios">
        <h3 className="text-3xl font-bold text-center mb-12">{t.services}</h3>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, idx) => (
            <SwiperSlide key={idx}>
              <div
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
            </SwiperSlide>
          ))}
          <SwiperSlide>
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
          </SwiperSlide>
        </Swiper>
      </main>

      {/* ======== FORMULARIO DE CONTACTO ======== */}
      <section id="cotizacion" className="py-16 bg-gray-50">
        <ContactForm language={lang} />
      </section>

      {/* ======== CONTACTO RÁPIDO ======== */}
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

      {/* ======== TESTIMONIOS ======== */}
      <section id="testimonios" className="py-16 bg-gray-50 text-center">
        <h3 className="text-3xl font-bold mb-8">{t.testimonialsTitle}</h3>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[t.testimonial1, t.testimonial2, t.testimonial3].map((text, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg shadow">
              <p className="italic mb-4">“{text}”</p>
              <p className="font-semibold">
                {["Carlos M.", "Ana R.", "Luis F."][idx]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="bg-[#1e293b] text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {t.copyright}
          </p>
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

      {/* ======== MODAL DE SERVICIO ======== */}
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
