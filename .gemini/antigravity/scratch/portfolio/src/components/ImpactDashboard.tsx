"use client";

import { motion } from "framer-motion";
import { LineChart, LayoutDashboard, Briefcase, GraduationCap, Code2, FileText } from "lucide-react";

const metrics = [
  { label: "Research Papers", value: "2", icon: FileText, subtext: "Published & Peer-reviewed" },
  { label: "Projects Built", value: "10+", icon: LayoutDashboard, subtext: "ML, Web & Systems" },
  { label: "Internships", value: "1", icon: Briefcase, subtext: "NLP & AI Development" },
  { label: "DSA Solved", value: "300+", icon: Code2, subtext: "LeetCode & GFG" },
  { label: "CGPA", value: "8.15", icon: GraduationCap, subtext: "Bennett University" },
];

export function ImpactDashboard() {
  return (
    <section className="py-24 px-6 relative" id="impact">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Impact <span className="text-gradient">Dashboard</span></h2>
            <p className="text-neutral-400 text-lg">Key performance indicators at a glance.</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-primary-500/10 rounded-full border border-primary-500/20 text-primary-400 text-sm font-medium">
            <LineChart className="w-4 h-4" /> Live Metrics
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col justify-between hover:border-primary-500/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-24 h-24" />
                </div>
                
                <Icon className="w-6 h-6 text-primary-400 mb-6" />
                
                <div>
                  <div className="text-3xl font-bold text-white mb-1 tracking-tight">{metric.value}</div>
                  <div className="text-sm font-medium text-neutral-300 mb-1">{metric.label}</div>
                  <div className="text-xs text-neutral-500">{metric.subtext}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
