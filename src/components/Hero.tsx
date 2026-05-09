import { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
          aria-hidden="true"
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
            alt="Romana Vitkova"
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="absolute inset-0 hero-photo-fade" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-40 md:pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="md:max-w-lg">
            <h2 className="font-display font-bold uppercase tracking-wide text-4xl md:text-6xl leading-tight mb-2 md:mb-3 text-white md:text-gray-900 hero-name">
              Romana Vítková
              <span className="block font-body font-semibold normal-case text-orange-500 text-lg md:text-2xl tracking-normal mt-1">
                Women's Fitness Coach
              </span>
            </h2>
            <p className="text-sm md:text-lg text-white/85 md:text-gray-600 mb-6 md:mb-10 leading-relaxed hero-tagline">
              {t.hero.tagline}
            </p>
            <div className="flex flex-col gap-3 md:flex-row md:gap-4 hero-ctas">
              <a
                href="#services"
                className="btn-pill bg-orange-500 text-white px-6 py-2.5 md:px-8 md:py-3 hover:bg-orange-600 text-center"
              >
                {t.hero.cta1}
              </a>
              <a
                href="#contact"
                className="btn-pill bg-white text-gray-700 px-6 py-2.5 md:px-8 md:py-3 hover:bg-gray-50 border border-gray-200 text-center"
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