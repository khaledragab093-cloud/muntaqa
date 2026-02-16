import { useEffect, useRef } from 'react';
import { MessageCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onPageChange: (page: string) => void;
}

export default function Hero({ onPageChange }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el, index) => {
        const factor = (index + 1) * 0.5;
        (el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-dark">
        {/* Animated Orbs */}
        <div className="parallax absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="parallax absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="parallax absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-slide-up leading-tight" style={{ animationDelay: '0.1s' }}>
            <span className="text-white font-kufi block mb-2">توقف عن إهدار وقتك في صناعة</span>
            <span className="text-white font-kufi block mb-2">محتوى لا يبيع، لا ينتشر، ولا يؤثر!</span>
            <span className="text-gradient-gold font-kufi block text-2xl sm:text-3xl md:text-4xl mt-6">
              فريق مُنْتَقَى يتولى عنك عناء التخطيط والإنتاج
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            نحن لا نصنع مجرد فيديوهات؛ نحن نبني سلطتك الرقمية من خلال استراتيجية محتوى متكاملة 
            تحول المشاهدين إلى شركاء نجاح
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="https://wa.link/xcq0vv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-gradient-gold text-dark font-bold px-8 py-6 text-lg rounded-full hover:shadow-gold-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                احجز مكالمة استشارية مجانية
              </Button>
            </a>
            <Button
              onClick={() => onPageChange('portfolio')}
              variant="outline"
              className="border-gold/30 text-gold hover:bg-gold/10 px-8 py-6 text-lg rounded-full transition-all duration-300 flex items-center gap-2"
            >
              <Play className="w-5 h-5" />
              شاهد أعمالنا
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
