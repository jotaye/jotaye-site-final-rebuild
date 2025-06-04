// src/components/TopSection.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopSection({ language, onLanguageChange }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Si no estamos en Home, forzamos isScrolled=true para que el header sea h-16 siempre
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const lang = language || "es";
  const t = {
    es: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    en: { home: "Home", services: "Services", contact: "Contact" },
  }[lang];

  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-30 flex flex-col items-center
        transition-[height,background-color] duration-300 ease-in-out
        ${isScrolled
          ? "h-16 bg-white shadow-md"
          : isHome
          ? "h-64 md:h-80 lg:h-96 bg-transparent"
          : "h-16 bg-white shadow-md"
        }
      `}
    >
      {/* Vídeo de fondo (solo si estamos en Home y no hemos scrolleado) */}
      {isHome && !isScrolled && (
        <>
          <video
            src="/assets/construccion1.mov"
            className="absolute inset-0 w-full h-full object-cover opacity-70"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Capa semitransparente oscura para aumentar contraste */}
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}

      {/* Header (logo + menú + idiomas + hamburguesa) */}
      <header
        className={`
          relative w-full z-40 flex items-center justify-between
          transition-[padding] duration-300 ease-in-out
          ${isScrolled ? "py-2 px-6" : "py-4 px-6 md:py-6 md:px-8"}
        `}
      >
        {/* Logo siempre en la esquina izquierda */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="flex-shrink-0"
        >
          <img
            src="/assets/logo-header.svg"
            alt="Jotaye Group LLC"
            className={`
              transition-[height] duration-300 ease-in-out
              ${isScrolled ? "h-10 md:h-12 lg:h-14" : "h-16 md:h-20 lg:h-24"}
            `}
          />
        </a>

        {/* Menú de escritorio */}
        <nav
          className={`
            hidden md:flex space-x-8 font-medium transition-colors duration-300 ease-in-out
            ${isScrolled ? "text-gray-800" : "text-white"}
          `}
        >
          {/* “Inicio/Home” recarga la página (forzando window.location) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className={`
              ${isScrolled ? "hover:text-orange-600" : "hover:text-orange-300"}
              transition
            `}
          >
            {t.home}
          </a>
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-orange-600"
                : `${
                    isScrolled
                      ? "hover:text-orange-600"
                      : "hover:text-orange-300"
                  } transition`
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
                : `${
                    isScrolled
                      ? "hover:text-orange-600"
                      : "hover:text-orange-300"
                  } transition`
            }
          >
            {t.contact}
          </NavLink>
        </nav>

        {/* Botones de idioma (escritorio) */}
        <div
          className={`
            hidden md:flex space-x-2 transition-colors duration-300 ease-in-out
            ${isScrolled ? "text-gray-800" : "text-white"}
          `}
        >
          <button
            onClick={() => onLanguageChange("en")}
            className={`
              px-2 py-1 rounded text-sm
              ${lang === "en"
                ? "bg-orange-500 text-white"
                : isScrolled
                ? "bg-gray-200 text-gray-800"
                : "bg-white/30 text-white"
              }
            `}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange("es")}
            className={`
              px-2 py-1 rounded text-sm
              ${lang === "es"
                ? "bg-orange-500 text-white"
                : isScrolled
                ? "bg-gray-200 text-gray-800"
                : "bg-white/30 text-white"
              }
            `}
          >
            ES
          </button>
        </div>

        {/* Botón hamburguesa (móvil) */}
        <button
          className={`
            md:hidden text-2xl transition-colors duration-300 ease-in-out
            ${isScrolled ? "text-gray-800" : "text-white"}
          `}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div
          className={`
            md:hidden w-full transition-opacity duration-300 ease-in-out 
            ${isScrolled ? "bg-white/90 text-gray-800" : "bg-black/80 text-white"}
          `}
        >
          <div className="flex flex-col items-center space-y-6 py-4">
            {/* “Inicio/Home” recarga la página */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                window.location.href = "/";
              }}
              className="hover:text-orange-300 transition text-xl"
            >
              {t.home}
            </a>
            <NavLink
              to="/services"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 text-xl font-medium"
                  : "hover:text-orange-300 transition text-xl"
              }
            >
              {t.services}
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 text-xl font-medium"
                  : "hover:text-orange-300 transition text-xl"
              }
            >
              {t.contact}
            </NavLink>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => {
                  onLanguageChange("en");
                  setMenuOpen(false);
                }}
                className={`
                  px-3 py-1 rounded text-sm
                  ${lang === "en"
                    ? "bg-orange-500 text-white"
                    : isScrolled
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white/30 text-white"
                  }
                `}
              >
                EN
              </button>
              <button
                onClick={() => {
                  onLanguageChange("es");
                  setMenuOpen(false);
                }}
                className={`
                  px-3 py-1 rounded text-sm
                  ${lang === "es"
                    ? "bg-orange-500 text-white"
                    : isScrolled
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white/30 text-white"
                  }
                `}
              >
                ES
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
