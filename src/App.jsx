// src/App.jsx
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./MainApp.css";

import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import services from "./data/services";
import flyer from "/assets/flayer-jotaye.webp";

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
    <div id="top" className="font-sans text-gray-800">
      {/* HEADER */}
      <header className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center md:items-stretch">
          {/* Escritorio: logo + frase */}
          <div className="flex-1 flex flex-row items-center justify-center md:justify-start">
            <a href="/" className="flex-shrink-0">
              <img
                src="/assets/logo-header.webp"
                alt="Jotaye Group LLC"
                className="h-16 w-auto"
              />
            </a>
            <p className="hidden md:block italic text-gray-600 ml-4">{t.motto}</p>
          </div>

          {/* Menú en escritorio */}
          <nav className="hidden md:flex gap-2 items-center">
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
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                >
                  {link.icon}
                  {link.label}
                </a>
              ) : (
