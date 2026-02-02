import { useLanguage } from '../LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 ml-4">
      <Globe size={18} className="text-gray-600" />
      <div className="flex gap-1 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setLanguage('cs')}
          className={`px-3 py-1 rounded-full font-medium transition-all ${
            language === 'cs'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:text-orange-500'
          }`}
        >
          CZ
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 rounded-full font-medium transition-all ${
            language === 'en'
              ? 'bg-orange-500 text-white'
              : 'text-gray-600 hover:text-orange-500'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
