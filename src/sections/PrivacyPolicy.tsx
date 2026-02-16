import { useEffect, useRef, useState } from 'react';
import { Shield, ChevronLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onPageChange: (page: string) => void;
}

export default function PrivacyPolicy({ onPageChange }: PrivacyPolicyProps) {
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
            <Shield className="w-8 h-8 text-gold" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            سياسة <span className="text-gradient-gold">الخصوصية</span>
          </h1>
        </div>

        {/* Content */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-2xl p-8 lg:p-12 space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">مقدمة</h2>
              <p className="text-white/70 leading-relaxed">
                نحن في فريق <span className="text-gold font-semibold">"مُنْتَقَى"</span> نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. 
                هذه السياسة توضح كيفية جمع واستخدام وحماية معلوماتك عند استخدامك لموقعنا وخدماتنا.
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">البيانات التي نجمعها</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                نجمع فقط المعلومات التي تزودنا بها طواعية عبر نموذج التواصل أو من خلال المراسلات المباشرة:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>الاسم الكامل</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>البريد الإلكتروني</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>رقم الواتساب</span>
                </li>
              </ul>
            </div>

            {/* Data Usage */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">كيفية استخدام البيانات</h2>
              <p className="text-white/70 leading-relaxed mb-4">
                نستخدم هذه البيانات للتواصل معك بخصوص استشاراتك وطلباتك، ولتطوير جودة الخدمات التي نقدمها لك:
              </p>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>الرد على استفساراتك وطلباتك</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>تقديم استشارات مخصصة لاحتياجاتك</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0 mt-2" />
                  <span>تحسين وتطوير خدماتنا</span>
                </li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">حماية البيانات</h2>
              <p className="text-white/70 leading-relaxed">
                نلتزم بعدم بيع أو مشاركة بياناتك مع أي جهات خارجية، ونستخدم منصات آمنة 
                (مثل Netlify وWhatsApp) لمعالجة تواصلنا. نتخذ إجراءات أمنية مناسبة لحماية 
                معلوماتك من الوصول غير المصرح به.
              </p>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">ملفات تعريف الارتباط (Cookies)</h2>
              <p className="text-white/70 leading-relaxed">
                قد يستخدم الموقع ملفات تعريف ارتباط بسيطة لتحسين تجربة التصفح والتحليل الفني. 
                هذه الملفات لا تحتوي على أي معلومات شخصية ويمكنك تعطيلها من إعدادات متصفحك.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-white font-kufi mb-4">تواصل معنا</h2>
              <p className="text-white/70 leading-relaxed">
                إذا كان لديك أي استفسارات حول سياسة الخصوصية، يمكنك التواصل معنا عبر البريد الإلكتروني:{' '}
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
