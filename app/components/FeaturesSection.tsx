"use client";
import Image from 'next/image';
import { useState } from 'react';

export default function FeaturesSection() {
  const [hoverFeature, setHoverFeature] = useState<string | null>(null);

  return (
    <section id="features" className="p-10">
      <h2 className="text-3xl font-semibold text-center mb-8">Características Destacadas</h2>
      <div className="flex flex-wrap justify-around gap-8">
        <div
          className="w-full max-w-sm transition-transform transform hover:scale-105"
          onMouseEnter={() => setHoverFeature('instalacion')}
          onMouseLeave={() => setHoverFeature(null)}
        >
          <Image
            src="/instalacion.webp"
            alt="Instalación de sistemas"
            width={400}
            height={300}
            className={hoverFeature === 'instalacion' ? 'brightness-110' : ''}
          />
          <h3 className="text-xl font-bold mt-4">Instalación Sencilla</h3>
          <p>Nuestros sistemas fotovoltaicos son fáciles de instalar y requieren mínimo mantenimiento.</p>
        </div>
        <div
          className="w-full max-w-sm transition-transform transform hover:scale-105"
          onMouseEnter={() => setHoverFeature('ahorro')}
          onMouseLeave={() => setHoverFeature(null)}
        >
          <Image
            src="/ahorro.webp"
            alt="Ahorro energético"
            width={400}
            height={300}
            className={hoverFeature === 'ahorro' ? 'brightness-110' : ''}
          />
          <h3 className="text-xl font-bold mt-4">Ahorro Energético</h3>
          <p>Reduce significativamente tus facturas de energía con la transición a energía solar.</p>
        </div>
        <div
          className="w-full max-w-sm transition-transform transform hover:scale-105"
          onMouseEnter={() => setHoverFeature('soporte')}
          onMouseLeave={() => setHoverFeature(null)}
        >
          <Image
            src="/soporte.webp"
            alt="Soporte técnico"
            width={400}
            height={300}
            className={hoverFeature === 'soporte' ? 'brightness-110' : ''}
          />
          <h3 className="text-xl font-bold mt-4">Soporte Personalizado</h3>
          <p>Ofrecemos soporte técnico constante y opciones de financiamiento flexibles.</p>
        </div>
      </div>
    </section>
  );
}