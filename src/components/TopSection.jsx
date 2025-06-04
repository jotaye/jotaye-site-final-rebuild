// src/components/TopSection.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopSection({ language, onLanguageChange }) {
  // useLocation nos indicará en qué ruta estamos:
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Si no estamos en Home, forzamos isScrolled = true
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    // Si estamos en Home, escuchamos scroll para encoger/agrandar
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
        ${
          // Si ya scrolleamos o NO somos Home, el header es pequeño con fondo blanco:
          isScrolled || !isHome
            ? "h-16 bg-white shadow-md"
            : // Si somos Home y no hemos scrolleado, ocupamos toda la sección hero:
              "h-64 md:h-80 lg:h-96 bg-transparent"
        }
      `}
    >
      {/* ─────────────────────────────────────────────────────────────────────────────
         Vídeo de fondo y overlay OSCURO: aparece solo en Home y antes de scrollear
      ───────────────────────────────────────────────────────────────────────────── */}
      {isHome && !isScrolled && (
        <>
          <video
            src="/assets/construccion1.mov"
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Capa semitransparente de fondo negro para contraste */}
          <div className="absolute inset-0 bg-black/40" />
        </>
      )}

      {/* ─────────────────────────────────────────────────────────────────────────────
         LOGO SUPERPUESTO: 
         - En Home y sin scrollear, lo mostramos centrado grande.
         - Al hacer scroll (o en rutas distintas de “/”), lo reducimos y lo alineamos a la izquierda.
      ───────────────────────────────────────────────────────────────────────────── */}
      <div
        className={`
          absolute top-0 left-1/2 transform -translate-x-1/2 z-20 
          transition-[width,height,top,left] duration-300 ease-in-out
          ${
            // Si estamos en Home y no hemos scrolleado: logo grande y centrado verticalmente
            isHome && !isScrolled
              ? "w-64 md:w-80 lg:w-96 h-auto mt-12"
              : // Si hemos scrolleado o no somos Home: logo pequeño, alineado a la izquierda
                "w-24 md:w-28 lg:w-32 h-auto mt-2 left-6 transform-none"
          }
        `}
      >
        <img
          src="/assets/logo-header.svg"
          alt="Jotaye Group LLC"
          className="w-full h-auto"
        />
      </div>

      {/* ─────────────────────────────────────────────────────────────────────────────
         HEADER (contiene el <nav> y los botones de idioma) 
      ───────────────────────────────────────────────────────────────────────────── */}
      <header
        className={`
          relative w-full z-40 flex items-center justify-between
          transition-[padding] duration-300 ease-in-out
          ${
            isScrolled || !isHome
              ? "py-2 px-6"
              : "py-4 px-6 md:py-6 md:px-8"
          }
        `}
      >
        {/* ─────────────────────────────────────────────────────────────────────────
           LOGO (ESQUINA IZQUIERDA) 
           → Dado que ya tenemos un <img> del logo absolute superpuesto arriba, 
             aquí podemos colocar un espacio reservado o incluso comentar el <img>.
           → Para no duplicar, simplemente dejamos el “ancla” de Inicio sin <img> aquí.
        ───────────────────────────────────────────────────────────────────────── */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
          className="flex-shrink-0"
        >
          {/* ⚠️ No insertamos <img> aquí. El logo se renderiza en la capa absolute arriba. */}
        </a>

        {/* ─────────────────────────────────────────────────────────────────────────
           MENÚ DE NAVEGACIÓN (escritorio)
        ───────────────────────────────────────────────────────────────────────── */}
        <nav
          className={`
            hidden md:flex space-x-8 font-medium transition-colors duration-300 ease-in-out
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
        >
          {/* “Inicio” recarga entera */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
            className={`
              ${isScrolled || !isHome ? "hover:text-orange-600" : "hover:text-orange-300"}
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
                    isScrolled || !isHome
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
                    isScrolled || !isHome
                      ? "hover:text-orange-600"
                      : "hover:text-orange-300"
                  } transition`
            }
          >
            {t.contact}
          </NavLink>
        </nav>

        {/* ─────────────────────────────────────────────────────────────────────────
           BOTONES DE IDIOMA (escritorio)
        ───────────────────────────────────────────────────────────────────────── */}
        <div
          className={`
            hidden md:flex space-x-2 transition-colors duration-300 ease-in-out
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
        >
          <button
            onClick={() => onLanguageChange("en")}
            className={`
              px-2 py-1 rounded text-sm 
              ${lang === "en"
                ? "bg-orange-500 text-white"
                : isScrolled || !isHome
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
                : isScrolled || !isHome
                ? "bg-gray-200 text-gray-800"
                : "bg-white/30 text-white"
              }
            `}
          >
            ES
          </button>
        </div>

        {/* ─────────────────────────────────────────────────────────────────────────
           MENÚ HAMBURGUESA (móvil)
        ───────────────────────────────────────────────────────────────────────── */}
        <button
          className={`
            md:hidden text-2xl transition-colors duration-300 ease-in-out
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* ─────────────────────────────────────────────────────────────────────────────
         MENÚ MÓVIL DESPLEGABLE
      ───────────────────────────────────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className={`
            md:hidden w-full transition-opacity duration-300 ease-in-out 
            ${isScrolled || !isHome ? "bg-white/90 text-gray-800" : "bg-black/80 text-white"}
          `}
        >
          <div className="flex flex-col items-center space-y-6 py-4">
            {/* “Inicio” recarga en móvil */}
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
                    : isScrolled || !isHome
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
                    : isScrolled || !isHome
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
