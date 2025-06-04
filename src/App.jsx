// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import TopSection from "./components/TopSection";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";

/**
 * Componente que fuerza scroll al tope (top: 0) cada vez que cambia la ruta.
 * De esta forma:
 * - Cuando navegas a /services/:slug, te lleva al inicio de esa página (no al final).
 * - Cuando regresas a /, te posiciona en el tope, dejando window.scrollY = 0,
 *   de modo que TopSection detecte !isScrolled y muestre el vídeo.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Forzamos ir al tope de la página (sin suavizado para que isScrolled quede en false inmediatamente).
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

/**
 * Componente que aplica padding-top dinámico en función de la ruta:
 * - Si estamos en "/", añade pt-64 md:pt-80 lg:pt-96 para dejar espacio al vídeo de Hero.
 * - Si estamos en otra ruta, solo aplica pt-16 para dejar espacio al header.
 */
function ContentWithPadding({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  // En Home, aplicamos pt-64 md:pt-80 lg:pt-96.
  // En cualquier otra ruta, aplicamos pt-16.
  const paddingTop = isHome
    ? "pt-64 md:pt-80 lg:pt-96"
    : "pt-16";

  return <div className={paddingTop}>{children}</div>;
}

export default function App() {
  const [lang, setLang] = useState("es");
  const toggleLang = (desired) => setLang(desired);

  return (
    <BrowserRouter>
      {/* Cada vez que cambie la ruta, ScrollToTop hará scroll a (0,0). */}
      <ScrollToTop />

      {/* Header fijo arriba (h-16) */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* 
        ContentWithPadding empuja todo el contenido hacia abajo:
        - En "/" → pt-64 md:pt-80 lg:pt-96 para dejar espacio al vídeo hero.
        - En otras rutas → pt-16 para dejar espacio al header y nada más.
      */}
      <ContentWithPadding>
        <main>
          <Routes>
            <Route path="/" element={<Home language={lang} />} />
            <Route path="/services" element={<Services language={lang} />} />
            <Route
              path="/services/:slug"
              element={<ServiceDetail language={lang} />}
            />
            <Route path="/contact" element={<Contact language={lang} />} />
          </Routes>
        </main>
        <Footer language={lang} />
      </ContentWithPadding>
    </BrowserRouter>
  );
}
