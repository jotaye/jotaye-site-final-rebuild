// src/components/BookForm.jsx
import React from "react";

export default function BookForm() {
  return (
    <section className="py-16 bg-white fade-in" id="reservas">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Reserva tu cita</h2>
      <form className="max-w-xl mx-auto space-y-4 px-4">
        <input
          type="text"
          placeholder="Nombre completo"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="tel"
          placeholder="Teléfono"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <input
          type="date"
          className="w-full border px-4 py-2 rounded"
          required
        />
        <textarea
          placeholder="Descripción del servicio"
          className="w-full border px-4 py-2 rounded"
          rows="4"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Enviar reserva
        </button>
      </form>
    </section>
  );
}
