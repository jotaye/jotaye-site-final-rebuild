import React from "react";

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 text-xl hover:text-red-500 transition"
          aria-label="Cerrar"
        >
          ×
        </button>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{service.title}</h2>
        <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}
