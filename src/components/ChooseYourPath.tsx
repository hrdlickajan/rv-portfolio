import { Zap, Globe, Users } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { INTAKE_FORM_URL } from '../constants';

const icons = [Zap, Globe, Users];

export default function ChooseYourPath() {
  const { t } = useLanguage();
  const c = t.chooseYourPath;

  return (
    <section id="choose-your-path" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" data-delay="0s">
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 mb-6 leading-tight md:whitespace-nowrap">
            {c.heading}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{c.intro}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {c.paths.map((path, index) => {
            const Icon = icons[index];
            return (
              <div
                key={path.title}
                className={`relative rounded-xl p-8 bg-orange-50 animate-on-scroll ${
                  path.popular ? 'border-2 border-orange-600' : 'border border-orange-100'
                }`}
                data-delay={`${index * 0.1}s`}
              >
                {path.popular && (
                  <span className="absolute -top-3 left-8 bg-orange-500 text-white text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
                    {c.popularBadge}
                  </span>
                )}
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4">
                  <Icon size={20} className="text-orange-500" />
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-3">{path.title}</h3>
                <p className="text-sm font-medium text-gray-500 mb-4">{path.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{path.text}</p>
                <p className="text-sm text-orange-500 font-medium italic">{path.ideal}</p>
              </div>
            );
          })}
        </div>

        <div className="mb-16 animate-on-scroll" data-delay="0.1s">
          <h3 className="font-display text-2xl md:text-3xl text-gray-900 text-center mb-8">
            {c.comparisonHeading}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="text-left p-4 align-bottom" />
                  {c.comparisonTable.columns.map((column, index) => (
                    <th
                      key={column}
                      className={`p-4 align-bottom text-center font-display text-lg text-gray-900 ${
                        index === 0 ? 'bg-orange-50 rounded-t-xl' : ''
                      }`}
                    >
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {c.comparisonTable.rows.map((row) => (
                  <tr key={row.label} className="border-t border-orange-100">
                    <th scope="row" className="p-4 text-left font-medium text-gray-900 align-top">
                      {row.label}
                    </th>
                    {row.values.map((value, index) => (
                      <td
                        key={index}
                        className={`p-4 text-center text-gray-600 align-top ${
                          index === 0 ? 'bg-orange-50' : ''
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center animate-on-scroll" data-delay="0.1s">
          <p className="font-display text-xl md:text-2xl text-gray-900 mb-2">{c.reassurance}</p>
          <p className="text-gray-600 mb-8">{c.reassuranceSub}</p>
          <a
            href={INTAKE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill inline-flex bg-orange-500 text-white px-8 py-3.5 hover:bg-orange-600"
          >
            {c.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
