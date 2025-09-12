"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Clock, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animate-aurora"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-transparent to-background/90"></div>

      <div className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full animate-parallax-float opacity-70 blur-sm animate-luxury-glow"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full animate-parallax-float animation-delay-400 opacity-60 animate-luxury-glow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-accent/80 to-secondary/80 rounded-full animate-parallax-float animation-delay-800 opacity-50"></div>
      <div className="absolute top-60 left-1/3 w-12 h-12 bg-gradient-to-br from-secondary/60 to-accent/60 rounded-full animate-elegant-scale animation-delay-600"></div>
      <div className="absolute bottom-60 right-1/3 w-18 h-18 bg-gradient-to-br from-accent/40 to-secondary/40 rounded-full animate-parallax-float animation-delay-200"></div>

      <div className="absolute top-32 right-1/4 animate-elegant-scale animation-delay-400">
        <Star className="w-6 h-6 text-accent/60 fill-current animate-luxury-glow" />
      </div>
      <div className="absolute bottom-32 left-1/4 animate-elegant-scale animation-delay-800">
        <Star className="w-4 h-4 text-secondary/60 fill-current animate-luxury-glow" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium mb-8 animate-fade-in-up text-white border border-accent/20">
            <BookOpen className="w-4 h-4 animate-pulse" />
            Khám phá lịch sử qua web presentation
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 animate-fade-in-up animation-delay-200 text-balance">
            Lịch Sử
            <span className="luxury-text block animate-typewriter bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              Việt Nam
            </span>
            Qua Thời Đại
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-400 text-pretty max-w-2xl mx-auto leading-relaxed">
            Hành trình khám phá 4000 năm lịch sử dân tộc Việt Nam qua những sự kiện, nhân vật và thời kỳ quan trọng.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="text-lg px-8 py-4 sophisticated-hover bg-accent hover:bg-accent/90 text-white border-0 relative overflow-hidden group shadow-lg"
            >
              <span className="relative z-10">Bắt đầu khám phá</span>
              <ArrowRight className="ml-2 w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 sophisticated-hover border-accent/50 hover:bg-accent/10 bg-background/80 backdrop-blur-sm text-foreground hover:text-accent elegant-border"
            >
              <Clock className="mr-2 w-5 h-5" />
              Timeline lịch sử
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center premium-card animate-luxury-glow">
          <div className="w-1 h-3 bg-gradient-to-b from-accent to-secondary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
