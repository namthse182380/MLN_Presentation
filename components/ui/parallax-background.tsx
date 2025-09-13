"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxBackgroundProps {
  src: string;
  alt: string;
}

export function ParallaxBackground({ src, alt }: ParallaxBackgroundProps) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'] 
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden">
      <motion.div className="relative w-full h-[140%] -top-[20%]" style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </div>
  );
}