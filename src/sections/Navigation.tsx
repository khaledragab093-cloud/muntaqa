import { useState, useEffect } from 'react';
import { Menu, X, Crown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'services', label: 'الخدمات' },
  { id: 'portfolio', label: 'معرض الأعمال' },
  { id: 'about', label: 'من نحن' },
  { id: 'contact', label: 'تواصل معنا' },
];

export default function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Don't show navigation on legal pages
  if (currentPage === 'privacy' || currentPage === 'terms') {
    return null;
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-gold/10 py-3'
          : 'bg-black/40 backdrop-blur-md py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group"
          >
            <Crown className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-110" />
            <span className="text-xl font-bold text-gradient-gold font-kufi">
              مُنْتَقَى
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  currentPage === item.id
                    ? 'text-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-gold rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://wa.link/xcq0vv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-gold text-dark font-semibold px-6 py-2 rounded-full hover:shadow-gold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                استشارة مجانية
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/10 pt-4 animate-fade-in bg-black/90 backdrop-blur-xl rounded-xl mt-2 px-2">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-right py-3 px-4 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'text-gold bg-gold/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.link/xcq0vv"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2"
              >
                <Button
                  className="w-full bg-gradient-gold text-dark font-semibold"
                >
                  <MessageCircle className="w-4 h-4 ml-2" />
                  استشارة مجانية
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
