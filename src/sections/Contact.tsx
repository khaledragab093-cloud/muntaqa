import { useEffect, useRef, useState } from 'react';
import { Mail, Send, Instagram, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify will handle the form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/muntaqapro/' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm mb-4">
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            لنبدأ <span className="text-gradient-gold">مشروعك</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            تواصل مع فريق مُنْتَقَى اليوم واحصل على استشارة مجانية لمشروعك القادم
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            {/* Email Card */}
            <a
              href="mailto:muntaqapro@gmail.com"
              className="glass-card rounded-xl p-5 flex items-center gap-4 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-white/50 text-sm">البريد الإلكتروني</p>
                <p className="text-white font-medium">muntaqapro@gmail.com</p>
              </div>
            </a>

            {/* Social Links */}
            <div className="glass-card rounded-xl p-6">
              <p className="text-white font-bold mb-4 font-kufi">تابعنا على</p>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-gold/20 transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/60 group-hover:text-gold transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Working Hours */}
            <div className="glass-card rounded-xl p-6">
              <p className="text-white font-bold mb-4 font-kufi">ساعات العمل</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-white/50">الأحد - الخميس</span>
                  <span className="text-white">9:00 ص - 6:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">الجمعة - السبت</span>
                  <span className="text-white/50">مغلق</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-6 lg:p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-kufi mb-3">
                    شكراً لتواصلك!
                  </h3>
                  <p className="text-white/60">
                    فريق مُنْتَقَى سيرد عليك قريباً
                  </p>
                </div>
              ) : (
                <form 
                  name="contact-form"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="contact-form" />
                  
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white/70">الاسم الكامل</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white/70">البريد الإلكتروني</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-white/70">رقم الواتساب</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 50 123 4567"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-white/70">الموضوع</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="موضوع رسالتك"
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white/70">الرسالة</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="اكتب رسالتك هنا..."
                      required
                      rows={5}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-gold focus:ring-gold/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-gold text-dark font-bold py-6 rounded-xl hover:shadow-gold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </Button>
                </form>
              )}
            </div>

            {/* Free Consultation Box */}
            <div className="mt-6 glass-card rounded-2xl p-6 border-gold/30 text-center">
              <h4 className="text-xl font-bold text-white font-kufi mb-3">
                احصل على حجز مكالمة استشارية مجانية الآن
              </h4>
              <p className="text-white/60 mb-4 text-sm">
                ناقش مشروعك مع فريق مُنْتَقَى واحصل على توجيهات استراتيجية مجانية
              </p>
              <a
                href="https://wa.link/xcq0vv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-gradient-gold text-dark font-bold px-8 py-5 rounded-xl hover:shadow-gold transition-all duration-300 flex items-center gap-2 mx-auto"
                >
                  <MessageCircle className="w-5 h-5" />
                  احجز مكالمة استشارية مجانية
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
