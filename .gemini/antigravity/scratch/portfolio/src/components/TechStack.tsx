"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TechCategory = "Languages" | "AI/ML" | "Data Science" | "Cloud & DevOps" | "Backend & DB" | "Frontend & Tools";

interface Tech {
  name: string;
  category: TechCategory;
  experience: string;
  projects: string[];
  related: string[];
}

const technologies: Tech[] = [
  { name: "Python", category: "Languages", experience: "4+ Years", projects: ["Enterprise RAG System", "Driver Drowsiness Detection", "Spam Classifier"], related: ["TensorFlow", "Scikit-learn", "FastAPI"] },
  { name: "SQL", category: "Languages", experience: "3+ Years", projects: ["Data Pipelines"], related: ["MySQL", "SQLite"] },
  { name: "C++", category: "Languages", experience: "3+ Years", projects: ["DSA Optimization"], related: ["Python"] },
  
  { name: "LangChain", category: "AI/ML", experience: "1.5 Years", projects: ["Enterprise RAG System", "AI Agent Development"], related: ["LLMs", "Python"] },
  { name: "LLMs / RAG", category: "AI/ML", experience: "1.5 Years", projects: ["Enterprise RAG System", "AI Agents"], related: ["LangChain", "Prompt Engineering"] },
  { name: "Computer Vision", category: "AI/ML", experience: "2 Years", projects: ["Driver Drowsiness Detection", "ISL Converter"], related: ["OpenCV", "TensorFlow"] },
  { name: "NLP", category: "AI/ML", experience: "2 Years", projects: ["Resume ATS", "Spam Classifier"], related: ["Scikit-learn", "LLMs"] },
  
  { name: "TensorFlow", category: "Data Science", experience: "2 Years", projects: ["ISL Converter", "Deep Learning Projects"], related: ["Python", "Computer Vision"] },
  { name: "Scikit-learn", category: "Data Science", experience: "2.5 Years", projects: ["Spam Classifier", "Data Pipelines"], related: ["Python", "Machine Learning"] },
  
  { name: "Azure", category: "Cloud & DevOps", experience: "1.5 Years", projects: ["Enterprise RAG System"], related: ["Docker", "FastAPI"] },
  { name: "Docker", category: "Cloud & DevOps", experience: "1.5 Years", projects: ["Enterprise RAG System"], related: ["Azure", "GitHub Actions"] },
  { name: "GitHub Actions", category: "Cloud & DevOps", experience: "1 Year", projects: ["CI/CD Pipelines"], related: ["Git", "Docker"] },
  
  { name: "FastAPI", category: "Backend & DB", experience: "2 Years", projects: ["Enterprise RAG System"], related: ["Python", "Azure"] },
  { name: "Flask", category: "Backend & DB", experience: "2 Years", projects: ["ISL Converter"], related: ["Python", "React"] },
  { name: "MySQL", category: "Backend & DB", experience: "3 Years", projects: ["Database Design"], related: ["SQL"] },
  
  { name: "React / Next.js", category: "Frontend & Tools", experience: "2 Years", projects: ["Resume ATS", "Portfolio"], related: ["Tailwind", "TypeScript"] },
  { name: "Tailwind CSS", category: "Frontend & Tools", experience: "2 Years", projects: ["Resume ATS", "Portfolio"], related: ["React"] },
  { name: "Git", category: "Frontend & Tools", experience: "4 Years", projects: ["All Projects"], related: ["GitHub Actions"] }
];

export function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<Tech | null>(null);

  const categories = Array.from(new Set(technologies.map(t => t.category)));

  return (
    <section className="py-24 px-6 relative bg-neutral-950" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Tech <span className="text-gradient">Ecosystem</span></h2>
          <p className="text-neutral-400 text-lg">Interactive node network of tools and technologies.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {categories.map((category, idx) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-6"
              >
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 mb-6">{category}</h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.filter(t => t.category === category).map(tech => {
                    const isRelated = hoveredTech?.related.includes(tech.name);
                    const isSelf = hoveredTech?.name === tech.name;
                    const isDimmed = hoveredTech && !isRelated && !isSelf;

                    return (
                      <div
                        key={tech.name}
                        className="relative"
                        onMouseEnter={() => setHoveredTech(tech)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        <div 
                          className={`
                            px-4 py-2 rounded-lg text-sm font-medium cursor-default transition-all duration-300 border
                            ${isSelf 
                              ? "bg-primary-500/20 text-primary-300 border-primary-500/50 shadow-[0_0_15px_rgba(139,92,246,0.3)]" 
                              : isRelated 
                                ? "bg-accent/10 text-accent border-accent/30" 
                                : isDimmed
                                  ? "bg-white/5 text-neutral-600 border-white/5 opacity-40"
                                  : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10"
                            }
                          `}
                        >
                          {tech.name}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Central Information Hub for Hovered Tech */}
          <AnimatePresence>
            {hoveredTech && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md pointer-events-none"
              >
                <div className="glass-card p-6 border-primary-500/30 shadow-[0_10px_40px_rgba(0,0,0,0.8)] shadow-primary-500/10">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-white">{hoveredTech.name}</h4>
                    <span className="text-xs px-2 py-1 bg-white/10 rounded-md text-primary-300">
                      {hoveredTech.experience}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Projects Used In</span>
                      <div className="flex flex-wrap gap-1.5">
                        {hoveredTech.projects.map(p => (
                          <span key={p} className="text-xs text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/5">{p}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-xs text-neutral-500 uppercase tracking-wider block mb-1">Related Core Tech</span>
                      <div className="flex flex-wrap gap-1.5">
                        {hoveredTech.related.map(r => (
                          <span key={r} className="text-xs text-accent bg-accent/10 px-2 py-1 rounded border border-accent/20">{r}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
