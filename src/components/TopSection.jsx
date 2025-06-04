import React, { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function TopSection({ language, onLanguageChange }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 1) Cada vez que cambia la ruta, si NO estamos en Home, marcamos isScrolled = true
  //    para ocultar el vídeo inmediatamente. Si entramos en Home, no lo marcamos aquí.
  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
    }
  }, [isHome]);

  // 2) Cada vez que estemos en Home, queremos “resetear” isScrolled a false
  //    para que el vídeo vuelva a mostrarse. (Si la ruta cambia a "/" entonces isHome=true.)
  useEffect(() => {
    if (isHome) {
      // Forzamos isScrolled=false al entrar en Home
      setIsScrolled(false);
    }
  }, [isHome]);

  // 3) En Home, además, escuchamos el scroll para ocultar/mostrar el vídeo dinámicamente
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Al desmontar o cambiar a otra ruta, limpiamos el listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const lang = language || "es";
  const t = {
    es: { home: "Inicio", services: "Servicios", contact: "Contacto" },
    en: { home: "Home", services: "Services", contact: "Contact" },
  }[lang];

  // Cuando el usuario hace clic en el logo:
  // - Si YA está en Home, hace scroll suave hasta arriba.
  // - Si NO está en Home, navegamos a "/" (sin recargar por completo).
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-30">
      {/*
        Vídeo de fondo en Home:
        – Solo cuando isHome===true y isScrolled===false.
        – Altura fija: h-64 md:h-80 lg:h-96
      */}
      {isHome && !isScrolled && (
        <div className="absolute inset-0 h-64 md:h-80 lg:h-96 w-full">
          <video
            src="/assets/construccion1.mov"
            className="object-cover w-full h-full"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      )}

      {/*
        HEADER (siempre h-16):
        – Si isScrolled===true o no estamos en Home, fondo blanco + sombra.
        – Si isHome===true y isScrolled===false, fondo transparente.
      */}
      <header
        className={`
          relative flex items-center justify-between px-6 h-16 transition-colors duration-300 ease-in-out
          ${isScrolled || !isHome ? "bg-white shadow-md" : "bg-transparent"}
        `}
      >
        {/* LOGO en esquina izquierda, width fijo w-32 */}
        <a href="/" onClick={handleLogoClick} className="flex-shrink-0">
          <img
            src="/assets/logo-header.svg"
            alt="Jotaye Group LLC"
            className="w-32 h-auto"
          />
        </a>

        {/* MENÚ ESCRITORIO */}
        <nav
          className={`
            hidden md:flex space-x-8 font-medium transition-colors duration-300 ease-in-out
            ${isScrolled || !isHome ? "text-gray-800" : "text-white"}
          `}
        >
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (isHome) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                navigate("/");
              }
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

        {/* BOTONES DE IDIOMA ESCRITORIO */}
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

        {/* ÍCONO HAMBURGUESA MÓVIL */}
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

      {/*
        MENÚ MÓVIL DESPLEGABLE
      */}
      {menuOpen && (
        <div
          className={`
            md:hidden w-full transition-opacity duration-300 ease-in-out 
            ${isScrolled || !isHome ? "bg-white/90 text-gray-800" : "bg-black/80 text-white"}
          `}
        >
          <div className="flex flex-col items-center space-y-6 py-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen(false);
                if (isHome) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
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
