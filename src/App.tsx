import { useState, useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import ProblemSolution from './sections/ProblemSolution';
import PricingCards from './sections/PricingCards';
import Portfolio from './sections/Portfolio';
import About from './sections/About';
import Contact from './sections/Contact';
import PrivacyPolicy from './sections/PrivacyPolicy';
import TermsConditions from './sections/TermsConditions';
import Footer from './sections/Footer';

// Page URL mapping
const pageUrls: Record<string, string> = {
  'home': '/',
  'services': '/services',
  'portfolio': '/portfolio',
  'about': '/about',
  'contact': '/contact',
  'privacy': '/privacy',
  'terms': '/terms',
};

const urlToPage: Record<string, string> = {
  '/': 'home',
  '/services': 'services',
  '/portfolio': 'portfolio',
  '/about': 'about',
  '/contact': 'contact',
  '/privacy': 'privacy',
  '/terms': 'terms',
};

function App() {
  // Get initial page from URL
  const getInitialPage = () => {
    const path = window.location.pathname;
    return urlToPage[path] || 'home';
  };

  const [currentPage, setCurrentPageState] = useState(getInitialPage());
  const [isLoading, setIsLoading] = useState(true);

  // Update URL when page changes
  const setCurrentPage = (page: string) => {
    setCurrentPageState(page);
    const url = pageUrls[page] || '/';
    window.history.pushState({ page }, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const page = urlToPage[path] || 'home';
      setCurrentPageState(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onPageChange={setCurrentPage} />
            <ProblemSolution />
            <PricingCards />
            <Portfolio />
          </>
        );
      case 'services':
        return <PricingCards />;
      case 'portfolio':
        return <Portfolio />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy onPageChange={setCurrentPage} />;
      case 'terms':
        return <TermsConditions onPageChange={setCurrentPage} />;
      default:
        return (
          <>
            <Hero onPageChange={setCurrentPage} />
            <ProblemSolution />
            <PricingCards />
            <Portfolio />
          </>
        );
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-6">
            <div className="w-20 h-20 rounded-full border-2 border-gold/20 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-t-2 border-gold animate-spin" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gradient-gold font-kufi">م</span>
            </div>
          </div>
          <p className="text-white/60 text-sm animate-pulse">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground" dir="rtl">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="relative">
        {renderPage()}
      </main>

      {currentPage !== 'privacy' && currentPage !== 'terms' && (
        <Footer onPageChange={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
