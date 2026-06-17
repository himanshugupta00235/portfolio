"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const frameRate = 1000 / 60;
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        // easeOutQuart
        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = start + (value - start) * easeProgress;

        if (frame === totalFrames) {
          clearInterval(counter);
          setDisplayValue(value);
        } else {
          setDisplayValue(current);
        }
      }, frameRate);

      return () => clearInterval(counter);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-[128px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] -z-10" />

      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-neutral-300 tracking-wide uppercase">Himanshu Gupta</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            <span className="text-gradient">Building Intelligent Systems That </span>
            <span className="text-gradient-primary">Learn, Explain and Scale</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 font-light mb-12 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <span>AI Engineering</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>Machine Learning</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>Applied Research</span>
            <span className="hidden md:inline text-neutral-700">•</span>
            <span>Software Development</span>
          </p>
        </motion.div>

        {/* Metrics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16"
        >
          <div className="glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={2} />
            </div>
            <div className="text-sm text-neutral-400 text-center">Published Research</div>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={4} suffix="+" />
            </div>
            <div className="text-sm text-neutral-400 text-center">ML Projects</div>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={300} suffix="+" />
            </div>
            <div className="text-sm text-neutral-400 text-center">DSA Solved</div>
          </div>
          
          <div className="glass-card p-6 flex flex-col items-center justify-center hover:bg-white/5 transition-colors duration-300">
            <div className="text-4xl font-bold text-white mb-2">
              <AnimatedNumber value={8.15} decimals={2} />
            </div>
            <div className="text-sm text-neutral-400 text-center">CGPA</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
