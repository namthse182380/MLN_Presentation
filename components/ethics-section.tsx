// components/ethics-section.tsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Users, GitBranch, Scale } from "lucide-react";

const ethicsIssues = [
  {
    title: "Quyền riêng tư & Dữ liệu",
    description: "Dữ liệu cá nhân có nguy cơ bị lạm dụng hoặc lộ ra ngoài nếu không được bảo vệ đúng cách.",
    icon: Lock,
  },
  {
    title: "Thiên lệch & Phân biệt đối xử",
    description: "AI có thể đưa ra quyết định bất công nếu được huấn luyện trên dữ liệu có sẵn sự thiên vị.",
    icon: Users,
  },
  {
    title: "Minh bạch & Giải thích được",
    description: "Cần phải hiểu tại sao AI đưa ra một quyết định cụ thể, đặc biệt trong các lĩnh vực quan trọng.",
    icon: GitBranch,
  },
  {
    title: "Trách nhiệm & Pháp lý",
    description: "Khi AI gây ra lỗi, việc xác định ai (nhà phát triển, người dùng) chịu trách nhiệm là rất phức tạp.",
    icon: Scale,
  },
];

export function EthicsSection() {
  return (
    <section className="scroll-section dark text-white w-full bg-slate-900">
      <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vấn đề Đạo đức & Xã hội
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto text-pretty">
            Sự phát triển của AI đặt ra những câu hỏi quan trọng về giá trị và trách nhiệm của con người.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ethicsIssues.map((issue, index) => {
            const Icon = issue.icon;
            return (
              <Card
                key={index}
                className="group border-white/10 bg-white/5 h-full text-left p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mb-4">
                    <Icon className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <CardTitle className="text-2xl text-white group-hover:text-primary transition-colors duration-300">
                    {issue.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/70 leading-relaxed">{issue.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
        <p className="text-center mt-12 text-sm text-white/50 italic animate-fade-in-up [animation-delay:700ms]">
          Các nguyên tắc chính cần tuân thủ: Công bằng, Minh bạch, Trách nhiệm, và Bảo vệ dữ liệu.
        </p>
      </div>
    </section>
  );
}