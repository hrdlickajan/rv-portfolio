import { useLanguage } from '../LanguageContext';

export default function WhyIDoThis() {
  const { t } = useLanguage();
  const w = t.whyIDoThis;

  return (
    <section id="why-i-do-this" className="editorial-block py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{w.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight text-gray-900 mb-8">
            {w.headingLine1}
            <br />
            <em>{w.headingEmphasis}</em>
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-600">{w.intro}</p>
        </div>

        <div className="space-y-8 mt-14 md:mt-20 mb-16 md:mb-20">
          {w.texts.map((text, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed text-gray-700 animate-on-scroll"
              data-delay={`${0.1 + index * 0.1}s`}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="space-y-3 animate-on-scroll" data-delay="0.2s">
          {w.closingLines.map((line, index) => (
            <p key={index} className="editorial-thought text-xl md:text-2xl leading-relaxed text-gray-900">
              {line}
            </p>
          ))}
          <p className="editorial-thought text-xl md:text-2xl leading-relaxed text-orange-500 pt-4">
            {w.closingFinal}
          </p>
        </div>
      </div>
    </section>
  );
}
