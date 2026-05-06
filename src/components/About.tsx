import { Award, Heart, Zap, Target, User, Layers } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const qualifications = t.about.qualificationsList;

  return (
    <section id="about" className="bg-gradient-to-br from-orange-50 via-amber-50/60 to-orange-50 py-20 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
        <h2 className="font-display text-5xl md:text-6xl tracking-wider text-gray-900 mb-4 leading-none">
          {t.about.title}
        </h2>
      </div>

      {/* KDO JSEM */}
      <div className="glass-card rounded-xl p-8 shadow-xl mb-8 animate-on-scroll card-glow" data-delay="0.1s">
        <h3 className="font-display text-3xl tracking-wide text-gray-900 mb-6 flex items-center gap-3">
          <span className="icon-box"><User className="text-orange-500" size={28} /></span>
          {t.about.whoAmI}
        </h3>
        <p className="text-gray-700 leading-relaxed text-lg">{t.about.whoAmIText}</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-8">
        <div className="lg:col-span-2">
          {/* MOJE MISE */}
          <div className="glass-card rounded-xl p-8 shadow-xl mb-8 animate-on-scroll card-glow" data-delay="0s">
            <h3 className="font-display text-3xl tracking-wide text-gray-900 mb-6 flex items-center gap-3">
              <span className="icon-box"><Heart className="text-orange-500" size={28} /></span>
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
          <div className="glass-card rounded-xl p-8 shadow-xl animate-on-scroll card-glow" data-delay="0.1s">
            <h3 className="font-display text-3xl tracking-wide text-gray-900 mb-6 flex items-center gap-3">
              <span className="icon-box"><Zap className="text-orange-500" size={28} /></span>
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
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg sticky top-24 animate-on-scroll" data-delay="0.15s">
            <h3 className="font-display text-3xl tracking-wide mb-6 flex items-center gap-3">
              <Award size={28} />
              {t.about.qualifications}
            </h3>
            <ul className="space-y-4">
              {qualifications.map((cert, index) => (
                <li key={index} className="qual-item pb-4 border-b border-orange-400 last:border-b-0">
                  <p className="font-semibold text-orange-100">{cert}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* JAK PRACUJI */}
      <div className="glass-card rounded-xl p-8 border-l-4 border-l-orange-500 shadow-lg mb-8 animate-on-scroll card-glow" data-delay="0s">
        <h3 className="font-display text-3xl tracking-wide text-gray-900 mb-6 flex items-center gap-3">
          <span className="icon-box"><Layers className="text-orange-500" size={28} /></span>
          {t.about.howIWork}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">{t.about.howIWorkText1}</p>
        <p className="text-gray-700 leading-relaxed mb-4">{t.about.howIWorkText2}</p>
        <p className="text-gray-700 leading-relaxed">{t.about.howIWorkText3}</p>
      </div>

      {/* MŮJ CÍL */}
      <div className="glass-card rounded-xl p-8 shadow-xl border-l-4 border-l-blue-500 animate-on-scroll card-glow" data-delay="0.1s">
        <h3 className="font-display text-3xl tracking-wide text-gray-900 mb-6 flex items-center gap-3">
          <span className="icon-box"><Target className="text-blue-500" size={28} /></span>
          {t.about.goal}
        </h3>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText1}</p>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText2}</p>
        <p className="text-gray-700 leading-relaxed mb-3">{t.about.goalText3}</p>
        <p className="text-gray-700 leading-relaxed">{t.about.goalText4}</p>
      </div>
      </div>
    </section>
  );
}
