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

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'استراتيجية النمو الرقمي',
    category: 'تسويق رقمي',
    thumbnail: 'https://i9.ytimg.com/vi/cTadY9jqWAs/mqdefault_custom_1.jpg?v=69460f35&sqp=CIid2MwG&rs=AOn4CLB8D2S82byXqR8VRBWlJ5UxZ3DVKA',
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-kufi mb-4">
            معرض <span className="text-gradient-gold">الأعمال</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            نماذج من أعمال فريق مُنْتَقَى التي نفخر بها، محتوى احترافي يحقق النتائج
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${(index % 6) * 100 + 200}ms` }}
              onClick={() => setSelectedVideo(item)}
            >
              {/* Thumbnail */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-gold">
                    <Play className="w-7 h-7 text-dark mr-1" fill="currentColor" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 text-white text-xs font-medium">
                  {item.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-medium backdrop-blur-sm">
                  {item.category}
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-bold text-lg mb-1 font-kufi">{item.title}</h3>
                  <div className="flex items-center gap-4 text-white/60 text-sm">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {item.views}
                    </span>
                    <span className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4" />
                      مشاهدة
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={!!selectedVideo} onOpenChange={() => setSelectedVideo(null)}>
        <DialogContent className="glass-card border-gold/20 max-w-4xl p-0 overflow-hidden">
          <div className="aspect-video bg-black flex items-center justify-center">
            {selectedVideo && (
              <div className="text-center">
                <Play className="w-20 h-20 text-gold mx-auto mb-4" />
                <p className="text-white text-lg">{selectedVideo.title}</p>
                <p className="text-white/50 text-sm mt-2">سيتم تشغيل الفيديو هنا</p>
              </div>
            )}
          </div>
          <div className="p-6">
            {selectedVideo && (
              <>
                <h3 className="text-xl font-bold text-white font-kufi mb-2">{selectedVideo.title}</h3>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold">{selectedVideo.category}</span>
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {selectedVideo.views} مشاهدة
                  </span>
                  <span>{selectedVideo.duration}</span>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
