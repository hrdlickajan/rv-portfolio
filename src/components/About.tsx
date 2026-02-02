import { Award, Heart, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const qualifications = [
    'International Certified Personal Trainer (NASM)',
    'Instruktor fitness (Fitness Institut)',
    '200h Yoga Teacher Training (House of Om Bali)',
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          {t.about.title}
          <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            {t.about.subtitle}
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Heart className="text-orange-500" size={28} />
              {t.about.mission}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              {t.about.missionText1}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t.about.missionText2}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Zap className="text-orange-500" size={28} />
              {t.about.why}
            </h3>
            <ul className="space-y-4 text-gray-700">
              {t.about.whyPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>
                    <span className="font-semibold">{point.title}:</span> {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg sticky top-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award size={28} />
              {t.about.qualifications}
            </h3>
            <ul className="space-y-4">
              {qualifications.map((cert, index) => (
                <li key={index} className="pb-4 border-b border-orange-400 last:border-b-0">
                  <p className="font-semibold text-orange-100">{cert}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t.about.myPath}</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t.about.myPathText1}
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          {t.about.myPathText2}
        </p>
        <p className="text-gray-700 leading-relaxed">
          {t.about.myPathText3}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{t.about.values}</h3>
          <ul className="space-y-3 text-gray-700">
            {['Autentičnost', 'Empowerment', 'Dlouhodobost', 'Radost'].map((value, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">◆</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">{t.about.trainingPhilosophy}</h3>
          <div className="grid grid-cols-2 gap-3">
            {['Holistický přístup', 'Nebát se vah', 'Udržitelnost', 'Radost'].map((philosophy, i) => (
              <p key={i} className="text-sm text-gray-600 bg-orange-50 px-3 py-2 rounded-lg">
                {philosophy}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
