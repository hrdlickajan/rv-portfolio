import { Award, Heart, Zap } from 'lucide-react';

export default function About() {
  const qualifications = [
    'International Certified Personal Trainer (NASM)',
    'Instruktor fitness (Fitness Institut)',
    '200h Yoga Teacher Training (House of Om Bali)',
  ];

  const training = [
    'Holistický přístup – tělo, mysl i sebevědomí spolu souvisí.',
    'Nebát se těžkých vah – síla je mindset, ne jen vzhled.',
    'Důraz na udržitelnost.',
    'Doplň další.'
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          O mně
          <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Seznamte se se mnou
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-12 mb-16">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Heart className="text-orange-500" size={28} />
              Moje mise
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-lg">
              Pomáhám <span className="font-semibold">ženám cítit se silně</span> — ve svém těle i životě.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Učím ženy, jak správně cvičit, vyživovat své tělo a budovat zdravé sebevědomí. Moje specializace je <span className="font-semibold">silový trénink pro ženy</span> všech věkových kategorií, protože zdravé tělo a pevné sebevědomí jsou základ pro naplněný život.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Zap className="text-orange-500" size={28} />
              Proč si mě vybrat
            </h3>
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><span className="font-semibold">Dlouhodobý přístup:</span> Neslibuju zázraky přes noc. Nabízím udržitelné řešení, které se integrace do vašeho života.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><span className="font-semibold">Bez extrémů:</span> Bez dogmat a fanatismu. Společně nastavíme rutiny s radostí.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><span className="font-semibold">Empowerment:</span> Cíl není vám být závislá na mně, ale aby ste se naučila postarat si o své tělo sama.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-orange-500 font-bold">✓</span>
                <span><span className="font-semibold">Flexibilita:</span> Osobní tréninky, hybridní či online coaching. Vyberte si, co vám vyhovuje.</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl p-8 shadow-lg sticky top-24">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Award size={28} />
              Kvalifikace
            </h3>
            <ul className="space-y-4">
              {qualifications.map((cert, index) => (
                <li key={index} className="pb-4 border-b border-orange-400 last:border-b-0">
                  <p className="font-semibold text-orange-100">{cert}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200 mb-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Má osobní cesta</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Svůj volný čas ráda trávím aktivně, ale mám i dny, kdy si ráda polenoším a dopřeju oddych tělu i mysli. Miluju přírodu a snažím se v ní trávit co nejvíce času.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Velkým koníčkem je pro mě <span className="font-semibold">padel tenis</span>, který mě úplně pohltil. Kdykoli se naskytne příležitost, ráda také <span className="font-semibold">objevuji svět</span> — momentálně především surfové destinace, protože jsem tomuto sportu již několik let propadla a opravdu bych se ho chtěla pořádně naučit.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Ráda čtu — převážně non-fiction, ale čas od času to proložím nějakou oddychovkou. Mým nejoblíbenějším drinkem je <span className="font-semibold">káva</span>, která mi chutná nejlíp ve společnosti přátel nebo rodiny, stejně jako dobré jídlo všeho druhu. A pokud se mě zeptáte, jaké je moje nejoblíbenější – nečekejte jednu odpověď. Miluju prostě všechno!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Moje hodnoty</h3>
          <ul className="space-y-3 text-gray-700">
            {['Autentičnost', 'Empowerment', 'Dlouhodobost', 'Radost'].map((value, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-orange-500 font-bold">◆</span> {value}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-orange-500">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Tréninková filozofie</h3>
          <div className="grid grid-cols-2 gap-3">
            {training.map((t, i) => (
              <p key={i} className="text-sm text-gray-600 bg-orange-50 px-3 py-2 rounded-lg">
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
