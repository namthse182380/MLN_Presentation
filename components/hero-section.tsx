"use client";
import { ChevronDown, Cpu } from "lucide-react";
import { ParallaxBackground } from "./ui/parallax-background";

export function HeroSection() {
  return (
    <section className="scroll-section w-full relative">
      <ParallaxBackground src="/hero-background.jpg" alt="AI and Human Connection" />
      
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      
      <div className="container text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-card/60 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-in-up border">
            <Cpu className="w-5 h-5 text-primary" />
            Góc nhìn từ phép biện chứng duy vật
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 animate-fade-in-up [animation-delay:200ms] text-balance">
            AI và Con người
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
              Đối tác hay Đối thủ?
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:400ms] text-pretty max-w-3xl mx-auto leading-relaxed italic">
            “Trong lúc ChatGPT có thể viết một bài thơ, Midjourney vẽ nên một bức tranh... vậy người nghệ sĩ hay bác sĩ có nguy cơ bị thay thế? Mối quan hệ này thực sự là gì?”
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20 flex flex-col items-center gap-1 text-muted-foreground">
        <p className="text-sm font-semibold">Khám phá</p>
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}