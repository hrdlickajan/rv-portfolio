import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider } from './LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-orange-50">
        <Header />

        <main className="flex-grow">
          <Hero />
          <About />

          <Services />
          {/* <Contact /> */}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
