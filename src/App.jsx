// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
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
      <Header language={lang} onLanguageChange={toggleLang} />

      <main>
        <Routes>
          {/* Página principal */}
          <Route path="/" element={<Home language={lang} />} />

          {/* Listado de servicios */}
          <Route path="/services" element={<Services language={lang} />} />

          {/* Detalle de un servicio específico */}
          <Route
            path="/services/:slug"
            element={<ServiceDetail language={lang} />}
          />

          {/* Nueva página de contacto */}
          <Route path="/contact" element={<Contact language={lang} />} />
        </Routes>
      </main>

      <Footer language={lang} />
    </BrowserRouter>
  );
}
