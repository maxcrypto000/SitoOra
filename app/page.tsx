import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414] text-[#f5f5f5] selection:bg-blue-500/30 selection:text-white font-sans overflow-x-hidden">
      {/* Optional Top Gradient Highlight */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />
      
      <Hero />
      <Services />
    </main>
  );
}
