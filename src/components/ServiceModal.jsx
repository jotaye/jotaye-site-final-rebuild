// src/components/ServiceModal.jsx
import React from "react";
import { FaWhatsapp, FaHome } from "react-icons/fa";

const serviceTasks = {
  Plomería: {
    en: [
      "Faucet repair and installation",
      "Garbage disposal installation",
      "Full plumbing for kitchens and bathrooms",
    ],
    es: [
      "Reparación e instalación de faucets",
      "Instalación de garbage disposal",
      "Plomería completa para baños y cocinas",
    ],
  },
  Electricidad: {
    en: ["Outlet and breaker installation", "LED lights and fans", "Diagnostics and repairs"],
    es: ["Instalación de tomas y breakers", "Luces LED y ventiladores", "Diagnósticos y reparaciones"],
  },
  Framing: {
    en: ["Wood structures", "Wall and division building"],
    es: ["Estructuras de madera", "Construcción de muros y divisiones"],
  },
  Drywall: {
    en: ["Drywall sheets", "Durock installation", "Compound application"],
    es: ["Instalación de láminas", "Instalación de Durock", "Aplicación de compound"],
  },
  Pintura: {
    en: ["Interior and exterior painting", "Texturing and repair"],
    es: ["Pintura interior y exterior", "Texturizado y resane"],
  },
  Finish: {
    en: ["Professional finishing details"],
    es: ["Detalles y terminaciones profesionales"],
  },
  Baseboard: {
    en: ["Modern baseboard installation"],
    es: ["Instalación de zócalos modernos"],
  },
  Demolición: {
    en: ["Clean and safe demolitions"],
    es: ["Demoliciones limpias y seguras"],
  },
  Pisos: {
    en: ["Ceramic installation", "Vinyl and porcelain installation"],
    es: ["Instalación de cerámica", "Instalación de vinil y porcelanato"],
  },
  Baños: {
    en: ["Full bathroom remodeling"],
    es: ["Remodelación de baños completos"],
  },
  Cocinas: {
    en: ["Modern kitchen design and installation"],
    es: ["Diseño e instalación de cocinas"],
  },
};

const buttonLabels = {
  Plomería: { en: "Schedule Inspection", es: "Agenda tu revisión" },
  Electricidad: { en: "Electrical Check", es: "Inspección eléctrica" },
  Framing: { en: "Quote Structure", es: "Cotiza tu estructura" },
  Drywall: { en: "Request Installation", es: "Solicita instalación" },
  Pintura: { en: "Get Painting", es: "Pide tu pintura" },
  Finish: { en: "Final Touches", es: "Detalles finales" },
  Baseboard: { en: "Install Baseboards", es: "Instala zócalos" },
  Demolición: { en: "Demolition Quote", es: "Consulta demolición" },
  Pisos: { en: "Renew Your Floor", es: "Renueva tu piso" },
  Baños: { en: "Remodel Bathroom", es: "Remodela tu baño" },
  Cocinas: { en: "Design Your Kitchen", es: "Diseña tu cocina" },
};

export default function ServiceModal({ service, onClose, language = "es" }) {
  if (!service) return null;

  // Determinar título y descripción según idioma
  const title = service.title?.[language] ?? service.title;
  const description = service.description?.[language] ?? service.description;

  // Encontrar la clave en español para mapear tareas y botones
  const key =
    typeof service.title === "object"
      ? Object.entries(service.title).find(([, val]) => val === title)?.[0]
      : service.title;

  const taskList = serviceTasks[key]?.[language] || [];
  const buttonLabel =
    buttonLabels[key]?.[language] ?? (language === "en" ? "Contact us" : "Contáctanos");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative shadow-xl animate-fadeIn border border-gray-200">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 text-2xl hover:text-red-500 transition"
          aria-label="Cerrar"
        >
          ×
        </button>
        <img
          src={service.image}
          alt={title}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">{title}</h2>
        <p className="text-gray-700 text-sm leading-relaxed text-justify mb-2">{description}</p>

        {taskList.length > 0 && (
          <ul className="list-disc list-inside text-gray-600 text-sm mb-4">
            {taskList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        <div className="text-center mt-4 space-x-2">
          <a
            href={`https://wa.me/13054172681?text=Hola,%20me%20interesa%20el%20servicio%20de%20${encodeURIComponent(
              title
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow button-rounded"
          >
            <FaWhatsapp className="mr-2" /> {buttonLabel}
          </a>
          <a
            href="#top"
            className="inline-flex items-center bg-blue-100 hover:bg-blue-200 text-blue-700 px-3 py-2 rounded-full shadow text-sm"
            onClick={onClose}
          >
            <FaHome className="mr-2" /> {language === "en" ? "Home" : "Inicio"}
          </a>
        </div>
      </div>
    </div>
  );
}
