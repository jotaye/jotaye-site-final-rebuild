// src/App.jsx
import React, { useState } from "react";
import "./MainApp.css";
import flyer from "./assets/flayer-jotaye.jpg";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import services from "./data/services";

const translations = { /* … tu objeto translations … */ };

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div id="top" className="bg-white text-gray-800 font-sans relative">
      {/* HEADER */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-2">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              {/* 
                Ya no importamos el logo por JS.
                Usamos la ruta absoluta del archivo en public/assets/.
                Ajustamos la clase h-24 para agrandar un poco el logo. 
              */}
              <img
                src="/assets/logo-header.png"
                alt="Jotaye Group LLC"
                className="h-24 mx-auto"
              />
            </a>
          </div>
          <p className="italic text-gray-600 mb-2">{t.motto}</p>
          <div className="mb-2">
            <button
              onClick={() => setLang("en")}
              className={`mx-1 px-3 py-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`mx-1 px-3 py-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
              }`}
            >
              ES
            </button>
          </div>
          <nav className="flex flex-wrap justify-center gap-2">
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
                <a
                  key={i}
                  href={link.href}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
      </header>

      {/* El resto de tu App.jsx permanece igual */}
