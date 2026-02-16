import { useEffect, useRef, useState } from 'react';
import { Check, Star, Crown, Sparkles, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Package {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  features: string[];
  price8: number;
  price15: number;
  highlighted?: boolean;
  badge?: string;
  icon: React.ElementType;
}

const packages: Package[] = [
  {
    id: 'essentials',
    name: 'باقة الانطلاق',
    nameEn: 'The Essentials',
    description: 'مونتاج سينمائي، هندسة صوت، وتصحيح ألوان لملفاتك الجاهزة',
    features: [
      'مونتاج سينمائي احترافي',
      'هندسة صوت متقدمة',
      'تصحيح ألوان سينمائي',
      'تصميم غلاف (Thumbnail)',
      'تنسيق مقاسات للنشر',
      'تسليم خلال 48 ساعة',
    ],
    price8: 400,
    price15: 700,
    icon: Star,
  },
  {
    id: 'growth',
    name: 'باقة النمو',
    nameEn: 'The Growth',
    description: 'كل ما سبق + تحسين الـ Hooks والسكريبت وموسيقى التريند',
    features: [
      'كل ما في باقة الانطلاق',
      'صياغة الخاطفة (Hook)',
      'تحسين السكريبت',
      'اختيار موسيقى التريند',
      'تحليل المنافسين',
      'دعم فني مميز',
    ],
    price8: 650,
    price15: 1150,
    icon: Sparkles,
  },
  {
    id: 'authority',
    name: 'باقة الشريك الاستراتيجي',
    nameEn: 'The Authority',
    description: 'استراتيجية كاملة، بنك أفكار شهري، كتابة سكريبت كامل، وإخراج عن بُعد',
    features: [
      'كل ما في باقة النمو',
      'تصميم المزيج التسويقي',
      'بنك أفكار شهري',
      'إخراج عن بُعد',
      'كتابة السكريبت كاملاً',
      'مدير حساب مخصص',
      'استشارات استراتيجية',
    ],
    price8: 950,
    price15: 1650,
    highlighted: true,
    badge: 'الأكثر طلباً',
    icon: Crown,
  },
];

export default function PricingCards() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm mb-4">
            الباقات والأسعار
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            اختر <span className="text-gradient-gold">باقتك</span> المناسبة
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            باقات مصممة لتناسب مختلف الاحتياجات، من المونتاج الأساسي إلى الاستراتيجية الشاملة
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative rounded-2xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${pkg.highlighted ? 'md:-mt-4 md:mb-4' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* VIP Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-gradient-gold text-dark text-sm font-bold px-4 py-1 rounded-full flex items-center gap-1 shadow-gold">
                    <Crown className="w-4 h-4" />
                    {pkg.badge}
                  </div>
                </div>
              )}

              <div
                className={`h-full rounded-2xl p-6 lg:p-8 ${
                  pkg.highlighted
                    ? 'vip-card'
                    : 'glass-card hover:border-gold/20'
                } transition-all duration-300 hover-lift`}
              >
                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center ${
                    pkg.highlighted ? 'bg-gold/20' : 'bg-white/5'
                  }`}>
                    <pkg.icon className={`w-8 h-8 ${pkg.highlighted ? 'text-gold' : 'text-white/60'}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white font-kufi mb-1">{pkg.name}</h3>
                  <p className="text-gold/70 text-sm">{pkg.nameEn}</p>
                </div>

                {/* Description */}
                <p className="text-white/50 text-center text-sm mb-6">
                  {pkg.description}
                </p>

                {/* Pricing */}
                <div className={`rounded-xl p-4 mb-6 ${pkg.highlighted ? 'bg-gold/10' : 'bg-white/5'}`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center border-l border-white/10">
                      <div className="text-2xl font-bold text-gradient-gold">${pkg.price8}</div>
                      <div className="text-xs text-white/50">8 فيديوهات</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gradient-gold">${pkg.price15}</div>
                      <div className="text-xs text-white/50">15 فيديو</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.highlighted ? 'text-gold' : 'text-gold/70'}`} />
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.link/xcq0vv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    className={`w-full py-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                      pkg.highlighted
                        ? 'bg-gradient-gold text-dark hover:shadow-gold'
                        : 'bg-white/10 text-white hover:bg-gold hover:text-dark'
                    }`}
                  >
                    <MessageCircle className="w-5 h-5" />
                    احجز مكالمة استشارية
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className={`text-center text-white/40 text-sm mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          جميع الأسعار بالدولار الأمريكي | يمكن تخصيص الباقات حسب احتياجاتك
        </p>
      </div>
    </section>
  );
}
