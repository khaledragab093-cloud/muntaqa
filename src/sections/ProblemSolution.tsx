import { useEffect, useRef, useState } from 'react';
import { AlertTriangle, CheckCircle2, Target, Zap, TrendingUp, Award } from 'lucide-react';

export default function ProblemSolution() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const solutions = [
    { icon: Target, title: 'استراتيجية محتوى مدروسة', desc: 'نخطط لكل فيديو بعناية لتحقيق أهدافك' },
    { icon: Zap, title: 'أفكار وسكريبتات جاهزة', desc: 'نوفر لك المحتوى الجاهز للتصوير' },
    { icon: TrendingUp, title: 'محتوى يحقق النمو', desc: 'فيديوهات مصممة لزيادة التفاعل والمتابعة' },
    { icon: Award, title: 'جودة عالمية', desc: 'معايير إنتاج تضاهي القنوات العالمية' },
  ];

  return (
    <section id="problem" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm mb-4">
            لماذا نحن؟
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            التحدي <span className="text-gradient-gold">والحل</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problem Card */}
          <div className={`glass-card rounded-2xl p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white font-kufi">المشكلة</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              هل تستهلك ساعات في كتابة سكريبتات لا تجذب أحداً؟ هل تصويرك عشوائي وتفتقد 
              لخطة تفرق بين محتوى "التفاعل" ومحتوى "البيع"؟
            </p>
            <p className="text-white/60 leading-relaxed">
              معظم صناع المحتوى يواجهون صعوبة في إنتاج محتوى فيديو احترافي يجذب الجمهور 
              ويحقق النتائج المرجوة.
            </p>
          </div>

          {/* Solution Card */}
          <div className={`glass-card rounded-2xl p-8 border-gold/20 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-white font-kufi">الحل</h3>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed text-lg">
              مع <span className="text-gold font-semibold">فريق مُنْتَقَى</span>، نحن المسؤولون عن رؤية 
              المحتوى بالكامل. نوفر لك الاستراتيجية، الأفكار، والسكريبت.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              لنضمن أن كل فيديو يخدم هدفاً واضحاً ويحقق نتائج ملموسة لعلامتك التجارية.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-white/5 hover:bg-gold/5 transition-colors duration-300 group"
                >
                  <solution.icon className="w-6 h-6 text-gold mb-3 group-hover:scale-110 transition-transform" />
                  <h4 className="text-white font-semibold mb-1 text-sm">{solution.title}</h4>
                  <p className="text-white/50 text-xs">{solution.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
