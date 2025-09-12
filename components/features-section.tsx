"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Zap, Palette, Smartphone, Globe, Sparkles } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Animation Mượt Mà",
    description: "Các hiệu ứng chuyển động được tối ưu hóa cho trải nghiệm người dùng tốt nhất",
  },
  {
    icon: Palette,
    title: "Thiết Kế Hiện Đại",
    description: "Giao diện đẹp mắt với màu sắc và typography được chọn lọc kỹ càng",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Hoạt động hoàn hảo trên mọi thiết bị từ mobile đến desktop",
  },
  {
    icon: Globe,
    title: "Tối Ưu Hiệu Suất",
    description: "Tải nhanh và mượt mà với công nghệ web hiện đại nhất",
  },
]

export function FeaturesSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.3 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-muted/50 to-background/90"></div>

      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full blur-xl animate-particle-float"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-effect px-4 py-2 rounded-full text-sm font-medium mb-6 text-accent">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Tính năng đặc biệt
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 animate-fade-in-up bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text text-transparent">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 text-pretty max-w-2xl mx-auto leading-relaxed">
            Những điều làm nên sự khác biệt của chúng tôi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 glass-effect border-accent/20 relative overflow-hidden ${
                visibleItems.includes(index)
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-6 text-center relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
                  <feature.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-300 relative z-10" />
                </div>

                <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed group-hover:text-card-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
