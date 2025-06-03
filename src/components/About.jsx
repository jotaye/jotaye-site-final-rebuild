// src/components/About.jsx
import React from "react";
import { aboutContent } from "../locales/aboutContent";

const About = () => {
  const userLang = navigator.language.startsWith("es") ? "es" : "en";
  const content = aboutContent[userLang];

  return (
    <section className="p-6 md:p-12 fade-in bg-white">
      <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
      <h3 className="text-xl font-semibold mb-4">{content.heading}</h3>
      <p className="mb-4">{content.paragraph1}</p>
      <p className="mb-4">{content.paragraph2}</p>
      <p className="mb-4">{content.paragraph3}</p>
      <p className="font-semibold italic">{content.footer}</p>
    </section>
  );
};

export default About;
