import React, { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h3 className="text-2xl font-bold mb-4 text-center">Solicita tu Cotización</h3>

      {!submitted ? (
        <form
          action="https://formsubmit.co/jotayegroupllc@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input type="text" name="name" placeholder="Nombre completo" required className="w-full border px-3 py-2 rounded" />
          <input type="email" name="email" placeholder="Correo electrónico" required className="w-full border px-3 py-2 rounded" />
          <input type="tel" name="phone" placeholder="Teléfono" className="w-full border px-3 py-2 rounded" />
          <textarea name="message" rows={4} placeholder="Describe tu proyecto" required className="w-full border px-3 py-2 rounded"></textarea>
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded">
            Enviar Solicitud
          </button>
          <input type="hidden" name="_next" value="https://jotaye.vercel.app/gracias" />
        </form>
      ) : (
        <p className="text-green-600 text-center font-semibold">¡Gracias por tu solicitud! Te contactaremos pronto.</p>
      )}
    </div>
  );
}
