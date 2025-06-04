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
      {/* El header (TopSection) siempre está fijo arriba, h-16 */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/*
        Empujamos todo el contenido 4rem (h-16) hacia abajo: 
        así no queda espacio en blanco extra y el <main> empieza justo
        debajo del header.
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
