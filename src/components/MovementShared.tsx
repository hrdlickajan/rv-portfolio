import { Footprints, MessageCircle, Instagram } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Footprints, MessageCircle, Instagram];

export default function MovementShared() {
  const { t } = useLanguage();
  const m = t.movementShared;

  return (
    <section id="movement-shared" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{m.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            {m.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{m.intro}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {m.cards.map((card, index) => {
            const Icon = icons[index];
            return (
              <div
                key={card.title}
                className="flat-card rounded-xl p-8 text-center animate-on-scroll"
                data-delay={`${index * 0.1}s`}
              >
                <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-4 mx-auto">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-3">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
