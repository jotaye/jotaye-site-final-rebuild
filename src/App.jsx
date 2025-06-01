// src/App.jsx
import React, { useState } from "react";
import "./MainApp.css";
import { FaWhatsapp, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";
import ServiceModal from "./components/ServiceModal";
import ContactForm from "./components/ContactForm";
import services from "./data/services";

// ... (tu objeto translations sigue igual)

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [lang, setLang] = useState("en");
  const t = translations[lang];

  return (
    <div id="top" className="bg-white text-gray-800 font-sans relative">
      {/* ============================= */}
      {/*        HEADER CORREGIDO      */}
      {/* ============================= */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          {/* ----------------------------- */}
          {/* 1) LOGO A LA IZQUIERDA       */}
          {/* ----------------------------- */}
          <div className="flex-shrink-0">
            <a href="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src="/assets/logo-header.png"
                alt="Jotaye Group LLC"
                className="h-20 w-auto"
              />
            </a>
          </div>

          {/* ----------------------------- */}
          {/* 2) LEMA CENTRADO             */}
          {/* ----------------------------- */}
          <div className="flex-1 flex justify-center">
            <p className="italic text-gray-600">{t.motto}</p>
          </div>

          {/* ----------------------------- */}
          {/* 3) MENÚ ENLAZES (DESKTOP)     */}
          {/* ----------------------------- */}
          {/* En pantallas md+ mostramos el menú horizontal */}
          <nav className="hidden md:flex space-x-2 ml-8">
            {[
              { href: "#top",      label: t.home },
              { href: "#servicios", label: t.services },
              {
                href: "https://instagram.com/jotayegroup",
                label: t.gallery,
                icon: <FaInstagram className="inline-block mr-1" />,
                external: true,
              },
              { href: "#testimonios", label: t.testimonials },
              { href: "#contacto",    label: t.contact },
              { href: "#cotizacion",   label: t.visit },
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

          {/* ----------------------------- */}
          {/* 4) BOTONES DE IDIOMA (DESKTOP)*/}
          {/* ----------------------------- */}
          <div className="hidden md:flex items-center space-x-2 ml-8">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("es")}
              className={`px-3 py-1 rounded ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              ES
            </button>
          </div>

          {/* ----------------------------- */}
          {/* 5) HAMBURGUESA (MÓVIL)        */}
          {/* ----------------------------- */}
          {/* En pantallas más pequeñas, ocultamos el menú y los botones de idioma */}
          <div className="md:hidden flex items-center">
            {/* Botón de “hamburguesa” para desplegar menú móvil */}
            <button
              onClick={() => setShowMobileMenu((prev) => !prev)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/*   MENÚ MÓVIL DESPLEGABLE (solo aparece cuando setShowMobileMenu=true)  */}
        {/* ------------------------------------------------------------------ */}
        {showMobileMenu && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-2">
              {/* Botones de idioma (móvil) */}
              <div className="flex space-x-2 mb-2">
                <button
                  onClick={() => {
                    setLang("en");
                    setShowMobileMenu(false);
                  }}
                  className={`px-3 py-1 rounded ${
                    lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLang("es");
                    setShowMobileMenu(false);
                  }}
                  className={`px-3 py-1 rounded ${
                    lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  ES
                </button>
              </div>

              {/* Enlaces de navegación (móvil) */}
              {[
                { href: "#top",      label: t.home },
                { href: "#servicios", label: t.services },
                {
                  href: "https://instagram.com/jotayegroup",
                  label: t.gallery,
                  icon: <FaInstagram className="inline-block mr-1" />,
                  external: true,
                },
                { href: "#testimonios", label: t.testimonials },
                { href: "#contacto",    label: t.contact },
                { href: "#cotizacion",   label: t.visit },
              ].map((link, i) =>
                link.external ? (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={i}
                    href={link.href}
                    className="block px-4 py-2 bg-gray-100 rounded hover:bg-orange-500 hover:text-white transition text-sm"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </header>
      {/* ============================= */}
      {/*      FIN DEL HEADER          */}
      {/* ============================= */}

      {/* ... resto de la aplicación (secciones, servicios, etc.) ... */}
    </div>
  );
}
