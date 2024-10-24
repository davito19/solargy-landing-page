import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center p-10 bg-gradient-to-r from-green-400 to-blue-500">
      <div>
        <h1 className="text-4xl font-bold text-white">Transición a Energía Solar</h1>
        <p className="mt-4 text-white">Accede a energía limpia y sostenible con Solargy S.A. Descubre cómo reducir tus facturas energéticas y proteger el medio ambiente.</p>
        <button className="mt-6 px-6 py-2 bg-white text-green-600 rounded-lg shadow-md hover:bg-gray-200">Contáctanos</button>
      </div>
      <div className="mt-10 w-full max-w-lg">
        <Image src="/solar.png" alt="Paneles solares" width={700} height={475} className="rounded-lg" />
      </div>
    </section>
  );
}