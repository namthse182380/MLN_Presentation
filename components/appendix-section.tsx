"use client";
// BƯỚC 1: Import thêm các icon cần thiết
import { Users, Flag, ArrowUpRight, BookOpen, BarChart3, Code, Sparkles } from "lucide-react";

// BƯỚC 2: Thêm thuộc tính `icon` vào dữ liệu
const references = [
  {
    category: "Triết học & Lý luận nền tảng",
    icon: BookOpen,
    items: [
      { title: "Phép Biện Chứng Của Tự Nhiên", author: "Friedrich Engels", link: "https://www.marxists.org/vietnamese/marx-engels/1883/phep-bien-chung-cua-tu-nhien/index.htm" },
      { title: "Homo Deus: Lược Sử Tương Lai", author: "Yuval Noah Harari", link: "https://www.goodreads.com/book/show/31138556-homo-deus" },
    ]
  },
  {
    category: "Báo cáo & Phân tích Tác động",
    icon: BarChart3,
    items: [
      { title: "The Future of Jobs Report 2023", author: "World Economic Forum", link: "https://www.weforum.org/reports/the-future-of-jobs-report-2023/" },
      { title: "The economic potential of generative AI", author: "McKinsey & Company", link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier" },
      { title: "AI Index Report 2024", author: "Stanford University HAI", link: "https://aiindex.stanford.edu/report/" },
    ]
  },
  {
    category: "Đạo đức & Quản trị AI",
    icon: Sparkles,
    items: [
        { title: "Ethics of Artificial Intelligence and Robotics", author: "Stanford Encyclopedia of Philosophy", link: "https://plato.stanford.edu/entries/ethics-ai/" },
        { title: "Our Principles - Google AI", author: "Google", link: "https://ai.google/responsibility/principles/" },
    ]
  },
  {
    category: "Công nghệ & Cảm hứng",
    icon: Code,
    items: [
      { title: "Giao diện được xây dựng với shadcn/ui", author: "shadcn", link: "https://ui.shadcn.com/" },
      { title: "Font chữ được cung cấp bởi Fontshare", author: "Indian Type Foundry", link: "https://www.fontshare.com/" },
    ]
  }
];

export function AppendixSection() {
  return (
    <div className="scroll-section dark relative text-white">
      <div className="absolute inset-0 z-0">
        {/* <img src="/images/conclusion-background.jpg" alt="Futuristic digital landscape" className="w-full h-full object-cover" /> */}
      </div>
      <div className="absolute inset-0 z-10 bg-slate-900/70"></div>
      
      <div className="container relative z-30 h-full w-full overflow-y-auto py-24 flex items-center justify-center">
        <div className="max-w-5xl w-full"> {/* Tăng max-w để chứa layout 2 cột */}
          
          {/* --- BƯỚC 3: PHẦN PHỤ LỤC ĐÃ ĐƯỢC "TÁI THIẾT KẾ" HOÀN TOÀN --- */}
          <div className="mt-20 text-left animate-fade-in-up [animation-delay:800ms]">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-white/90">Phụ Lục Tham Khảo</h3>
            </div>
            {/* Sử dụng grid cho layout 2 cột trên màn hình vừa và lớn */}
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {references.map((categoryData) => {
                const Icon = categoryData.icon;
                return (
                  <div key={categoryData.category} className="space-y-4">
                    {/* Tiêu đề danh mục với icon */}
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-xl text-white">{categoryData.category}</h4>
                    </div>
                    {/* Danh sách các tài liệu trong danh mục */}
                    <div className="space-y-3">
                      {categoryData.items.map((ref) => (
                        <a
                          key={ref.title}
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between text-left p-4 border border-white/20 rounded-lg bg-white/5 
                                     hover:border-primary/50 hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10
                                     transition-all duration-300"
                        >
                          <div>
                            <p className="font-semibold text-white/90 group-hover:text-white">{ref.title}</p>
                            <p className="text-sm text-white/60">{ref.author}</p>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </a>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}