import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/82 border-b border-orange-100/60 shadow-[0_2px_24px_rgba(249,115,22,0.07)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="font-display xs:text-md sm:text-lg md:text-xl font-bold tracking-widest uppercase bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent leading-none">
              Romana Vítková
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-gray-700 font-semibold">
              {t.header.home}
            </a>
            <a href="#about" className="nav-link text-gray-700 font-semibold">
              {t.header.about}
            </a>
            <a href="#services" className="nav-link text-gray-700 font-semibold">
              {t.header.services}
            </a>
            <a href="#contact" className="btn-sporty bg-orange-500 text-white px-6 py-2 hover:bg-orange-600">
              {t.header.contact}
            </a>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-orange-100 mt-2">
            <a href="#home" className="block text-gray-700 hover:text-orange-500 transition-colors font-semibold">
              {t.header.home}
            </a>
            <a href="#about" className="block text-gray-700 hover:text-orange-500 transition-colors font-semibold">
              {t.header.about}
            </a>
            <a href="#services" className="block text-gray-700 hover:text-orange-500 transition-colors font-semibold">
              {t.header.services}
            </a>
            <a href="#contact" className="block btn-sporty bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 text-center w-fit">
              {t.header.contact}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
