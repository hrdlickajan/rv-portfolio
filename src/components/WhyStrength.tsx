import { useLanguage } from '../LanguageContext';

export default function WhyStrength() {
  const { t } = useLanguage();
  const w = t.whyStrength;

  return (
    <section id="why-strength" className="editorial-block editorial-block--dark py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{w.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight mb-14 md:mb-20">
            {w.headingLine1}
            <br />
            <em>{w.headingEmphasis}</em>
          </h2>
        </div>

        <div className="space-y-12 md:space-y-16 mb-20 md:mb-28">
          {w.reasons.map((reason, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              data-delay={`${0.1 + index * 0.1}s`}
            >
              <p className="editorial-thought text-xl md:text-2xl leading-relaxed mb-2">{reason.lead}</p>
              <p className="text-lg leading-relaxed opacity-90">{reason.text}</p>
            </div>
          ))}
        </div>

        <div className="quote-block animate-on-scroll" data-delay="0.2s">
          <p className="quote-block__text text-2xl md:text-3xl leading-snug mb-6">{w.quote}</p>
          <span className="quote-block__attribution">— {w.quoteAttribution}</span>
        </div>
      </div>
    </section>
  );
}
