
import React, { useState } from "react";

export default function BudgetEstimator() {
  const [type, setType] = useState("");
  const [area, setArea] = useState("");
  const [price, setPrice] = useState(null);

  const handleEstimate = (e) => {
    e.preventDefault();
    if (!type || !area) return;
    const base = 50; // Precio por m²
    const total = parseFloat(area) * base;
    setPrice(total);
  };

  return (
    <section className="py-16 bg-gray-50" id="presupuesto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Calcula tu presupuesto</h2>
      <form onSubmit={handleEstimate} className="max-w-md mx-auto space-y-4 px-4">
        <input value={type} onChange={e => setType(e.target.value)} type="text" placeholder="Tipo de servicio" className="w-full border px-4 py-2 rounded" required />
        <input value={area} onChange={e => setArea(e.target.value)} type="number" placeholder="Área en m²" className="w-full border px-4 py-2 rounded" required />
        <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">Calcular</button>
        {price && <p className="text-center text-lg font-semibold text-green-600 mt-4">Estimado: ${price.toFixed(2)} USD</p>}
      </form>
    </section>
  );
}
