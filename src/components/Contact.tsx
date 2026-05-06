import { Instagram, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert(t.contact.captchaRequired);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setCaptchaToken(null);
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-orange-50 via-amber-50/60 to-orange-50 py-20 pattern-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll" data-delay="0s">
          <h2 className="font-display text-5xl md:text-6xl tracking-wider text-gray-900 mb-4 leading-none">
            {t.contact.title}
            <span className="block text-orange-500">
              {t.contact.subtitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.message}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6 animate-on-scroll" data-delay="0.1s">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                {t.contact.name}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="input-field w-full px-4 py-3 rounded-lg border border-orange-200 transition-colors bg-white/80 text-gray-800"
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                {t.contact.email}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="input-field w-full px-4 py-3 rounded-lg border border-orange-200 transition-colors bg-white/80 text-gray-800"
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                {t.contact.message_label}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="input-field w-full px-4 py-3 rounded-lg border border-orange-200 transition-colors bg-white/80 text-gray-800 resize-none"
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <div className="flex justify-center">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || ''}
                onChange={(token) => setCaptchaToken(token)}
                onExpired={() => setCaptchaToken(null)}
              />
            </div>

            {isSuccess && (
              <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="text-green-600" size={20} />
                <p className="text-green-700 font-medium">
                  {t.contact.success || 'Vaše zpráva byla úspěšně odeslána!'}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-sporty w-full flex items-center justify-center gap-2 bg-orange-500 text-white px-8 py-4 hover:bg-orange-600 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={20} />
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
          </form>

          <div className="space-y-6 animate-on-scroll" data-delay="0.2s">
            <div className="glass-card rounded-xl shadow-xl p-5 card-glow">
              <div className="flex items-center gap-3 py-2 border-b border-orange-100">
                <Mail size={16} className="text-orange-500 shrink-0" />
                <a
                  href="mailto:romana.vitkova.coach@gmail.com"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  romana.vitkova.coach@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-orange-100">
                <Phone size={16} className="text-orange-500 shrink-0" />
                <a
                  href="tel:+420734113441"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  +420 734 113 441
                </a>
              </div>
              <div className="flex items-center gap-3 py-2 border-b border-orange-100">
                <Instagram size={16} className="text-orange-500 shrink-0" />
                <a
                  href="https://www.instagram.com/romana.vitkova_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-orange-500 transition-colors"
                >
                  @romana.vitkova_
                </a>
              </div>
              <div className="flex items-center gap-3 py-2">
                <MapPin size={16} className="text-orange-500 shrink-0" />
                <p className="text-sm text-gray-600">{t.contact.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
