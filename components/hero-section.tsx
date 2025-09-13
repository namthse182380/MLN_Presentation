// components/hero-section.tsx
"use client";
import { ChevronDown, Cpu } from "lucide-react";

export function HeroSection() {
  return (
    <section className="scroll-section w-full relative">
      {/* ===== PHẦN CẬP NHẬT ===== */}
      
      {/* Layer 1: Ảnh nền */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-background.jpg"
          alt="AI and Human Connection"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layer 2: Lớp phủ Gradient để làm nổi bật chữ */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 via-background/50 to-transparent"></div>
      
      {/* ========================== */}

      {/* Layer 3: Nội dung chính (với z-index cao hơn) */}
      <div className="container mx-auto px-6 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-in-up border">
            <Cpu className="w-5 h-5 text-accent" />
            Góc nhìn từ phép biện chứng duy vật
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 animate-fade-in-up [animation-delay:200ms] text-balance">
            AI và Con người
            <span className="block bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent mt-2">
              Đối tác hay Đối thủ?
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:400ms] text-pretty max-w-3xl mx-auto leading-relaxed">
            Sự phát triển nhanh chóng của AI đang làm thay đổi cách con người lao động, học tập và sáng tạo. Mối quan hệ này cần được nhìn nhận thế nào từ góc độ biện chứng?
          </p>
        </div>
      </div>
      
      {/* Mũi tên scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 flex flex-col items-center gap-1 text-muted-foreground">
        <p className="text-sm font-semibold">Khám phá</p>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}