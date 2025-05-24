import React, { useState } from "react";

const PRICES = {
  "Plomería": 80,
  "Electricidad": 100,
  "Framing": 90,
  "Drywall": 75,
  "Pintura": 50,
  "Finish": 60,
  "Baseboard": 40,
  "Demolición": 70,
  "Pisos": 85,
  "Baños": 120,
  "Cocinas": 150,
};

export default function Estimator() {
  const [selected, setSelected] = useState([]);
  const [area, setArea] = useState("");
  const [estimate, setEstimate] = useState(null);

  const toggleService = (service) => {
    setSelected(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const calculate = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || areaNum <= 0) {
      alert("Ingrese un área válida.");
      return;
    }
    const total = selected.reduce((sum, service) => sum + PRICES[service] * areaNum, 0);
    setEstimate(total);
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow text-center">
      <h3 className="text-2xl font-bold mb-4">Estimador de Presupuesto</h3>
      <p className="text-sm text-gray-600 mb-4">Selecciona los servicios y el área estimada (en m²)</p>
      
      <div className="grid grid-cols-2 gap-2 mb-4">
        {Object.keys(PRICES).map(service => (
          <button
            key={service}
            onClick={() => toggleService(service)}
            className={`px-2 py-1 border rounded text-sm ${selected.includes(service) ? "bg-orange-400 text-white" : "bg-gray-100"}`}
          >
            {service}
          </button>
        ))}
      </div>

      <input
        type="number"
        placeholder="Área en m²"
        value={area}
        onChange={e => setArea(e.target.value)}
        className="w-full px-3 py-2 border rounded mb-4"
      />

      <button
        onClick={calculate}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
      >
        Calcular Estimado
      </button>

      {estimate !== null && (
        <p className="mt-4 text-green-600 font-semibold">Costo estimado: ${estimate.toFixed(2)} USD</p>
      )}
    </div>
  );
}
