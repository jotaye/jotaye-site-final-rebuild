// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm({ language }) {
  const lang = language || "es";
  const t = {
    es: {
      name: "Nombre",
      email: "Correo",
      message: "Mensaje",
      submit: "Enviar",
    },
    en: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Submit",
    },
  }[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías integrar tu lógica de envío (API, emailjs, etc.)
    console.log("Form submitted:", formData);
    alert(lang === "es" ? "¡Gracias por contactarnos!" : "Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">{t.name}</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-orange-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">{t.email}</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-orange-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">{t.message}</label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-orange-500"
        />
      </div>
      <button
        type="submit"
        className="bg-orange-600 text-white px-6 py-3 rounded hover:bg-orange-700 transition"
      >
        {t.submit}
      </button>
    </form>
  );
}
