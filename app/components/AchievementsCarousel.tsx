"use client"
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function AchievementsCarousel() {
  const images = [
    { src: '/logro1.webp', legend: 'Instalación exitosa de paneles solares en más de 100 hogares.' },
    { src: '/logro2.webp', legend: 'Reducción del consumo energético en un 40% para nuestros clientes.' },
    { src: '/logro3.webp', legend: 'Servicio de soporte técnico eficiente y personalizado.' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="achievements" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-semibold mb-8">Nuestros Logros</h2>
      <div className="relative w-full max-w-2xl mx-auto">
        <div className="flex items-center justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 px-4">
          <button onClick={prevSlide} className="text-gray-600 hover:text-gray-900">
            <FaChevronLeft size={30} />
          </button>
          <button onClick={nextSlide} className="text-gray-600 hover:text-gray-900">
            <FaChevronRight size={30} />
          </button>
        </div>
        <Image
          src={images[currentIndex].src}
          alt={`Logro ${currentIndex + 1}`}
          width={800}
          height={500}
          className="rounded-lg shadow-md mx-auto"
        />
        <p className="mt-4 text-lg font-medium">{images[currentIndex].legend}</p>
      </div>
    </section>
  );
}