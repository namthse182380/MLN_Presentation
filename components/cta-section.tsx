"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-accent to-secondary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full animate-float animation-delay-400"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white rounded-full animate-float animation-delay-800"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 animate-fade-in-up text-balance">
            Sẵn Sàng Tạo Nên
            <span className="block text-white">Điều Kỳ Diệu?</span>
          </h2>

          <p className="text-xl text-white mb-8 animate-fade-in-up animation-delay-200 text-pretty leading-relaxed">
            Hãy để chúng tôi giúp bạn tạo ra một trang web với animation tuyệt đẹp và trải nghiệm người dùng đáng nhớ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 bg-white text-accent hover:bg-white/90 border-0 shadow-lg"
            >
              <Mail className="mr-2 w-5 h-5" />
              Liên hệ ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 hover:scale-105 transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-accent bg-transparent"
            >
              Xem portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
