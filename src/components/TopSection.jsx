import { useNavigate, useLocation } from "react-router-dom";

export default function TopSection({ /* ... */ }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (isHome) {
      // Si ya estamos en Home, hacemos “scroll” suave hacia arriba
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Si no estamos en Home, navegamos a "/" (sin recarga completa)
      navigate("/");
    }
  };

  return (
    <header className="h-16 /* ... */">
      <a href="/" onClick={handleLogoClick}>
        <img src="/assets/logo-header.svg" alt="Logo" className="w-32" />
      </a>
      { /* resto del menú… */ }
    </header>
  );
}
