"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Quote } from "lucide-react"

const keyFigures = [
  {
    name: "Hai Bà Trưng",
    period: "12 - 43 SCN",
    title: "Nữ anh hùng dân tộc",
    description: "Trưng Trắc và Trưng Nhị lãnh đạo cuộc khởi nghĩa chống quân Hán, lập nước Đại Cồ Việt",
    quote: "Trước phục thù chí, sau báo quốc ân",
    image: "/professional-woman-avatar.png",
  },
  {
    name: "Ngô Quyền",
    period: "897 - 944",
    title: "Vua đầu tiên thời độc lập",
    description: "Đánh bại quân Nam Hán tại trận Bạch Đằng, kết thúc 1000 năm Bắc thuộc",
    quote: "Nam quốc sơn hà nam đế cư",
    image: "/professional-man-avatar.png",
  },
  {
    name: "Lý Thái Tổ",
    period: "974 - 1028",
    title: "Khai quốc công thần nhà Lý",
    description: "Dời đô về Thăng Long, mở đầu thời kỳ phát triển rực rỡ của dân tộc",
    quote: "Đất này rồng cuộn, phượng bay",
    image: "/business-man-avatar.png",
  },
]

export function KeyFiguresSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent text-white">Nhân Vật Lịch Sử</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Những Anh Hùng Dân Tộc</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tìm hiểu về những nhân vật vĩ đại đã góp phần tạo nên lịch sử Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {keyFigures.map((figure, index) => (
            <Card
              key={index}
              className="group hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up border-0 overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={figure.image || "/placeholder.svg"}
                    alt={figure.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <Badge className="absolute top-4 left-4 bg-accent text-white">{figure.period}</Badge>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {figure.name}
                  </h3>
                  <p className="text-accent font-medium mb-3">{figure.title}</p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{figure.description}</p>

                  <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-accent">
                    <div className="flex items-start gap-2">
                      <Quote className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-foreground italic font-medium">"{figure.quote}"</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
