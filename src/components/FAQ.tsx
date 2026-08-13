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
          <h2 className="font-display text-4xl md:text-5xl text-gray-900 leading-tight">{f.heading}</h2>
        </div>

        <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
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
                    <p className="text-gray-600 leading-relaxed pb-6">
                      {item.answer}
                      {item.answerNote && (
                        <>
                          <br />
                          <br />
                          <strong className="font-semibold text-gray-900">{item.answerNote}</strong>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
