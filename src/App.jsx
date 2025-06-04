// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import TopSection from "./components/TopSection";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";

/**
 * Contenedor con padding dinámico:
 * - Si la ruta actual es "/", usa pt-64 md:pt-80 lg:pt-96 para empujar
 *   el contenido justo debajo del vídeo (h-64/md:h-80/lg:h-96).
 * - En otras rutas, usa pt-16 para que el contenido arranque bajo el header.
 */
function ContentWithPadding({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

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
      {/* El header (TopSection) se monta siempre arriba */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

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
