// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
      {/* El header (TopSection) siempre está fijo en la parte superior */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* 
        Empujamos TODO el contenido de la app hacia abajo solo 4rem (h-16), 
        de modo que el <main> comience inmediatamente debajo del header fijo.
        Así nunca queda un “hueco extra” en blanco: el header ya ocupa 4rem de alto.
      */}
      <div className="pt-16">
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
      </div>
    </BrowserRouter>
  );
}
