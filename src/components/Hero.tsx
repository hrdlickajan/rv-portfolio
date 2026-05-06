import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Right half: photo with left-to-transparent gradient overlay */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden md:block">
        <img
          src="https://www.formfactory.cz/wp-content/uploads/2024/06/DSC_2436_PP-SQUARE-700x700.jpg"
          alt="Romana Vitkova"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-lg">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Romana Vítková
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              Women's Fitness Coach
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t.hero.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
              {t.hero.cta1}
            </a>
            <a
              href="#contact"
              className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-orange-200 text-center"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}