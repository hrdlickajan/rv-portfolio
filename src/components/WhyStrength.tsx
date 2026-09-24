import { Zap, HeartPulse, UserCheck, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const icons = [Zap, HeartPulse, UserCheck, ShieldCheck, Sparkles, Compass];

export default function WhyStrength() {
  const { t } = useLanguage();
  const w = t.whyStrength;

  return (
    <section id="why-strength" className="editorial-block editorial-block--dark py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-on-scroll text-center" data-delay="0s">
          <span className="editorial-eyebrow justify-center flex">{w.eyebrow}</span>
          <h2 className="editorial-heading font-display text-4xl md:text-6xl leading-tight mb-16 md:mb-20">
            {w.headingLine1}
            <br />
            <em>{w.headingEmphasis}</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-white/10">
          {w.reasons.map((reason, index) => {
            const Icon = icons[index];
            return (
              <div
                key={reason.lead}
                className="flex flex-col items-center text-center gap-3 p-6 md:p-8 animate-on-scroll"
                data-delay={`${0.1 + index * 0.1}s`}
              >
                <Icon size={24} className="text-orange-500" />
                <p className="font-display text-lg md:text-xl leading-snug">{reason.lead}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
