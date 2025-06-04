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
      {/* Header fijo con vídeo en Home y shrink-on-scroll en todas las rutas */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* 
        Reservamos espacio en el topo para el header:
        - En Home, el header ocupa h-64 / md:h-80 / lg:h-96
        - En las demás rutas, el header se encoge a h-16, pero este padding extra no llega a tapar contenido
      */}
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
