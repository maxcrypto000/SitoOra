"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Canyoning Italy",
      description: "Sito web per escursioni e avventure all'aperto",
      link: "https://canyoning-italy.com/",
      image: "/MadmadCanyoning.png",
      type: "Sito Live",
      isLive: true
    },
    {
      title: "Only Wood Lake Como",
      description: "Realizzazione in legno su misura",
      link: "https://onlywoodlakecomo.it/",
      image: "/onlywoodlakecomo.png",
      type: "Sito Live",
      isLive: true
    },
    {
      title: "Centro Estetico",
      description: "Design moderno per salone di bellezza",
      image: "/beauty-mockup.png",
      type: "Mockup",
      isLive: false
    },
    {
      title: "Salone Beauty",
      description: "Variante design per centro estetico",
      image: "/beauty-mockup2.png",
      type: "Mockup",
      isLive: false
    },
    {
      title: "Studio Dentistico",
      description: "Sito professionale per dentista",
      image: "/dentista-mockup.png",
      type: "Mockup",
      isLive: false
    },
    {
      title: "Personal Trainer",
      description: "Landing page per fitness coach",
      image: "/Personal-trainer-mockup.png",
      type: "Mockup",
      isLive: false
    },
    {
      title: "Fitness App",
      description: "Design alternativo per personal trainer",
      image: "/Personal-trainer-mockup2.png",
      type: "Mockup",
      isLive: false
    }
  ];

  return (
    <main className="min-h-screen flex flex-col items-center pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background Animated Glows */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/20 blur-[130px] rounded-full mix-blend-screen pointer-events-none" 
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
          Il Nostro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">Portfolio</span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-400">
          Scopri alcuni dei progetti che abbiamo realizzato. Siti web reali e design creati su misura per diverse tipologie di business.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative flex flex-col rounded-3xl bg-neutral-900/40 backdrop-blur-md border border-neutral-800/50 overflow-hidden hover:border-blue-500/50 transition-colors"
          >
            {/* Visual Header */}
            <div className="relative w-full aspect-[4/3] bg-neutral-950/50 flex items-center justify-center overflow-hidden">
              {project.isLive ? (
                // Estetica per siti Live con immagine e barra browser
                <div className="absolute inset-0 flex flex-col">
                  {/* Browser top bar */}
                  <div className="h-8 bg-neutral-900 border-b border-neutral-800 flex items-center px-4 gap-2 z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Contenuto Immagine */}
                  <div className="relative flex-1 group-hover:scale-105 transition-transform duration-700">
                    <Image 
                      src={project.image!} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                  </div>
                </div>
              ) : (
                // Mostra l'immagine per i mockup
                <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-700">
                  <Image 
                    src={project.image!} 
                    alt={project.title} 
                    fill 
                    className="object-cover object-top"
                  />
                  {/* Overlay per i mockup */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60"></div>
                </div>
              )}
            </div>

            {/* Dettagli Footer */}
            <div className="p-6 flex flex-col flex-1 bg-gradient-to-b from-transparent to-black/40">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${
                  project.isLive 
                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' 
                    : 'bg-violet-500/10 text-violet-400 border-violet-500/20'
                }`}>
                  {project.type}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-neutral-400 text-sm mb-6 flex-1">
                {project.description}
              </p>
              
              {project.isLive && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-gradient-to-r hover:from-blue-600 hover:to-violet-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] text-white font-medium rounded-xl border border-white/10 hover:border-transparent transition-all duration-300 active:scale-95"
                >
                  Visita il Sito <ExternalLink size={16} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
