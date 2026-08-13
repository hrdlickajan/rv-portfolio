import { Dumbbell, Apple, Moon, Repeat } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Dumbbell, Apple, Moon, Repeat];

export default function Foundations() {
  const { t } = useLanguage();
  const f = t.foundations;

  return (
    <section id="foundations" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" data-delay="0s">
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            {f.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{f.intro}</p>
          <span className="editorial-eyebrow justify-center flex mt-10">{f.subheading}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {f.pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <div
                key={pillar.title}
                className="flat-card rounded-xl p-8 animate-on-scroll"
                data-delay={`${index * 0.1}s`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-orange-700" size={34} />
                  <h3 className="font-display text-2xl text-gray-900">{pillar.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{pillar.text}</p>
              </div>
            );
          })}
        </div>

        <p
          className="closing-statement text-xl md:text-2xl max-w-xl mx-auto animate-on-scroll"
          data-delay="0.1s"
        >
          {f.closing}
        </p>
      </div>
    </section>
  );
}
