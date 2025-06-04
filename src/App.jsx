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

  // Con useLocation podemos ajustar dinámicamente el padding
  // según la ruta en la que estemos:
  // - Si estamos en "/", dejamos pt-64 md:pt-80 lg:pt-96 para el hero grande.
  // - Si estamos en cualquier otra ruta, podemos usar pt-16 (la altura del header reducido),
  //   de modo que no quede esa franja blanca grande arriba.
  //
  // Para ello, extraemos 'pathname' con un componente intermedio.
  return (
    <BrowserRouter>
      <TopSection language={lang} onLanguageChange={toggleLang} />

      <ContentWithPadding>
        <Footer language={lang} />
      </ContentWithPadding>
    </BrowserRouter>
  );
}

// Componente auxiliar que aplica padding top según la ruta actual
function ContentWithPadding({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Si estamos en Home, el header inicialmente mide h-64 md:h-80 lg:h-96,
  // así que necesitamos ese padding: pt-64 md:pt-80 lg:pt-96.
  // En cualquier otra ruta, usaremos pt-16 para que el contenido quede justo
  // debajo del header pequeño, sin franja extra.
  const paddingClasses = isHome
    ? "pt-64 md:pt-80 lg:pt-96"
    : "pt-16";

  return <div className={paddingClasses}>{children}</div>;
}
