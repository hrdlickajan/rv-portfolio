import { useLanguage } from '../LanguageContext';
import { INTAKE_FORM_URL } from '../constants';

export default function ClosingBanner() {
  const { t } = useLanguage();
  const c = t.closingBanner;

  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: 'var(--c-dark)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll" data-delay="0s">
        <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">{c.heading}</h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10">{c.subline}</p>
        <a
          href={INTAKE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill inline-flex bg-orange-500 text-white px-8 py-3.5 hover:bg-orange-600 mb-4"
        >
          {c.cta}
        </a>
        <p className="text-white/60 text-sm leading-relaxed">{c.ctaNote}</p>
      </div>
    </section>
  );
}
