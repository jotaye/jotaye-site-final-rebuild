// src/data/services.js

import plomeriaImg from "../assets/plomería.jpg";
import electricidadImg from "../assets/electricidad.jpg";
import framingImg from "../assets/framing.jpg";
import drywallImg from "../assets/drywall.jpg";
import pinturaImg from "../assets/pintura.jpg";
import finishImg from "../assets/finish.jpg";
import baseboardImg from "../assets/baseboard.jpg";
import demolicionImg from "../assets/demolición.jpg";
import pisosImg from "../assets/pisos.jpg";
import banosImg from "../assets/baños.jpg";
import cocinasImg from "../assets/cocinas.jpg";

const services = [
  {
    title: { es: "Plomería", en: "Plumbing" },
    description: {
      es: "Instalaciones y reparaciones de tuberías.",
      en: "Pipe installations and repairs.",
    },
    image: plomeriaImg,
  },
  {
    title: { es: "Electricidad", en: "Electricity" },
    description: {
      es: "Instalaciones eléctricas residenciales y comerciales.",
      en: "Residential and commercial electrical installations.",
    },
    image: electricidadImg,
  },
  {
    title: { es: "Framing", en: "Framing" },
    description: {
      es: "Estructuras sólidas para muros y techos.",
      en: "Solid structures for walls and roofs.",
    },
    image: framingImg,
  },
  {
    title: { es: "Drywall", en: "Drywall" },
    description: {
      es: "Instalación y acabado de paneles de yeso.",
      en: "Drywall installation and finishing.",
    },
    image: drywallImg,
  },
  {
    title: { es: "Pintura", en: "Painting" },
    description: {
      es: "Aplicación de pintura interior y exterior.",
      en: "Interior and exterior painting services.",
    },
    image: pinturaImg,
  },
  {
    title: { es: "Finish", en: "Finish" },
    description: {
      es: "Acabados profesionales para detalles finos.",
      en: "Professional finishes for fine details.",
    },
    image: finishImg,
  },
  {
    title: { es: "Baseboard", en: "Baseboard" },
    description: {
      es: "Instalación de zócalos decorativos.",
      en: "Installation of decorative baseboards.",
    },
    image: baseboardImg,
  },
  {
    title: { es: "Demolición", en: "Demolition" },
    description: {
      es: "Demoliciones controladas y limpias.",
      en: "Controlled and clean demolitions.",
    },
    image: demolicionImg,
  },
  {
    title: { es: "Pisos", en: "Flooring" },
    description: {
      es: "Instalación de cerámica, porcelanato y vinil.",
      en: "Ceramic, porcelain and vinyl flooring installation.",
    },
    image: pisosImg,
  },
  {
    title: { es: "Baños", en: "Bathrooms" },
    description: {
      es: "Remodelación completa de baños.",
      en: "Complete bathroom remodeling.",
    },
    image: banosImg,
  },
  {
    title: { es: "Cocinas", en: "Kitchens" },
    description: {
      es: "Diseño e instalación de cocinas modernas.",
      en: "Modern kitchen design and installation.",
    },
    image: cocinasImg,
  },
];

export default services;
