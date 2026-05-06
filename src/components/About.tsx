import { Award, Heart, Zap, Target, User, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const qualifications = t.about.qualificationsList;

  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--c-cream-alt)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
        <h2 className="font-display text-5xl md:text-6xl text-gray-900 mb-4 leading-none">
          {t.about.title}
        </h2>
      </div>

      {/* KDO JSEM */}
      <div className="flat-card rounded-xl p-8 mb-8 animate-on-scroll" data-delay="0.1s">
        <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
          <User className="text-orange-500" size={26} />
          {t.about.whoAmI}
        </h3>
        <p className="text-gray-600 leading-relaxed text-lg">{t.about.whoAmIText}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-8">
        <div className="lg:col-span-2">
          {/* MOJE MISE */}
          <div className="flat-card rounded-xl p-8 mb-8 animate-on-scroll" data-delay="0s">
            <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="text-orange-500" size={26} />
              {t.about.mission}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              {t.about.missionText1}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {t.about.missionText2}
            </p>
          </div>

          {/* PROČ SI MĚ VYBRAT */}
          <div className="flat-card rounded-xl p-8 animate-on-scroll" data-delay="0.1s">
            <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Zap className="text-orange-500" size={26} />
              {t.about.why}
            </h3>
            <ul className="space-y-4 text-gray-600">
              {t.about.whyPoints.map((point, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-orange-500 font-bold">✓</span>
                  <span>
                    <span className="font-semibold text-gray-700">{point.title}:</span> {point.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* KVALIFIKACE */}
        <div>
          <div className="flat-card rounded-xl p-8 sticky top-24 animate-on-scroll" data-delay="0.15s">
            <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
              <Award className="text-orange-500" size={26} />
              {t.about.qualifications}
            </h3>
            <ul className="space-y-4">
              {qualifications.map((cert, index) => (
                <li key={index} className="qual-item pb-4 border-b border-gray-100 last:border-b-0">
                  <p className="font-medium text-gray-700">{cert}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* JAK PRACUJI */}
      <div className="flat-card rounded-xl p-8 border-l-4 border-l-orange-400 mb-8 animate-on-scroll" data-delay="0s">
        <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
          <Layers className="text-orange-500" size={26} />
          {t.about.howIWork}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-4">{t.about.howIWorkText1}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{t.about.howIWorkText2}</p>
        <p className="text-gray-600 leading-relaxed">{t.about.howIWorkText3}</p>
      </div>

      {/* MŮJ CÍL */}
      <div className="flat-card rounded-xl p-8 border-l-4 border-l-orange-300 animate-on-scroll" data-delay="0.1s">
        <h3 className="font-display text-3xl text-gray-900 mb-6 flex items-center gap-3">
          <Target className="text-orange-500" size={26} />
          {t.about.goal}
        </h3>
        <p className="text-gray-600 leading-relaxed mb-3">{t.about.goalText1}</p>
        <p className="text-gray-600 leading-relaxed mb-3">{t.about.goalText2}</p>
        <p className="text-gray-600 leading-relaxed mb-3">{t.about.goalText3}</p>
        <p className="text-gray-600 leading-relaxed">{t.about.goalText4}</p>
      </div>
      </div>
    </section>
  );
}
