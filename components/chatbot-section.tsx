// components/chatbot-section.tsx
"use client";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { SendHorizonal } from "lucide-react";
import Image from "next/image";

export function ChatbotSection() {
  return (
    <div className="scroll-section dark text-white w-full bg-slate-900 overflow-hidden">
      <Image
        src="/chatbot-background.jpg"
        alt="Abstract technology background"
        fill
        className="object-cover z-0 animate-subtle-zoom"
      />
      <div className="absolute inset-0 bg-slate-900/70 z-10"></div> 
      <div className="absolute inset-0 bg-grid-white/[0.05] z-10"></div>
      <div className="container relative z-20 mx-auto flex flex-col items-center justify-center h-full px-6">
        <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Trò chuyện cùng AI
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto text-pretty">
                Đặt câu hỏi của bạn về mối quan hệ giữa AI và con người, hoặc bất cứ điều gì bạn tò mò.
            </p>
        </div>
        <Card className="w-full max-w-3xl h-[40vh] max-h-[400px] bg-slate-800/60 border-white/20 backdrop-blur-lg flex flex-col">
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
                <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 font-bold text-sm">AI</div>
                    <div className="bg-slate-700 rounded-lg rounded-tl-none p-3 max-w-md">
                        <p className="text-white/90">Xin chào! Tôi là AI Assistant. Bạn muốn hỏi điều gì về tương lai của công nghệ và con người?<span className="inline-block w-1 blinking-caret text-primary"></span></p>
                    </div>
                </div>
            </div>
            <div className="p-4 border-t border-white/20 bg-slate-800/80">
                <div className="relative">
                    <input 
                        type="text"
                        placeholder="Nhập câu hỏi của bạn ở đây..."
                        className="w-full bg-slate-700 border-slate-600 rounded-full py-3 pl-5 pr-16 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                    <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full">
                        <SendHorizonal className="w-5 h-5"/>
                    </Button>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
}