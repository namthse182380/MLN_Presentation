"use client";
import {
  BookOpen, BarChart3, Code, Sparkles, ImageIcon, 
  Code2, BrainCircuit, CheckCircle2, ArrowUpRight 
} from "lucide-react";

// --- DỮ LIỆU CHO PHỤ LỤC ---

// Dữ liệu cho phần "Minh bạch trong việc sử dụng AI"
const aiUsageData = [
  {
    title: "Sáng tạo Hình ảnh Nền",
    icon: ImageIcon,
    tool: "Midjourney",
    purpose: "Tạo ra các ảnh nền nghệ thuật, trừu tượng, mang tính triết học, phù hợp với chủ đề của từng section.",
    promptExample: `"philosophical concept of human-AI symbiosis, neural network patterns and human silhouette intertwined, ethereal light, digital art, cinematic lighting, dramatic, deep blues and glowing oranges --ar 16:9"`,
    humanContribution: "Lên ý tưởng, lựa chọn kết quả tốt nhất từ nhiều phương án, tinh chỉnh màu sắc và cắt cúp cho phù hợp với bố cục trang web."
  },
  {
    title: "Hỗ trợ Lập trình & Viết mã",
    icon: Code2,
    tool: "GitHub Copilot, Gemini",
    purpose: "Tăng tốc độ phát triển, đề xuất các đoạn mã cho hiệu ứng (animation), cấu trúc component React và giải quyết các vấn đề logic phức tạp.",
    promptExample: `"Create a React component for a vertical full-page scroll snapping container using Tailwind CSS. Each child section should snap to the start."`,
    humanContribution: "Kiểm tra, gỡ lỗi (debug), tối ưu hóa hiệu năng, tích hợp các đoạn mã vào cấu trúc dự án tổng thể và đảm bảo tính tương thích."
  },
  {
    title: "Nghiên cứu & Sáng tạo Nội dung",
    icon: BrainCircuit,
    tool: "ChatGPT-4, DeepSeek Chat",
    purpose: "Brainstorm ý tưởng, tóm tắt các tài liệu phức tạp, đề xuất các cách diễn giải khác nhau về ba quy luật của phép biện chứng và soạn thảo dàn ý ban đầu.",
    promptExample: `"Explain the dialectical law of the negation of the negation using the development of AI as a modern example."`,
    humanContribution: "Biên soạn lại toàn bộ nội dung cuối cùng, kiểm chứng thông tin bằng các nguồn học thuật chính thống (giáo trình, báo cáo), và chịu trách nhiệm hoàn toàn về tính chính xác và văn phong của bài viết."
  }
];

// Dữ liệu cho phần "Tài liệu tham khảo"
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
    //   { title: "AI Chat cung cấp bởi OpenRouter", author: "OpenRouter", link: "https://openrouter.ai/" },
      { title: "Giao diện được xây dựng với shadcn/ui", author: "shadcn", link: "https://ui.shadcn.com/" },
      { title: "Font chữ được cung cấp bởi Fontshare", author: "Indian Type Foundry", link: "https://www.fontshare.com/" },
    ]
  }
];


export function AppendixSection() {
  return (
    <section className="scroll-section w-full bg-background dark:bg-slate-950">
      {/* Container cho phép cuộn nội bộ */}
      <div className="container mx-auto h-full w-full overflow-y-auto py-24">
        <div className="max-w-5xl w-full mx-auto">
          {/* --- TIÊU ĐỀ CHÍNH --- */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              Phụ Lục
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Minh bạch hóa việc sử dụng AI và các tài liệu đã truyền cảm hứng cho dự án này.
            </p>
          </div>

          {/* --- PHẦN MINH BẠCH & TRÁCH NHIỆM --- */}
          <div className="mb-20">
            <div className="p-6 rounded-xl bg-card border border-primary/20 flex items-start gap-4 mb-8 animate-fade-in-up [animation-delay:200ms]">
                <CheckCircle2 className="w-10 h-10 mt-1 text-primary flex-shrink-0" />
                <div>
                    <h3 className="font-serif font-bold text-2xl text-foreground mb-1">Trách nhiệm & Liêm chính</h3>
                    <p className="text-muted-foreground text-pretty">
                        Chúng tôi cam kết chịu trách nhiệm hoàn toàn về nội dung cuối cùng của dự án. AI được sử dụng với vai trò là một công cụ hỗ trợ sáng tạo, không thay thế hoàn toàn tư duy và biên soạn của con người. Mọi thông tin do AI tạo ra đều đã được kiểm chứng và đối chiếu.
                    </p>
                </div>
            </div>

            <div className="space-y-6">
              {aiUsageData.map((usage, index) => {
                const Icon = usage.icon;
                return (
                  <div key={usage.title} className="p-6 rounded-lg bg-card border animate-fade-in-up" style={{ animationDelay: `${400 + index * 100}ms` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-xl text-foreground">{usage.title}</h4>
                    </div>
                    <div className="space-y-3 text-muted-foreground text-sm pl-9 border-l border-border ml-3">
                      <p><strong className="text-foreground font-semibold">Công cụ:</strong> {usage.tool}</p>
                      <p><strong className="text-foreground font-semibold">Mục đích:</strong> {usage.purpose}</p>
                      <div>
                        <p className="text-foreground font-semibold">Ví dụ Prompt:</p>
                        <code className="block text-xs bg-background p-2 rounded mt-1 font-mono border">{usage.promptExample}</code>
                      </div>
                      <p><strong className="text-foreground font-semibold">Đóng góp của Con người:</strong> {usage.humanContribution}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- PHẦN TÀI LIỆU THAM KHẢO --- */}
          <div className="animate-fade-in-up [animation-delay:800ms]">
            <div className="text-center mb-12">
              <h3 className="font-serif text-3xl font-bold text-foreground">Tài Liệu Tham Khảo</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
              {references.map((categoryData) => {
                const Icon = categoryData.icon;
                return (
                  <div key={categoryData.category} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      <h4 className="font-bold text-xl text-foreground">{categoryData.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {categoryData.items.map((ref) => (
                        <a
                          key={ref.title}
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between text-left p-4 border rounded-lg bg-card 
                                     hover:border-primary hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 dark:hover:shadow-primary/20
                                     transition-all duration-300"
                        >
                          <div>
                            <p className="font-semibold text-foreground/90 group-hover:text-foreground">{ref.title}</p>
                            <p className="text-sm text-muted-foreground">{ref.author}</p>
                          </div>
                          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
    </section>
  );
}