// src/components/Gallery.jsx
import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "./assets/project1.jpg",
  "./assets/project2.jpg",
  "./assets/project3.jpg",
  "./assets/project4.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-16" id="galeria">
      <h3 className="text-3xl font-bold text-center mb-8">Galería de Proyectos</h3>
      <div className="grid md:grid-cols-4 gap-4 px-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Proyecto ${i + 1}`}
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
            className="w-full h-48 object-cover rounded-lg cursor-pointer shadow"
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setIndex((index + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
