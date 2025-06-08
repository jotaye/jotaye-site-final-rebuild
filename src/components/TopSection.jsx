// src/components/TopSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopSection({ language, onLanguageChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Para lazy-load del vídeo
  const heroRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  // Observador para cargar vídeo cuando el hero entra en pantalla
  useEffect(() => {
    if (!isHome) return;
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLoadVideo(true);
            obs.disconnect();
          }
        },
        { rootMargin: "200px" }
      );
      if (heroRef.current) obs.observe(heroRef.current);
      return () => obs.disconnect();
    } else {
      setLoadVideo(true);
    }
  }, [isHome]);

  // Scroll logic: hide hero en scroll > 80, o fuera de Home
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }
    setIsScrolled(false);
    const onScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const lang = language || "es";
  const t = {
    es: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    en: { home: "Home", services: "Services", contact: "Contact" },
  }[lang];

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
    else navigate("/");
    setMenuOpen(false);
  };

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      {/* Hero: sólo en Home Y no scrolleado */}
      {isHome && !isScrolled && (
        <div
          ref={heroRef}
          className="absolute inset-0 h-64 md:h-80 lg:h-96 w-full"
        >
          {/* Poster ligero */}
          <img
            src="/assets/construccion1-poster.jpg"
            alt="Construcción en proceso"
            className="object-cover w-full h-full"
          />

          {/* Vídeo lazy-loaded */}
          {loadVideo && (
            <>
              <video
                src="/assets/construccion1.mov"
                className="absolute inset-0 object-cover w-full h-full"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-black/40" />
            </>
          )}
        </div>
      )}

      {/* Header siempre encima del vídeo */}
      <header
        className={`
          absolute top-0 left-0 w-full flex items-center justify-between
          px-4 sm:px-6 lg:px-8 h-16 transition-colors duration-300 ease-in-out
          ${isScrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        {/* Logo */}
        <a href="/" onClick={handleLogoClick} className="flex-shrink-0">
          <img
            src="/assets/logo-header.svg"
            alt="Jotaye Group LLC"
            className="w-32 h-auto"
          />
        </a>

        {/* Menú escritorio */}
        <nav
          className={`
            hidden md:flex space-x-8 font-medium transition-colors duration-300
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
              else navigate("/");
            }}
            className={`transition ${
              isScrolled || !isHome
                ? "hover:text-orange-600"
                : "hover:text-orange-300"
            }`}
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

        {/* Idioma escritorio */}
        <div
          className={`
            hidden md:flex space-x-2 transition-colors duration-300
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
        >
          <button
            onClick={() => onLanguageChange("en")}
            className={`px-2 py-1 rounded text-sm ${
              lang === "en"
                ? "bg-orange-500 text-white"
                : isScrolled || !isHome
                ? "bg-gray-200 text-gray-800"
                : "bg-white/30 text-white"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => onLanguageChange("es")}
            className={`px-2 py-1 rounded text-sm ${
              lang === "es"
                ? "bg-orange-500 text-white"
                : isScrolled || !isHome
                ? "bg-gray-200 text-gray-800"
                : "bg-white/30 text-white"
            }`}
          >
            ES
          </button>
        </div>

        {/* Botón hamburguesa móvil */}
        <button
          className={`md:hidden text-2xl transition-colors duration-300 ${
            isScrolled || !isHome ? "text-gray-800" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </header>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div
          className={`md:hidden w-full absolute top-16 z-40 transition-opacity duration-300 ${
            isScrolled || !isHome
              ? "bg-white/90 text-gray-800"
              : "bg-black/80 text-white"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 py-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
                else navigate("/");
              }}
              className="transition hover:text-orange-300 text-xl"
            >
              {t.home}
            </a>
            <NavLink to="/services" onClick={() => setMenuOpen(false)}>
              {t.services}
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              {t.contact}
            </NavLink>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={() => {
                  onLanguageChange("en");
                  setMenuOpen(false);
                }}
                className={`px-3 py-1 rounded text-sm ${
                  lang === "en"
                    ? "bg-orange-500 text-white"
                    : isScrolled || !isHome
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white/30 text-white"
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
                  lang === "es"
                    ? "bg-orange-500 text-white"
                    : isScrolled || !isHome
                    ? "bg-gray-200 text-gray-800"
                    : "bg-white/30 text-white"
                }`}
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
