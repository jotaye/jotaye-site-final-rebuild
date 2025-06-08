// src/components/ContactForm.jsx
import React, { useState } from "react";

export default function ContactForm({ language }) {
  const lang = language || "es";
  const labels = {
    es: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      submit: "Enviar",
    },
    en: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      submit: "Send",
    },
  }[lang];

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // aquí va tu lógica de envío...
    alert(lang === "es" ? "Formulario enviado" : "Form submitted");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre */}
      <div>
        <label className="block mb-2 text-gray-300">{labels.name}</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder={labels.name}
          className="
            w-full p-3 rounded border border-gray-300
            bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-orange-500
          "
          required
        />
      </div>

      {/* Correo */}
      <div>
        <label className="block mb-2 text-gray-300">{labels.email}</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={labels.email}
          className="
            w-full p-3 rounded border border-gray-300
            bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-orange-500
          "
          required
        />
      </div>

      {/* Teléfono */}
      <div>
        <label className="block mb-2 text-gray-300">{labels.phone}</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder={labels.phone}
          className="
            w-full p-3 rounded border border-gray-300
            bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-orange-500
          "
        />
      </div>

      {/* Mensaje */}
      <div>
        <label className="block mb-2 text-gray-300">{labels.message}</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder={labels.message}
          rows={5}
          className="
            w-full p-3 rounded border border-gray-300
            bg-white text-gray-900 placeholder-gray-500
            focus:outline-none focus:ring-2 focus:ring-orange-500
          "
          required
        />
      </div>

      {/* Botón */}
      <div className="text-center">
        <button
          type="submit"
          className="
            px-6 py-3 bg-orange-500 text-white font-semibold
            rounded shadow hover:bg-orange-600 transition
          "
        >
          {labels.submit}
        </button>
      </div>
    </form>
  );
}
