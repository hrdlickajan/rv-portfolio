import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Manifesto from './components/Manifesto';
import StuckInCircle from './components/StuckInCircle';
import Foundations from './components/Foundations';
import WhyStrength from './components/WhyStrength';
import YourJourney from './components/YourJourney';
import HowICanHelp from './components/HowICanHelp';
import ChooseYourPath from './components/ChooseYourPath';
import WhyIDoThis from './components/WhyIDoThis';
import MovementShared from './components/MovementShared';
import FAQ from './components/FAQ';
import ClosingBanner from './components/ClosingBanner';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';
import PrototypeLayoutSwitcher, { useUIVariant } from './components/prototype/PrototypeLayoutSwitcher';
import PrototypeScrollRail from './components/prototype/PrototypeScrollRail';

function App() {
  const [uiVariant, setUiVariant] = useUIVariant();
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Make all elements immediately visible without animation
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        (el as HTMLElement).classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.animationDelay = el.dataset.delay ?? '0s';
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  return (
    <LanguageProvider>
      <div
        data-ui-variant={uiVariant}
        className="min-h-screen flex flex-col"
        style={{ backgroundColor: 'var(--c-cream)' }}
      >
        <Header />

        <main className="flex-grow">
          <Hero />
          <Manifesto />
          <StuckInCircle />
          <Foundations />
          <WhyStrength />
          <YourJourney />
          <HowICanHelp />
          <ChooseYourPath />
          <WhyIDoThis />
          <MovementShared />
          <FAQ />
          <Contact />
          <ClosingBanner />
        </main>

        <Footer />

        {uiVariant === '3' && <PrototypeScrollRail />}
        <PrototypeLayoutSwitcher variant={uiVariant} onChange={setUiVariant} />
      </div>
    </LanguageProvider>
  );
}

export default App;
