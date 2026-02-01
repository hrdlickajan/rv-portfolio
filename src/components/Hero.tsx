import { ImagePlus } from 'lucide-react';

export default function Hero() {
return (<section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Romana Vítková
                <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  Personal trainer
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Treat your body like a temple – care for it with love, and it will carry you through life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
                >
                  Kontakt
                </a>
                <a
                  href="#services"
                  className="bg-white text-orange-500 px-8 py-3 rounded-full hover:bg-orange-50 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-orange-200 text-center"
                >
                  Zjistit více
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl h-96 flex items-center justify-center shadow-lg border-2 border-orange-200">
                <img src="https://www.formfactory.cz/wp-content/uploads/2024/06/DSC_2436_PP-SQUARE-700x700.jpg" alt="Romana Vitkova"/>
            </div>
          </div>
        </section>);
}