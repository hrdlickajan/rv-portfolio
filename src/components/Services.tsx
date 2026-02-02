import { Dumbbell, Users, Zap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Dumbbell,
      title: t.services.personalTraining,
      description: t.services.personalTrainingDesc,
    },
    {
      icon: Zap,
      title: t.services.hybridCoaching,
      description: t.services.hybridCoachingDesc,
    },
    {
      icon: Users,
      title: t.services.onlineCoaching,
      description: t.services.onlineCoachinDesc,
    },
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t.services.title}
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {t.services.subtitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.description}
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
            <h3 className="text-2xl font-bold mb-6">{t.services.specialization}</h3>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>{t.services.spec1}</p>
              <p>{t.services.spec2}</p>
              <p>{t.services.spec3}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.services.goal}</h3>
            <p className="text-gray-700 leading-relaxed">{t.services.goalText}</p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-8 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{t.services.forWho}</h3>
            <p className="text-gray-700 leading-relaxed">{t.services.forWhoText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
