import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const f = t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
          <span className="editorial-eyebrow">{f.eyebrow}</span>
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 leading-tight">{f.heading}</h2>
        </div>

        <div className="border-t border-b border-gray-200 divide-y divide-gray-200 mb-16">
          {f.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="animate-on-scroll" data-delay={`${index * 0.05}s`}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="w-full flex items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-lg md:text-xl text-gray-900">{item.question}</span>
                    <ChevronDown
                      size={22}
                      className={`flex-shrink-0 text-orange-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 leading-relaxed pb-6">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center animate-on-scroll" data-delay="0.1s">
          <p className="font-display text-xl md:text-2xl text-gray-900 mb-6">{f.reassurance}</p>
          <a
            href="#contact"
            className="btn-pill inline-flex bg-orange-500 text-white px-8 py-3.5 hover:bg-orange-600"
          >
            {f.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
