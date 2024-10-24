export default function ServicesSection() {
    return (
      <section id="services" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-around gap-8">
          <div className="w-full max-w-sm">
            <h3 className="text-xl font-bold">Consultoría Energética</h3>
            <p>Evaluamos el consumo energético de tu hogar o negocio y proponemos soluciones para optimizar el uso de la energía solar.</p>
          </div>
          <div className="w-full max-w-sm">
            <h3 className="text-xl font-bold">Mantenimiento de Sistemas Fotovoltaicos</h3>
            <p>Ofrecemos servicios de mantenimiento para garantizar que tu sistema funcione al máximo de su capacidad y duración.</p>
          </div>
          <div className="w-full max-w-sm">
            <h3 className="text-xl font-bold">Leasing de Sistemas Fotovoltaicos</h3>
            <p>Financiamos la instalación de sistemas fotovoltaicos sin necesidad de inversión inicial significativa.</p>
          </div>
        </div>
      </section>
    );
  }