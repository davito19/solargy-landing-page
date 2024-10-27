"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image src="/favicon.ico" alt="Solargy Logo" width={40} height={40} />
        <h1 className="text-xl font-bold ml-2">Solargy S.A</h1>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <nav
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center gap-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          <li><Link href="#achievements" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Casos de éxito</Link></li>
          <li><Link href="#features" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Características</Link></li>
          <li><Link href="#services" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Servicios</Link></li>
          <li><Link href="#about-us" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Quiénes Somos</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}