import { useLanguage } from '../LanguageContext';

export default function StuckInCircle() {
  const { t } = useLanguage();
  const s = t.stuckInCircle;

  return (
    <section id="stuck-in-circle" className="editorial-block editorial-block--dark py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{s.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight mb-14 md:mb-20">
            {s.headingLine1}
            <br />
            <em>{s.headingEmphasis}</em>
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4 mb-24 md:mb-32">
          {s.thoughts.map((thought, index) => (
            <p
              key={index}
              className="editorial-thought flex items-baseline gap-3 text-xl md:text-2xl leading-relaxed animate-on-scroll"
              data-delay={`${0.1 + index * 0.1}s`}
            >
              <span className="text-orange-500" aria-hidden="true">—</span>
              <span>{thought}</span>
            </p>
          ))}
        </div>

        <div className="space-y-6 animate-on-scroll" data-delay="0.2s">
          <p className="text-lg md:text-xl leading-relaxed opacity-90">{s.closingText1}</p>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">{s.closingText2}</p>
        </div>
      </div>
    </section>
  );
}
