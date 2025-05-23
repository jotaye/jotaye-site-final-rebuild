import React from "react";
import Services from "./Services";
import flyer from "./assets/flayer-jotaye.jpg";

export default function App() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <header className="bg-[#1e293b] text-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Jotaye Group LLC</h1>
          <nav className="space-x-4 hidden md:block">
            <a href="#servicios" className="hover:text-orange-400 transition">Servicios</a>
            <a href="#presupuesto" className="hover:text-orange-400 transition">Estimador</a>
            <a href="#testimonios" className="hover:text-orange-400 transition">Testimonios</a>
            <a href="#reservas" className="hover:text-orange-400 transition">Reservas</a>
            <a href="#faq" className="hover:text-orange-400 transition">FAQ</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="text-center py-16">
          <h2 className="text-4xl font-bold mb-4">Construcción y Remodelación Profesional</h2>
          <p className="text-gray-600 mb-6">Soluciones completas para transformar tus espacios.</p>
          <a href="#reservas" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full">Solicita tu estimado</a>
        </section>

        <Services />

        <section className="py-16 text-center">
          <h3 className="text-3xl font-bold mb-8">Flyer Promocional</h3>
          <img src={flyer} alt="Flyer Promocional" className="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold text-center mb-8">Misión, Visión y Objetivos</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Misión</h4>
              <p className="text-sm text-gray-600">Brindar servicios de construcción con altos estándares de calidad.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Visión</h4>
              <p className="text-sm text-gray-600">Ser líderes en remodelación y construcción en South Florida.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-md transition">
              <h4 className="font-semibold text-xl mb-2">Objetivos</h4>
              <p className="text-sm text-gray-600">Cumplir expectativas, plazos y calidad en cada proyecto.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1e293b] text-white py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Jotaye Group LLC - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
