// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Asegúrate de que estos tres archivos existan en src/pages/
// y exporten componentes React funcionales:
// - Home.jsx
// - Services.jsx
// - ServiceDetail.jsx
import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";

export default function App() {
  const [lang, setLang] = useState("es"); // Idioma inicial: "es" o "en"

  const toggleLang = (desired) => {
    setLang(desired);
  };

  return (
    <BrowserRouter>
      {/* Header recibe el idioma actual y la función para cambiarlo */}
      <Header language={lang} onLanguageChange={toggleLang} />

      {/* Definición de rutas */}
      <main>
        <Routes>
          {/* Página de inicio */}
          <Route path="/" element={<Home language={lang} />} />

          {/* Listado de servicios */}
          <Route
            path="/services"
            element={<Services language={lang} />}
          />

          {/* Detalle de un servicio específico (por slug) */}
          <Route
            path="/services/:slug"
            element={<ServiceDetail language={lang} />}
          />

          {/* Si tienes otras páginas (por ejemplo, contacto), agrégalas aquí: */}
          {/*
          <Route
            path="/contact"
            element={<ContactPage language={lang} />}
          />
          */}
        </Routes>
      </main>

      {/* Footer recibe el idioma para mostrar texto traducido */}
      <Footer language={lang} />
    </BrowserRouter>
  );
}
