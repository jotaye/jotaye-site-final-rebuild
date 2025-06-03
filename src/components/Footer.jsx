// src/components/Footer.jsx
import React from "react";

export default function Footer({ language }) {
  const lang = language || "es";
  const t = {
    es: {
      rights:
        "© " +
        new Date().getFullYear() +
        " Jotaye Group LLC. Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
    },
    en: {
      rights:
        "© " +
        new Date().getFullYear() +
        " Jotaye Group LLC. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
    },
  }[lang];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">{t.rights}</p>
        <div className="flex space-x-4">
          <a href="/privacy" className="hover:text-white transition text-sm">
            {t.privacy}
          </a>
          <a href="/terms" className="hover:text-white transition text-sm">
            {t.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
