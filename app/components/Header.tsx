import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/favicon.ico" alt="Solargy Logo" width={40} height={40} />
        <h1 className="text-xl font-bold ml-2">Solargy S.A</h1>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="#propuesta" className="hover:text-blue-500">Propuesta de Valor</Link></li>
          <li><Link href="#features" className="hover:text-blue-500">Características</Link></li>
          <li><Link href="#services" className="hover:text-blue-500">Servicios</Link></li>
          <li><Link href="#about-us" className="hover:text-blue-500">Quiénes Somos</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}