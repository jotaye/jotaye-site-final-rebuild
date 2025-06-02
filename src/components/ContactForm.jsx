import React, { useState } from "react";

export default function ContactForm({ language = "es" }) {
  const [submitted, setSubmitted] = useState(false);

  const texts = {
    title: {
      es: "Solicita tu Cotización",
      en: "Request a Quote",
    },
    name: {
      es: "Nombre completo",
      en: "Full name",
    },
    email: {
      es: "Correo electrónico",
      en: "Email address",
    },
    phone: {
      es: "Teléfono",
      en: "Phone number",
    },
    message: {
      es: "Describe tu proyecto",
      en: "Describe your project",
    },
    submit: {
      es: "Enviar Solicitud",
      en: "Send Request",
    },
    thankyou: {
      es: "¡Gracias por tu solicitud! Te contactaremos pronto.",
      en: "Thank you for your request! We'll contact you soon.",
    },
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold mb-4 text-center text-gray-800">
        {texts.title[language]}
      </h3>

      {!submitted ? (
        <form
          action="https://formsubmit.co/jotayegroupllc@gmail.com"
          method="POST"
          onSubmit={() => setSubmitted(true)}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder={texts.name[language]}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            name="email"
            placeholder={texts.email[language]}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder={texts.phone[language]}
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            name="message"
            rows={4}
            placeholder={texts.message[language]}
            required
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white w-full py-2 rounded transition font-semibold"
          >
            {texts.submit[language]}
          </button>
          <input
            type="hidden"
            name="_next"
            value="https://jotaye.vercel.app/gracias"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      ) : (
        <p className="text-green-600 text-center font-semibold">
          {texts.thankyou[language]}
        </p>
      )}
    </div>
  );
}
