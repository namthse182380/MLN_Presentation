// components/conclusion-section.tsx
"use client";
import { Users, Flag } from "lucide-react";

export function ConclusionSection() {
  return (
    <div className="scroll-section dark relative text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="conclusion-background.jpg"
          alt="Futuristic digital landscape"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 z-10 bg-slate-900/70"></div>
      
      <div className="container text-center relative z-30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 animate-fade-in-up text-balance">
            Kết Luận & Hướng Đi
          </h2>
          <div className="space-y-8 text-xl text-white/90 text-pretty leading-relaxed">
            <p className="animate-fade-in-up [animation-delay:200ms]">
              AI không phải kẻ thù, mà là một công cụ và động lực mạnh mẽ để con người tiến hóa. Mối quan hệ này là một <strong className="text-white">mâu thuẫn biện chứng</strong>, thúc đẩy chúng ta vươn lên tầm cao mới về trí tuệ và sáng tạo.
            </p>
            
            <div className="animate-fade-in-up [animation-delay:400ms] space-y-4 text-left">
                <div className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-4">
                    <Flag className="w-8 h-8 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-white mb-1">Học tập & Nâng cao kỹ năng</h3>
                        <p className="text-white/80">Liên tục trau dồi kỹ năng mềm, tư duy phản biện và hiểu biết về công nghệ.</p>
                    </div>
                </div>
                 <div className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-4">
                    <Users className="w-8 h-8 mt-1 text-primary flex-shrink-0" />
                    <div>
                        <h3 className="font-bold text-white mb-1">Xây dựng môi trường hợp tác</h3>
                        <p className="text-white/80">Nâng cao nhận thức đạo đức, tham gia xây dựng quy định để phát triển AI vì lợi ích chung.</p>
                    </div>
                </div>
            </div>

            <div className="animate-fade-in-up [animation-delay:600ms] pt-4">
               <p className="text-2xl font-semibold italic bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent animated-gradient">
                  "Nếu AI ngày mai có thể làm hầu hết công việc của bạn, bạn muốn bản thân làm gì để vẫn có giá trị?"
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}