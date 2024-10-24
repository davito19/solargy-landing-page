import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-xl font-bold">Solargy</h1>
      <nav>
        <ul className="flex gap-4">
          <li><Link href="#propuesta" className="hover:text-blue-500">Propuesta de Valor</Link></li>
          <li><Link href="#features" className="hover:text-blue-500">Características</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}