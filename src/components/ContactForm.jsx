// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm({ language = "es" }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const lang = language === "en" ? "en" : "es";

  const placeholders = {
    nombre: lang === "es" ? "Nombre completo" : "Full Name",
    email: lang === "es" ? "Correo electrónico" : "Email",
    telefono: lang === "es" ? "Teléfono" : "Phone",
    mensaje: lang === "es" ? "Tu mensaje..." : "Your message...",
    enviar: lang === "es" ? "Enviar" : "Submit",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí va tu lógica para enviar el formulario (e.g. fetch / axios)
    console.log("Formulario enviado:", formData);
    // Luego, limpiar campos si deseas:
    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 px-4">
      {/* NOMBRE */}
      <div className="flex flex-col">
        <label
          htmlFor="nombre"
          className="mb-1 text-gray-700 font-medium"
        >
          {lang === "es" ? "Nombre" : "Name"}
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder={placeholders.nombre}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      {/* EMAIL */}
      <div className="flex flex-col">
        <label
          htmlFor="email"
          className="mb-1 text-gray-700 font-medium"
        >
          {lang === "es" ? "Correo electrónico" : "Email"}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={placeholders.email}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          required
        />
      </div>

      {/* TELÉFONO */}
      <div className="flex flex-col">
        <label
          htmlFor="telefono"
          className="mb-1 text-gray-700 font-medium"
        >
          {lang === "es" ? "Teléfono" : "Phone"}
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder={placeholders.telefono}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      {/* MENSAJE */}
      <div className="flex flex-col">
        <label
          htmlFor="mensaje"
          className="mb-1 text-gray-700 font-medium"
        >
          {lang === "es" ? "Mensaje" : "Message"}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder={placeholders.mensaje}
          rows={5}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
          required
        />
      </div>

      {/* BOTÓN ENVIAR */}
      <div className="text-center">
        <button
          type="submit"
          className="bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-full transition"
        >
          {placeholders.enviar}
        </button>
      </div>
    </form>
  );
}
