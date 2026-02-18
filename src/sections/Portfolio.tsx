import { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink, Eye } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  duration: string;
}

// دالة ذكية لاستخراج كود اليوتيوب وتشغيل الفيديو تلقائياً
const getYouTubeEmbedUrl = (url: string) => {
  if (!url || url === '#') return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11)
    ? `https://www.youtube.com/embed/${match[2]}?autoplay=1`
    : null;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'استراتيجية النمو الرقمي',
    category: 'تسويق رقمي',
    // رابط الصورة المصغرة المباشر من يوتيوب
    thumbnail: 'https://img.youtube.com/vi/cTadY9jqWAs/maxresdefault.jpg',
    // رابط الفيديو العادي من يوتيوب
    videoUrl: 'https://youtu.be/cTadY9jqWAs',
    views: '125K',
    duration: '2:45',
  },
  {
    id: 2,
    title: 'قصة نجاح ريادي',
    category: 'قصص نجاح',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop',
    videoUrl: '#',
    views: '89K',
    duration: '4:12',
  },
  {
    id: 3,
    title: 'منتجع الفخامة',
    category: 'عقارات',
    thumbnail: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&h=400&fit=crop',
    videoUrl: '#',
    views: '210K',
    duration: '3:30',
  },
  {
    id: 4,
    title: 'تقنية المستقبل',
    category: 'تكنولوجيا',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    videoUrl: '#',
    views: '156K',
    duration: '5:00',
  },
  {
    id: 5,
    title: 'مطعم الشيف',
    category: 'مطاعم',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop',
    videoUrl: '#',
    views: '78K',
    duration: '2:15',
  },
  {
    id: 6,
    title: 'عيادة الجمال',
    category: 'صحة وجمال',
    thumbnail: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=400&fit=crop',
    videoUrl: '#',
    views: '95K',
    duration: '3:45',
  },
];

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);

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
    <section id="portfolio" ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-gold/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-gold/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm mb-4">
            أعمالنا
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi
