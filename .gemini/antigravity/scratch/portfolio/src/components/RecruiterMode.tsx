"use client";

import { motion } from "framer-motion";
import { Download, Eye, Mail, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function RecruiterMode() {
  const reasons = [
    { title: "Research-Backed", desc: "Published author in explainable AI and CV, capable of reading and implementing state-of-the-art papers." },
    { title: "Engineering First", desc: "Production-focused mindset. I don't just build Jupyter notebooks; I build scalable Next.js/FastAPI pipelines." },
    { title: "Problem Solver", desc: "300+ DSA problems solved. Strong algorithmic foundation for optimizing inference latency and data processing." },
    { title: "End-to-End AI", desc: "From data ingestion (LangChain/n8n) to model serving and frontend integration (React). Full-stack AI capabilities." },
  ];

  return (
    <section className="py-24 px-6 relative" id="recruiter">
      <div className="absolute inset-0 bg-primary-900/5 clip-path-slant -z-10" />
      
      <div className="max-w-5xl mx-auto glass-panel p-8 md:p-12 border-primary-500/20 shadow-[0_0_80px_rgba(139,92,246,0.1)] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 blur-[80px] -z-10" />

        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold uppercase tracking-wider mb-6 border border-primary-500/20">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
              Recruiter Mode
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why hire me?</h2>
            
            <div className="space-y-6">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">{reason.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="bg-black/50 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <a href="https://drive.google.com/file/d/1RAXEdIfAIvesxwoDafYlOe6vK4p-me_7/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-semibold rounded-xl hover:bg-neutral-200 transition-colors">
                    <Eye className="w-4 h-4" /> View Resume
                  </a>
                  <a href="https://drive.google.com/file/d/1RAXEdIfAIvesxwoDafYlOe6vK4p-me_7/view?usp=sharing" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20">
                    <Download className="w-4 h-4" /> Download PDF
                  </a>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <a href="https://github.com/himanshugupta00235" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-neutral-300 hover:text-white">
                    <FaGithub className="w-5 h-5" />
                    <span className="text-xs font-medium">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/himanshu-gupta-383a6b220/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[#0A66C2]/50 hover:text-[#0A66C2] transition-colors text-neutral-300">
                    <FaLinkedin className="w-5 h-5" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </a>
                  <a href="mailto:himanshugupta00235@gmail.com" className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-red-500/50 hover:text-red-400 transition-colors text-neutral-300">
                    <Mail className="w-5 h-5" />
                    <span className="text-xs font-medium">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
