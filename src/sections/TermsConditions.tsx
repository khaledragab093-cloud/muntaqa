import { useEffect, useRef, useState } from 'react';
import { FileText, ChevronLeft } from 'lucide-react';

interface TermsConditionsProps {
  onPageChange: (page: string) => void;
}

export default function TermsConditions({ onPageChange }: TermsConditionsProps) {
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
    <section ref={sectionRef} className="relative py-24 overflow-hidden min-h-screen">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Back Button */}
        <button
          onClick={() => onPageChange('home')}
          className={`flex items-center gap-2 text-white/60 hover:text-gold transition-colors mb-8 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>العودة للرئيسية</span>
        </button>

        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            الشروط <span className="text-gradient-gold">والأحكام</span>
          </h1>
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 lg:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">مقدمة</h2>
              <p className="text-white/70 leading-relaxed">
                باستخدامك لموقع <span className="text-gold font-semibold">"مُنْتَقَى"</span> أو طلب خدمات فريق صناعة المحتوى، 
                فإنك توافق على الشروط والأحكام التالية. يرجى قراءتها بعناية قبل استخدام خدماتنا.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">الخدمات المقدمة</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                يلتزم فريق <span className="text-gold font-semibold">"مُنْتَقَى"</span> بتقديم خدمات إنتاج واستراتيجية المحتوى 
                بناءً على الباقة المختارة الموضحة في الموقع:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span><strong className="text-white">باقة الانطلاق:</strong> مونتاج سينمائي، هندسة صوت، وتصحيح ألوان</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span><strong className="text-white">باقة النمو:</strong> كل ما سبق + تحسين Hooks والسكريبت</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span><strong className="text-white">باقة الشريك الاستراتيجي:</strong> استراتيجية كاملة مع بنك أفكار شهري</span>
                </li>
              </ul>
            </div>

            {/* Ownership Rights */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">حقوق الملكية</h2>
              <p className="text-white/70 leading-relaxed">
                بعد إتمام الدفع بالكامل، تنتقل ملكية الفيديوهات والمنتجات النهائية للعميل. 
                يحق لفريق <span className="text-gold font-semibold">"مُنْتَقَى"</span> عرض أجزاء منها في معرض أعماله ما لم 
                يتم الاتفاق على غير ذلك كتابياً.
              </p>
            </div>

            {/* Revisions Policy */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">سياسة التعديلات</h2>
              <p className="text-white/70 leading-relaxed">
                يحق للعميل طلب عدد محدد من التعديلات (يتم الاتفاق عليها عند التعاقد) 
                بما لا يغير جوهر السكريبت المتفق عليه مسبقاً. التعديلات الجوهرية قد تتطلب 
                رسوم إضافية.
              </p>
            </div>

            {/* Free Consultation */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">الاستشارات المجانية</h2>
              <p className="text-white/70 leading-relaxed">
                المكالمة الاستشارية المجانية هي خدمة لمرة واحدة لتقييم الاحتياجات، 
                ولا تشمل تقديم استراتيجيات مكتوبة أو سكريبتات إلا بعد التعاقد الرسمي.
              </p>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">الأسعار والمدفوعات</h2>
              <p className="text-white/70 leading-relaxed">
                الأسعار الموضحة في الموقع قابلة للتحديث، ويتم اعتماد السعر المتفق عليه 
                عند بدء المشروع. يتطلب بدء العمل دفع عربون يتم الاتفاق عليه، والباقي 
                عند تسليم المشروع.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">تواصل معنا</h2>
              <p className="text-white/70 leading-relaxed">
                لأي استفسارات حول هذه الشروط، يمكنك التواصل معنا عبر البريد الإلكتروني:{' '}
                <a href="mailto:muntaqapro@gmail.com" className="text-gold hover:underline">
                  muntaqapro@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
