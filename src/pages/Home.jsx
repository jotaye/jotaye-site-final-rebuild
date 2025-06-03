// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Home({ language }) {
  const lang = language || "es";
  const t = {
    es: {
      welcome: "Bienvenido a Jotaye Group LLC",
      seeServices: "Ver Servicios",
    },
    en: {
      welcome: "Welcome to Jotaye Group LLC",
      seeServices: "See Services",
    },
  }[lang];

  return (
    <div className="py-16 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold mb-6">{t.welcome}</h1>
      <Link
        to="/services"
        className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full hover:bg-orange-700 transition"
      >
        {t.seeServices}
      </Link>
    </div>
  );
}
