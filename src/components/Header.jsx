// src/components/Header.jsx (variante para recarga entera)
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ language, onLanguageChange }) {
  const lang = language || "es";
  const t = {
    es: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    en: { home: "Home", services: "Services", contact: "Contact" },
  }[lang];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo envuelto en <a href="/"> para recarga completa */}
        <a href="/" onClick={() => setMenuOpen(false)}>
          <img
            src="/assets/logo-header.webp"
            alt="Jotaye Group LLC"
            className="h-12 w-auto"
          />
        </a>

        {/* Enlaces Escritorio */}
        <nav className="hidden md:flex space-x-8 text-gray-800 font-medium">
          <NavLink
            to="/"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "hover:text-orange-600 transition"
            }
          >
            {t.home}
          </NavLink>
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "hover:text-orange-600 transition"
            }
          >
            {t.services}
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : "hover:text-orange-600 transition"
            }
          >
            {t.contact}
          </NavLink>
        </nav>

        {/* Botones de Idioma Escritorio */}
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => onLanguageChange("en")}
            className={`px-2 py-1 rounded text-sm ${
              lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange("es")}
            className={`px-2 py-1 rounded text-sm ${
              lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
            }`}
          >
            ES
          </button>
        </div>

        {/* Icono Hamburguesa Móvil */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md py-6">
          <div className="flex flex-col items-center space-y-4">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 text-lg font-medium"
                  : "text-gray-800 hover:text-orange-600 transition text-lg"
              }
            >
              {t.home}
            </NavLink>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 text-lg font-medium"
                  : "text-gray-800 hover:text-orange-600 transition text-lg"
              }
            >
              {t.services}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 text-lg font-medium"
                  : "text-gray-800 hover:text-orange-600 transition text-lg"
              }
            >
              {t.contact}
            </NavLink>
            {/* Botones de Idioma Móvil */}
            <div className="flex space-x-2 mt-4">
              <button
                onClick={() => {
                  onLanguageChange("en");
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-sm ${
                  lang === "en" ? "bg-orange-500 text-white" : "bg-gray-200"
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
                  lang === "es" ? "bg-orange-500 text-white" : "bg-gray-200"
                }`}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
