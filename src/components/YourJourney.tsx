import { useLanguage } from '../LanguageContext';
import { INTAKE_FORM_URL } from '../constants';

export default function YourJourney() {
  const { t } = useLanguage();
  const j = t.yourJourney;

  return (
    <section id="your-journey" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="font-display text-4xl md:text-5xl text-gray-900 mb-16 md:mb-20 text-center leading-tight animate-on-scroll"
          data-delay="0s"
        >
          {j.heading}
        </h2>

        <div className="timeline mb-16 md:mb-20">
          {j.steps.map((step, index) => (
            <div
              key={step.title}
              className="timeline__item flex md:flex-col items-start md:items-center gap-5 md:gap-0 animate-on-scroll"
              data-delay={`${index * 0.1}s`}
            >
              <div className="timeline__node">{index + 1}</div>
              <div className="timeline__line hidden md:block" />
              <div className="md:mt-6 md:text-center md:px-4">
                <h3 className="font-display text-xl text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="closing-statement text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-on-scroll"
          data-delay="0.1s"
        >
          {j.closing}
        </p>

        <div className="text-center animate-on-scroll" data-delay="0.15s">
          <a
            href={INTAKE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex bg-orange-500 text-white px-8 py-3.5 hover:bg-orange-600"
          >
            {j.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
