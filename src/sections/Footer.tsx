import { Crown, Instagram, MessageCircle, Mail } from 'lucide-react';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export default function Footer({ onPageChange }: FooterProps) {
  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'الرئيسية', page: 'home' },
    { label: 'الخدمات', page: 'services' },
    { label: 'معرض الأعمال', page: 'portfolio' },
    { label: 'من نحن', page: 'about' },
    { label: 'تواصل معنا', page: 'contact' },
  ];

  const services = [
    'مونتاج سينمائي',
    'هندسة صوت',
    'تصحيح ألوان',
    'تصميم Thumbnails',
    'كتابة سكريبت',
    'استراتيجية محتوى',
  ];

  return (
    <footer className="relative bg-dark-light border-t border-gold/10">
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 mb-6 group"
            >
              <Crown className="w-8 h-8 text-gold transition-transform duration-300 group-hover:scale-110" />
              <span className="text-xl font-bold text-gradient-gold font-kufi">
                مُنْتَقَى
              </span>
            </button>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              فريق مُنْتَقَى لصناعة المحتوى، نحول أفكارك إلى محتوى بصري استثنائي 
              ي captivate الجمهور ويُبرز علامتك التجارية.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/muntaqapro/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" />
              </a>
              <a
                href="https://wa.link/xcq0vv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-white/60 group-hover:text-gold transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 font-kufi">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-white/50 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 font-kufi">خدماتنا</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6 font-kufi">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a href="mailto:muntaqapro@gmail.com" className="text-white/50 hover:text-gold transition-colors text-sm">
                  muntaqapro@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.link/xcq0vv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 text-gold hover:bg-gold/20 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-right">
              © 2025 مُنْتَقَى. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleNavClick('privacy')}
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >
                سياسة الخصوصية
              </button>
              <button 
                onClick={() => handleNavClick('terms')}
                className="text-white/40 hover:text-gold transition-colors text-sm"
              >
                الشروط والأحكام
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
