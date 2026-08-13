import { Footprints, Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function MovementShared() {
  const { t } = useLanguage();
  const m = t.movementShared;

  return (
    <section id="movement-shared" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow justify-center flex">{m.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight">
            {m.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{m.intro}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-16">
          <div className="text-center max-w-xs animate-on-scroll" data-delay="0.1s">
            <Footprints size={32} className="text-orange-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-gray-900 mb-3">{m.runClub.title}</h3>
            <p className="text-gray-900 font-medium mb-2">{m.runClub.lead}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{m.runClub.text}</p>
            <a
              href={m.runClub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange-500 font-semibold hover:text-orange-600"
            >
              {m.runClub.cta}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="hidden sm:block w-px self-stretch bg-gray-200" aria-hidden="true" />

          <div className="text-center max-w-xs animate-on-scroll" data-delay="0.2s">
            <Instagram size={32} className="text-orange-500 mx-auto mb-4" />
            <h3 className="font-display text-2xl text-gray-900 mb-3">{m.instagram.title}</h3>
            <p className="text-gray-900 font-medium mb-2">{m.instagram.lead}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{m.instagram.text}</p>
            <a
              href={m.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-orange-500 font-semibold hover:text-orange-600"
            >
              {m.instagram.cta}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
