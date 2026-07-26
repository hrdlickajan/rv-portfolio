import { useLanguage } from '../LanguageContext';

export default function ClosingBanner() {
  const { t } = useLanguage();
  const c = t.closingBanner;

  return (
    <section className="color-band py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll" data-delay="0s">
        <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">{c.heading}</h2>
        <p className="text-white/90 text-lg leading-relaxed">{c.subline}</p>
      </div>
    </section>
  );
}
