"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, HeartPulse, Palette } from "lucide-react";

const examples = [
    {
        title: "AI trong Giáo dục",
        description: "ChatGPT hỗ trợ học sinh, tạo đề thi, nhưng cũng gây lo ngại về sự phụ thuộc và giảm tư duy tự nhiên.",
        icon: BookOpen
    },
    {
        title: "AI trong Y tế",
        description: "Hỗ trợ chẩn đoán hình ảnh, phân tích dữ liệu lớn, nhưng có rủi ro sai lệch do dữ liệu huấn luyện thiên lệch (bias).",
        icon: HeartPulse
    },
    {
        title: "AI Sáng tạo",
        description: "Viết nhạc, vẽ tranh, tạo kịch bản, ảnh hưởng trực tiếp đến công việc của nghệ sĩ, nhà báo và nhà thiết kế.",
        icon: Palette
    },
];

const comparisonData = [
    {
        criteria: "Tốc độ & Độ chính xác",
        ai: "Rất nhanh, ít sai trong tác vụ lặp đi lặp lại.",
        human: "Linh hoạt, có thể xử lý các tình huống bất ngờ."
    },
    {
        criteria: "Sáng tạo & Trí tưởng tượng",
        ai: "Mô phỏng dựa trên dữ liệu, thiếu ý tưởng đột phá.",
        human: "Sáng tạo bản chất, đổi mới thực sự."
    },
    {
        criteria: "Đạo đức & Trách nhiệm",
        ai: "Phụ thuộc vào lập trình và kiểm soát của con người.",
        human: "Có khả năng ra quyết định dựa trên giá trị nhân văn."
    },
    {
        criteria: "Thích nghi",
        ai: "Tốt nếu có dữ liệu và mô hình phù hợp.",
        human: "Thích ứng linh hoạt với môi trường hoàn toàn mới."
    }
];

export function ExamplesSection() {
  return (
    <section className="scroll-section w-full bg-background/95 backdrop-blur-sm">
      {/* 
        --- PHẦN CẬP NHẬT ---
        Thêm 3 class vào div container dưới đây:
        1. h-full: Để container chiếm toàn bộ chiều cao của section cha (100vh).
        2. overflow-y-auto: Tự động bật thanh cuộn dọc KHI VÀ CHỈ KHI nội dung bên trong bị tràn ra ngoài.
        3. py-24: Thêm khoảng đệm lớn ở trên và dưới để nội dung không bị dính vào cạnh màn hình khi cuộn.
      */}
      <div className="container mx-auto h-full overflow-y-auto py-24">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Thực trạng & Ví dụ</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            AI đang hiện diện trong mọi lĩnh vực, tạo ra cả cơ hội và thách thức.
          </p>
        </div>
        
        {/* Giảm khoảng cách dưới của 3 card để layout gọn hơn */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {examples.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card 
                key={index} 
                className="text-center p-4 border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader className="items-center">
                  <div className="p-4 bg-primary/10 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{example.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{example.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="bg-card p-8 rounded-2xl border animate-fade-in-up [animation-delay:500ms]">
            <h3 className="text-3xl font-bold text-center mb-8">So sánh AI và Con người</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left table-auto">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4 text-lg font-semibold">Tiêu chí</th>
                            <th className="p-4 text-lg font-semibold text-green-400">Ưu điểm của AI</th>
                            <th className="p-4 text-lg font-semibold text-blue-400">Ưu điểm của Con người</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comparisonData.map((row, i) => (
                            <tr key={i} className="border-b last:border-0">
                                <td className="p-4 font-medium">{row.criteria}</td>
                                <td className="p-4 text-muted-foreground">{row.ai}</td>
                                <td className="p-4 text-muted-foreground">{row.human}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </section>
  );
}