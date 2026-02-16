import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Heart, Users, Award, Lightbulb } from 'lucide-react';

export default function About() {
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

  const values = [
    { icon: Target, title: 'التميز', desc: 'نطمح للأفضل دائماً في كل ما نقدمه' },
    { icon: Heart, title: 'الشغف', desc: 'نحب ما نعمل ونضع قلوبنا في كل مشروع' },
    { icon: Lightbulb, title: 'الإبداع', desc: 'نبحث عن الحلول المبتكرة والأفكار الجديدة' },
    { icon: Users, title: 'الشراكة', desc: 'نرى عملائنا شركاء نجاح نسعى لتحقيقه معاً' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm mb-4">
            من نحن
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            قصة <span className="text-gradient-gold">مُنْتَقَى</span>
          </h2>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className={`glass-card rounded-2xl p-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white font-kufi">رسالتنا</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              تمكين رواد الأعمال وصناع المحتوى في الخليج من بناء حضور رقمي قوي من خلال 
              محتوى فيديو احترافي يجمع بين الإبداع والجودة العالمية، لنساعدهم في تحقيق 
              أهدافهم والوصول إلى جمهورهم بفعالية.
            </p>
          </div>

          {/* Vision */}
          <div className={`glass-card rounded-2xl p-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center">
                <Eye className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-white font-kufi">رؤيتنا</h3>
            </div>
            <p className="text-white/70 leading-relaxed text-lg">
              أن نكون الشريك الاستراتيجي الأول لرواد الأعمال وصناع المحتوى الطموحين، 
              والوجهة الموثوقة لصناعة محتوى ذكي يجمع بين الرؤية التسويقية والإخراج المتميز، 
              ليضع عملاءنا في صدارة مجالاتهم الرقمية.
            </p>
          </div>
        </div>

        {/* Story */}
        <div className={`glass-card rounded-2xl p-8 lg:p-12 mb-20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-12 h-12 text-gold mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white font-kufi mb-6">فلسفتنا</h3>
            <p className="text-white/70 leading-relaxed text-lg mb-6">
              في <span className="text-gold font-semibold">فريق مُنْتَقَى</span>، نؤمن بأن كل فيديو هو فرصة لإحداث تأثير. 
              لذلك ننتقي بعناية كل عنصر، من الفكرة إلى التنفيذ النهائي، لنضمن أن يكون 
              المحتوى الذي نقدمه استثنائياً بكل المقاييس.
            </p>
            <p className="text-white/70 leading-relaxed text-lg">
              نجمع بين الخبرة الفنية العميقة والفهم الاستراتيجي للسوق، لنقدم لعملائنا 
              ليس مجرد فيديوهات، بل أدوات فعالة لتحقيق النمو والنجاح.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className={`mb-12 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-white font-kufi text-center mb-10">قيمنا</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 text-center hover:border-gold/30 transition-all duration-300 hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h4 className="text-white font-bold mb-2 font-kufi">{value.title}</h4>
                <p className="text-white/50 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
