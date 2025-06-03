// src/components/Estimator.jsx
import React, { useState } from "react";

export default function Estimator() {
  const [form, setForm] = useState({ metros: "", servicio: "Pintura" });
  const [resultado, setResultado] = useState(null);

  const precios = {
    Pintura: 8,
    Drywall: 15,
    Electricidad: 20,
    Plomería: 18,
    "Instalación de Pisos": 12,
  };

  const calcular = (e) => {
    e.preventDefault();
    const metros = parseFloat(form.metros);
    if (!isNaN(metros) && precios[form.servicio]) {
      const costo = metros * precios[form.servicio];
      setResultado(`Estimado aproximado: $${costo.toFixed(2)} USD`);
    } else {
      setResultado("Por favor, ingresa un valor válido.");
    }
  };

  return (
    <section id="presupuesto" className="py-16 bg-gray-50 fade-in">
      <h3 className="text-3xl font-bold text-center mb-8">Estimador de Presupuesto</h3>
      <form
        onSubmit={calcular}
        className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="number"
          name="metros"
          placeholder="Cantidad de metros cuadrados"
          required
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={form.metros}
          onChange={(e) => setForm({ ...form, metros: e.target.value })}
        />
        <select
          name="servicio"
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={form.servicio}
          onChange={(e) => setForm({ ...form, servicio: e.target.value })}
        >
          {Object.keys(precios).map((servicio, i) => (
            <option key={i} value={servicio}>
              {servicio}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
        >
          Calcular estimado
        </button>
        {resultado && (
          <p className="text-center font-semibold text-green-600 mt-4">{resultado}</p>
        )}
      </form>
    </section>
  );
}
