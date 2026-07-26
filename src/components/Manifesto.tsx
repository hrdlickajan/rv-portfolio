import { useLanguage } from '../LanguageContext';

export default function Manifesto() {
  const { t } = useLanguage();

  return (
    <section id="manifesto" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 md:space-y-10 animate-on-scroll" data-delay="0s">
          {t.manifesto.texts.map((text, index) => (
            <p
              key={index}
              className="font-display text-2xl md:text-4xl leading-snug text-gray-900"
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
