// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopSection from "./components/TopSection";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";

export default function App() {
  const [lang, setLang] = useState("es");
  const toggleLang = (desired) => setLang(desired);

  return (
    <BrowserRouter>
      {/* Header fijo con vídeo + logo y shrink-on-scroll */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* Empuja el contenido justo debajo del Hero (h-64 / md:h-80 / lg:h-96) */}
      <div className="pt-64 md:pt-80 lg:pt-96">
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

        {/* Footer con redes sociales y texto de derechos */}
        <Footer language={lang} />
      </div>
    </BrowserRouter>
  );
}
