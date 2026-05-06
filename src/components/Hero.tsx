import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white pattern-bg">
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

      {/* Right: photo with diagonal clip-path */}
      <div className="absolute inset-y-0 right-0 w-[58%] hidden md:block hero-photo-clip">
        <img
          src="/resources/hero.jpg"
          alt="Romana Vitkova"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-lg">
          <h2 className="font-display text-8xl md:text-9xl leading-none mb-4 text-white md:text-gray-900 hero-name">
            Romana Vítková
            <span className="block text-orange-300 md:text-orange-500">
              Women's Fitness Coach
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/90 md:text-gray-600 mb-10 leading-relaxed hero-tagline">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 hero-ctas">
            <a
              href="#services"
              className="btn-sporty bg-orange-500 text-white px-8 py-3 hover:bg-orange-600"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="btn-sporty-ghost bg-white/10 md:bg-white text-white md:text-orange-500 px-8 py-3 hover:bg-white/20 md:hover:bg-orange-50 border border-white/60 md:border-orange-200"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}