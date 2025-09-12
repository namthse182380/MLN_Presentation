"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const timelineEvents = [
  {
    year: "2879 TCN",
    title: "Thời Hồng Bàng",
    description: "Vua Hùng thứ nhất lập nước Văn Lang, khởi đầu lịch sử dân tộc Việt Nam",
    period: "Thời kỳ huyền thoại",
    location: "Đồng bằng sông Hồng",
    icon: "👑",
  },
  {
    year: "257 TCN",
    title: "Nước Âu Lạc",
    description: "An Dương Vương thống nhất Âu Việt và Lạc Việt, xây dựng thành Cổ Loa",
    period: "Thời kỳ cổ đại",
    location: "Cổ Loa, Hà Nội",
    icon: "🏰",
  },
  {
    year: "111 TCN",
    title: "Bắc thuộc lần 1",
    description: "Nhà Hán chinh phục Âu Lạc, bắt đầu thời kỳ Bắc thuộc đầu tiên",
    period: "Thời Bắc thuộc",
    location: "Giao Chỉ",
    icon: "⚔️",
  },
  {
    year: "40 SCN",
    title: "Khởi nghĩa Hai Bà Trưng",
    description: "Trưng Trắc và Trưng Nhị khởi nghĩa chống quân Hán, lập nước Đại Cồ Việt",
    period: "Thời kỳ kháng chiến",
    location: "Mê Linh, Hà Nội",
    icon: "👸",
  },
  {
    year: "939",
    title: "Ngô Quyền thắng trận Bạch Đằng",
    description: "Đánh bại quân Nam Hán, kết thúc 1000 năm Bắc thuộc",
    period: "Độc lập tự chủ",
    location: "Sông Bạch Đằng",
    icon: "🛡️",
  },
  {
    year: "1010",
    title: "Thăng Long thành đô",
    description: "Lý Thái Tổ dời đô về Thăng Long, mở đầu thời kỳ phát triển rực rỡ",
    period: "Nhà Lý",
    location: "Thăng Long (Hà Nội)",
    icon: "🏛️",
  },
]

export function TimelineSection() {
  const [selectedEvent, setSelectedEvent] = useState(0)

  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white relative overflow-hidden">
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-full animate-parallax-float blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full animate-elegant-scale blur-xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 premium-card text-white animate-luxury-glow">Timeline Lịch Sử</Badge>
          <h2 className="text-4xl md:text-5xl font-bold luxury-text mb-6">Dòng Chảy Thời Gian</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Theo dõi những mốc son quan trọng trong lịch sử dân tộc Việt Nam
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-secondary rounded-full animate-luxury-glow"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex-1 px-8">
                  <Card
                    className={`cursor-pointer sophisticated-hover premium-card ${
                      selectedEvent === index ? "ring-2 ring-accent animate-luxury-glow" : ""
                    }`}
                    onClick={() => setSelectedEvent(index)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-2xl animate-elegant-scale">{event.icon}</span>
                        <Badge variant="outline" className="text-accent border-accent elegant-border">
                          {event.year}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold luxury-text mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {event.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {event.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="relative z-10">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-300 animate-luxury-glow ${
                      selectedEvent === index ? "bg-accent scale-125" : "bg-secondary"
                    }`}
                  ></div>
                </div>

                <div className="flex-1 px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
