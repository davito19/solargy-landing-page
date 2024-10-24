import { FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id="contact" className="text-center p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold">Contacto</h2>
      <p className="mt-4">¿Interesado en energía solar? ¡Contáctanos para más información!</p>
      <p className="mt-2">David Bonett Pey</p>
      <p className="mt-1">Teléfono: +57 312 2505311 | Email: contacto@solargysa.com.co</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Envíanos un Mensaje</button>
      <div className="flex justify-center mt-6 space-x-4">
        <a href="https://github.com/davito19" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black">
          <FaGithub size={30} />
        </a>
        <a href="https://instagram.com/david_bonett" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com/DavidBonett1" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-500">
          <FaTwitter size={30} />
        </a>
      </div>
    </footer>
  );
}