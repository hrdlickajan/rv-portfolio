import { Award, Heart, Zap, Target, Venus, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const qualifications = t.about.qualificationsList;

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 leading-tight">
          {t.about.title}
        </h2>
      </div>

      {/* KDO JSEM */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/60 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Venus className="text-orange-500" size={28} />
          {t.about.whoAmI}
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">{t.about.whoAmIText}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-8">
        <div className="lg:col-span-2">
          {/* MOJE MISE */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/60 mb-8">
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

          {/* PROČ SI MĚ VYBRAT */}
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/60">
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

        {/* KVALIFIKACE */}
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

      {/* JAK PRACUJI */}
      <div className="bg-orange-50/80 backdrop-blur-sm rounded-xl p-8 border-2 border-orange-200/60 shadow-lg mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Layers className="text-orange-500" size={28} />
          {t.about.howIWork}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">{t.about.howIWorkText1}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{t.about.howIWorkText2}</p>
        <p className="text-gray-700 leading-relaxed">{t.about.howIWorkText3}</p>
      </div>

      {/* MŮJ CÍL */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/60 border-l-4 border-l-orange-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Target className="text-orange-500" size={28} />
          {t.about.goal}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText1}</p>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText2}</p>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText3}</p>
        <p className="text-gray-700 leading-relaxed">{t.about.goalText4}</p>
      </div>
    </section>
  );
}
