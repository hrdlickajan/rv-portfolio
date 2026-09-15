import { Footprints, Dumbbell, Scale, Heart, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Footprints, Dumbbell, Scale, Heart, Zap, Sparkles];

export default function HowICanHelp() {
  const { t } = useLanguage();
  const h = t.howICanHelp;

  return (
    <section id="how-i-can-help" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow justify-center flex">{h.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 leading-tight">{h.heading}</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {h.topics.map((topic, index) => {
            const Icon = icons[index];
            return (
              <div
                key={topic.title}
                className="flat-card rounded-xl p-8 animate-on-scroll"
                data-delay={`${index * 0.1}s`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={22} className="text-orange-500 flex-shrink-0" />
                  <h3 className="font-display text-2xl text-gray-900">{topic.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{topic.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
