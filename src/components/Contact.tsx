import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t.contact.title}
            <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              {t.contact.subtitle}
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.contact.message}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Email</h3>
            </div>
            <a
              href="mailto:rv.romanavitkova@gmail.com"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              rv.romanavitkova@gmail.com
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Telefon</h3>
            </div>
            <a
              href="tel:+420734113441"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
            >
              +420 734 113 441
            </a>
          </div>

          <div className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Lokace</h3>
            </div>
            <p className="text-gray-600 font-medium">Praha, Česká republika</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <form onSubmit={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none transition-colors bg-orange-50 text-gray-800"
                placeholder="Vaše jméno"
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
                className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none transition-colors bg-orange-50 text-gray-800"
                placeholder="Váš e-mail"
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
                className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:outline-none transition-colors bg-orange-50 text-gray-800 resize-none"
                placeholder="Napište svou zprávu..."
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
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5"
            >
              <Send size={20} />
              {isSubmitting ? t.contact.sending : t.contact.send}
            </button>
          </form>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Proč mi napsat?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-orange-200 font-bold">✓</span>
                  <span>Individuální konzultace a plán</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-200 font-bold">✓</span>
                  <span>Odpověď do 24 hodin</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-200 font-bold">✓</span>
                  <span>Žádné skryté poplatky</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-200 font-bold">✓</span>
                  <span>Osobní přístup a podpora</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">{t.footer.followUs}</h3>
              <div className="grid grid-cols-3 gap-4">
                <a
                  href="https://www.instagram.com/romana.vitkova_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                  title="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://www.facebook.com/RomanaVitkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                  title="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/romana-vitkova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
