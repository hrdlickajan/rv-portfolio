import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Romana Vítková
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Domů
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              O mně
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Služby
            </a>
            <a href="#contact" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium">
              Kontakt
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Domů
            </a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              O mně
            </a>
            <a href="#services" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Služby
            </a>
            <a href="#testimonials" className="block text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Reference
            </a>
            <a href="#contact" className="block bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-medium text-center">
              Kontakt
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
