// src/components/TopSection.jsx
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopSection({ language, onLanguageChange }) {
  const lang = language || "es";
  const t = {
    es: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    en: { home: "Home", services: "Services", contact: "Contact" },
  }[lang];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
      {/* --- Vídeo de fondo (Hero) --- */}
      <video
        src="/assets/construccion1.mov"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* --- Capa de color oscuro semitransparente (para contraste) --- */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- Header sobre el vídeo/fondo --- */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          {/* --- Logo (reemplaza por tu imagen vectorizada cuando la tengas) --- */}
          <Link to="/" onClick={() => setMenuOpen(false)} className="z-30">
            <img
              src="/assets/logo-header.webp"
              alt="Jotaye Group LLC"
              className="h-10 md:h-12 lg:h-14"
            />
          </Link>

          {/* --- Enlaces Escritorio --- */}
          <nav className="hidden md:flex space-x-8 text-white font-medium z-30">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "hover:text-orange-300 transition"
              }
            >
              {t.home}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "hover:text-orange-300 transition"
              }
            >
              {t.services}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400"
                  : "hover:text-orange-300 transition"
              }
            >
              {t.contact}
            </NavLink>
          </nav>

          {/* --- Botones de Idioma Escritorio --- */}
          <div className="hidden md:flex space-x-2 z-30">
            <button
              onClick={() => onLanguageChange("en")}
              className={`px-2 py-1 rounded text-sm ${
                lang === "en" ? "bg-orange-500 text-white" : "bg-white/30 text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange("es")}
              className={`px-2 py-1 rounded text-sm ${
                lang === "es" ? "bg-orange-500 text-white" : "bg-white/30 text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* --- Icono Hamburguesa Móvil --- */}
          <button
            className="md:hidden text-white text-2xl z-30"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* --- Menú Móvil desplegable --- */}
        {menuOpen && (
          <div className="md:hidden bg-black/70 backdrop-blur-md py-6">
            <div className="flex flex-col items-center space-y-6">
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 text-xl font-medium"
                    : "text-white hover:text-orange-300 transition text-xl"
                }
              >
                {t.home}
              </NavLink>
              <NavLink
                to="/services"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 text-xl font-medium"
                    : "text-white hover:text-orange-300 transition text-xl"
                }
              >
                {t.services}
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-400 text-xl font-medium"
                    : "text-white hover:text-orange-300 transition text-xl"
                }
              >
                {t.contact}
              </NavLink>
              {/* --- Botones de Idioma Móvil --- */}
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => {
                    onLanguageChange("en");
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded text-sm ${
                    lang === "en" ? "bg-orange-500 text-white" : "bg-white/30 text-white"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    onLanguageChange("es");
                    setMenuOpen(false);
                  }}
                  className={`px-3 py-1 rounded text-sm ${
                    lang === "es" ? "bg-orange-500 text-white" : "bg-white/30 text-white"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* --- (opcional) Centrar contenido “Jotaye Group LLC” en el centro del vídeo, si quisieras agregar texto adicional aquí. */}
      {/* <div className="absolute inset-0 flex items-center justify-center z-10">
        <img src="/assets/tu-nuevo-logo-vector.png" alt="Jotaye Group LLC" className="h-16 md:h-20 lg:h-24" />
      </div> */}
    </div>
  );
}
