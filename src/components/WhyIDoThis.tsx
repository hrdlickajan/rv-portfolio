import { useLanguage } from '../LanguageContext';

export default function WhyIDoThis() {
  const { t } = useLanguage();
  const w = t.whyIDoThis;

  return (
    <section id="why-i-do-this" className="editorial-block editorial-block--dark py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{w.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight mb-4">
            {w.headingLine1}
            <br />
            {w.headingLine2}
            <br />
            <em>{w.headingEmphasis}</em>
          </h2>
          <p className="font-semibold text-orange-500 text-xl md:text-2xl leading-relaxed">{w.intro}</p>
        </div>

        <div className="space-y-6 mt-16 md:mt-24 mb-16 md:mb-24 animate-on-scroll" data-delay="0.1s">
          {w.texts.map((text, index) => (
            <p key={index} className="text-lg md:text-xl leading-relaxed opacity-90">
              {text}
            </p>
          ))}
        </div>

        <div className="grid md:grid-cols-2 items-stretch gap-10 md:gap-16 mt-16 md:mt-24 mb-16 md:mb-24">
          <div className="space-y-4 animate-on-scroll" data-delay="0.2s">
            {w.leftStatement.map((line, index) => (
              <p key={index} className="font-display font-bold text-2xl md:text-4xl leading-snug">
                {line}
              </p>
            ))}
          </div>
          <div className="flex flex-col justify-between h-full animate-on-scroll" data-delay="0.3s">
            {w.rightList.map((line, index) => (
              <p key={index} className="text-lg md:text-xl leading-relaxed opacity-90">
                {line}
              </p>
            ))}
          </div>
        </div>

        <p
          className="editorial-thought text-orange-500 text-lg md:text-xl leading-relaxed mt-16 md:mt-24 animate-on-scroll md:whitespace-nowrap"
          data-delay="0.1s"
        >
          {w.closingFinal}
        </p>
      </div>
    </section>
  );
}
