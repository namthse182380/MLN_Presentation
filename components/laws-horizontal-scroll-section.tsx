"use client"
import { useEffect, useRef, useState } from "react"
import { Waves, TrendingUp, RefreshCw } from "lucide-react"
import { Badge } from "./ui/badge";

// Dữ liệu laws giữ nguyên...
const laws = [
  { name: "Quy luật Mâu thuẫn", summary: "Nguồn Gốc Của Sự Vận Động", description: "Mọi sự vật đều chứa đựng các mặt đối lập. Chính sự đấu tranh giữa chúng là nguồn gốc nội tại, tạo ra động lực cho mọi sự phát triển.", points: ["Mâu thuẫn tồn tại khách quan", "Mâu thuẫn bên trong quyết định", "Đấu tranh là tuyệt đối"], icon: Waves, color: "#3b82f6" },
  { name: "Quy luật Lượng - Chất", summary: "Cách Thức Của Sự Phát Triển", description: "Sự phát triển bắt đầu bằng việc tích lũy dần về lượng. Khi đạt đến giới hạn 'điểm nút', một 'bước nhảy' về chất sẽ xảy ra, tạo ra sự vật mới.", points: ["Lượng thay đổi, Chất ổn định", "Điểm nút -> Bước nhảy", "Tránh nóng vội & bảo thủ"], icon: TrendingUp, color: "#22c55e" },
  { name: "Quy luật Phủ định của Phủ định", summary: "Khuynh Hướng Của Sự Phát Triển", description: "Sự phát triển diễn ra theo con đường xoáy ốc. Cái mới ra đời từ cái cũ, kế thừa những yếu tố tích cực và tiến lên một trình độ cao hơn.", points: ["Phủ định có kế thừa", "Phát triển xoáy ốc", "Ủng hộ cái mới hợp quy luật"], icon: RefreshCw, color: "#f59e0b" },
];

export function LawsHorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Logic của useEffect giữ nguyên...
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("is-visible");
            const index = parseInt(target.getAttribute('data-index') || '0', 10);
            setActiveIndex(index);
          } else {
            target.classList.remove("is-visible");
          }
        });
      },
      { root: containerRef.current, threshold: 0.7 }
    );
    const cards = Array.from(containerRef.current?.children || []);
    cards.forEach((card) => observer.observe(card));
    return () => { cards.forEach((card) => observer.unobserve(card)); };
  }, []);

  return (
    /* 
      --- THAY ĐỔI DUY NHẤT ---
      Áp dụng lớp CSS "bg-laws-section" chúng ta vừa tạo.
      Xóa toàn bộ thẻ <img> và div overlay bên trong.
    */
    <section className="scroll-section dark text-white bg-laws-section">
      
      {/* Toàn bộ nội dung giờ nằm trong một div có z-index cao hơn lớp phủ ::before */}
      <div className="relative z-10 h-full w-full">
        <div ref={containerRef} className="horizontal-scroll-container h-full w-full">
          {laws.map((law, index) => {
            const Icon = law.icon
            return (
              <div key={index} className="horizontal-card" data-index={index}>
                <Icon className="absolute w-1/2 h-1/2 text-white/5 opacity-50 blur-3xl" style={{ color: law.color }}/>
                <div className="card-content-wrapper max-w-4xl text-center z-10">
                  {/* ... Nội dung card giữ nguyên ... */}
                  <div className="inline-flex items-center gap-4 mb-8">
                    <div className="p-4 rounded-xl bg-slate-800/50 backdrop-blur-sm"><Icon style={{ color: law.color }} className="w-8 h-8" /></div>
                    <h2 className="text-3xl font-bold" style={{ color: law.color }}>{law.name}</h2>
                  </div>
                  <h3 className="text-5xl md:text-7xl font-black mb-6 text-balance bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{law.summary}</h3>
                  <p className="text-xl md:text-2xl text-slate-300 leading-relaxed text-pretty mb-8">{law.description}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                      {activeIndex === index && law.points.map((point, i) => (
                          <Badge key={i} variant="outline" className="text-slate-300 border-slate-600 backdrop-blur-sm bg-white/5 text-base py-1 px-4">{point}</Badge>
                      ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Dấu chấm chỉ báo tiến trình */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {laws.map((_, index) => (
            <div key={index} className={`w-3 h-3 rounded-full transition-all duration-500 ${ activeIndex === index ? 'scale-125 bg-white' : 'bg-white/30' }`} />
          ))}
        </div>
      </div>
    </section>
  )
}