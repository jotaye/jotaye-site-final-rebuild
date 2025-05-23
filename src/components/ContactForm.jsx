import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">Solicita tu Cotización</h3>

      {!submitted ? (
        <form
          action="https://formsubmit.co/jotayegroupllc@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Nombre completo" required className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="email" name="email" placeholder="Correo electrónico" required className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <input type="tel" name="phone" placeholder="Teléfono" className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400" />
          <textarea name="message" rows={4} placeholder="Describe tu proyecto" required className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded transition">
            Enviar Solicitud
          </button>
          <input type="hidden" name="_next" value="https://jotaye.vercel.app/gracias" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      ) : (
        <p className="text-green-600 text-center font-semibold">¡Gracias por tu solicitud! Te contactaremos pronto.</p>
      )}
    </div>
  );
}
