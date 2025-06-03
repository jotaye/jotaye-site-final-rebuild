// src/data/services.js
const services = [
  {
    title: { es: "Plomería", en: "Plumbing" },
    description: {
      es: "Instalaciones y reparaciones de tuberías.",
      en: "Pipe installations and repairs.",
    },
    image: "/assets/plomería.jpg",       // Fallback si no hay vídeo
    video: "/assets/plomería.mov",       // Vídeo .mov para más interactividad
  },
  {
    title: { es: "Electricidad", en: "Electricity" },
    description: {
      es: "Instalaciones eléctricas residenciales y comerciales.",
      en: "Residential and commercial electrical installations.",
    },
    image: "/assets/electricidad.jpg",
    video: "/assets/electricidad.mov",
  },
  {
    title: { es: "Framing", en: "Framing" },
    description: {
      es: "Estructuras sólidas para muros y techos.",
      en: "Solid structures for walls and roofs.",
    },
    image: "/assets/framing.jpg",
    video: "/assets/framing.mov",
  },
  {
    title: { es: "Drywall", en: "Drywall" },
    description: {
      es: "Colocación y acabado de paneles drywall.",
      en: "Drywall panel installation and finishing.",
    },
    image: "/assets/drywall.jpg",
    video: "/assets/drywall.mov",
  },
  {
    title: { es: "Pintura", en: "Painting" },
    description: {
      es: "Pintura interior y exterior con acabados de calidad.",
      en: "Interior and exterior painting with quality finishes.",
    },
    image: "/assets/pintura.jpg",
    video: "/assets/pintura.mov",
  },
];

export default services;
