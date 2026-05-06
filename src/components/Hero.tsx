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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--c-cream)' }}>
      {/* Mobile background image */}
      <div className="absolute inset-0 block md:hidden">
        <img
          src="/resources/hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 hero-mobile-overlay" />
      </div>

      {/* Right: photo with soft left-edge fade */}
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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-lg">
          <h2 className="font-display text-8xl md:text-9xl leading-none mb-4 text-white md:text-gray-900 hero-name">
            Romana Vítková
            <span className="block text-white/80 md:text-gray-500 font-light">
              Women's Fitness Coach
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 md:text-gray-600 mb-10 leading-relaxed hero-tagline">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-ctas">
            <a
              href="#services"
              className="btn-pill bg-orange-500 text-white px-8 py-3 hover:bg-orange-600"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="btn-pill bg-white/10 md:bg-white text-white md:text-gray-700 px-8 py-3 hover:bg-white/20 md:hover:bg-gray-50 border border-white/60 md:border-gray-200"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}