"use client";
import { useState, useEffect } from 'react';

// BƯỚC 1: Thêm 'appendix' vào danh sách sections
const sections = [
    { id: 'hero', label: 'Mở đầu' },
    { id: 'laws', label: 'Ba quy luật' }, // Đổi tên cho rõ hơn
    { id: 'examples', label: 'Ví dụ' },
    { id: 'ethics', label: 'Đạo đức' },
    { id: "skills", label: 'Kỹ năng' },
    { id: 'chatbot', label: 'Chatbot' },
    { id: 'conclusion', label: 'Kết luận' },
    { id: 'appendix', label: 'Phụ lục' }, // Section mới
];

export function DotNavigation() {
    // Toàn bộ logic bên trong component này giữ nguyên, không cần thay đổi gì cả.
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.innerHeight / 2;
            let currentSection = '';
            const container = document.querySelector('.scroll-container');
            if (!container) return;

            sections.forEach(section => {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
                        currentSection = section.id;
                    }
                }
            });

            if (currentSection && activeSection !== currentSection) {
                setActiveSection(currentSection);
            }
        };

        const container = document.querySelector('.scroll-container');
        if (container) {
            container.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeSection]);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        const container = document.querySelector('.scroll-container');
        if (element && container) {
            container.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
            <ul className="flex flex-col items-center gap-4">
                {sections.map(section => (
                    <li key={section.id} className="group">
                        <button
                            onClick={() => scrollToSection(section.id)}
                            className={`block w-3 h-3 rounded-full bg-foreground/30 transition-all duration-300
                                ${activeSection === section.id 
                                    ? 'scale-150 bg-primary animate-dot-glow' 
                                    : 'hover:scale-125 hover:bg-foreground/70'}`}
                        >
                            <span className="sr-only">{section.label}</span>
                        </button>
                        <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-3 py-1 bg-card/80 border backdrop-blur-sm text-foreground text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 pointer-events-none whitespace-nowrap">
                            {section.label}
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}