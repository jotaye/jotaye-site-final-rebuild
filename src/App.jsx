/* MainApp.css */

/* Fondo global en degradado */
body {
  @apply bg-gradient-to-b from-gray-50 to-gray-100;
}

/* Tilt wrapper para transición */
.tilt-wrapper {
  transition: transform 0.2s ease-out;
}

/* Tarjeta 3D con hover */
.card-3d {
  @apply bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-300;
}
.card-3d:hover {
  @apply shadow-2xl scale-105;
}

/* Clases para Swiper (ya cargadas desde index.css, opcional) */
.swiper-container {
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Fade-in animation */
.fade-in {
  animation: fadeIn 1s ease-in-out both;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Separador de sección */
.section-title {
  @apply text-3xl font-bold text-center mb-8;
}
