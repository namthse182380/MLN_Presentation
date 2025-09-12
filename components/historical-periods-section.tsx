"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crown, Sword, Building, Scroll } from "lucide-react"

const periods = [
  {
    name: "Thời Hồng Bàng",
    duration: "2879 - 258 TCN",
    description: "Thời kỳ huyền thoại với 18 đời Vua Hùng, nền tảng văn hóa dân tộc",
    achievements: ["Văn hóa Đông Sơn", "Lễ hội Giỗ Tổ Hùng Vương", "Nền tảng nông nghiệp"],
    icon: Crown,
    color: "from-amber-500 to-orange-500",
  },
  {
    name: "Thời Bắc Thuộc",
    duration: "111 TCN - 939 SCN",
    description: "1000 năm dưới sự thống trị của các triều đại phương Bắc",
    achievements: ["Khởi nghĩa Hai Bà Trưng", "Khởi nghĩa Bà Triệu", "Tiếp thu văn hóa Trung Hoa"],
    icon: Sword,
    color: "from-red-500 to-pink-500",
  },
  {
    name: "Các Triều Đại Phong Kiến",
    duration: "939 - 1858",
    description: "Thời kỳ độc lập, phát triển văn hóa và mở rộng lãnh thổ",
    achievements: ["Thăng Long thành đô", "Văn miếu - Quốc Tử Giám", "Chiến thắng Bạch Đằng"],
    icon: Building,
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "Thời Pháp Thuộc",
    duration: "1858 - 1945",
    description: "Thời kỳ thuộc địa Pháp và phong trào giải phóng dân tộc",
    achievements: ["Phong trào Cần Vương", "Đông Du", "Cách mạng Tháng Tám"],
    icon: Scroll,
    color: "from-green-500 to-teal-500",
  },
]

export function HistoricalPeriodsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary text-white">Các Thời Kỳ Lịch Sử</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Hành Trình Qua Các Thời Đại</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá những giai đoạn phát triển quan trọng của dân tộc Việt Nam
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {periods.map((period, index) => {
            const IconComponent = period.icon
            return (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 hover:shadow-xl animate-fade-in-up border-0 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${period.color}`}></div>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${period.color} text-white`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <Badge variant="outline" className="text-muted-foreground">
                      {period.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl text-foreground group-hover:text-accent transition-colors">
                    {period.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{period.description}</p>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Thành tựu nổi bật:</h4>
                    <ul className="space-y-2">
                      {period.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
