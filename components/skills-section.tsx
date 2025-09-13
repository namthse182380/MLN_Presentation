"use client";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, Users, Sparkles, Goal, Network } from "lucide-react";
import Image from "next/image";

const skills = [
    { name: "Tư duy phản biện & Giải quyết vấn đề", icon: BrainCircuit },
    { name: "Sáng tạo & Đổi mới", icon: Sparkles },
    { name: "Kỹ năng mềm (Giao tiếp, Đồng cảm)", icon: Users },
    { name: "Học tập suốt đời & Thích ứng", icon: Goal },
    { name: "Hiểu biết về AI & Đạo đức công nghệ", icon: Network },
]

export function SkillsSection() {
    return (
        <div className="scroll-section w-full bg-background">
            <div className="container grid md:grid-cols-2 gap-12 items-center">
                <div className="relative w-full h-80 md:h-2/3 rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up">
                    <Image 
                        src="/images/analysis-3.jpg"
                        alt="Human skills in the age of AI"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="text-left">
                    <Badge className="mb-4 animate-fade-in-up" style={{ animationDelay: '100ms' }}>Định hướng tương lai</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        Kỹ năng cần thiết cho Kỷ nguyên AI
                    </h2>
                    <p className="text-xl text-muted-foreground mb-8 text-pretty animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                        Để không bị bỏ lại phía sau, con người cần tập trung vào những kỹ năng mà AI không thể dễ dàng thay thế.
                    </p>
                    <div className="space-y-4">
                        {skills.map((skill, index) => {
                            const Icon = skill.icon;
                            return (
                                <div 
                                  key={index} 
                                  className="flex items-center gap-4 p-4 rounded-lg bg-card border hover:shadow-md transition-shadow hover:border-primary/50 animate-fade-in-up"
                                  style={{ animationDelay: `${400 + index * 100}ms` }}
                                >
                                    <Icon className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="font-semibold text-lg">{skill.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}