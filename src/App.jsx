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
      {/* TopSection (fijo en la parte superior) */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* Contenedor principal con espacio superior igual a la altura de TopSection */}
      <div className="pt-64">
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

        {/* Footer con íconos centrados */}
        <Footer language={lang} />
      </div>
    </BrowserRouter>
  );
}
