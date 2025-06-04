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
 * Componente auxiliar que aplica padding-top dinámico:
 * - Si la ruta es "/", aplica pt-64 md:pt-80 lg:pt-96 (altura del vídeo) + 0 extra,
 *   pero recordemos que el header está sobre el vídeo (h-16), así que en Home queremos
 *   que el contenido comience justo después del vídeo → pt-64 md:pt-80 lg:pt-96.
 * - Para cualquier otra ruta, solo queremos pt-16 (altura del header), sin hueco grande.
 */
function ContentWithPadding({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Relleno dinámico:
  // - En Home: pt-64 md:pt-80 lg:pt-96
  // - En rutas distintas: pt-16
  const paddingTopClasses = isHome
    ? "pt-64 md:pt-80 lg:pt-96"
    : "pt-16";

  return <div className={paddingTopClasses}>{children}</div>;
}

export default function App() {
  const [lang, setLang] = useState("es");
  const toggleLang = (desired) => setLang(desired);

  return (
    <BrowserRouter>
      {/* Header (TopSection) siempre fijo h-16 */}
      <TopSection language={lang} onLanguageChange={toggleLang} />

      {/* 
        Contenedor principal:
        - En Home: aplica pt-64 md:pt-80 lg:pt-96, de modo que el contenido (por ejemplo “Nuestra Historia”)
          comience justo debajo del vídeo (que tiene h-64 md:h-80 lg:h-96) y nunca quede tapado.
        - En rutas distintas: aplica solo pt-16 para que el contenido arranque justo debajo del header.
      */}
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
