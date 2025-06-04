// src/components/Footer.jsx
import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer({ language }) {
  const lang = language || "es";
  const textoDerechos =
    lang === "es"
      ? `© ${new Date().getFullYear()} Jotaye Group LLC. Todos los derechos reservados.`
      : `© ${new Date().getFullYear()} Jotaye Group LLC. All rights reserved.`;

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center space-y-6">
        {/* Íconos de redes sociales (centrados) */}
        <div className="flex space-x-8 text-2xl">
          <a
            href="https://wa.me/13054172681"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/jotayegroup"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-400 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/JotayeGroupLLC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Derechos reservados */}
        <p className="text-sm">{textoDerechos}</p>
      </div>
    </footer>
  );
}
