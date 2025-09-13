// components/conclusion-section.tsx
"use client";
import { Sparkles } from "lucide-react";

export function ConclusionSection() {
  return (
    // Đã thay đổi background và thêm class 'relative'
    <section className="scroll-section dark relative text-white">
      
      {/* ===== PHẦN CẬP NHẬT ===== */}

      {/* Layer 1: Ảnh nền cố định */}
      <div className="absolute inset-0 z-0">
        <img
          src="/conclusion-background.jpg"
          alt="Futuristic digital landscape"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Layer 2: Lớp phủ tối để làm nổi bật chữ */}
      <div className="absolute inset-0 z-10 bg-slate-900/70"></div>

      {/* ========================== */}

      {/* Layer 3: Nội dung chính */}
      <div className="absolute inset-0 opacity-10 z-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float [animation-delay:-1s]"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-white rounded-full animate-float [animation-delay:-3s]"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-white rounded-full animate-float"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 animate-fade-in-up text-balance">
            Kết Luận: Xu Hướng Phát Triển Tất Yếu
          </h2>
          <div className="space-y-8 text-xl text-white/90 text-pretty leading-relaxed">
            <p className="animate-fade-in-up [animation-delay:200ms]">
              Quan hệ giữa AI và con người là một <strong className="text-white">mâu thuẫn biện chứng</strong>. Sự phát triển của AI không làm con người “mất chỗ đứng”, mà thúc đẩy chúng ta bước lên một tầm cao mới của trí tuệ và sáng tạo, giữ vai trò định hướng, quản lý và quyết định các giá trị nhân văn.
            </p>
            <div className="animate-fade-in-up [animation-delay:400ms]">
              <div className="inline-block p-6 rounded-xl bg-white/5 backdrop-blur-md border border-white/20">
                 <div className="flex items-start text-left gap-4">
                    <Sparkles className="w-10 h-10 mt-1 text-amber-300 flex-shrink-0" />
                    <p className="text-2xl font-semibold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      AI không phải kẻ thù, cũng không chỉ là công cụ. Nó là tấm gương phản chiếu sự sáng tạo vô hạn của con người, và là động lực thúc đẩy xã hội ngày càng tiến bộ, văn minh hơn.
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}