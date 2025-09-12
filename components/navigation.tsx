"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary animate-fade-in-up">✨ AnimateLand</div>
          <div className="hidden md:flex items-center space-x-8 animate-fade-in-up animation-delay-200">
            <a href="#features" className="text-foreground hover:text-accent transition-colors duration-300">
              Tính năng
            </a>
            <a href="#testimonials" className="text-foreground hover:text-accent transition-colors duration-300">
              Đánh giá
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors duration-300">
              Liên hệ
            </a>
          </div>
          <Button className="animate-fade-in-up animation-delay-400 hover:scale-105 transition-transform duration-300">
            Bắt đầu ngay
          </Button>
        </div>
      </div>
    </nav>
  )
}
