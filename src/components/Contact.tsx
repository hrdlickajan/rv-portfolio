import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
            {t.contact.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Romana Vítková - fitness trenérka působící v Praze
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
          <div className="space-y-4">
            <a
              href="mailto:info@example.com"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Mail size={20} className="mr-3" />
              info@example.com
            </a>
            <a
              href="tel:+420123456789"
              className="flex items-center text-gray-600 hover:text-orange-500 transition-colors"
            >
              <Phone size={20} className="mr-3" />
              +420 123 456 789
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
              className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
