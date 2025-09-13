// components/analysis-section.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const analyses = [
    {
        law: "Theo Quy luật Mâu thuẫn",
        title: "Động Lực Thúc Đẩy",
        description: "AI (tốc độ, tự động hóa) và con người (sáng tạo, đạo đức) là hai mặt đối lập. Chúng vừa thống nhất (AI phục vụ con người), vừa đấu tranh (AI cạnh tranh việc làm). Mâu thuẫn này chính là động lực buộc con người phải thích ứng và đổi mới.",
    },
    {
        law: "Theo Quy luật Lượng – Chất",
        title: "Bước Nhảy Về Chất",
        description: "Ban đầu, AI chỉ hỗ trợ (thay đổi về lượng). Khi AI có thể tự sáng tạo, đó là một 'bước nhảy' về chất. Lao động thay đổi bản chất, con người chuyển từ vai trò thực thi sang quản trị và sáng tạo ở tầng cao hơn.",
    },
    {
        law: "Theo Quy luật Phủ định",
        title: "Phát Triển Xoáy Ốc",
        description: "AI không xóa bỏ con người mà kế thừa tri thức để phủ định các hình thức lao động cũ. Quá trình diễn ra theo đường xoáy ốc: Con người tạo ra AI → AI thay đổi con người → Con người lại cải tiến AI, tạo ra một xã hội ở tầm cao mới.",
    },
];

export function AnalysisSection() {
  return (
    <section className="scroll-section dark text-white w-full bg-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-900"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl animate-float [animation-delay:-3s]"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4" variant={"default"}>Vận Dụng Phân Tích</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 luxury-text">
            Mối Quan Hệ Giữa AI và Con Người
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
            Áp dụng các quy luật biện chứng để làm sáng tỏ bản chất và xu hướng của mối quan hệ phức tạp này.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {analyses.map((analysis, index) => (
            <Card
              key={index}
              className="group sophisticated-hover animate-fade-in-up border-white/10 bg-white/5 h-full text-left"
              style={{ animationDelay: `${(index + 1) * 200}ms` }}
            >
              <CardHeader>
                <Badge variant="secondary" className="mb-3 w-fit">{analysis.law}</Badge>
                <CardTitle className="text-2xl text-white group-hover:text-accent transition-colors duration-300">
                  {analysis.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/70 leading-relaxed">{analysis.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}