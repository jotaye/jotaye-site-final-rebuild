import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Componente auxiliar para el padding dinámico:
function ContentWithPadding({ children }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  // En Home: aplicamos pt-64 md:pt-80 lg:pt-96 para que el contenido aparezca justo
  // debajo del vídeo. En cualquier otra ruta, usamos pt-16 para que comience justo
  // bajo el header de 4rem.
  const classes = isHome
    ? "pt-64 md:pt-80 lg:pt-96"
    : "pt-16";

  return <div className={classes}>{children}</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <TopSection /* ... */ />

      <ContentWithPadding>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </ContentWithPadding>
    </BrowserRouter>
  );
}
