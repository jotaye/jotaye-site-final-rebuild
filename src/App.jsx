
import React from "react";
import Services from "./Services";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      <header className="bg-[#1e293b] text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Jotaye Group LLC</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#servicios" className="hover:text-orange-400 transition">Servicios</a>
            <a href="https://wa.me/13054172681" className="hover:text-green-400 transition">WhatsApp</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-4 text-orange-600">Bienvenido a Jotaye Group LLC</h2>
        <p className="text-gray-700 text-lg mb-6">
          Servicios de construcción y remodelación en South Florida.
        </p>
        <a href="https://wa.me/13054172681" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full">
          Contáctanos por WhatsApp
        </a>
      </main>

      <Services />

      <footer className="bg-[#1e293b] text-white py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-sm text-center">
          © {new Date().getFullYear()} Jotaye Group LLC. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
