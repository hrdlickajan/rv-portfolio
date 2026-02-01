import { Dumbbell, Users, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Dumbbell,
      title: 'Osobní tréninky',
      description: '1:1 tréninky zaměřené na vaše individuální cíle a potřeby',
    },
    {
      icon: Zap,
      title: 'Hybridní coaching',
      description: 'Kombinace osobních tréninků a online coachingu pro maximální flexibilitu',
    },
    {
      icon: Users,
      title: 'Online coaching',
      description: 'Tréninkový plán, strava a podpora z pohodlí vašeho domova',
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Jak spolu můžeme
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              spolupracovat
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nabízím flexibilní řešení přizpůsobená vašim potřebám a cílům
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-xl border border-orange-200 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-12 text-white">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold mb-6">Moje specializace</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <span className="font-semibold">Silový trénink pro ženy</span> všech věkových kategorií – protože strong is the new skinny není jen heslo, ale mindset.
              </p>
              <p>
                Neslibuji zázraky přes noc ani vyrýsované břišáky do léta. Co vám ale nabídnu, je <span className="font-semibold">dlouhodobý a udržitelný přístup</span> ke zdravému životnímu stylu, který vám pomůže žít naplno.
              </p>
              <p>
                Společně nastavíme <span className="font-semibold">smysluplné návyky a rutiny</span> — bez extrémů, bez dogmat, s radostí.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Můj cíl s vámi</h3>
            <p className="text-gray-700 leading-relaxed">
              Aby ses jednou mohla postarat o své tělo sama, s jistotou a sebevědomím. Cílem není trénovat s trenérem navždy, ale vědět, jak na to. Nechci, abys na mně byla závislá. Chci, abys ode mě odcházela silnější, než jsi přišla – fyzicky i mentálně.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Pro koho jsou služby určeny</h3>
            <p className="text-gray-700 leading-relaxed">
              Ať už stojíš na začátku, nebo hledáš nový směr, ráda tě podpořím na tvé cestě – v posilovně i mimo ni. Buď žena všech věkových kategorií s chutí se rozvíjet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
