"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "CEO, Tech Startup",
    content: "Animation tuyệt vời! Trang web của chúng tôi trở nên sống động và thu hút hơn rất nhiều.",
    rating: 5,
    avatar: "/professional-man-avatar.png",
  },
  {
    name: "Trần Thị B",
    role: "Designer",
    content: "Thiết kế hiện đại và chuyên nghiệp. Khách hàng của tôi rất hài lòng với kết quả.",
    rating: 5,
    avatar: "/professional-woman-avatar.png",
  },
  {
    name: "Lê Minh C",
    role: "Marketing Manager",
    content: "Tỷ lệ chuyển đổi tăng 40% sau khi sử dụng. Đầu tư rất đáng giá!",
    rating: 5,
    avatar: "/business-man-avatar.png",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 animate-fade-in-up">Khách Hàng Nói Gì</h2>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 text-pretty max-w-2xl mx-auto">
            Những phản hồi tích cực từ khách hàng của chúng tôi
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-border/50 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg text-card-foreground mb-6 italic text-pretty">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-bold text-card-foreground">{testimonial.name}</h4>
                          <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-accent scale-125" : "bg-border hover:bg-accent/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
