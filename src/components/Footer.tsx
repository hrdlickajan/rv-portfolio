import { useLanguage } from '../LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Romana Vítková. {t.footer.copyright}.</p>
        </div>
      </div>
    </footer>
  );
}
