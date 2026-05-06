import { Users, Zap, CheckCircle, XCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hybridní spolupráce */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-orange-200/60 shadow-xl hover:shadow-2xl transition-shadow animate-on-scroll card-glow" data-delay="0s">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t.services.hybridCoaching}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t.services.hybridCoachingDesc}</p>
            <p className="text-sm font-semibold text-gray-800 mb-2">{t.services.includes}</p>
            <ul className="space-y-1 mb-4">
              {t.services.hybridCoachingIncludes.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-600 font-medium italic">{t.services.hybridCoachingIdeal}</p>
          </div>

          {/* Online spolupráce */}
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-xl border border-orange-200/60 shadow-xl hover:shadow-2xl transition-shadow animate-on-scroll card-glow" data-delay="0.15s">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{t.services.onlineCoaching}</h3>
            <p className="text-gray-600 leading-relaxed mb-4">{t.services.onlineCoachingDesc}</p>
            <p className="text-sm font-semibold text-gray-800 mb-2">{t.services.includes}</p>
            <ul className="space-y-1 mb-4">
              {t.services.onlineCoachingIncludes.map((item, i) => (
                <li key={i} className="flex gap-2 text-gray-600 text-sm">
                  <span className="text-orange-500 font-bold mt-0.5">–</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-orange-600 font-medium italic">{t.services.onlineCoachingIdeal}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Je spolupráce pro tebe? */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white animate-on-scroll" data-delay="0s">
            <h3 className="text-xl font-bold mb-6">{t.services.isItForYou}</h3>
            <ul className="space-y-3 mb-6">
              {t.services.isItForYouList.map((question, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle size={18} className="text-orange-200 mt-0.5 flex-shrink-0" />
                  <span>{question}</span>
                </li>
              ))}
            </ul>
            <p className="text-orange-100 font-medium">{t.services.isItForYouClose}</p>
          </div>

          {/* Spolupráce pro tebe není, pokud… */}
          <div className="bg-orange-50/80 backdrop-blur-sm border-l-4 border-orange-500 p-8 rounded-lg shadow-lg animate-on-scroll" data-delay="0.15s">
            <h3 className="text-xl font-bold text-gray-800 mb-6">{t.services.notForYou}</h3>
            <ul className="space-y-3">
              {t.services.notForYouList.map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <XCircle size={18} className="text-orange-400 mt-0.5 flex-shrink-0" />
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