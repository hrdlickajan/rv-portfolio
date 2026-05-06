import { Users, Zap, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
          <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4 leading-none">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hybridní spolupráce */}
          <div className="flat-card p-8 rounded-xl animate-on-scroll" data-delay="0s">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
              <Zap size={20} className="text-orange-500" />
            </div>
            <h3 className="font-display text-2xl text-gray-900 mb-3">{t.services.hybridCoaching}</h3>
            <p className="text-gray-500 leading-relaxed mb-4">{t.services.hybridCoachingDesc}</p>
            <p className="text-sm font-semibold text-gray-700 mb-2">{t.services.includes}</p>
            <ul className="space-y-1 mb-4">
              {t.services.hybridCoachingIncludes.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-500 text-sm">
                  <span className="text-orange-400 font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-500 font-medium italic">{t.services.hybridCoachingIdeal}</p>
          </div>

          {/* Online spolupráce */}
          <div className="flat-card p-8 rounded-xl animate-on-scroll" data-delay="0.15s">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4">
              <Users size={20} className="text-orange-500" />
            </div>
            <h3 className="font-display text-2xl text-gray-900 mb-3">{t.services.onlineCoaching}</h3>
            <p className="text-gray-500 leading-relaxed mb-4">{t.services.onlineCoachingDesc}</p>
            <p className="text-sm font-semibold text-gray-700 mb-2">{t.services.includes}</p>
            <ul className="space-y-1 mb-4">
              {t.services.onlineCoachingIncludes.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-500 text-sm">
                  <span className="text-orange-400 font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-500 font-medium italic">{t.services.onlineCoachingIdeal}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Je spolupráce pro tebe? */}
          <div className="flat-card border-l-4 border-l-orange-400 p-8 rounded-xl animate-on-scroll" data-delay="0s">
            <h3 className="font-display text-2xl text-gray-900 mb-6">{t.services.isItForYou}</h3>
            <ul className="space-y-3 mb-6">
              {t.services.isItForYouList.map((question, i) => (
                <li key={i} className="flex gap-3 text-gray-600">
                  <CheckCircle size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 font-medium italic">{t.services.isItForYouClose}</p>
          </div>

          {/* Spolupráce pro tebe není, pokud… */}
          <div className="flat-card p-8 rounded-xl animate-on-scroll" data-delay="0.15s">
            <h3 className="font-display text-2xl text-gray-900 mb-6">{t.services.notForYou}</h3>
            <ul className="space-y-3">
              {t.services.notForYouList.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-500">
                  <XCircle size={18} className="text-gray-300 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}