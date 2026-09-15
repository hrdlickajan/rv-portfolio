import { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { INTAKE_FORM_URL } from '../constants';

export default function Hero() {
  const { t } = useLanguage();
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${window.scrollY * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{ backgroundColor: 'var(--c-cream)', height: 'calc(100vh - 4rem)' }}
    >
      {/* Mobile: full-bleed background photo */}
      <div className="absolute inset-0 block md:hidden">
        <img
          src="/resources/hero.jpg"
          alt=""
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-top"
        />
        {/* Dark overlay so white text is readable over the dark photo */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.52)' }} />
      </div>

      {/* Desktop: right-column photo with soft left-edge fade */}
      <div className="absolute inset-y-0 right-0 w-[58%] hidden md:block overflow-hidden">
        <div ref={photoRef} className="absolute -top-[10%] -bottom-[10%] left-0 right-0" style={{ willChange: 'transform' }}>
          <img
            src="/resources/hero.jpg"
            alt="Romana Vítková, personal fitness coach"
            fetchPriority="high"
            loading="eager"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 hero-photo-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-40 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="md:max-w-xs lg:max-w-2xl">
            <h1 className="font-display font-bold text-3xl md:text-4xl lg:text-7xl leading-tight mb-4 md:mb-6 text-white md:text-gray-900 hero-name">
              {t.hero.headlineLine1}
              <br />
              {t.hero.headlineLine2}
              <br />
              {t.hero.headlineLine3}
              <br />
              {t.hero.headlineLine4}
            </h1>
            <p className="text-sm md:text-sm lg:text-lg text-white/85 md:text-gray-600 mb-6 md:mb-10 leading-relaxed hero-tagline md:max-w-[15rem] lg:max-w-sm">
              {t.hero.taglineLine1}
              <br />
              {t.hero.taglineLine2}
              <br />
              {t.hero.taglineLine3}
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 hero-ctas">
              <a
                href={INTAKE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-orange-500 text-white px-6 py-2.5 md:px-8 md:py-3 hover:bg-orange-600 text-center"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#stuck-in-circle"
                className="btn-pill text-gray-800 px-6 py-2.5 md:px-8 md:py-3 hover:bg-orange-50 border border-orange-400 text-center"
                style={{ backgroundColor: 'var(--c-cream)' }}
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}