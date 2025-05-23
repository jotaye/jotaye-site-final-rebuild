import React from "react";

export default function ServiceModal({ service, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          &times;
        </button>
        <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <p className="text-gray-600 text-sm text-center">{service.description}</p>
      </div>
    </div>
  );
}
