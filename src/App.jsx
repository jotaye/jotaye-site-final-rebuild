// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Estas páginas debes tenerlas en `src/pages/` (o crearlas):
// - Home.jsx
// - Services.jsx
// - ServiceDetail.jsx
// Si aún no las tienes, revisa los ejemplos en respuestas anteriores.
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  const [lang, setLang] = useState("es"); // 'es' o 'en'

  const toggleLang = (desired) => {
    setLang(desired);
  };

  return (
    <BrowserRouter>
      {/* Pasamos el idioma y toggle al Header */}
      <Header language={lang} onLanguageChange={toggleLang} />

      {/* Rutas principales */}
      <main>
        <Routes>
          <Route path="/" element={<Home language={lang} />} />
          <Route
            path="/services"
            element={<Services language={lang} />}
          />
          <Route
            path="/services/:slug"
            element={<ServiceDetail language={lang} />}
          />
          {/* Si tuvieras página de contacto, agrégala aquí, por ejemplo:
          <Route path="/contact" element={<ContactPage language={lang} />} />
          */}
        </Routes>
      </main>

      <Footer language={lang} />
    </BrowserRouter>
  );
}
