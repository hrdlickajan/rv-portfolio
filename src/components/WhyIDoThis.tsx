import { useLanguage } from '../LanguageContext';

export default function WhyIDoThis() {
  const { t } = useLanguage();
  const w = t.whyIDoThis;

  return (
    <section id="why-i-do-this" className="editorial-block editorial-block--dark py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{w.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight mb-16 md:mb-24">
            {w.heading}
            <br />
            <em className="italic">{w.headingItalic}</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 md:items-stretch gap-10 md:gap-0 mb-16 md:mb-20">
          {/* Outer wrapper owns the rounded clip; inner wrapper owns the entrance transform, keeps them from fighting */}
          <div className="rounded-2xl overflow-hidden">
            <div className="relative h-full animate-on-scroll" data-delay="0.1s">
              <img
                src="/resources/padel.png"
                alt="Romana Vítková"
                loading="lazy"
                className="w-full h-full min-h-[24rem] object-cover"
              />
              <div className="absolute inset-0 why-i-do-this-photo-fade" />
            </div>
          </div>
          <div className="space-y-4 animate-on-scroll" data-delay="0.2s">
            {w.bio.map((paragraph, index) => (
              <p key={index} className="text-lg md:text-xl leading-relaxed opacity-90">
                {paragraph}
              </p>
            ))}
            <div className="pt-4">
              <span className="block w-10 border-t-2 border-orange-500 mb-3" aria-hidden="true" />
              <p className="font-display text-2xl md:text-3xl leading-snug">{w.closingFinal}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 pt-12 md:pt-16 border-t border-white/10 animate-on-scroll" data-delay="0.1s">
          <div>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-3">{w.education.heading}</h3>
            <p className="text-lg leading-relaxed opacity-90">{w.education.intro}</p>
          </div>
          <ul className="space-y-3">
            {w.education.certifications.map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg leading-relaxed opacity-90">
                <span className="text-orange-500 mt-1" aria-hidden="true">
                  —
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
