import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t.services.title}
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {t.services.subtitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Romana Vítková
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="space-y-4">
            <a
              href="mailto:rv.romanavitkova@gmail.com"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Mail size={20} className="mr-3" />
              rv.romanavitkova@gmail.com
            </a>
            <a
              href="tel:+420734113441"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Phone size={20} className="mr-3" />
              +420 734 113 441
            </a>
            <div className="flex items-start text-gray-600">
              <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
              <span>Praha, Česká republika</span>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">{t.footer.followUs}</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/romana.vitkova_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/RomanaVitkov"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
            >
              <Facebook size={22} />
            </a>
            
            <a
              href="https://www.linkedin.com/in/romana-vitkova"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gradient-to-tr from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
>
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
