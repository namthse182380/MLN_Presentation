"use client"
import { useEffect, useRef, useState } from "react"
import { Badge } from "./ui/badge";
import Image from "next/image";
const analyses = [
{
law: "Quy luật Mâu thuẫn",
title: "Động Lực Thúc Đẩy",
description: "AI (tốc độ, tự động hóa) và con người (sáng tạo, đạo đức) là hai mặt đối lập. Chúng vừa thống nhất (AI là sản phẩm phục vụ con người), vừa đấu tranh (AI cạnh tranh việc làm). Chính mâu thuẫn này là động lực buộc con người phải thích ứng và phát triển.",
imageUrl: "/images/analysis-1.jpg",
points: [ "AI là sản phẩm của con người", "Vừa hợp tác, vừa cạnh tranh", "Tạo động lực phát triển mới"]
},
{
law: "Quy luật Lượng - Chất",
title: "Bước Nhảy Về Chất",
description: "Ban đầu, AI chỉ hỗ trợ xử lý dữ liệu (thay đổi về lượng). Khi AI có thể tự sáng tạo (viết văn, vẽ tranh), đó là một 'bước nhảy' về chất. Lao động thay đổi bản chất, con người chuyển từ vai trò thực thi sang quản trị và sáng tạo ở tầng cao hơn.",
imageUrl: "/images/analysis-2.jpg",
points: ["Tích lũy lượng -> Bước nhảy chất", "Thay đổi bản chất lao động", "Nhiều ngành nghề mới xuất hiện"]
},
{
law: "Quy luật Phủ định của Phủ định",
title: "Phát Triển Xoáy Ốc",
description: "AI không xóa bỏ con người mà kế thừa tri thức để phủ định các hình thức lao động cũ. Quá trình này diễn ra theo đường xoáy ốc: Con người tạo ra AI → AI thay đổi con người → Con người lại cải tiến AI, tạo ra một xã hội ở tầm cao mới, văn minh hơn.",
imageUrl: "/images/analysis-3.jpg",
points: ["Phủ định có kế thừa", "Phát triển theo đường xoáy ốc", "Tạo ra xã hội ở tầm cao mới"]
},
]
export function AnalysisHorizontalScrollSection() {
const containerRef = useRef<HTMLDivElement>(null);
const [activeIndex, setActiveIndex] = useState(0);
useEffect(() => {
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
{ root: containerRef.current, threshold: 0.6 }
);
const cards = Array.from(containerRef.current?.children || []);
cards.forEach((card) => observer.observe(card));
return () => { cards.forEach((card) => observer.unobserve(card)); };
}, []);
return (
<section className="scroll-section relative bg-background">
<div ref={containerRef} className="horizontal-scroll-container h-full w-full relative z-20">
{analyses.map((analysis, index) => (
<div key={index} className="horizontal-card" data-index={index}>
<div className="card-content-wrapper w-full h-full">
<div className="container mx-auto grid md:grid-cols-2 items-center gap-12 h-full">
<div className="w-full h-1/2 md:h-2/3 relative rounded-2xl overflow-hidden shadow-2xl">
<Image
src={analysis.imageUrl}
alt={analysis.title}
fill
className="object-cover"
sizes="(max-width: 768px) 100vw, 50vw"
/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
</div>
<div className="text-left">
<Badge className="mb-4" variant="default">{analysis.law}</Badge>
<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
{analysis.title}
</h2>
<p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8">
{analysis.description}
</p>
<div className="flex flex-wrap gap-3">
{analysis.points.map((point, i) => (
<Badge key={i} variant="outline" className="text-base py-1 px-4">{point}</Badge>
))}
</div>
</div>
</div>
</div>
</div>
))}
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {analyses.map((_, index) => (
      <div key={index} className={`w-3 h-3 rounded-full transition-all duration-500 ${ activeIndex === index ? 'scale-125 bg-primary' : 'bg-border' }`} />
    ))}
  </div>
</section>
)
}