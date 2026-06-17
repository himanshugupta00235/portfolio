import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { Projects } from "@/components/Projects";
import { ResearchLab } from "@/components/ResearchLab";
import { TechStack } from "@/components/TechStack";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { GitHubIntelligence } from "@/components/GitHubIntelligence";
import { RecruiterMode } from "@/components/RecruiterMode";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-primary-500/30 selection:text-white">
      {/* Dynamic Background Noise/Texture */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      
      <Hero />
      <Timeline />
      <Projects />
      <ResearchLab />
      <TechStack />
      <ImpactDashboard />
      <GitHubIntelligence />
      <RecruiterMode />
      <Contact />
    </main>
  );
}
