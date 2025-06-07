// src/App.jsx
import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import TopSection from "./components/TopSection";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

/**
 * Fuerza scroll-to-top cada vez que cambia de ruta.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

/**
 * Ajusta el padding-top según ruta:
 * - En Home: espacio para vídeo hero (h-64 md:h-80 lg:h-96).
 * - En otras rutas: espacio para header (h-16).
 */
function ContentWithPadding({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const padding = isHome
    ? "pt-64 md:pt-80 lg:pt-96"
    : "pt-16";
  return <div className={padding}>{children}</div>;
}

export default function App() {
  const [language, setLanguage] = useState("es");

  // Si en móvil (<768px), forzar inglés por defecto
  useEffect(() => {
    if (window.innerWidth < 768) {
      setLanguage("en");
    }
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />

      <TopSection
        language={language}
        onLanguageChange={setLanguage}
      />

      <ContentWithPadding>
        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/services" element={<Services language={language} />} />
            <Route
              path="/services/:slug"
              element={<ServiceDetail language={language} />}
            />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </ContentWithPadding>
    </BrowserRouter>
  );
}
