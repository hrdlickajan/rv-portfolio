import { useLanguage } from '../LanguageContext';

export default function Manifesto() {
  const { t } = useLanguage();
  const m = t.manifesto;

  return (
    <section id="manifesto" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <p
            className="font-display text-3xl md:text-5xl leading-snug text-gray-900 animate-on-scroll"
            data-delay="0s"
          >
            {m.statementLines.map((line, index) => (
              <span key={index}>
                {line}
                {index < m.statementLines.length - 1 && <br />}
              </span>
            ))}
          </p>
          <div className="space-y-6 animate-on-scroll" data-delay="0.1s">
            <div className="space-y-4">
              {m.sideTexts.map((text, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${index === 0 ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                >
                  {text}
                </p>
              ))}
            </div>
            <hr className="border-t border-gray-200" />
            <div className="space-y-3">
              {m.bottomTexts.map((text, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed ${index === 0 ? 'font-bold text-gray-900' : 'text-gray-600'}`}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
