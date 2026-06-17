"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Cpu, BookOpen, Rocket } from "lucide-react";

const milestones = [
  {
    title: "Learning Python & Fundamentals",
    description: "Built a strong foundation in programming and algorithmic thinking.",
    icon: Code2,
    date: "2022",
  },
  {
    title: "DSA Journey",
    description: "Solved 300+ problems across LeetCode & GeeksForGeeks. Mastered optimization.",
    icon: Database,
    date: "2023",
  },
  {
    title: "Machine Learning",
    description: "Developed predictive models, pipelines, and classical ML algorithms.",
    icon: BrainCircuit,
    date: "2023",
  },
  {
    title: "Deep Learning & CV",
    description: "Built Computer Vision systems, Driver Drowsiness Detection, and CNNs.",
    icon: Cpu,
    date: "2024",
  },
  {
    title: "Research Publications",
    description: "Published papers on Explainable AI for Crop Prediction & Waste Management.",
    icon: BookOpen,
    date: "2024",
  },
  {
    title: "Current AI Development",
    description: "Developing LLM Agents, Enterprise RAG systems, and production-ready AI workflows.",
    icon: Rocket,
    date: "Present",
  },
];

export function Timeline() {
  return (
    <section className="py-24 px-6 relative" id="timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Evolution of an <span className="text-gradient-primary">AI Engineer</span></h2>
          <p className="text-neutral-400 text-lg">A systematic approach to mastering intelligent systems.</p>
        </motion.div>

        <div className="relative border-l border-neutral-800 ml-4 md:ml-1/2 md:left-1/2 md:-translate-x-1/2 space-y-12">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const Icon = milestone.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-21px] md:left-1/2 md:-translate-x-1/2 w-10 h-10 bg-black border border-neutral-800 rounded-full flex items-center justify-center z-10 glass">
                  <Icon className="w-4 h-4 text-primary-400" />
                </div>

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover:border-primary-500/30 transition-colors group">
                    <span className="text-sm text-primary-400 font-mono mb-2 block">{milestone.date}</span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{milestone.title}</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
