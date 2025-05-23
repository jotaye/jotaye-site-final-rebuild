import React from "react";

export default function ServiceModal({ isOpen, onClose, service }) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg font-bold">
          ×
        </button>
        <img src={service.image} alt={service.title} className="w-full h-48 object-cover rounded-md mb-4" />
        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600 text-sm">
          {service.description || "Ofrecemos este servicio con calidad garantizada y atención profesional personalizada."}
        </p>
      </div>
    </div>
  );
}
