import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  { src: "./assets/gallery1.jpg" },
  { src: "./assets/gallery2.jpg" },
  { src: "./assets/gallery3.jpg" },
  { src: "./assets/gallery4.jpg" },
  { src: "./assets/gallery5.jpg" },
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-100" id="galeria">
      <h3 className="text-3xl font-bold text-center mb-12">Galería de Proyectos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Proyecto ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="cursor-pointer object-cover h-48 w-full rounded shadow"
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
      />
    </section>
  );
}

