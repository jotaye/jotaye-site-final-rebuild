// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <div className="relative w-full h-64 bg-gray-800">
      <video
        src="/assets/construccion1.mov"
        className="w-full h-full object-cover opacity-50"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Jotaye Group LLC</h1>
      </div>
    </div>
  );
}
